import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Store,
  Truck,
  ShieldCheck,
  MessageCircle,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
    deliveryMethod,
    setDeliveryMethod,
    customerData,
    setCustomerData,
    generateWhatsAppOrderUrl,
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const whatsappCheckoutUrl = generateWhatsAppOrderUrl();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="w-screen max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col justify-between"
              role="dialog"
              aria-modal="true"
              aria-label="Carrinho de Compras Best Farma"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-[#E31C19] flex items-center justify-center font-bold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-lg text-neutral-900 uppercase tracking-tight">
                      Meu Carrinho
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium">
                      {totalItems} {totalItems === 1 ? 'item selecionado' : 'itens selecionados'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-neutral-400 hover:text-[#E31C19] transition-colors px-2 py-1"
                      title="Limpar carrinho"
                    >
                      Limpar
                    </button>
                  )}
                  <button
                    onClick={closeCart}
                    className="w-9 h-9 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31C19]"
                    aria-label="Fechar carrinho"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Items List / Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-red-50 text-[#E31C19] flex items-center justify-center mb-4">
                      <ShoppingBag className="w-10 h-10 opacity-70" />
                    </div>
                    <h4 className="font-heading font-black text-xl text-neutral-900 mb-2">
                      Seu carrinho está vazio
                    </h4>
                    <p className="text-sm text-neutral-500 max-w-xs mb-6 font-normal">
                      Explore nosso catálogo com produtos de dermocosméticos, higiene, vitaminas e cuidados essenciais!
                    </p>
                    <button
                      onClick={closeCart}
                      className="inline-flex items-center gap-2 rounded-full bg-[#E31C19] px-6 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-[#C71411] transition-colors shadow-md"
                    >
                      <span>Ver Produtos do Catálogo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Sanitary Legal Assurance Notice */}
                    <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
                      <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <strong>Conferência Farmacêutica:</strong> Seu pedido será separado e conferido pela nossa equipe técnica antes do fechamento.
                      </p>
                    </div>

                    {/* Products List */}
                    <div className="divide-y divide-neutral-100">
                      {items.map(({ product, quantity }) => (
                        <div key={product.id} className="py-4 flex gap-3.5 items-start">
                          {/* Product Pill Visual */}
                          <div className="w-14 h-14 rounded-xl bg-neutral-50 border border-neutral-200 p-1.5 flex flex-col items-center justify-center shrink-0">
                            <span className="text-[9px] font-black uppercase text-[#E31C19] tracking-tighter truncate max-w-full">
                              {product.categoryName.split(' ')[0]}
                            </span>
                            <span className="text-[11px] font-extrabold text-neutral-800">
                              {product.volume}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#E31C19]">
                              {product.brand}
                            </span>
                            <h5 className="font-heading font-bold text-sm text-neutral-900 line-clamp-1">
                              {product.name}
                            </h5>
                            <p className="text-xs font-black text-neutral-900 mt-1">
                              R$ {product.price.toFixed(2).replace('.', ',')}
                              <span className="text-[11px] font-normal text-neutral-400 ml-1">/ un</span>
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center border border-neutral-200 rounded-lg bg-neutral-50">
                                <button
                                  onClick={() => updateQuantity(product.id, quantity - 1)}
                                  className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-[#E31C19] hover:bg-white rounded-l-lg transition-colors"
                                  aria-label="Diminuir quantidade"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="w-8 text-center text-xs font-bold font-mono text-neutral-800">
                                  {quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(product.id, quantity + 1)}
                                  className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:text-[#E31C19] hover:bg-white rounded-r-lg transition-colors"
                                  aria-label="Aumentar quantidade"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="flex items-center gap-3">
                                <span className="text-xs font-black text-neutral-900 font-mono">
                                  R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                                </span>
                                <button
                                  onClick={() => removeFromCart(product.id)}
                                  className="text-neutral-400 hover:text-[#E31C19] p-1 transition-colors"
                                  aria-label={`Remover ${product.name} do carrinho`}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Details: Delivery vs Pickup */}
                    <div className="pt-4 border-t border-neutral-200 space-y-4">
                      <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-neutral-800">
                        Como Deseja Receber Seu Pedido?
                      </h4>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod('retirada')}
                          className={`p-3 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${
                            deliveryMethod === 'retirada'
                              ? 'border-[#E31C19] bg-red-50/50 text-neutral-900 shadow-xs'
                              : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <Store className={`w-4 h-4 ${deliveryMethod === 'retirada' ? 'text-[#E31C19]' : 'text-neutral-500'}`} />
                            <span className="text-xs font-bold uppercase tracking-tight">Retirada</span>
                          </div>
                          <span className="text-[11px] text-neutral-500 font-medium">No balcão (Grátis)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeliveryMethod('entrega')}
                          className={`p-3 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${
                            deliveryMethod === 'entrega'
                              ? 'border-[#E31C19] bg-red-50/50 text-neutral-900 shadow-xs'
                              : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <Truck className={`w-4 h-4 ${deliveryMethod === 'entrega' ? 'text-[#E31C19]' : 'text-neutral-500'}`} />
                            <span className="text-xs font-bold uppercase tracking-tight">Entrega</span>
                          </div>
                          <span className="text-[11px] text-neutral-500 font-medium">Em domicílio</span>
                        </button>
                      </div>

                      {/* Customer Info Form */}
                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-neutral-700 mb-1">
                            Seu Nome (opcional):
                          </label>
                          <input
                            type="text"
                            placeholder="Ex: Maria Oliveira"
                            value={customerData.customerName}
                            onChange={(e) =>
                              setCustomerData((prev) => ({ ...prev, customerName: e.target.value }))
                            }
                            className="w-full text-xs rounded-xl border border-neutral-300 px-3 py-2 bg-neutral-50 focus:outline-none focus:border-[#E31C19]"
                          />
                        </div>

                        {deliveryMethod === 'entrega' && (
                          <div className="space-y-2 animate-in fade-in duration-200">
                            <div>
                              <label className="block text-xs font-bold text-neutral-700 mb-1">
                                Endereço de Entrega:
                              </label>
                              <input
                                type="text"
                                placeholder="Rua, Número e Complemento"
                                value={customerData.address}
                                onChange={(e) =>
                                  setCustomerData((prev) => ({ ...prev, address: e.target.value }))
                                }
                                className="w-full text-xs rounded-xl border border-neutral-300 px-3 py-2 bg-neutral-50 focus:outline-none focus:border-[#E31C19]"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold text-neutral-700 mb-1">
                                Bairro em Sorocaba:
                              </label>
                              <input
                                type="text"
                                placeholder="Ex: Villagio Ipanema I"
                                value={customerData.neighborhood}
                                onChange={(e) =>
                                  setCustomerData((prev) => ({ ...prev, neighborhood: e.target.value }))
                                }
                                className="w-full text-xs rounded-xl border border-neutral-300 px-3 py-2 bg-neutral-50 focus:outline-none focus:border-[#E31C19]"
                              />
                            </div>
                          </div>
                        )}

                        <div>
                          <label className="block text-xs font-bold text-neutral-700 mb-1">
                            Observações do Pedido:
                          </label>
                          <input
                            type="text"
                            placeholder="Ex: Entregar após as 14h, etc."
                            value={customerData.notes}
                            onChange={(e) =>
                              setCustomerData((prev) => ({ ...prev, notes: e.target.value }))
                            }
                            className="w-full text-xs rounded-xl border border-neutral-300 px-3 py-2 bg-neutral-50 focus:outline-none focus:border-[#E31C19]"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer / Checkout */}
              {items.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-neutral-200 bg-neutral-50 space-y-4">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                        Subtotal Estimado
                      </span>
                      <p className="text-[11px] text-neutral-400">
                        (Valores e estoque confirmados via WhatsApp)
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-heading font-black text-2xl text-[#E31C19] font-mono tabular-nums">
                        R$ {subtotal.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Checkout Button */}
                  <a
                    href={whatsappCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#E31C19] py-4 px-6 text-sm font-heading font-black uppercase tracking-wider text-white shadow-lg hover:bg-[#C71411] transition-all hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 ring-2 ring-[#FFD100]"
                  >
                    <MessageCircle className="w-5 h-5 text-[#FFD100] fill-current" />
                    <span>Finalizar Pedido pelo WhatsApp</span>
                  </a>

                  {/* Regulatory Disclaimer Banner */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-500 text-center font-medium">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>Remédios controlados e com receita não são vendidos pelo carrinho online.</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
