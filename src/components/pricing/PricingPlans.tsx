/// <reference types="vite/client" />
import { useState } from 'react';
import { supabase } from '../../utils/supabase';
import { motion } from 'framer-motion';
import './PricingPlans.css';

// Note: You can add additional submission endpoints here if needed

type AddonId = 'payroll' | 'employer' | 'vat'
type CartItem = { name: string; price: number; period: 'month' | 'year' | string }
type Addon = { id: AddonId; name: string; description: string; price: number; period: 'month' | string }

export function PricingPlans() {
  // Add all necessary state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [hasEBranchPlan, setHasEBranchPlan] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<Record<AddonId, boolean>>({
    payroll: false,
    employer: false,
    vat: false
  });
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedPlanForQuote, setSelectedPlanForQuote] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Addons data
  const addons: Addon[] = [
    {
      id: 'payroll',
      name: 'Payroll Management',
      description: 'Complete payroll processing and compliance',
      price: 199,
      period: 'month'
    },
    {
      id: 'employer',
      name: 'Employer of Record',
      description: 'Hire employees without setting up a local entity',
      price: 299,
      period: 'month'
    },
    {
      id: 'vat',
      name: 'VAT Administration',
      description: 'Full VAT registration, filing, and compliance management',
      price: 149,
      period: 'month'
    }
  ];

  // Add to cart function
  const addToCart = (planName: string, price: number, period: string = 'month') => {
    const newItem: CartItem = { name: planName, price, period };
    setCart(prev => {
      // Remove existing plan if adding a new one
      const filtered = prev.filter(item => !item.name.includes('Plan'));
      return [...filtered, newItem];
    });
    
    // Update eBranch plan status
    if (planName === 'eBranch Plan') {
      setHasEBranchPlan(true);
    } else {
      setHasEBranchPlan(false);
      // Clear addons if switching away from eBranch
      setSelectedAddons({ payroll: false, employer: false, vat: false });
    }
  };

  // Remove from cart
  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  // Toggle addon
  const toggleAddon = (addonId: AddonId) => {
    const addon = addons.find(a => a.id === addonId);
    if (!addon) return;

    setSelectedAddons(prev => {
      const newState = { ...prev, [addonId]: !prev[addonId] };
      
      // Update cart
      if (newState[addonId]) {
        // Add addon to cart
        const newItem: CartItem = { name: addon.name, price: addon.price, period: addon.period };
        setCart(prevCart => [...prevCart, newItem]);
      } else {
        // Remove addon from cart
        setCart(prevCart => prevCart.filter(item => item.name !== addon.name));
      }
      
      return newState;
    });
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const vatRate = 0.21; // 21% VAT
  const vatAmount = subtotal * vatRate;
  const total = subtotal + vatAmount;

  // Quote form submission
  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            selected_plan: selectedPlanForQuote,
            cart_items: JSON.stringify(cart),
            total_amount: total,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      console.log('Quote submitted successfully:', data);
      setShowSuccessPopup(true);
      setShowQuoteForm(false);
      
      // Reset form
      setFormData({ name: '', company: '', email: '' });
      setCart([]);
      setSelectedPlanForQuote('');

    } catch (error) {
      console.error('Quote submission error:', error);
      alert('There was an error submitting your quote request. Please try again or contact us directly at support@houseofcompanies.io');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGetQuote = (planName: string) => {
    setSelectedPlanForQuote(planName);
    setShowQuoteForm(true);
    // Scroll to the quote form
    setTimeout(() => {
      const quoteForm = document.getElementById('quote-form');
      if (quoteForm) {
        quoteForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const addonVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0A0826]">
      <div className="services-content">
        <motion.div 
          className="app-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="inside">
            <div className="main-content">
              <div className="services-container">
                <motion.div 
                  className="pricing-plans"
                  variants={containerVariants}
                >
                  {/* Free Plan */}
                  <motion.div 
                    className="pricing-card"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="plan-header">
                      <div className="plan-tag current">Current Plan</div>
                      <h2>Free Plan</h2>
                      <div className="plan-price">
                        <span className="price-amount">€0</span>
                        <span className="price-period">/month</span>
                      </div>
                      <p className="plan-subtitle">Perfect for exploring business opportunities</p>
                    </div>
                    <div className="plan-features">
                      <div className="feature-category">
                        <h4>📍 Virtual Presence</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Virtual office address in the EU</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Dedicated phone number</span>
                        </div>
                      </div>
                      <div className="feature-category">
                        <h4>🚀 Business Tools</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>25 credits for additional services</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Market Entry Roadmap & Strategy</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Access to basic AI-powered tools</span>
                        </div>
                      </div>
                    </div>
                    <button className="plan-button current">Current Plan</button>
                  </motion.div>

                  {/* eBranch Plan */}
                  <motion.div 
                    className="pricing-card popular"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="plan-header">
                      <div className="plan-tag popular">Most Popular</div>
                      <h2>eBranch Plan</h2>
                      <div className="plan-price">
                        <span className="price-amount">€1,995</span>
                        <span className="price-period">/one-time</span>
                      </div>
                      <p className="plan-subtitle">Complete business setup with ongoing support</p>
                    </div>
                    <div className="plan-features">
                      <div className="feature-category">
                        <h4>✅ Everything in Free Plan</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>All Free Plan features included</span>
                        </div>
                      </div>
                      <div className="feature-category">
                        <h4>🏢 Business Registration</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Complete company formation</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Legal structure optimization</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Regulatory compliance setup</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Business license assistance</span>
                        </div>
                      </div>
                      <div className="feature-category">
                        <h4>📊 Financial Management</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Business bank account opening</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>VAT registration & setup</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Basic bookkeeping setup</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Tax optimization consultation</span>
                        </div>
                      </div>
                      <div className="feature-category">
                        <h4>🤖 AI-Powered Tools</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Document automation</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Compliance monitoring</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Business insights dashboard</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Priority customer support</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      className="plan-button popular"
                      onClick={() => addToCart('eBranch Plan', 1995, 'one-time')}
                    >
                      Choose eBranch
                    </button>
                  </motion.div>

                  {/* Enterprise Plan */}
                  <motion.div 
                    className="pricing-card"
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="plan-header">
                      <div className="plan-tag enterprise">Enterprise</div>
                      <h2>Enterprise</h2>
                      <div className="plan-price">
                        <span className="price-amount">Custom</span>
                        <span className="price-period">pricing</span>
                      </div>
                      <p className="plan-subtitle">Tailored solutions for large organizations</p>
                    </div>
                    <div className="plan-features">
                      <div className="feature-category">
                        <h4>✅ Everything in eBranch</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>All eBranch Plan features</span>
                        </div>
                      </div>
                      <div className="feature-category">
                        <h4>🎯 Custom Solutions</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Multi-jurisdiction setup</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Custom integration development</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>White-label solutions</span>
                        </div>
                      </div>
                      <div className="feature-category">
                        <h4>👥 Premium Support</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Dedicated account manager</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>24/7 priority support</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>SLA guarantees</span>
                        </div>
                      </div>
                      <div className="feature-category">
                        <h4>🔧 Advanced Features</h4>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>API access & custom workflows</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Advanced analytics & reporting</span>
                        </div>
                        <div className="feature-item">
                          <span className="check-icon">✓</span>
                          <span>Enterprise security features</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      className="plan-button enterprise"
                      onClick={() => handleGetQuote('Enterprise Plan')}
                    >
                      Get Quote
                    </button>
                  </motion.div>
                </motion.div>

                {/* Add-ons Section - Only show when eBranch is selected */}
                {hasEBranchPlan && (
                  <motion.div 
                    className="addons-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="addons-header">
                      <h2>🔧 Available Add-ons</h2>
                      <p>Enhance your eBranch plan with these additional services</p>
                    </div>
                    <div className="addons-container">
                      {addons.map((addon, index) => (
                        <motion.div 
                          key={addon.id} 
                          className={`addon-card ${selectedAddons[addon.id] ? 'selected' : ''}`}
                          variants={addonVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => toggleAddon(addon.id)}
                        >
                          <div className="addon-content">
                            <div className="addon-header">
                              <h3>{addon.name}</h3>
                              <div className="addon-price">
                                <span className="price-amount">€{addon.price}</span>
                                <span className="price-period">/{addon.period}</span>
                              </div>
                            </div>
                            <p className="addon-description">{addon.description}</p>
                            <div className="addon-features">
                              <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Professional setup & configuration</span>
                              </div>
                              <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Ongoing compliance monitoring</span>
                              </div>
                              <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Dedicated support specialist</span>
                              </div>
                              <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Monthly reporting & insights</span>
                              </div>
                            </div>
                          </div>
                          <div className={`addon-checkbox ${selectedAddons[addon.id] ? 'checked' : ''}`}>
                            {selectedAddons[addon.id] ? '✓' : '+'}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Cart Section */}
                {cart.length > 0 && (
                  <motion.div 
                    className="cart-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="cart-header">
                      <h3>🛒 Your Selection</h3>
                      <button 
                        className="cart-button secondary"
                        onClick={() => setCart([])}
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="cart-items">
                      {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                          <div className="cart-item-info">
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-period">/{item.period}</span>
                          </div>
                          <div className="cart-item-actions">
                            <span className="cart-item-price">€{item.price.toLocaleString()}</span>
                            <button 
                              className="remove-item"
                              onClick={() => removeFromCart(index)}
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="cart-summary">
                      <div className="summary-line">
                        <span>Subtotal:</span>
                        <span>€{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="summary-line">
                        <span>VAT (21%):</span>
                        <span>€{vatAmount.toFixed(2)}</span>
                      </div>
                      <div className="summary-line total">
                        <span>Total:</span>
                        <span>€{total.toFixed(2)}</span>
                      </div>
                      <button 
                        className="cart-button quote-btn"
                        onClick={() => handleGetQuote('Custom Plan')}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Processing...' : 'Get My Quote'}
                      </button>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote Form */}
      {showQuoteForm && (
        <motion.div 
          id="quote-form"
          className="quote-form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowQuoteForm(false);
            }
          }}
        >
          <div className="quote-form-content">
            <button 
              className="close-quote-form"
              onClick={() => setShowQuoteForm(false)}
            >
              ×
            </button>
            <div className="quote-form-header">
              <h2>Get Your Quote</h2>
              <p>Fill out the form below to receive a personalized quote for the <strong>{selectedPlanForQuote}</strong></p>
            </div>
            <form onSubmit={handleQuoteSubmit} className="quote-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="submit-quote-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Quote'}
              </button>
              <div className="form-footer">
                By submitting this form, you agree to be contacted by our team regarding your quote.
              </div>
            </form>
          </div>
        </motion.div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          className="success-popup"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="popup-content">
            <div className="popup-icon">✓</div>
            <h3>Thank you!</h3>
            <p>Your quote request has been sent! We'll contact you soon with a personalized quote.</p>
            <button onClick={() => {
              setShowSuccessPopup(false);
              window.location.reload();
            }}>
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}