import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { getCartFromStorage, updateQuantity, removeFromCart, getCartTotal } from '../utils/cart';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      setCartItems(getCartFromStorage());
    };
    
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    
    return () => {
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    const updatedCart = updateQuantity(productId, newQuantity);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = removeFromCart(productId);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const total = getCartTotal(cartItems);
  const shipping = total > 500 ? 0 : 50;
  const finalTotal = total + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center">
        {/* Animated Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 255, 161, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, #0f2419 0%, #2d4a3d 50%, #1e3329 100%)
            `
          }}
        />
        
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 glass rounded-full flex items-center justify-center mb-6 glow-mint">
                <ShoppingBag className="h-12 w-12 text-electric-mint" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 text-shadow">Your Cart is Empty</h2>
              <p className="text-gray-200 mb-8 text-shadow">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center space-x-2 btn-premium px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 161, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #0f2419 0%, #2d4a3d 50%, #1e3329 100%)
          `
        }}
      />
      
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">Shopping <span className="gradient-text">Cart</span></h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Review your items below or proceed to checkout.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center space-x-2 text-electric-mint hover:text-electric-orange transition-colors mt-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl overflow-hidden neon-border">
                <div className="p-6 border-b border-electric-mint/20">
                  <h2 className="text-xl font-semibold text-white text-shadow">
                    Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>
                </div>
                
                <div className="divide-y divide-electric-mint/20">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="p-6">
                      <div className="flex items-center space-x-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-20 h-20 glass rounded-lg overflow-hidden card-3d">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/product/${item.product.id}`}
                            className="text-lg font-semibold text-white hover:text-electric-mint transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-300 mt-1">{item.product.weight}</p>
                          <p className="text-electric-mint font-semibold mt-1">₹{item.product.price}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 text-gray-300 hover:text-electric-mint transition-colors glass rounded-lg"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-medium text-white">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 text-gray-300 hover:text-electric-mint transition-colors glass rounded-lg"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <div className="text-lg font-semibold text-white">
                            ₹{item.product.price * item.quantity}
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="p-2 text-vibrant-coral hover:text-red-400 transition-colors glass rounded-lg hover:glow-orange"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="glass rounded-2xl p-6 sticky top-8 neon-border glow-mint">
                <h2 className="text-xl font-semibold text-white mb-6 text-shadow">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-200">Subtotal</span>
                    <span className="font-medium text-white">₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">Shipping</span>
                    <span className="font-medium text-white">
                      {shipping === 0 ? 'Free' : `₹${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-electric-mint">
                      Free shipping on orders over ₹500
                    </p>
                  )}
                  <div className="border-t border-electric-mint/20 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-white">Total</span>
                      <span className="gradient-text">₹{finalTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Order Options */}
                <div className="space-y-3">
                  <h3 className="font-medium text-white mb-3 text-shadow">Quick Order Options</h3>
                  <Link
                    to="/checkout"
                    className="w-full btn-premium py-4 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <a
                    href={`https://wa.me/919842909360?text=Hi! I want to order products worth ₹${finalTotal} from my cart.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full glass hover:bg-electric-mint/10 text-white py-4 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-electric-mint/30 hover:border-electric-mint/60"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Order</span>
                  </a>

                  <div className="text-center pt-4 border-t border-electric-mint/20">
                    <p className="text-sm text-gray-200 mb-2">Payment Methods</p>
                    <div className="flex justify-center space-x-4 text-sm">
                      <span className="glass text-electric-mint px-3 py-1 rounded-full border border-electric-mint/30">GPay</span>
                      <span className="glass text-pure-gold px-3 py-1 rounded-full border border-pure-gold/30">Cash on Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-electric-mint/20 text-center text-sm text-gray-200">
                  <p className="mb-1">Need help with your order?</p>
                  <p>Call us at <a href="tel:9842909360" className="text-electric-mint hover:text-electric-orange font-medium">9842909360</a></p>
                  <p>Email: <a href="mailto:Support@vedhameldix.com" className="text-electric-mint hover:text-electric-orange font-medium">Support@vedhameldix.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;