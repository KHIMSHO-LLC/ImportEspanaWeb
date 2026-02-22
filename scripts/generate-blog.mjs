/**
 * AI Blog Post Generator using Google Gemini API (Free Tier)
 *
 * Usage: GEMINI_API_KEY=your_key node scripts/generate-blog.mjs
 *
 * This script:
 * 1. Reads topics.json and finds the next unwritten topic
 * 2. Calls Gemini API to generate a 1500+ word SEO-optimized article
 * 3. Saves it as a markdown file in src/content/blog/
 * 4. Marks the topic as done in topics.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOPICS_FILE = path.join(__dirname, "topics.json");
const BLOG_DIR = path.join(__dirname, "..", "src", "content", "blog");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.0-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

async function generateArticle(topic) {
  const prompt = `You are an expert auto journalist and SEO specialist writing for ImportEspana.com, a website that helps people calculate costs of importing cars to Spain.

Write a comprehensive, SEO-optimized blog article in SPANISH about:

**Topic:** ${topic.title_hint}
**Target keyword:** ${topic.keyword}

Requirements:
- Write 1500-2000 words in Spanish
- Use the target keyword naturally 5-8 times throughout the article
- Include H2 and H3 headings for structure
- Include practical tables where relevant
- Include concrete examples with numbers
- Add a call to action linking to ImportEspana calculator: [calculadora ImportEspana](https://importespana.com)
- Write in a professional but approachable tone
- Include an FAQ section at the end with 3-4 questions
- DO NOT include the title as H1 (it will be added from frontmatter)
- Start directly with the first H2 or introductory paragraph
- Use markdown formatting

Output ONLY the markdown article content (no frontmatter, no title).`;

  const response = await fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 4096,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No content generated from Gemini API");
  }

  return text;
}

function createFrontmatter(topic) {
  const today = new Date().toISOString().split("T")[0];
  const tags = inferTags(topic.keyword);

  return `---
title: "${topic.title_hint}"
date: "${today}"
description: "Guía completa sobre ${topic.keyword}. Todo lo que necesitas saber sobre ${topic.title_hint.toLowerCase()}."
tags: [${tags.map((t) => `"${t}"`).join(", ")}]
language: "es"
---`;
}

function inferTags(keyword) {
  const tagMap = {
    importar: "Importación",
    impuesto: "Impuestos",
    matriculación: "Matriculación",
    ITP: "ITP",
    IVA: "IVA",
    CO2: "CO2",
    eléctrico: "Eléctrico",
    híbrido: "Híbrido",
    Alemania: "Alemania",
    Francia: "Francia",
    Italia: "Italia",
    "Reino Unido": "Reino Unido",
    USA: "USA",
    BOE: "BOE",
    DGT: "DGT",
    ITV: "ITV",
    moto: "Motos",
    clásico: "Clásicos",
    furgoneta: "Comerciales",
    arancel: "Aduanas",
    DUA: "Aduanas",
  };

  const tags = [];
  for (const [key, value] of Object.entries(tagMap)) {
    if (
      keyword.toLowerCase().includes(key.toLowerCase()) &&
      !tags.includes(value)
    ) {
      tags.push(value);
    }
  }

  if (tags.length === 0) tags.push("Guía");
  return tags.slice(0, 3);
}

async function main() {
  if (!GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY environment variable is required");
    process.exit(1);
  }

  // Read topics
  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, "utf-8"));

  // Find next unwritten topic
  const nextTopic = topics.find((t) => !t.done);

  if (!nextTopic) {
    console.log("✅ All topics have been written!");
    process.exit(0);
  }

  console.log(`📝 Generating article: ${nextTopic.title_hint}`);
  console.log(`🔑 Keyword: ${nextTopic.keyword}`);

  try {
    // Generate content
    const content = await generateArticle(nextTopic);
    const frontmatter = createFrontmatter(nextTopic);
    const fullArticle = `${frontmatter}\n\n${content}\n`;

    // Ensure blog directory exists
    if (!fs.existsSync(BLOG_DIR)) {
      fs.mkdirSync(BLOG_DIR, { recursive: true });
    }

    // Save article
    const filePath = path.join(BLOG_DIR, `${nextTopic.slug}.md`);
    fs.writeFileSync(filePath, fullArticle, "utf-8");
    console.log(`✅ Article saved: ${filePath}`);

    // Mark as done
    nextTopic.done = true;
    fs.writeFileSync(
      TOPICS_FILE,
      JSON.stringify(topics, null, 2) + "\n",
      "utf-8",
    );
    console.log(`✅ Topic marked as done in topics.json`);
  } catch (error) {
    console.error(`❌ Error generating article:`, error.message);
    process.exit(1);
  }
}

main();
