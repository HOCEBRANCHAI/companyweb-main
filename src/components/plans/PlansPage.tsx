import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, XIcon, PlusIcon, MinusIcon, ShoppingCartIcon } from 'lucide-react';
interface Plan {
  id: string;
  name: string;
  price: number;
  popular: boolean;
  features: string[];
}
interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
}
export function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [showCart, setShowCart] = useState(false);
  const plans: Plan[] = [{
    id: 'starter',
    name: 'Starter',
    price: 49,
    popular: false,
    features: ['Basic company formation', 'Registered address', 'Bank account opening', 'Basic tax registration']
  }, {
    id: 'growth',
    name: 'Growth',
    price: 99,
    popular: true,
    features: ['Everything in Starter', 'VAT registration', 'Payroll setup', 'Compliance monitoring', 'Annual reports filing']
  }, {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    popular: false,
    features: ['Everything in Growth', 'Multiple jurisdictions', 'Dedicated account manager', 'Priority support', 'Custom compliance solutions']
  }];
  const addons: Addon[] = [{
    id: 'tax-advisory',
    name: 'Tax Advisory',
    description: 'Professional tax planning and advisory services',
    price: 75
  }, {
    id: 'legal-support',
    name: 'Legal Support',
    description: 'Ongoing legal consultation and document review',
    price: 99
  }, {
    id: 'business-address',
    name: 'Business Address',
    description: 'Premium business address and mail handling',
    price: 49
  }];
  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowCart(true);
  };
  const handleToggleAddon = (addon: Addon) => {
    if (selectedAddons.find(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };
  const calculateTotal = () => {
    const planTotal = selectedPlan?.price || 0;
    const addonTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    return planTotal + addonTotal;
  };
  const CartOverlay = () => <div className={`fixed bottom-0 right-0 w-full md:w-96 bg-[#1E1B3F] border-t border-l border-indigo-500/30 p-6 transform transition-transform duration-300 ${showCart ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-white">Your Selection</h3>
        <button onClick={() => setShowCart(false)} className="text-indigo-300 hover:text-white">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      {selectedPlan && <div className="mb-4">
          <div className="flex justify-between items-center text-white mb-2">
            <span>{selectedPlan.name} Plan</span>
            <span>€{selectedPlan.price}/mo</span>
          </div>
          {selectedAddons.map(addon => <div key={addon.id} className="flex justify-between items-center text-indigo-200 text-sm">
              <span>{addon.name}</span>
              <span>€{addon.price}/mo</span>
            </div>)}
          <div className="mt-4 pt-4 border-t border-indigo-500/30">
            <div className="flex justify-between items-center text-white font-medium">
              <span>Total</span>
              <span>€{calculateTotal()}/mo</span>
            </div>
          </div>
        </div>}
      <Link to="/payment" className="w-full flex items-center justify-center px-4 py-3 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors">
        <ShoppingCartIcon className="h-5 w-5 mr-2" />
        Proceed to Payment
      </Link>
    </div>;
  return <div className="min-h-screen bg-[#0A0826] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-indigo-300 max-w-2xl mx-auto">
            Select the perfect plan for your business needs and customize it
            with additional services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map(plan => <div key={plan.id} className={`bg-indigo-800/20 backdrop-blur-md rounded-2xl border ${plan.popular ? 'border-[#EA3A70]' : 'border-indigo-500/30'} p-6`}>
              {plan.popular && <span className="bg-[#EA3A70] text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>}
              <h2 className="text-xl font-bold mt-4">{plan.name}</h2>
              <div className="mt-2 mb-6">
                <span className="text-3xl font-bold">€{plan.price}</span>
                <span className="text-indigo-300">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => <li key={index} className="flex items-center text-sm">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-indigo-100">{feature}</span>
                  </li>)}
              </ul>
              <button onClick={() => handleSelectPlan(plan)} className={`w-full py-3 rounded-lg font-medium ${plan.popular ? 'bg-[#EA3A70] text-white hover:bg-[#EA3A70]/90' : 'bg-white/10 text-white hover:bg-white/20'} transition-colors`}>
                Select Plan
              </button>
            </div>)}
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map(addon => <div key={addon.id} className={`bg-indigo-800/20 backdrop-blur-md rounded-xl border ${selectedAddons.find(a => a.id === addon.id) ? 'border-[#EA3A70]' : 'border-indigo-500/30'} p-6`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-white">{addon.name}</h3>
                    <p className="text-sm text-indigo-300 mt-1">
                      {addon.description}
                    </p>
                  </div>
                  <button onClick={() => handleToggleAddon(addon)} className={`p-2 rounded-lg ${selectedAddons.find(a => a.id === addon.id) ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300'}`}>
                    {selectedAddons.find(a => a.id === addon.id) ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
                  </button>
                </div>
                <div className="text-xl font-bold">€{addon.price}/mo</div>
              </div>)}
          </div>
        </div>
        <CartOverlay />
      </div>
    </div>;
}