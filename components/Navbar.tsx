"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/performance", label: "Performance" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/risk", label: "Risk" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1f1f1f] bg-black/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-300 hover:text-white transition-colors"
        >
          CUBILE PROP FUND
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-sm text-neutral-300 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-neutral-300 hover:text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-[#1f1f1f] bg-black">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm text-neutral-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}