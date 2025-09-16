import React, { useEffect, useState } from 'react';
import { ShoppingCartIcon, CheckIcon, XIcon, InfoIcon, EuroIcon, TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface CartItem {
  name: string;
  price: number;
  interval?: string;
  type: 'plan' | 'addon' | 'service';
  country?: string;
  included?: boolean;
}
interface CartWidgetProps {
  selectedPlan?: string;
  items?: CartItem[];
  onClose?: () => void;
}
export function CartWidget({
  selectedPlan,
  items = [],
  onClose
}: CartWidgetProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(items);
  const [showAddons, setShowAddons] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  
  useEffect(() => {
    setCartItems(items);
  }, [items]);
  const plans: Record<string, CartItem> = {
    free: {
      name: 'Free Plan',
      price: 0,
      interval: 'month',
      type: 'plan'
    },
    ebranch: {
      name: 'eBranch',
      price: 1995,
      interval: 'year',
      type: 'plan'
    }
  };
  const addons = [{
    id: 'payroll',
    name: 'Payroll Management',
    price: 25,
    interval: 'month',
    type: 'addon' as const,
    description: 'Per employee, includes full payroll administration'
  }, {
    id: 'eor',
    name: 'Employer of Record',
    price: 175,
    interval: 'month',
    type: 'addon' as const,
    description: 'Per employee, full employment compliance'
  }, {
    id: 'vat',
    name: 'VAT Administration',
    price: 45,
    interval: 'month',
    type: 'addon' as const,
    description: 'Monthly VAT returns and administration'
  }];
  useEffect(() => {
    if (selectedPlan && plans[selectedPlan]) {
      setCartItems([plans[selectedPlan]]);
    }
  }, [selectedPlan]);
  const addItem = (item: CartItem) => {
    if (!cartItems.find(i => i.name === item.name)) {
      setCartItems([...cartItems, item]);
    }
  };
  const removeItem = (itemName: string) => {
    setCartItems(cartItems.filter(item => item.name !== itemName));
  };
  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => {
      return acc + (item.included ? 0 : item.price);
    }, 0);
    const vat = subtotal * 0.21; // 21% VAT
    return {
      subtotal,
      vat,
      total: subtotal + vat
    };
  };
  const {
    subtotal,
    vat,
    total
  } = calculateTotal();
  const groupedItems = cartItems.reduce((acc, item) => {
    const key = item.type;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, CartItem[]>);
  // Function to generate Stripe payment link
  const handleProceedToPayment = async () => {
    try {
      // Validate email
      if (!customerEmail || !customerEmail.includes('@')) {
        alert('Please enter a valid email address');
        return;
      }

      setIsLoading(true);

      // Prepare cart items for the backend
      const items = cartItems.map(item => ({
        name: item.name,
        price: item.included ? 0 : item.price,
        quantity: 1,
        description: `${item.name} service${item.country ? ` for ${item.country}` : ''}`
      }));

      const requestBody = {
        amount: total,
        currency: 'eur',
        description: 'House of Companies Services',
        items: items,
        customerEmail: customerEmail
      };

      console.log('Sending request to backend:', {
        url: 'https://backend-stripe-3.onrender.com/create-checkout-session',
        method: 'POST',
        body: requestBody
      });

      // Call backend to create Stripe checkout session
      const response = await fetch('https://backend-stripe-3.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create payment session');
      }

    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Payment setup failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ShoppingCartIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Your Selection</h3>
        </div>
        {onClose && <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-5 w-5" />
          </button>}
      </div>
      {Object.entries(groupedItems).map(([type, typeItems]) => <div key={type} className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
            {type === 'plan' && <TagIcon className="h-4 w-4 mr-2" />}
            {type === 'addon' && <InfoIcon className="h-4 w-4 mr-2" />}
            {type === 'service' && <EuroIcon className="h-4 w-4 mr-2" />}
            {type.charAt(0).toUpperCase() + type.slice(1)}s
          </h4>
          <div className="space-y-3">
            {typeItems.map(item => <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">
                      {item.name}
                    </span>
                    {item.included && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        Included
                      </span>}
                  </div>
                  {item.country && <span className="text-sm text-gray-500">
                      {item.country}
                    </span>}
                  {item.interval && <span className="text-sm text-gray-500">
                      {' '}
                      / {item.interval}
                    </span>}
                </div>
                <div className="flex items-center">
                  <span className={`font-medium ${item.included ? 'text-green-600' : 'text-gray-900'}`}>
                    {item.included ? 'FREE' : `€${item.price.toFixed(2)}`}
                  </span>
                  <button onClick={() => removeItem(item.name)} className="ml-2 text-red-500 hover:text-red-600">
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>)}
          </div>
        </div>)}
      {showAddons && <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            Available Add-ons
          </h4>
          <div className="space-y-3">
            {addons.map(addon => <div key={addon.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer" onClick={() => addItem({
          name: addon.name,
          price: addon.price,
          interval: addon.interval,
          type: addon.type
        })}>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">
                      {addon.name}
                    </span>
                    <InfoIcon className="h-4 w-4 text-gray-400 ml-1" />
                  </div>
                  <p className="text-sm text-gray-500">{addon.description}</p>
                  <div className="text-sm font-medium text-gray-900">
                    €{addon.price} / {addon.interval}
                  </div>
                </div>
                <div className={`ml-4 flex-shrink-0 h-5 w-5 border rounded-full flex items-center justify-center ${cartItems.find(item => item.name === addon.name) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                  {cartItems.find(item => item.name === addon.name) && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
              </div>)}
          </div>
        </div>}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium text-black">€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">VAT (21%)</span>
          <span className="font-medium text-black">€{vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
          <span>Total</span>
          <span>€{total.toFixed(2)}</span>
        </div>
      </div>
      <input
        type="email"
        placeholder="Enter your email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
        style={{ color: 'black' }}
        className="border rounded px-3 py-2 mb-4 w-full"
        required
      />
      <button 
        onClick={handleProceedToPayment}
        disabled={isLoading || !customerEmail || !customerEmail.includes('@')}
        className="w-full bg-[#EA3A70] text-white py-3 px-4 rounded-lg hover:bg-[#EA3A70]/90 flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <EuroIcon className="h-5 w-5 mr-2" />
        {isLoading ? 'Creating payment...' : 'Proceed to Payment'}
      </button>
    </div>;
}