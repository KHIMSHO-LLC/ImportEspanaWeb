"use client";

import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "/valoracion-boe", label: "Valoración BOE" },
  { href: "/blog", label: "Blog" },
  { href: "/itp", label: "ITP" },
  { href: "/resources", label: "Resources" },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2.5 rounded-lg transition-all duration-200"
      style={{
        color: "var(--text-secondary)",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--glass-border-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--glass-border)";
      }}
    >
      {theme === "dark" ? (
        <Sun size={16} strokeWidth={2} />
      ) : (
        <Moon size={16} strokeWidth={2} />
      )}
    </button>
  );
}

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 print:hidden transition-all duration-300"
        style={
          scrolled
            ? {
                background: "var(--header-scrolled-bg)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                borderBottom: "1px solid var(--header-scrolled-border)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
              }
            : {
                background: "transparent",
              }
        }
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo-full.png"
              alt="ImportEspana"
              width={300}
              height={60}
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap"
                style={{
                  color:
                    pathname === link.href
                      ? "var(--brand-blue-light)"
                      : "var(--text-secondary)",
                  background:
                    pathname === link.href
                      ? "var(--pill-active-bg)"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="w-px h-5 mx-2"
              style={{ background: "var(--glass-border)" }}
            />

            <a
              href="https://apps.apple.com/ar/app/importespana/id6759112789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-primary)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App
              <ArrowUpRight size={12} className="opacity-50" />
            </a>

            <ThemeToggle />
            <LanguageSwitcher />
          </nav>

          {/* Mobile: Theme + Language + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative p-2.5 rounded-lg transition-all duration-200"
              style={{
                color: "var(--text-secondary)",
                background: menuOpen ? "var(--glass-bg)" : "transparent",
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 block w-5 h-0.5 rounded-full transition-all duration-300 ${
                    menuOpen ? "top-[9px] rotate-45" : "top-1"
                  }`}
                  style={{ background: "currentColor" }}
                />
                <span
                  className={`absolute left-0 top-[9px] block w-5 h-0.5 rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                  style={{ background: "currentColor" }}
                />
                <span
                  className={`absolute left-0 block w-5 h-0.5 rounded-full transition-all duration-300 ${
                    menuOpen ? "top-[9px] -rotate-45" : "top-[17px]"
                  }`}
                  style={{ background: "currentColor" }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Slide-down Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-[45] md:hidden print:hidden transition-all duration-400 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "var(--header-scrolled-bg)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderBottom: "1px solid var(--header-scrolled-border)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200"
              style={{
                color:
                  pathname === link.href
                    ? "var(--brand-blue-light)"
                    : "var(--text-primary)",
                background:
                  pathname === link.href
                    ? "var(--pill-active-bg)"
                    : "transparent",
                animationDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
              <ArrowUpRight size={14} style={{ opacity: 0.3 }} />
            </Link>
          ))}

          <div
            className="h-px my-2"
            style={{ background: "var(--glass-border)" }}
          />

          <a
            href="https://apps.apple.com/ar/app/importespana/id6759112789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-1 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98]"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-primary)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download App
          </a>
        </nav>
      </div>
    </>
  );
};
