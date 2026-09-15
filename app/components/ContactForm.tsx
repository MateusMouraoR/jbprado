"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      nome: formData.get("nome"),
      telefone: formData.get("telefone"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem"),
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) setStatus({ msg: "Mensagem enviada! Retornaremos em breve.", ok: true });
      else setStatus({ msg: "Erro ao enviar. Tente novamente.", ok: false });
    } catch {
      setStatus({ msg: "Erro de conexão.", ok: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulário de contato">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className="sr-only">Nome</label>
          <input id="nome" placeholder="Nome" required className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-white/10 focus:outline-none focus:border-jb-yellow focus:ring-2 focus:ring-jb-yellow/20 text-white placeholder:text-stone/40 text-base transition" />
        </div>
        <div>
          <label htmlFor="telefone" className="sr-only">Telefone</label>
          <input id="telefone" placeholder="Telefone" required className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-white/10 focus:outline-none focus:border-jb-yellow focus:ring-2 focus:ring-jb-yellow/20 text-white placeholder:text-stone/40 text-base transition" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input id="email" type="email" placeholder="Email" required className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-white/10 focus:outline-none focus:border-jb-yellow focus:ring-2 focus:ring-jb-yellow/20 text-white placeholder:text-stone/40 text-base transition" />
      </div>
      <div>
        <label htmlFor="mensagem" className="sr-only">Mensagem / Orçamento desejado</label>
        <textarea id="mensagem" placeholder="Mensagem / Orçamento desejado" rows={4} required className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-white/10 focus:outline-none focus:border-jb-yellow focus:ring-2 focus:ring-jb-yellow/20 text-white placeholder:text-stone/40 text-base transition resize-y" />
      </div>
      <button type="submit" className="w-full md:w-auto md:min-w-[16rem] py-4 bg-jb-yellow text-jb-black rounded-2xl font-extrabold text-base hover:bg-amber-300 hover:scale-[1.02] transition shadow-[0_0_40px_-12px_rgba(255,193,7,0.55)] focus:outline-none focus:ring-4 focus:ring-jb-yellow/30">Enviar mensagem</button>
      {status && (
        <div className={`text-sm font-bold rounded-xl px-4 py-3 ${status.ok ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"}`} role="status">{status.msg}</div>
      )}
    </form>
  );
}
