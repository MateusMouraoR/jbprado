import { ArrowRight } from "lucide-react";

export default function Featured() {
  return (
    <section id="produtos" className="py-24 bg-jb-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Nossos Produtos</h2>
          <p className="text-gray-400">Poste padrão de alta resistência e sistemas solares completos.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="group relative rounded-3xl overflow-hidden bg-jb-darkGray border border-white/5 hover:border-jb-yellow/30 transition">
            <img src="https://images.unsplash.com/photo-1518770660439-4636500cff5f?w=600&q=80" alt="Poste Padrão" className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3"><span className="text-sm font-semibold text-jb-yellow">Poste Padrão</span></div>
              <h3 className="text-2xl font-bold mb-3">Poste de Energia Padrão</h3>
              <p className="text-gray-400 mb-6">Poste de concreto armado, resistente à intempérie, com instalação completa de fiação e aterramento conforme normas técnicas.</p>
              <a href="#contato" className="inline-flex items-center gap-2 text-jb-yellow font-semibold hover:underline">Solicitar orçamento <ArrowRight size={16} /></a>
            </div>
          </article>
          <article className="group relative rounded-3xl overflow-hidden bg-jb-darkGray border border-white/5 hover:border-jb-red/30 transition">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" alt="Painel Solar" className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3"><span className="text-sm font-semibold text-jb-red">Energia Solar</span></div>
              <h3 className="text-2xl font-bold mb-3">Painel Solar Completo</h3>
              <p className="text-gray-400 mb-6">Kit solar com inversor, estrutura de fixação e instalação. Reduza até 95% da sua conta de energia com garantia de 25 anos.</p>
              <a href="#contato" className="inline-flex items-center gap-2 text-jb-red font-semibold hover:underline">Solicitar orçamento <ArrowRight size={16} /></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
