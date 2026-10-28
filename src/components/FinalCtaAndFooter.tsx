import React from 'react';
import { BestFarmaLogo } from './BestFarmaLogo';
import { MessageCircle, ShieldCheck, MapPin, Phone, ArrowUp } from 'lucide-react';

export const FinalCtaAndFooter: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/5515998183108?text=Olá!%20Encontrei%20a%20Best%20Farma%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20dúvida.';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* FINAL CALL TO ACTION BANNER IN BRAND RED */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#D01815] via-[#E31C19] to-[#C71411] py-20 sm:py-28 text-white">
        {/* Filigree Cross Background Vectors */}
        <div className="absolute -left-20 -top-20 w-80 h-80 opacity-15 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M40 10H60V40H90V60H60V90H40V60H10V40H40V10Z" />
          </svg>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-15 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M40 10H60V40H90V60H60V90H40V60H10V40H40V10Z" />
          </svg>
        </div>

        {/* Ambient Warm Golden Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FFD100]/25 blur-3xl pointer-events-none -z-10" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] font-black text-[#9A100D] mb-4 bg-[#FFD100] px-4 py-1.5 rounded-full shadow-sm">
            Atendimento Rápido em Sorocaba
          </span>

          <h2 className="font-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight max-w-3xl drop-shadow-md">
            Precisou? A Best Farma está a uma mensagem de distância.
          </h2>

          <p className="mt-4 text-base sm:text-xl text-white/95 max-w-2xl font-normal">
            Tire dúvidas sobre dosagens, consulte a disponibilidade de dermocosméticos ou receba orientações com cordialidade e agilidade.
          </p>

          <div className="mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FFD100] px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-heading font-black uppercase tracking-wider text-[#9A100D] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#FFE043] ring-2 ring-white/80"
            >
              <MessageCircle className="w-5 h-5 fill-current text-[#9A100D] transition-transform group-hover:rotate-12" />
              <span>Iniciar Conversa no WhatsApp</span>
            </a>
          </div>

          <p className="mt-5 text-xs text-white/80">
            WhatsApp Oficial: <span className="font-mono font-bold text-[#FFD100]">(15) 99818-3108</span> · Sem robôs cansativos, direto com a equipe.
          </p>
        </div>
      </section>

      {/* INSTITUTIONAL FOOTER */}
      <footer className="bg-white text-neutral-800 pt-16 pb-12 border-t-4 border-[#E31C19]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
            {/* Brand Column (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <BestFarmaLogo size="md" showText={true} lightText={false} />
              <p className="text-sm text-neutral-600 max-w-sm font-normal leading-relaxed">
                Farmácia de referência no Jardim Residencial Villagio Ipanema I em Sorocaba. Cuidado acolhedor, conveniência e atenção completa para a saúde da sua família.
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-600 pt-1">
                <MapPin className="w-4 h-4 text-[#E31C19] shrink-0" />
                <span>Rua Manoel José de Oliveira, 710 · Sorocaba - SP</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-600">
                <Phone className="w-4 h-4 text-[#FFB703] shrink-0" />
                <span className="font-mono font-bold text-neutral-800">(15) 99818-3108</span>
              </div>
            </div>

            {/* Quick Links Column (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-heading font-black text-xs uppercase tracking-widest text-[#E31C19]">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 font-medium">
                <li>
                  <a href="#inicio" className="hover:text-[#E31C19] transition-colors">Início</a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-[#E31C19] transition-colors">Sobre a Best Farma</a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-[#E31C19] transition-colors">Diferenciais</a>
                </li>
                <li>
                  <a href="#categorias" className="hover:text-[#E31C19] transition-colors">Linhas de Cuidado</a>
                </li>
                <li>
                  <a href="#localizacao" className="hover:text-[#E31C19] transition-colors">Localização & Mapa</a>
                </li>
              </ul>
            </div>

            {/* Sanitary Compliance & Legal Column (4 cols) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-heading font-black text-xs uppercase tracking-widest text-[#E31C19] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E31C19]" />
                <span>Conformidade & Informações Técnicas</span>
              </h4>
              <div className="space-y-1.5 text-xs text-neutral-600 leading-relaxed">
                <p><strong className="text-neutral-900">Razão Social:</strong> Best Farma Farmácia e Drogaria Ltda.</p>
                <p><strong className="text-neutral-900">Localidade:</strong> Sorocaba - Estado de São Paulo</p>
                <p><strong className="text-neutral-900">Registro Sanitário:</strong> Licença de Funcionamento Sanitário Municipal</p>
                <p><strong className="text-neutral-900">CRF-SP:</strong> Farmacêutico Responsável Técnico habilitado</p>
                <p><strong className="text-neutral-900">Atendimento:</strong> Seg. a Sáb. até as 20h00</p>
              </div>
            </div>
          </div>

          {/* Sanitary Legal Notice Box */}
          <div className="mt-8 rounded-2xl bg-neutral-50 border border-neutral-200 p-4 sm:p-5 text-center">
            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              <strong className="text-neutral-800">Aviso Sanitário Importante:</strong> As informações contidas neste site têm caráter exclusivamente informativo e institucional. Medicamentos sob prescrição necessitam de apresentação de receita médica válida no balcão da farmácia. Para orientações farmacêuticas e prescrições médicas, consulte diretamente nosso farmacêutico.
            </p>
          </div>

          {/* Copyright & Digital Agency Credits */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} Best Farma Farmácia. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-4">
              <span>
                Desenvolvido por <strong className="text-neutral-900 font-bold hover:text-[#E31C19] transition-colors">Código Zero Digital</strong>
              </span>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (Pulsing in bottom-right corner) */}
      <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Falar no WhatsApp com a Best Farma"
        >
          {/* Subtle Ambient Pulse Rings */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          <span className="absolute -inset-2 rounded-full bg-[#25D366] opacity-20 pointer-events-none" />

          {/* WhatsApp Icon */}
          <MessageCircle className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm" />

          {/* Tooltip on Hover */}
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-xl bg-white border border-neutral-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none hidden sm:block">
            Atendimento WhatsApp Best Farma
          </span>
        </a>
      </aside>
    </>
  );
};
