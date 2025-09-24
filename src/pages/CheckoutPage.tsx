import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCartFromStorage, getCartTotal } from '../utils/cart';

type PaymentMethod = 'UPI' | 'COD';

interface CustomerForm {
  fullName: string;
  phone: string;
  whatsappSame: boolean;
  email: string;
  altPhone?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  notes?: string;
}

const initialForm: CustomerForm = {
  fullName: '',
  phone: '',
  whatsappSame: true,
  email: '',
  altPhone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  pincode: '',
  landmark: '',
  notes: ''
};

const phoneRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pincodeRegex = /^[1-9][0-9]{5}$/;

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useMemo(() => getCartFromStorage(), []);
  const subtotal = useMemo(() => getCartTotal(cartItems), [cartItems]);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const [form, setForm] = useState<CustomerForm>(initialForm);
  const [method, setMethod] = useState<PaymentMethod>('UPI');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    if (!form.fullName.trim()) return setError('Please enter full name'), false;
    if (!phoneRegex.test(form.phone)) return setError('Please enter a valid 10-digit mobile number'), false;
    if (!emailRegex.test(form.email)) return setError('Please enter a valid email address'), false;
    if (!form.address1.trim()) return setError('Please enter address line 1'), false;
    if (!form.city.trim()) return setError('Please enter city'), false;
    if (!form.state.trim()) return setError('Please enter state'), false;
    if (!pincodeRegex.test(form.pincode)) return setError('Please enter a valid 6-digit PIN code'), false;
    setError(null);
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validate()) return;
    setIsSubmitting(true);

    const orderId = `VE${Date.now().toString().slice(-6)}`;
    const orderDetails = {
      orderId,
      amount: total,
      subtotal,
      shipping,
      items: cartItems,
      customer: form,
      paymentMethod: method
    };

    try {
      if (method === 'COD') {
        navigate('/success', { state: { orderDetails, payment: { status: 'COD' } } });
        return;
      }

      if (method === 'UPI') {
        const upiLink = `upi://pay?pa=vijaya2015.ve@oksbi&pn=Vedham%20Eldix&am=${total}&cu=INR&tn=Order%20${orderId}`;
        window.location.href = upiLink;
        // After returning, still show success instructions
        navigate('/success', { state: { orderDetails, payment: { status: 'UPI' } } });
        return;
      }
    } catch (e) {
      setError('Network error. Please check your connection.');
      setIsSubmitting(false);
    }
  };

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
      
      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/cart" className="text-electric-mint hover:text-electric-orange transition-colors">Back to Cart</Link>
            <h1 className="text-3xl font-bold text-white mt-2 text-shadow">Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass rounded-2xl p-6 neon-border">
              <h2 className="text-xl font-semibold mb-4 text-white text-shadow">Customer Information</h2>

              {error && <div className="mb-4 p-3 glass border border-vibrant-coral/30 text-vibrant-coral rounded-lg">{error}</div>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="Full Name*" 
                  value={form.fullName} 
                  onChange={e=>setForm({...form, fullName:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="Email*" 
                  value={form.email} 
                  onChange={e=>setForm({...form, email:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="Phone Number*" 
                  value={form.phone} 
                  onChange={e=>setForm({...form, phone:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="Alternative Phone" 
                  value={form.altPhone} 
                  onChange={e=>setForm({...form, altPhone:e.target.value})} 
                />
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2 text-white text-shadow">Delivery Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 md:col-span-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="Address Line 1*" 
                  value={form.address1} 
                  onChange={e=>setForm({...form, address1:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 md:col-span-2 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="Address Line 2" 
                  value={form.address2} 
                  onChange={e=>setForm({...form, address2:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="City*" 
                  value={form.city} 
                  onChange={e=>setForm({...form, city:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="State*" 
                  value={form.state} 
                  onChange={e=>setForm({...form, state:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="PIN Code*" 
                  value={form.pincode} 
                  onChange={e=>setForm({...form, pincode:e.target.value})} 
                />
                <input 
                  className="glass border border-electric-mint/30 rounded p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors" 
                  placeholder="Landmark" 
                  value={form.landmark} 
                  onChange={e=>setForm({...form, landmark:e.target.value})} 
                />
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2 text-white text-shadow">Order Notes</h3>
              <textarea 
                className="glass border border-electric-mint/30 rounded p-3 w-full text-white placeholder-gray-300 focus:ring-2 focus:ring-electric-mint focus:border-electric-mint outline-none transition-colors resize-vertical" 
                rows={3} 
                placeholder="Special instructions or preferences" 
                value={form.notes} 
                onChange={e=>setForm({...form, notes:e.target.value})}
              ></textarea>

              <h2 className="text-xl font-semibold mt-6 mb-2 text-white text-shadow">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  onClick={()=>setMethod('UPI')} 
                  className={`p-3 border rounded transition-all duration-300 ${
                    method==='UPI'
                      ?'border-electric-mint bg-electric-mint/10 text-electric-mint glow-mint'
                      :'glass border-electric-mint/30 text-gray-200 hover:bg-electric-mint/5'
                  }`}
                >
                  UPI Direct
                </button>
                <button 
                  onClick={()=>setMethod('COD')} 
                  className={`p-3 border rounded transition-all duration-300 ${
                    method==='COD'
                      ?'border-electric-orange bg-electric-orange/10 text-electric-orange glow-orange'
                      :'glass border-electric-mint/30 text-gray-200 hover:bg-electric-mint/5'
                  }`}
                >
                  Cash on Delivery
                </button>
              </div>

              <button 
                onClick={handlePlaceOrder} 
                disabled={isSubmitting} 
                className="mt-6 w-full btn-premium py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Processing...' : `Place Order • ₹${total}`}
              </button>
            </div>

            <div className="glass rounded-2xl p-6 neon-border glow-mint">
              <h2 className="text-xl font-semibold mb-4 text-white text-shadow">Order Summary</h2>
              <div className="space-y-3">
                {cartItems.map(ci => (
                  <div key={ci.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-200">{ci.product.name} × {ci.quantity}</span>
                    <span className="text-white">₹{ci.product.price * ci.quantity}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-3 border-t border-electric-mint/20">
                  <span className="text-gray-200">Subtotal</span>
                  <span className="text-white">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200">Shipping</span>
                  <span className="text-white">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t border-electric-mint/20">
                  <span className="text-white">Total</span>
                  <span className="gradient-text">₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;



