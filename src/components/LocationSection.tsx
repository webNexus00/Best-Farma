import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Send,
  MessageCircle,
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsRouteUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Rua+Manoel+Jos%C3%A9+de+Oliveira,+710+-+Jardim+Residencial+Villagio+Ipanema+I,+Sorocaba+-+SP,+18073-351';

  const [selectedTopic, setSelectedTopic] = useState('Verificar se tem um medicamento');
  const [customItem, setCustomItem] = useState('');

  const quickTopics = [
    'Verificar se tem um medicamento',
    'Consultar preço de dermocosmético',
    'Dúvida sobre horário e atendimento',
    'Entrega no Villagio Ipanema I',
  ];

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const fullText = `Olá, Best Farma! Assunto: ${selectedTopic}. ${
      customItem ? `Item/Detalhe: ${customItem}` : ''
    }`;
    window.open(
      `https://wa.me/5515998183108?text=${encodeURIComponent(fullText)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="localizacao"
      className="relative z-20 bg-[#F4F6F8] py-24 sm:py-32 text-neutral-900 border-t border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#E31C19] block mb-2">
              Proximidade & Conveniência
            </span>
            <h2 className="pharmacy-heading-red font-heading font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight">
              LOCALIZAÇÃO & ATENDIMENTO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal">
              Fácil de encontrar, perto de você no Villagio Ipanema I e com canal direto para esclarecer qualquer dúvida.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column Split: Details & Quick Contact vs Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (5 cols): Operational Info & Quick WhatsApp Inquiry */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <FadeIn delay={0.1}>
              <div className="rounded-3xl bg-white border-2 border-red-100 p-6 sm:p-8 space-y-6 shadow-sm">
                {/* Address Card */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#E31C19]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-neutral-900">Endereço</h4>
                    <p className="text-sm text-neutral-600 mt-1 leading-relaxed font-normal">
                      Rua Manoel José de Oliveira, 710
                      <br />
                      Jd. Res. Villagio Ipanema I
                      <br />
                      Sorocaba - SP, CEP 18073-351
                    </p>
                  </div>
                </div>

                <div className="h-px bg-neutral-100" />

                {/* Schedule Card */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-neutral-900">Horário de Funcionamento</h4>
                    <p className="text-sm text-neutral-600 mt-1 leading-relaxed font-normal">
                      Segunda a Sábado: até as 20:00
                      <br />
                      <span className="text-xs text-neutral-500 font-medium">(Consulte plantões pelo WhatsApp)</span>
                    </p>
                  </div>
                </div>

                <div className="h-px bg-neutral-100" />

                {/* Phone Card */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#E31C19]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-neutral-900">WhatsApp & Telefone</h4>
                    <p className="text-lg font-mono font-black text-[#E31C19] mt-1">
                      (15) 99818-3108
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Respostas ágeis diretamente com a equipe
                    </p>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-2">
                  <a
                    href={googleMapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#E31C19] bg-white py-3.5 px-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#E31C19] transition-all hover:bg-[#E31C19] hover:text-white shadow-xs"
                  >
                    <Navigation className="w-4 h-4 text-[#FFD100]" />
                    <span>Como Chegar (Traçar Rota no Google Maps)</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Quick Interactive Inquiry Form */}
            <FadeIn delay={0.2}>
              <div className="rounded-3xl bg-white border-2 border-red-100 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-[#E31C19]" />
                  <h4 className="font-heading font-extrabold text-base uppercase tracking-wider text-neutral-900">
                    Consulta Rápida pelo WhatsApp
                  </h4>
                </div>

                <form onSubmit={handleSendCustomMessage} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Qual é a sua dúvida?</label>
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full rounded-xl bg-neutral-50 border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-800 font-medium focus:outline-none focus:border-[#E31C19]"
                    >
                      {quickTopics.map((topic, i) => (
                        <option key={i} value={topic} className="bg-white text-neutral-800">
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      Nome do produto ou mensagem adicional (opcional):
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Protetor Solar FPS 50 ou Dipirona..."
                      value={customItem}
                      onChange={(e) => setCustomItem(e.target.value)}
                      className="w-full rounded-xl bg-neutral-50 border border-neutral-300 px-3.5 py-2.5 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#E31C19]"
                    >
                    </input>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#E31C19] py-3 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-[#C71411] cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 text-[#FFD100]" />
                    <span>Enviar para a Farmácia no WhatsApp</span>
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (7 cols): Interactive Map Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <FadeIn delay={0.2} className="h-full flex flex-col">
              <div className="relative flex-1 min-h-[440px] lg:min-h-[600px] w-full rounded-3xl overflow-hidden border-2 border-red-100 bg-white shadow-lg">
                <iframe
                  title="Localização Best Farma - Sorocaba SP"
                  src="https://maps.google.com/maps?q=Rua%20Manoel%20Jos%C3%A9%20de%20Oliveira,%20710%20-%20Jardim%20Residencial%20Villagio%20Ipanema%20I,%20Sorocaba%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.02]"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating Map Overlay Badge in Official Brand Colors */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md rounded-2xl bg-white/95 backdrop-blur-md p-4 border-2 border-red-100 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#E31C19] flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-black text-sm text-[#E31C19]">
                        Best Farma Farmácia
                      </p>
                      <p className="text-xs text-neutral-600 font-medium truncate max-w-[280px]">
                        Rua Manoel José de Oliveira, 710 · Villagio Ipanema I
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
