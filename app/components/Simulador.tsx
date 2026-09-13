"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Simulador() {
  const [consumo, setConsumo] = useState(350);
  const economia = Math.round(consumo * 0.85);
  const payback = Math.round((12500 / (economia || 1)) * 12);

  return (
    <section id="simulador" className="py-24 bg-jb-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4">Simulador de Economia Solar</h2>
        <p className="text-center text-gray-400 mb-10">Calcule quanto você pode economizar com energia solar.</p>
        <div className="bg-jb-darkGray rounded-3xl p-8 border border-white/5 shadow-xl">
          <label htmlFor="consumo" className="block text-sm font-semibold mb-2">Consumo mensal (R$)</label>
          <input
            id="consumo"
            type="range"
            min={100}
            max={2000}
            step={50}
            value={consumo}
            onChange={(e) => setConsumo(Number(e.target.value))}
            className="w-full accent-jb-yellow mb-6"
          />
          <div className="text-center text-5xl font-extrabold text-jb-yellow mb-1">R$ {economia.toLocaleString("pt-BR")}</div>
          <div className="text-center text-gray-400 mb-6">Economia estimada/mês</div>
          <div className="flex justify-between bg-black/30 rounded-xl p-6 border border-white/5 mb-6">
            <div><span className="text-gray-400 text-sm">Payback (retorno)</span><div className="text-xl font-bold text-jb-red">~{Math.round(payback / 12)} anos</div></div>
            <div><span className="text-gray-400 text-sm">Economia anual</span><div className="text-xl font-bold text-white">R$ {(economia * 12).toLocaleString("pt-BR")}</div></div>
          </div>
          <a href="#contato" className="block w-full py-4 bg-jb-red rounded-xl text-center font-bold hover:bg-red-700 transition">Quero essa economia <ArrowRight className="inline ml-2" size={18}/></a>
        </div>
      </div>
    </section>
  );
}
