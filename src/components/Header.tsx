"use client";

import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/valoracion-boe", label: "Valoración BOE" },
  { href: "/blog", label: "Blog" },
  { href: "/itp", label: "ITP" },
  { href: "/resources", label: "Resources" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
          scrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#2a2a3a]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative overflow-hidden">
              <Image
                src="/logo-full.png"
                alt="ImportEspana"
                width={300}
                height={60}
                className="h-10 md:h-12 w-auto object-contain brightness-200 contrast-125 transition-all duration-300 group-hover:brightness-150"
                style={{ width: "auto" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-md ${
                  pathname === link.href
                    ? "text-[#00d4aa] bg-[#00d4aa]/10"
                    : "text-[#8b8b9a] hover:text-[#f5f5f7] hover:bg-[#ffffff08]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* App Store Link */}
            <a
              href="https://apps.apple.com/ar/app/importespana/id6759112789"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-[#ffffff10] hover:bg-[#ffffff15] border border-[#2a2a3a] hover:border-[#3a3a4a] rounded-md transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#f5f5f7]"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-xs font-medium text-[#f5f5f7]">App</span>
            </a>

            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-[#8b8b9a] hover:text-[#f5f5f7] hover:bg-[#ffffff08] transition-all"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0a0a0f]/90 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-down Menu */}
      <div
        className={`fixed top-[72px] left-4 right-4 z-45 transition-all duration-300 ease-out md:hidden print:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="flex flex-col bg-[#13131a] border border-[#2a2a3a] rounded-lg overflow-hidden shadow-2xl">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between px-5 py-4 text-base font-medium transition-all ${
                pathname === link.href
                  ? "text-[#00d4aa] bg-[#00d4aa]/5"
                  : "text-[#8b8b9a] hover:text-[#f5f5f7] hover:bg-[#ffffff05]"
              } ${index !== navLinks.length - 1 ? "border-b border-[#2a2a3a]" : ""}`}
            >
              {link.label}
              <ChevronRight size={16} className="opacity-50" />
            </Link>
          ))}

          {/* App Store link in mobile menu */}
          <a
            href="https://apps.apple.com/ar/app/importespana/id6759112789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-4 bg-[#00d4aa] text-[#0a0a0f] text-sm font-semibold hover:bg-[#00e4ba] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </a>
        </nav>
      </div>
    </>
  );
};
