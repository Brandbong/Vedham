import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const state: any = location.state || {};
  const { orderDetails, payment } = state;

  useEffect(() => {
    // Fire WhatsApp deep links as best-effort on success
    if (!orderDetails) return;

    const formatCustomer = () => {
      const lines = [
        '🙏 Thank you for choosing Vedham Eldix!',
        '',
        `✅ Payment Confirmed: ₹${orderDetails.amount}`,
        `📦 Order ID: #${orderDetails.orderId}`,
        `📅 Order Date: ${new Date().toLocaleDateString()}`,
        '',
        '🛍️ Your Order:',
        ...orderDetails.items.map((i: any) => `${i.product.name} - ₹${i.product.price} x ${i.quantity}`),
        '',
        '📍 Delivery Address:',
        `${orderDetails.customer.address1} ${orderDetails.customer.address2 || ''}`,
        `${orderDetails.customer.city}, ${orderDetails.customer.state} - ${orderDetails.customer.pincode}`,
        '',
        `📞 Contact: ${orderDetails.customer.phone}`,
        '',
        '🚚 Expected Delivery: 3-5 business days',
        '',
        'For queries: 9842909360',
        'Support: Support@vedhameldix.com',
        '',
        'Thank you for trusting our natural nutrition products! 🌿',
        '',
        '- Team Vedham Eldix'
      ];
      return lines.join('\n');
    };

    const formatCompany = () => {
      const lines = [
        '🔔 NEW ORDER RECEIVED - Vedham Eldix',
        '',
        `💰 Payment Status: ${payment?.status === 'PAID' ? '✅ CONFIRMED' : payment?.status || 'CONFIRMED'}`,
        `💵 Amount: ₹${orderDetails.amount}`,
        `📦 Order ID: #${orderDetails.orderId}`,
        `⏰ Time: ${new Date().toLocaleString()}`,
        '',
        '👤 CUSTOMER DETAILS:',
        `Name: ${orderDetails.customer.fullName}`,
        `Phone: ${orderDetails.customer.phone}`,
        `Email: ${orderDetails.customer.email}`,
        '',
        '🛍️ ORDER DETAILS:'
      ];
      orderDetails.items.forEach((i: any) => lines.push(`${i.product.name} - Qty: ${i.quantity} - ₹${i.product.price}`));
      lines.push(`Subtotal: ₹${orderDetails.subtotal}`);
      lines.push(`Shipping: ₹${orderDetails.shipping}`);
      lines.push(`Total: ₹${orderDetails.amount}`);
      lines.push('', '📍 DELIVERY ADDRESS:');
      lines.push(`${orderDetails.customer.address1} ${orderDetails.customer.address2 || ''}`);
      lines.push(`${orderDetails.customer.city}, ${orderDetails.customer.state} - ${orderDetails.customer.pincode}`);
      lines.push('', `💳 Payment Method: ${orderDetails.paymentMethod}`);
      if (payment?.response?.razorpay_payment_id) lines.push(`Transaction ID: ${payment.response.razorpay_payment_id}`);
      lines.push('', '🚚 ACTION REQUIRED: Prepare order for dispatch');
      return lines.join('\n');
    };

    try {
      const customerPhone = `91${orderDetails.customer.phone}`;
      const customerUrl = `https://api.whatsapp.com/send?phone=${customerPhone}&text=${encodeURIComponent(formatCustomer())}`;
      const companyUrl = `https://api.whatsapp.com/send?phone=919842909360&text=${encodeURIComponent(formatCompany())}`;

      setTimeout(() => window.open(customerUrl, '_blank'), 1000);
      setTimeout(() => window.open(companyUrl, '_blank'), 3000);
    } catch {
      // ignore
    }
  }, [orderDetails, payment]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Order not found</h2>
          <Link to="/shop" className="text-green-600">Go to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-2">✅ Payment Successful!</h1>
        <p className="text-gray-700 mb-6">WhatsApp confirmations will open shortly.</p>
        <div className="space-y-1">
          <div>Order ID: <span className="font-semibold">#{orderDetails.orderId}</span></div>
          <div>Amount Paid: <span className="font-semibold">₹{orderDetails.amount}</span></div>
        </div>
        <div className="mt-8">
          <Link to="/shop" className="text-green-600 hover:text-green-700">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;



