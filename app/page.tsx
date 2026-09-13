import Simulador from "./components/Simulador";
import { ArrowRight, Zap, Sun } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <section className="rel min-h-[90vh] flex items-center bg-gradient-to-br from-jb-black via-jb-darkGray to-jb-black overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-jb-yellow to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-jb-red/10 text-jb-red text-sm font-semibold tracking-wide mb-6">Atibaia-SP • Instalação Certificada</span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">Poste Padrão <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-jb-yellow to-jb-red">e Energia Solar</span></h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">A JB Prado entrega postes padrão de energia com segurança, durabilidade e instalação profissional. Também projetamos e instalamos sistemas solares.</p>
            <div className="flex gap-4">
              <a href="#contato" className="inline-flex items-center gap-2 px-8 py-4 bg-jb-yellow text-jb-black rounded-xl font-bold hover:bg-yellow-400 transition shadow-[0_0_40px_-12px_rgba(255,193,7,0.5)]">Solicitar Orçamento <ArrowRight size={20} /></a>
              <a href="#produtos" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 transition">Ver Produtos</a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-jb-yellow/10 border border-white/5">
              <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" alt="Poste e Painel Solar" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-gradient-to-b from-jb-black to-jb-darkGray">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div><h4 className="text-5xl font-extrabold text-jb-yellow">+500</h4><p className="text-gray-400 mt-2">Postes instalados</p></div>
            <div><h4 className="text-5xl font-extrabold text-jb-red">+120</h4><p className="text-gray-400 mt-2">Sistemas solares</p></div>
            <div><h4 className="text-5xl font-extrabold text-white">10+</h4><p className="text-gray-400 mt-2">Anos de experiência</p></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 bg-jb-darkGray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Sobre a JB Prado</h2>
          <p className="text-lg text-gray-300 leading-relaxed">A JB Prado é uma empresa familiar de Atibaia-SP especializada na instalação de postes padrão de energia e sistemas solares. Nosso compromisso é segurança, qualidade e atendimento próximo ao cliente.</p>
        </div>
      </section>

      <Simulador />

      <section id="depoimentos" className="py-24 bg-jb-darkGray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Depoimentos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{nome:"Carlos M.",texto:"Poste instalado rapidamente, equipe muito profissional. Recomendo a JB Prado!"},{nome:"Ana L.",texto:"Minha conta de luz caiu 80% após instalar o sistema solar com eles."},{nome:"Roberto S.",texto:"Atendimento excelente, preço justo e serviço limpo e rápido."}].map(d => (
              <blockquote key={d.nome} className="bg-jb-black rounded-2xl p-6 border border-white/5 shadow-lg"><p className="text-gray-300 mb-4">"{d.texto}"</p><cite className="text-sm font-semibold text-jb-yellow not-italic">— {d.nome}</cite></blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-jb-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-8">Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{t:"Como funciona um poste padrão de energia?",d:"Entenda a estrutura, materiais e normas técnicas envolvidas."},{t:"Energia solar: vale a pena em 2026?",d:"Calculamos o retorno do investimento para residências em SP."},{t:"Manutenção dos painéis solares",d:"Dicas simples para garantir a eficiência do seu sistema ao longo dos anos."}].map(p => (
              <a key={p.t} href="#" className="block bg-jb-darkGray rounded-2xl p-6 border border-white/5 hover:border-jb-yellow/30 transition hover:-translate-y-1"><h3 className="text-xl font-bold mb-2">{p.t}</h3><p className="text-gray-400 text-sm">{p.d}</p></a>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 bg-jb-darkGray">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">Entre em contato</h2>
            <p className="text-gray-300 mb-8">Solicite um orçamento ou fale diretamente pelo WhatsApp.</p>
            <form onSubmit={e=>{e.preventDefault();}} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4"><input placeholder="Nome" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-jb-yellow text-white" /><input placeholder="Telefone" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-jb-yellow text-white" /></div>
              <input placeholder="Email" type="email" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-jb-yellow text-white" />
              <textarea placeholder="Mensagem / Orçamento desejado" rows={4} className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-jb-yellow text-white" />
              <button type="submit" className="w-full py-4 bg-jb-yellow text-jb-black rounded-xl font-bold hover:bg-yellow-400 transition">Enviar mensagem</button>
            </form>
          </div>
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-4 p-6 bg-black rounded-2xl border border-white/5 hover:border-green-500 transition"><div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">W</div><div><p className="font-bold">WhatsApp</p><p className="text-sm text-gray-400">(11) 99999-9999</p></div></a>
            <div className="flex-1 min-h-[300px] bg-black rounded-2xl overflow-hidden border border-white/5"><iframe title="Mapa Atibaia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.332!2d-46.5485!3d-23.1221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf05e2b57e1e47%3A0x1a23c8cfb8b5f8b3!2sAtibaia%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1717000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"/></div>
          </div>
        </div>
      </section>

      <a href="#" className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(22,163,74,0.6)] transition hover:-translate-y-1" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
      </a>
    </main>
  );
}
