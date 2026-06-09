"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Projetos",
    href: "/#projetos",
  },
  {
    label: "Serviços",
    href: "/#servicos",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const pillStyle = [
    "flex items-center justify-center",
    "h-10",
    "px-6 py-2",
    "rounded-full",
    "border",
    "text-[14px]",
    "leading-[20px]",
    "font-bold",
    "text-[var(--brand-primary-900)]",
    "backdrop-blur-xl",
    "transition-all duration-300",
    "hover:border-[var(--brand-accent-500)]",
    "hover:scale-[0.98]",
  ].join(" ");

  const pillBackground = scrolled
    ? "border-[var(--brand-accent-500)] bg-[rgba(247,247,247,0.50)]"
    : "border-[var(--brand-accent-500)] bg-[rgba(247,247,247,0.10)]";

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        className="
          mx-auto flex h-[72px] max-w-6xl
          items-center justify-between
          px-5 md:px-8
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          className="
            text-title-m
            font-bold
            tracking-tight
            text-[var(--brand-primary-900)]
            transition-opacity duration-200
            hover:opacity-80
          "
        >
          Paloma Bessa
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${pillStyle} ${pillBackground}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className={` md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-[var(--brand-accent-500)] bg-[rgba(247,247,247,0.10)]`}>
          {menuOpen ? (
            <img src="/icons/close.svg" alt="Abrir menu" className="w-6 h-6" />
          ) : (
            <img src="/icons/hamburger.svg" alt="Abrir menu" className="w-6 h-6"/>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-3 px-5 pb-5 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`${pillStyle} ${pillBackground}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}