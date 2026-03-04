"use client";

import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/valoracion-boe", label: "Valoración BOE" },
  { href: "/blog", label: "Blog" },
  { href: "/itp", label: "ITP" },
  { href: "/resources", label: "Resources" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-3 py-2 md:px-4 md:py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo-full.png"
              alt="ImportEspana"
              width={300}
              height={60}
              className="h-9 md:h-12 w-auto object-contain"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/ar/app/importespana/id6759112789"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 40"
                className="h-8 w-auto"
              >
                <rect width="120" height="40" rx="6" fill="#000" />
                <path
                  d="M24.77 20.3a4.95 4.95 0 012.36-4.15 5.07 5.07 0 00-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.62-.96a5.31 5.31 0 00-4.47 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.02 2.82 3.45 2.76 1.39-.06 1.92-.89 3.6-.89s2.16.89 3.61.86c1.5-.03 2.44-1.34 3.33-2.68a11.05 11.05 0 001.51-3.09 4.78 4.78 0 01-2.97-4.4z"
                  fill="#fff"
                />
                <path
                  d="M22.04 12.21a4.87 4.87 0 001.12-3.49 4.96 4.96 0 00-3.21 1.66 4.64 4.64 0 00-1.15 3.36 4.1 4.1 0 003.24-1.53z"
                  fill="#fff"
                />
                <text
                  fill="#fff"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontSize="7"
                  x="38"
                  y="15"
                >
                  Download on the
                </text>
                <text
                  fill="#fff"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontSize="14"
                  fontWeight="600"
                  x="38"
                  y="30"
                >
                  App Store
                </text>
              </svg>
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-down Menu */}
      <div
        className={`fixed top-[53px] left-0 right-0 z-45 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out md:hidden print:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 45 }}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                pathname === link.href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* App Store link in mobile menu */}
          <a
            href="https://apps.apple.com/ar/app/importespana/id6759112789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-2 px-4 py-3 bg-black rounded-xl text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
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
