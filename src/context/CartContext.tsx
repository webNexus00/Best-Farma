import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, DeliveryMethod, CustomerOrderData } from '../types/catalog';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: (method: DeliveryMethod) => void;
  customerData: CustomerOrderData;
  setCustomerData: React.Dispatch<React.SetStateAction<CustomerOrderData>>;
  generateWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'bestfarma_cart_items_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('retirada');
  const [customerData, setCustomerData] = useState<CustomerOrderData>({
    customerName: '',
    deliveryMethod: 'retirada',
    address: '',
    neighborhood: 'Jd. Res. Villagio Ipanema I',
    notes: '',
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    // Open cart drawer so user gets immediate visual confirmation
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Generate formatted WhatsApp checkout message
  const generateWhatsAppOrderUrl = () => {
    const lines: string[] = [
      '🛒 *NOVO PEDIDO — CATÁLOGO BEST FARMA*',
      '---------------------------------------',
    ];

    if (customerData.customerName.trim()) {
      lines.push(`👤 *Cliente:* ${customerData.customerName.trim()}`);
    }

    lines.push(
      `🚚 *Modalidade:* ${
        deliveryMethod === 'retirada'
          ? 'Retirada no Balcão (Villagio Ipanema I)'
          : `Entrega em Domicílio (Sorocaba)`
      }`
    );

    if (deliveryMethod === 'entrega' && customerData.address.trim()) {
      lines.push(
        `📍 *Endereço:* ${customerData.address.trim()}${
          customerData.neighborhood ? ` - ${customerData.neighborhood.trim()}` : ''
        }`
      );
    }

    lines.push('---------------------------------------');
    lines.push('*ITENS SELECIONADOS:*');

    items.forEach((item, index) => {
      const itemTotal = (item.product.price * item.quantity).toFixed(2).replace('.', ',');
      const unitPrice = item.product.price.toFixed(2).replace('.', ',');
      lines.push(
        `${index + 1}. *${item.product.name}* (${item.product.volume})\n   Qtd: ${
          item.quantity
        }x R$ ${unitPrice} = *R$ ${itemTotal}*`
      );
    });

    lines.push('---------------------------------------');
    lines.push(
      `💰 *SUBTOTAL ESTIMADO:* R$ ${subtotal.toFixed(2).replace('.', ',')}`
    );

    if (customerData.notes.trim()) {
      lines.push(`📝 *Observações:* ${customerData.notes.trim()}`);
    }

    lines.push('');
    lines.push(
      '⚠️ _Lembrando que não comercializamos medicamentos controlados ou tarjados sem conferência presencial de receita na farmácia._'
    );
    lines.push('');
    lines.push('Olá! Gostaria de confirmar a disponibilidade e fechar este pedido com a equipe Best Farma.');

    const message = lines.join('\n');
    return `https://wa.me/5515997376460?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
        deliveryMethod,
        setDeliveryMethod,
        customerData,
        setCustomerData,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
