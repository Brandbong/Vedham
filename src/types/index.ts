export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  category: 'nutrition' | 'malt' | 'dosa';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
}