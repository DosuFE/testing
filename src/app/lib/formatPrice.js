export default function formatPrice(amount, currency) {
    return new Intl.NumberFormat('en-NG', { // 'en-NG' for Nigeria, you can change as needed
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  }
