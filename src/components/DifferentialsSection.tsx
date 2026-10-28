import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { HeartHandshake, Home, MessageSquare, Sparkles, Award } from 'lucide-react';

interface DifferentialItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
}

const differentials: DifferentialItem[] = [
  {
    number: '01',
    title: 'Atendimento Próximo & Humanizado',
    description:
      'Diálogo direto e atencioso para esclarecer dúvidas e receber orientações com cordialidade. Aqui você não é apenas um número, mas um vizinho que merece cuidado integral.',
    highlight: 'Escuta atenta e atenção dedicada a cada família.',
    icon: <HeartHandshake className="w-5 h-5 text-[#E31C19]" />,
  },
  {
    number: '02',
    title: 'Conveniência no Bairro',
    description:
      'Localização acessível no Villagio Ipanema I, facilitando a rotina dos moradores e vizinhança. Chega de deslocamentos longos para itens essenciais do dia a dia.',
    highlight: 'Rua Manoel José de Oliveira, 710 · Fácil acesso e estacionamento.',
    icon: <Home className="w-5 h-5 text-[#E31C19]" />,
  },
  {
    number: '03',
    title: 'Canal Digital Descomplicado',
    description:
      'Atendimento ágil via WhatsApp para consulta de disponibilidade de itens sem burocracia. Respostas rápidas e suporte direto com a nossa equipe.',
    highlight: 'Contato oficial: (15) 99818-3108 a um toque de distância.',
    icon: <MessageSquare className="w-5 h-5 text-[#E31C19]" />,
  },
  {
    number: '04',
    title: 'Variedade em Cuidados Pessoais',
    description:
      'Seleção de itens essenciais para o seu bem-estar, higiene, linha infantil e rotina de autocuidado. Produtos rigorosamente selecionados com alta procedência.',
    highlight: 'Dermocosméticos, higiene diária, suplementos e produtos infantis.',
    icon: <Sparkles className="w-5 h-5 text-[#FFB703]" />,
  },
  {
    number: '05',
    title: 'Compromisso & Confiança',
    description:
      'Ética e respeito aos padrões sanitários com foco total na saúde e na satisfação da comunidade. Procedência garantida e ambiente limpo e acolhedor.',
    highlight: 'Em conformidade com todas as normas da Anvisa e CRF-SP.',
    icon: <Award className="w-5 h-5 text-[#E31C19]" />,
  },
];

export const DifferentialsSection: React.FC = () => {
  return (
    <section
      id="diferenciais"
      className="relative z-10 bg-[#F8F9FA] text-neutral-900 rounded-t-[50px] md:rounded-t-[60px] py-24 md:py-32 border-t border-neutral-200 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#E31C19] block mb-2">
              Por Que Escolher a Best Farma
            </span>
            <h2 className="font-heading font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight text-neutral-900">
              DIFERENCIAIS
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto font-normal">
              Construímos um espaço farmacêutico pensado para ser um ponto de apoio confiável na sua vida cotidiana.
            </p>
          </FadeIn>
        </div>

        {/* 5 Numbered Vertical Items */}
        <div className="divide-y divide-neutral-200/80 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-200/60">
          {differentials.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1}>
              <div className="group py-8 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start transition-all duration-300 hover:bg-red-50/40 px-4 sm:px-6 rounded-2xl">
                {/* Left: Giant Number in Brand Red */}
                <div className="md:col-span-3 flex items-baseline gap-4">
                  <span className="font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-neutral-300 group-hover:text-[#E31C19] transition-colors duration-300 select-none">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-red-100/70 flex items-center justify-center md:hidden shrink-0">
                    {item.icon}
                  </div>
                </div>

                {/* Right: Title and Technical Description */}
                <div className="md:col-span-9 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="hidden md:flex w-9 h-9 rounded-full bg-red-50 border border-red-100 items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-neutral-900 group-hover:text-[#E31C19] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mt-1">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#FFD100]" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
