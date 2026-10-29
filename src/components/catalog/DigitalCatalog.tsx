import React, { useState, useMemo } from 'react';
import { CATALOG_PRODUCTS, CATEGORIES_LIST } from '../../data/products';
import { isPrescriptionSearch } from '../../data/prescriptionAlerts';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/catalog';
import { FadeIn } from '../ui/FadeIn';
import {
  Search,
  X,
  Plus,
  Check,
  ShoppingBag,
  Sparkles,
  ShieldAlert,
  AlertTriangle,
  MessageCircle,
  FileText,
  SlidersHorizontal,
  Tag,
} from 'lucide-react';

export const DigitalCatalog: React.FC = () => {
  const { addToCart, items } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'deals'>('featured');
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  // Check if current search is looking for controlled medications
  const isControlledSearch = useMemo(() => isPrescriptionSearch(searchQuery), [searchQuery]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategory !== 'todos' && prod.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = prod.name.toLowerCase().includes(query);
        const matchesBrand = prod.brand.toLowerCase().includes(query);
        const matchesDesc = prod.description.toLowerCase().includes(query);
        const matchesCat = prod.categoryName.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      // Deals filter
      if (sortBy === 'deals' && !prod.oldPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'deals') {
        const discountA = a.oldPrice ? a.oldPrice - a.price : 0;
        const discountB = b.oldPrice ? b.oldPrice - b.price : 0;
        return discountB - discountA;
      }
      return 0; // Default order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedItemNotice(product.id);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 1800);
  };

  const getItemQuantityInCart = (productId: string) => {
    const item = items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section
      id="catalogo"
      className="relative z-20 bg-[#F4F6F8] py-24 sm:py-32 text-neutral-900 border-t border-neutral-200 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] font-black text-[#E31C19] block mb-2">
              Autonomia & Praticidade
            </span>
            <h2 className="pharmacy-heading-red font-heading font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight">
              CATÁLOGO DIGITAL
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal">
              Selecione seus itens essenciais de cuidado, monte seu carrinho e finalize o pedido de forma ágil com a nossa equipe no WhatsApp.
            </p>
          </FadeIn>
        </div>

        {/* ANVISA / Sanitary Compliance Banner */}
        <div className="mb-10 rounded-2xl bg-white border-2 border-red-200 p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-[#E31C19]" />
            </div>
            <div>
              <h4 className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-900">
                Aviso Sanitário Obrigatório (ANVISA & CRF-SP)
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Produtos sem necessidade de receita médica (dermocosméticos, higiene, vitaminas e cuidados pessoais) podem ser adicionados ao carrinho online. <strong>Medicamentos sob prescrição e remédios controlados (tarja preta/vermelha) NÃO são vendidos online.</strong>
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5515997376460?text=Olá!%20Tenho%20uma%20receita%20médica%20e%20gostaria%20de%20enviar%20para%20o%20farmacêutico%20da%20Best%20Farma%20avaliar."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E31C19] transition-colors"
          >
            <FileText className="w-4 h-4 text-[#FFD100]" />
            <span>Enviar Receita no WhatsApp</span>
          </a>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-neutral-200/80 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input Bar */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por produto, marca ou necessidade (ex: protetor solar, vitamina D, fralda...)"
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#E31C19] focus:ring-1 focus:ring-[#E31C19] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
                  aria-label="Limpar pesquisa"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-neutral-500 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto rounded-2xl bg-neutral-50 border border-neutral-200 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-800 focus:outline-none focus:border-[#E31C19] cursor-pointer"
              >
                <option value="featured">Mais Populares</option>
                <option value="deals">Apenas Ofertas</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>
          </div>

          {/* Department Categories Horizontal Bar */}
          <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES_LIST.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#E31C19] text-white shadow-xs'
                      : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Warning if Controlled Substance / Prescription Drug was searched */}
        {isControlledSearch && (
          <div className="mb-8 rounded-2xl bg-amber-500/10 border-2 border-amber-500 p-5 animate-in fade-in duration-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-black text-sm uppercase text-amber-900">
                  Medicamentos Controlados & Sujeitos a Receita Médica
                </h4>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Identificamos que você buscou por termos associados a medicamentos tarjados ou de controle especial. 
                  Por determinação legal da <strong>Anvisa e do Conselho Federal de Farmácia</strong>, estes medicamentos <strong>não são vendidos através de carrinho de compras virtual</strong>.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/5515997376460?text=${encodeURIComponent(
                      `Olá! Gostaria de consultar a disponibilidade do medicamento sob receita: "${searchQuery}" com o farmacêutico da Best Farma.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#E31C19] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-[#C71411] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FFD100] fill-current" />
                    <span>Consultar Medicamento com o Farmacêutico</span>
                  </a>
                  <span className="text-[11px] text-amber-700">
                    Apresente sua receita no balcão: Rua Manoel José de Oliveira, 710 · Villagio Ipanema I
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl bg-white border border-neutral-200 p-12 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-red-50 text-[#E31C19] flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-xl text-neutral-900 mb-2">
              Nenhum produto encontrado
            </h4>
            <p className="text-xs text-neutral-500 mb-6">
              Não encontramos itens com os termos digitados. Experimente buscar por categorias como dermocosméticos, higiene, vitaminas ou infantil.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
                setSortBy('featured');
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#E31C19] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-[#C71411]"
            >
              Limpar Filtros e Ver Todos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const qtyInCart = getItemQuantityInCart(prod.id);
              const isJustAdded = addedItemNotice === prod.id;

              return (
                <div
                  key={prod.id}
                  className="rounded-3xl bg-white border-2 border-neutral-200/80 p-5 flex flex-col justify-between transition-all duration-300 hover:border-red-200 hover:shadow-xl group relative overflow-hidden"
                >
                  {/* Top Badge (Offer / Best Seller) */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">
                      {prod.categoryName}
                    </span>
                    {prod.badge && (
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          prod.badge === 'Oferta'
                            ? 'bg-red-100 text-[#E31C19]'
                            : prod.badge === 'Mais Vendido'
                            ? 'bg-yellow-100 text-[#B45309]'
                            : 'bg-neutral-900 text-white'
                        }`}
                      >
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  {/* Visual Box / Decorative Pharmacological Canvas */}
                  <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100/60 border border-neutral-100 flex flex-col items-center justify-center p-3 relative group-hover:scale-[1.02] transition-transform">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-neutral-200/60 flex items-center justify-center mb-2">
                      <Tag className="w-6 h-6 text-[#E31C19]" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                      {prod.brand}
                    </span>
                    <span className="text-xs font-extrabold text-neutral-800">
                      {prod.volume}
                    </span>

                    {/* Quantity Indicator Pill on Image if in Cart */}
                    {qtyInCart > 0 && (
                      <span className="absolute top-2 right-2 rounded-full bg-[#E31C19] text-white text-[10px] font-bold px-2 py-0.5 shadow-sm">
                        {qtyInCart} no carrinho
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-extrabold text-base text-neutral-900 leading-snug group-hover:text-[#E31C19] transition-colors line-clamp-2">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    {/* Price and Action Button */}
                    <div className="mt-5 pt-3 border-t border-neutral-100">
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-heading font-black text-xl sm:text-2xl text-[#E31C19] font-mono tabular-nums">
                          R$ {prod.price.toFixed(2).replace('.', ',')}
                        </span>
                        {prod.oldPrice && (
                          <span className="text-xs text-neutral-400 line-through font-mono">
                            R$ {prod.oldPrice.toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(prod)}
                        className={`w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                          isJustAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#E31C19] text-white hover:bg-[#C71411] active:scale-95'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Adicionado ao Carrinho!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 text-[#FFD100]" />
                            <span>Adicionar ao Carrinho</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Prescription Guidance Bottom Card */}
        <div className="mt-16 rounded-3xl bg-white border-2 border-neutral-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#E31C19] flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 text-[#FFD100]" />
            </div>
            <div>
              <h4 className="font-heading font-black text-lg text-neutral-900 uppercase">
                Não encontrou o que procurava ou possui receita médica?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl leading-relaxed">
                Nossa farmácia física conta com um estoque completo de medicamentos e orientação técnica farmacêutica presencial. Envie sua dúvida ou receita pelo WhatsApp oficial para atendimento imediato.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5515997376460?text=Olá!%20Gostaria%20de%20consultar%20um%20medicamento%20ou%20enviar%20uma%20receita%20para%20a%20Best%20Farma."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#E31C19] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white hover:bg-[#C71411] shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-[#FFD100] fill-current" />
            <span>Falar com o Farmacêutico</span>
          </a>
        </div>
      </div>
    </section>
  );
};
