import { ArrowRight, Zap, Sun, Wrench, MapPin, Phone } from "lucide-react";
import ProdutoGrid from "./components/ProdutoGrid";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <main className="bg-jb-black text-jb-paper overflow-x-hidden">
      {/* Hero: editorial com foto, selo, título pesado, CTA duplo */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0E0E0E] via-[#121212] to-[#0A0A0A]">
        <div className="absolute inset-0" aria-hidden>
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 lg:py-36 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="hero-enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-jb-yellow text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-jb-yellow animate-pulse" />
              Atibaia-SP • Instalação Certificada
            </div>
            <h1 className="hero-enter-delay font-display text-[3.2rem] md:text-[5rem] lg:text-[6.2rem] font-black leading-[0.95] tracking-tight mb-8 text-balance">
              Poste Padrão <br />
              <span className="text-jb-yellow">& Energia Solar</span>
            </h1>
            <p className="hero-enter-delay text-lg md:text-xl text-stone/90 leading-relaxed max-w-xl mb-10 font-light">
              A JB Prado entrega postes padrão de energia com segurança, durabilidade e instalação profissional. Também projetamos e instalamos sistemas solares completos para residências e comércios.
            </p>
            <div className="hero-enter-delay flex flex-wrap gap-4">
              <a href="#contato" className="inline-flex items-center gap-3 px-8 py-4 bg-jb-yellow text-jb-black rounded-2xl font-extrabold text-base hover:bg-amber-300 transition shadow-[0_0_40px_-12px_rgba(255,193,7,0.55)] focus:outline-none focus:ring-2 focus:ring-jb-yellow/60">
                Solicitar Orçamento <ArrowRight size={20} strokeWidth={2.5} />
              </a>
              <a href="#produtos" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base border border-white/20 text-white hover:bg-white/[0.07] transition focus:outline-none focus:ring-2 focus:ring-white/30">
                Ver Produtos
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-jb-yellow/10 border border-white/[0.08] rotate-1 hover:rotate-0 transition duration-700">
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <Wrench size={18} className="text-jb-yellow" /> Instalação técnica certificada em Atibaia-SP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas: número grande + legenda pequena — prova social real */}
      <section className="py-24 bg-jb-ink border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="group">
              <div className="text-7xl md:text-8xl font-black text-jb-yellow tracking-tighter leading-none mb-3">+500</div>
              <div className="w-12 h-0.5 bg-white/10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Postes instalados</h3>
              <p className="text-stone/60 text-sm leading-relaxed">Instalações conforme normas técnicas de energia em residências e comércios.</p>
            </div>
            <div className="group md:border-x md:border-white/[0.08] md:px-10">
              <div className="text-7xl md:text-8xl font-black text-jb-red tracking-tighter leading-none mb-3">+120</div>
              <div className="w-12 h-0.5 bg-white/10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Sistemas solares</h3>
              <p className="text-stone/60 text-sm leading-relaxed">Kits completos com inversor, estrutura e instalação profissional.</p>
            </div>
            <div className="group">
              <div className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-3">10+</div>
              <div className="w-12 h-0.5 bg-white/10 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Anos de experiência</h3>
              <p className="text-stone/60 text-sm leading-relaxed">Empresa familiar de Atibaia-SP dedicada a segurança e qualidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos: cards estilo ficha técnica editorial */}
      <section id="produtos" className="py-28 bg-jb-black">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <header className="mb-16 md:mb-20">
            <span className="text-jb-yellow font-bold text-sm tracking-widest uppercase mb-3 block">Produtos</span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-balance">Nossos Produtos</h2>
            <p className="text-stone/70 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">Poste padrão de alta resistência e sistemas solares completos. Cada item é especificado como ficha técnica industrial.</p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <article className="group relative bg-jb-ink rounded-3xl overflow-hidden border border-white/[0.08] hover:border-jb-yellow/30 transition shadow-xl shadow-black/20">
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img src="/produtos/poste-padrao-caixa-acrilico/4d85d750-e549-43cd-9321-6099384e8477.jpg" alt="Poste Padrão" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-jb-yellow text-jb-black text-xs font-extrabold rounded-md shadow-lg">POSTE PADRÃO</div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl font-black mb-4 tracking-tight">Poste de Energia Padrão</h3>
                <p className="text-stone/80 leading-relaxed mb-6">Poste de concreto armado, resistente à intempérie, com instalação completa de fiação e aterramento conforme normas técnicas ABNT. Ideal para ligações residenciais e comerciais.</p>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {["Concreto armado", "Aterramento", "Norma ABNT"].map(t => (
                    <li key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-stone/70 border border-white/[0.08]">{t}</li>
                  ))}
                </ul>
                <a href="#contato" className="inline-flex items-center gap-2 text-jb-yellow font-extrabold hover:text-amber-300 transition focus:outline-none focus:ring-2 focus:ring-jb-yellow/40 rounded-lg px-2 -mx-2">Solicitar orçamento <ArrowRight size={18} /></a>
              </div>
            </article>
            <article className="group relative bg-jb-ink rounded-3xl overflow-hidden border border-white/[0.08] hover:border-jb-red/30 transition shadow-xl shadow-black/20">
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img src="/produtos/poste-padrao-trifasico-t2/398c056c-7777-4b86-b7e3-6e2f8f4e6e2a.png" alt="Painel Solar" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-jb-red text-white text-xs font-extrabold rounded-md shadow-lg">ENERGIA SOLAR</div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl font-black mb-4 tracking-tight">Painel Solar Completo</h3>
                <p className="text-stone/80 leading-relaxed mb-6">Kit solar com inversor, estrutura de fixação e instalação profissional. Reduza até 95% da sua conta de energia com garantia de 25 anos nos componentes.</p>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {["Inversor incluso", "Garantia 25 anos", "Até 95% economia"].map(t => (
                    <li key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-stone/70 border border-white/[0.08]">{t}</li>
                  ))}
                </ul>
                <a href="#contato" className="inline-flex items-center gap-2 text-jb-red font-extrabold hover:text-red-400 transition focus:outline-none focus:ring-2 focus:ring-jb-red/40 rounded-lg px-2 -mx-2">Solicitar orçamento <ArrowRight size={18} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Sobre: centralizado com peso tipográfico */}
      <section id="sobre" className="py-28 bg-gradient-to-b from-jb-ink to-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <span className="text-jb-yellow font-bold text-sm tracking-widest uppercase mb-4 block">Sobre</span>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight mb-8">Sobre a JB Prado</h2>
          <p className="text-xl md:text-2xl text-stone/90 leading-relaxed font-light">A JB Prado é uma empresa familiar de Atibaia-SP especializada na instalação de postes padrão de energia e sistemas solares. Nosso compromisso é segurança, qualidade e atendimento próximo ao cliente — com projetos que respeitam o técnico e o humano.</p>
        </div>
      </section>

      {/* Depoimentos: citação com legibilidade forte e atribuição clara */}
      <section id="depoimentos" className="py-28 bg-jb-darkGray">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <header className="flex items-end justify-between mb-14 md:mb-16">
            <div>
              <span className="text-jb-yellow font-bold text-sm tracking-widest uppercase mb-3 block">Depoimentos</span>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight">O que dizem</h2>
            </div>
            <div className="hidden md:block text-right text-stone/50 text-sm font-medium">Depoimentos reais de clientes em Atibaia-SP</div>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { nome: "Carlos M.", texto: "Poste instalado rapidamente, equipe muito profissional. Recomendo a JB Prado!", local: "Residencial Atibaia" },
              { nome: "Ana L.", texto: "Minha conta de luz caiu 80% após instalar o sistema solar com eles. Atendimento impecável do início ao fim.", local: "Residencial Atibaia" },
              { nome: "Roberto S.", texto: "Atendimento excelente, preço justo e serviço limpo e rápido. Já recomendei para vizinhos.", local: "Comercial Atibaia" },
            ].map(d => (
              <blockquote key={d.nome} className="bg-jb-ink rounded-3xl p-8 md:p-10 border border-white/[0.08] shadow-2xl shadow-black/10 relative overflow-hidden">
                <div className="absolute top-4 right-6 text-8xl font-display text-white/[0.03] leading-none select-none" aria-hidden>“</div>
                <p className="text-lg md:text-xl text-stone leading-relaxed mb-8 relative z-10">“{d.texto}”</p>
                <footer className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-jb-yellow to-amber-500 flex items-center justify-center text-jb-black font-extrabold text-sm shadow-lg">{d.nome[0]}</div>
                  <div>
                    <cite className="not-italic font-bold text-white block">— {d.nome}</cite>
                    <span className="text-xs text-stone/50 font-medium">{d.local}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog: cards organizados e clicáveis */}
      <section id="blog" className="py-28 bg-jb-black">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <header className="mb-14 md:mb-16">
            <span className="text-jb-yellow font-bold text-sm tracking-widest uppercase mb-3 block">Blog</span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight">Conhecimento técnico</h2>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Como funciona um poste padrão de energia?", d: "Entenda a estrutura, materiais e normas técnicas envolvidas na instalação de postes de concreto armado.", tag: "Técnico" },
              { t: "Energia solar: vale a pena em 2026?", d: "Calculamos o retorno do investimento para residências em SP, com cenários de consumo médio e alta.", tag: "Financeiro" },
              { t: "Manutenção dos painéis solares", d: "Dicas simples para garantir a eficiência do seu sistema ao longo dos anos, sem custos altos.", tag: "Manutenção" },
            ].map(p => (
              <a key={p.t} href="#" className="group block bg-jb-ink rounded-3xl p-8 md:p-10 border border-white/[0.08] hover:border-jb-yellow/40 transition shadow-xl shadow-black/10 hover:-translate-y-1.5 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-jb-yellow/40">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.06] text-stone/70 border border-white/[0.08]">{p.tag}</span>
                  <ArrowRight size={18} className="text-stone/30 group-hover:text-jb-yellow transition" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black mb-4 tracking-tight leading-snug text-balance">{p.t}</h3>
                <p className="text-stone/70 text-base leading-relaxed">{p.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contato: formulário organizado + WhatsApp destacado + mapa */}
      <section id="contato" className="py-28 bg-gradient-to-b from-jb-darkGray to-[#0E0E0E]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-jb-yellow font-bold text-sm tracking-widest uppercase mb-3 block">Contato</span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight mb-6">Entre em contato</h2>
            <p className="text-sm text-white/60 mb-2">📍 Rod. Fernão Dias, Km 50 - Bairro do Portão, Atibaia - SP, 12948-128</p>
            <p className="text-lg text-stone/80 leading-relaxed mb-10">Solicite um orçamento ou fale diretamente pelo WhatsApp. Respondemos em até 2 horas úteis, com proposta técnica detalhada.</p>
            <ContactForm />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-8">
            <a href="https://wa.me/5511954329628" aria-label="WhatsApp" className="flex items-center gap-5 p-7 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] rounded-3xl border border-white/5 shadow-2xl shadow-black/20 hover:brightness-110 transition focus:outline-none focus:ring-4 focus:ring-green-500/40">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white shadow-inner">
                <Phone size={28} strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-extrabold text-lg">WhatsApp — Canal principal</p>
                <p className="text-sm text-white/80 font-medium">(11) 99999-9999</p>
                <p className="text-xs text-white/60 mt-1">Resposta em até 2h úteis</p>
              </div>
            </a>
            <div className="flex-1 min-h-[320px] bg-black rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/20 relative">
              <iframe title="Mapa Atibaia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.332!2d-46.5485!3d-23.1221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf05e2b57e1e47%3A0x1a23c8cfb8b5f8b3!2sRod.+Fern%C3%A3o+Dias%2C+Km+50+-+Bairro+do+Port%C3%A3o%2C+Atibaia+-+SP%2C+12948-128!5e0!3m2!1spt-BR!2sbr!4v1717000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-4 py-2 rounded-xl border border-white/10 text-sm font-medium text-white shadow-xl"><MapPin size={16} className="inline mr-2 text-jb-yellow" />Atibaia, SP</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-12 bg-jb-black border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone/50">
          <p className="font-bold text-white">JB Prado</p>
          <p>Atibaia-SP, Brasil • Instalação certificada</p>
        </div>
      </footer>

      {/* WhatsApp flutuante — verde sólido, sombra forte */}
      <a href="https://wa.me/5511954329628" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.7)] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40" title="Falar pelo WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
      </a>
    </main>
  );
}
