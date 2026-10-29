export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'dermocosmeticos' | 'higiene' | 'vitaminas' | 'infantil' | 'primeiros_socorros' | 'ortopedia';
  categoryName: string;
  price: number;
  oldPrice?: number;
  volume: string;
  description: string;
  badge?: string;
  inStock: boolean;
  accentColor?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type DeliveryMethod = 'retirada' | 'entrega';

export interface CustomerOrderData {
  customerName: string;
  deliveryMethod: DeliveryMethod;
  address: string;
  neighborhood: string;
  notes: string;
}
