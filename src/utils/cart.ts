import { CartItem, Product } from '../types';

export const getCartFromStorage = (): CartItem[] => {
  const stored = localStorage.getItem('vedham-cart');
  return stored ? JSON.parse(stored) : [];
};

export const saveCartToStorage = (cart: CartItem[]): void => {
  localStorage.setItem('vedham-cart', JSON.stringify(cart));
};

export const addToCart = (product: Product, quantity: number = 1): CartItem[] => {
  const cart = getCartFromStorage();
  const existingItem = cart.find(item => item.product.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  
  saveCartToStorage(cart);
  return cart;
};

export const removeFromCart = (productId: string): CartItem[] => {
  const cart = getCartFromStorage();
  const updatedCart = cart.filter(item => item.product.id !== productId);
  saveCartToStorage(updatedCart);
  return updatedCart;
};

export const updateQuantity = (productId: string, quantity: number): CartItem[] => {
  const cart = getCartFromStorage();
  const item = cart.find(item => item.product.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
  }
  
  saveCartToStorage(cart);
  return cart;
};

export const getCartTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

export const getCartItemCount = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};