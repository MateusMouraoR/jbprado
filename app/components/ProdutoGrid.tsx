"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, AlertTriangle, ArrowRight } from "lucide-react";
import { produtos } from "../../lib/produtos";

export default function ProdutoGrid() {
  const [filtro, setFiltro] = useState<"Todos" | "Bifásico" | "Trifásico">("Todos");
  const filtrados = filtro === "Todos" ? produtos : produtos.filter((p) => p.categoria === filtro);

  return (
    <div>
      <div className="flex gap-3 mb-10">
        {(["Todos", "Bifásico", "Trifásico"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition ${filtro === f ? "bg-jb-yellow text-jb-black" : "bg-white/5 text-stone hover:bg-white/10"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filtrados.map((p) => (
          <article key={p.id} className="group bg-jb-ink rounded-3xl border border-white/[0.08] overflow-hidden hover:border-jb-yellow/40 transition shadow-xl shadow-black/10">
            <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-t-3xl">
              <Image src={p.imagem} alt={p.nome} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-[1.03] transition duration-700" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md ${p.categoria === "Bifásico" ? "bg-amber-500/90 text-black" : "bg-blue-500/90 text-white"}`}>{p.categoria}</span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-black/70 text-white">{p.categoriaTag}</span>
              </div>
            </div>

            <div className="p-7 md:p-8">
              <h3 className="font-display text-2xl font-black tracking-tight mb-2">{p.nome}</h3>
              <p className="text-stone/70 text-sm leading-relaxed mb-5">{p.descricao}</p>

              <div className="flex gap-2 mb-5">
                <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white">Carga {p.specs.carga}</span>
                <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white">Disjuntor {p.specs.disjuntor}</span>
                <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white">Cabo {p.specs.cabo}</span>
              </div>

              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-stone/50 mb-2">Inclui</p>
                <ul className="flex flex-wrap gap-2">
                  {p.inclui.map((i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs font-medium text-stone bg-white/[0.07] px-2.5 py-1 rounded-md"><Check size={12} className="text-jb-yellow" /> {i}</li>
                  ))}
                </ul>
              </div>

              {p.naoInclui && (
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-stone/50 mb-2">Não inclui</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.naoInclui.map((n) => (
                      <li key={n} className="flex items-center gap-1.5 text-xs font-medium text-stone bg-white/[0.07] px-2.5 py-1 rounded-md"><AlertTriangle size={12} className="text-red-400" /> {n}</li>
                    ))}
                  </ul>
                </div>
              )}

              {p.observacoes && (
                <div className="mb-5 text-xs text-stone/60 leading-relaxed">
                  {p.observacoes.map((o) => <p key={o}>• {o}</p>)}
                </div>
              )}

              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <span className="text-sm font-extrabold text-jb-yellow">{p.preco}</span>
                <a href="#contato" className="inline-flex items-center gap-2 px-5 py-3 bg-jb-yellow text-jb-black rounded-xl font-extrabold text-sm hover:bg-amber-300 transition shadow-[0_0_20px_-6px_rgba(255,193,7,0.55)]">Solicitar cotação <ArrowRight size={16} /></a>
              </div>
              <p className="text-xs text-stone/40 mt-2">{p.validacao}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
