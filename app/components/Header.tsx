"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Produtos", href: "#produtos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Início JB Prado">
          <Image src="/logo.png" alt="JB Prado" width={40} height={40} className="rounded-lg group-hover:scale-105 transition" />
          <span className="font-display text-xl font-bold tracking-tight text-white">JB Prado</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-stone/90 hover:text-white transition">{l.label}</a>
          ))}
          <a href="#contato" className="ml-2 px-5 py-2.5 bg-jb-yellow text-jb-black rounded-xl font-extrabold text-sm hover:bg-amber-300 transition">Solicitar Orçamento</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-white">{l.label}</a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="mt-2 text-center px-5 py-3 bg-jb-yellow text-jb-black rounded-xl font-extrabold">Solicitar Orçamento</a>
        </div>
      )}
    </header>
  );
}
