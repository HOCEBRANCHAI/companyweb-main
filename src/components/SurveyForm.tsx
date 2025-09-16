import React, { useState, useEffect, Fragment } from 'react';

// SurveyForm Component
const SurveyForm = ({ onClose }: { onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Pre-survey
    companyName: '',
    industry: '',
    employees: '',
    growthStage: '',
    previousExpansion: '',
    previousCountries: '',
    // Step 1: Business Context
    currentSituation: '',
    companySize: '',
    businessIndustry: '',
    // Step 2: Business Bureaucracy
    complianceDiscouragements: [],
    consultantFeelings: '',
    compliancePreference: '',
    // Step 3: VAT & Tax Management
    crossBorderTaxExperience: '',
    outsourcingReasons: [],
    taxComplianceHelp: '',
    // Step 4: Market Entry Requirements
    essentialMarketEntry: [],
    virtualExpansion: '',
    automatedServices: [],
    // Step 5: Company Formation vs Virtual Presence
    localCompanyNecessity: '',
    expansionWithoutLocalCompany: '',
    benefitsNoLocalCompany: [],
    concernsNoLocalCompany: [],
    // Step 6: Financial Reporting
    financialReportingPainPoints: [],
    financialInsightsSpeed: '',
    financialReportingModel: '',
    // Step 7: Future of Compliance
    aiSolutions: [],
    aiTrustFactors: '',
    aiUsageReasons: [],
    // Optional
    helpShapeSolutions: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateDirection, setAnimateDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [shakeError, setShakeError] = useState(false);

  const totalSurveySteps = 7;
  const totalSteps = totalSurveySteps + 1;

  useEffect(() => {
    const surveyProgress = currentStep === 0 ? 0 : currentStep / totalSurveySteps * 100;
    setProgressPercent(surveyProgress);
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentValues = prev[field];
      if (checked) {
        return {
          ...prev,
          [field]: [...currentValues, value]
        };
      } else {
        return {
          ...prev,
          [field]: currentValues.filter(v => v !== value)
        };
      }
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateCurrentStep = () => {
    if (currentStep === 0) {
      if (!formData.companyName || !formData.industry || !formData.employees || !formData.growthStage || !formData.previousExpansion) {
        return false;
      }
      if (formData.previousExpansion === 'Yes' && !formData.previousCountries) {
        return false;
      }
      return true;
    }
    // For steps 1-7, validate all questions in surveySteps
    if (currentStep > 0 && currentStep <= 7) {
      const questions = surveySteps[currentStep-1];
      for (const q of questions) {
        if (q.type === 'radio') {
          if (!formData[q.field]) return false;
        } else if (q.type === 'checkbox') {
          if (!formData[q.field] || formData[q.field].length === 0) return false;
          if (q.max && formData[q.field].length > q.max) return false;
        }
      }
      return true;
    }
    // For other steps, fallback to true
    return true;
  };

  const nextStep = () => {
    if (!validateCurrentStep()) {
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    if (currentStep < totalSteps - 1) {
      setAnimateDirection('next');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
        window.scrollTo(0, 0);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setAnimateDirection('prev');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsAnimating(false);
        window.scrollTo(0, 0);
      }, 300);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCurrentStep()) {
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }, 1500);
  };

  if (isSubmitted) {
    return React.createElement('div', { className: 'bg-gradient-to-br from-[#131340] via-[#1a1a4f] to-[#131340] p-8 md:p-12 rounded-2xl shadow-2xl border border-[#252550] text-center animate-fadeIn backdrop-blur-sm' },
      React.createElement('div', { className: 'mb-8' },
        React.createElement('div', { className: 'w-20 h-20 bg-gradient-to-r from-[#F13D73] to-[#d82e60] rounded-full mx-auto flex items-center justify-center mb-6 animate-scaleIn shadow-lg' },
          React.createElement('span', { className: 'text-white text-3xl font-bold' }, '✓')
        ),
        React.createElement('h2', { className: 'text-3xl font-bold text-white mb-4 animate-slideUp bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent' },
          'Thank You for Participating!'
        ),
        React.createElement('p', { className: 'text-gray-300 text-lg animate-slideUp animation-delay-200 leading-relaxed' },
          'Your input is invaluable in helping us shape the future of business expansion without bureaucratic barriers. We\'ll be in touch soon with early access to our comprehensive "Breaking Bureaucratic Barriers" report.'
        )
      ),
      React.createElement('button', {
        onClick: onClose,
        className: 'inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#252550] to-[#303060] hover:from-[#303060] hover:to-[#404070] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-slideUp animation-delay-400'
      }, 'Close')
    );
  }

  // Use the same main box for all steps
  const mainBoxClass = 'bg-gradient-to-br from-[#131340] via-[#1a1a4f] to-[#131340] max-w-2xl mx-auto p-6 md:p-8 rounded-2xl shadow-2xl border border-[#252550] relative overflow-hidden backdrop-blur-sm';

  return React.createElement('div', { className: mainBoxClass },
    // Progress indicator
    currentStep > 0 && React.createElement('div', { className: 'mb-8 relative z-10' },
      React.createElement('div', { className: 'flex justify-between items-center mb-6' },
        Array.from({ length: totalSurveySteps }).map((_, index) => React.createElement(Fragment, { key: index },
          React.createElement('div', {
            className: `w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 shadow-lg transform hover:scale-110
              ${currentStep > index + 1 ? 'bg-gradient-to-r from-[#F13D73] to-[#d82e60] text-white scale-110 shadow-[#F13D73]/40' : currentStep === index + 1 ? 'bg-gradient-to-r from-[#252550] to-[#303060] text-white border-2 border-[#F13D73] animate-pulse shadow-[#F13D73]/30' : 'bg-gradient-to-r from-[#252550] to-[#1a1a4f] text-gray-400 border border-[#3a3a70]'}`
          },
            currentStep > index + 1 ? React.createElement('span', { className: 'text-white text-xl font-bold' }, '✓') : index + 1
          ),
          index < totalSurveySteps - 1 && React.createElement('div', { className: 'flex-1 h-2 mx-4 relative' },
            React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-r from-[#252550] to-[#1a1a4f] rounded-full shadow-inner' }),
            React.createElement('div', {
              className: 'absolute inset-0 bg-gradient-to-r from-[#F13D73] via-[#d82e60] to-[#F13D73] rounded-full transition-all duration-700 ease-in-out shadow-lg',
              style: {
                width: currentStep > index + 1 ? '100%' : currentStep === index + 1 ? '50%' : '0%',
                opacity: currentStep > index + 1 ? 1 : currentStep === index + 1 ? 0.8 : 0.3
              }
            })
          )
        ))
      ),
      React.createElement('div', { className: 'w-full bg-gradient-to-r from-[#252550] to-[#1a1a4f] h-4 rounded-full overflow-hidden shadow-inner border border-[#3a3a70]' },
        React.createElement('div', {
          className: 'bg-gradient-to-r from-[#F13D73] via-[#d82e60] to-[#F13D73] h-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden',
          style: { width: `${progressPercent}%` }
        },
          React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse' })
        )
      ),
      React.createElement('div', { className: 'text-center text-sm text-gray-300 mt-4 font-semibold' },
        React.createElement('span', { className: 'text-[#F13D73] font-bold text-lg' }, `${Math.round(progressPercent)}%`),
        ' Complete'
      )
    ),
    React.createElement('form', { onSubmit: handleSubmit },
      React.createElement('div', {
        className: `transition-all duration-500 ease-in-out ${isAnimating ? animateDirection === 'next' ? 'opacity-0 transform translate-x-10 scale-95' : 'opacity-0 transform -translate-x-10 scale-95' : 'opacity-100 transform translate-x-0 scale-100'} ${shakeError ? 'animate-shake' : ''}`
      },
        // Pre-survey step
        currentStep === 0 && React.createElement('div', { className: 'space-y-8' },
          React.createElement('div', { className: 'mb-4 p-3 bg-gradient-to-r from-[#252550] to-[#1a1a4f] rounded-lg border-l-4 border-[#F13D73] shadow-lg' },
            React.createElement('h2', { className: 'text-lg font-bold text-white mb-1 flex items-center' },
              React.createElement('span', { className: 'bg-[#F13D73] text-white px-2 py-1 rounded-full text-xs font-bold mr-2' }, '👤'),
              'Before we start the survey'
            ),
            React.createElement('p', { className: 'text-gray-300 text-xs leading-relaxed' },
              'Let\'s get some context about your business to personalize the survey questions and provide you with more relevant insights.'
            )
          ),
          React.createElement('div', { className: 'bg-gradient-to-br from-[#1a1a4f] to-[#252550] p-4 rounded-lg border border-[#252550] shadow-lg' },
            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
              React.createElement('div', {},
                React.createElement('label', { htmlFor: 'companyName', className: 'block text-gray-300 mb-1 font-semibold text-xs' }, 'Company name:'),
                React.createElement('input', {
                  type: 'text',
                  id: 'companyName',
                  name: 'companyName',
                  value: formData.companyName,
                  onChange: handleInputChange,
                  className: 'w-full p-2 bg-gradient-to-r from-[#252550] to-[#1a1a4f] border border-[#3a3a70] rounded-md text-white focus:border-[#F13D73] focus:ring-1 focus:ring-[#F13D73]/20 transition-all duration-300 text-xs',
                  placeholder: 'Enter your company name',
                  required: true
                })
              ),
              React.createElement('div', {},
                React.createElement('label', { htmlFor: 'industry', className: 'block text-gray-300 mb-1 font-semibold text-xs' }, 'Industry:'),
                React.createElement('input', {
                  type: 'text',
                  id: 'industry',
                  name: 'industry',
                  value: formData.industry,
                  onChange: handleInputChange,
                  className: 'w-full p-2 bg-gradient-to-r from-[#252550] to-[#1a1a4f] border border-[#3a3a70] rounded-md text-white focus:border-[#F13D73] focus:ring-1 focus:ring-[#F13D73]/20 transition-all duration-300 text-xs',
                  placeholder: 'e.g., Technology, Manufacturing',
                  required: true
                })
              )
            ),
            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mt-4' },
              React.createElement('div', {},
                React.createElement('label', { htmlFor: 'employees', className: 'block text-gray-300 mb-1 font-semibold text-xs' }, 'Number of employees:'),
                React.createElement('select', {
                  id: 'employees',
                  name: 'employees',
                  value: formData.employees,
                  onChange: handleInputChange,
                  className: 'w-full p-2 bg-gradient-to-r from-[#252550] to-[#1a1a4f] border border-[#3a3a70] rounded-md text-white focus:border-[#F13D73] focus:ring-1 focus:ring-[#F13D73]/20 transition-all duration-300 text-xs appearance-none',
                  required: true
                },
                  React.createElement('option', { value: '' }, 'Select company size...'),
                  React.createElement('option', { value: '1-10' }, '1-10 employees'),
                  React.createElement('option', { value: '11-50' }, '11-50 employees'),
                  React.createElement('option', { value: '51-200' }, '51-200 employees'),
                  React.createElement('option', { value: '201-500' }, '201-500 employees'),
                  React.createElement('option', { value: '500+' }, '500+ employees')
                )
              ),
              React.createElement('div', {},
                React.createElement('label', { htmlFor: 'growthStage', className: 'block text-gray-300 mb-1 font-semibold text-xs' }, 'Stage of growth:'),
                React.createElement('select', {
                  id: 'growthStage',
                  name: 'growthStage',
                  value: formData.growthStage,
                  onChange: handleInputChange,
                  className: 'w-full p-2 bg-gradient-to-r from-[#252550] to-[#1a1a4f] border border-[#3a3a70] rounded-md text-white focus:border-[#F13D73] focus:ring-1 focus:ring-[#F13D73]/20 transition-all duration-300 text-xs appearance-none',
                  required: true
                },
                  React.createElement('option', { value: '' }, 'Select growth stage...'),
                  React.createElement('option', { value: 'early-stage' }, 'Early-stage startup'),
                  React.createElement('option', { value: 'growth-stage' }, 'Growth-stage company'),
                  React.createElement('option', { value: 'mature' }, 'Mature business')
                )
              )
            ),
            React.createElement('div', { className: 'mt-4 p-3 bg-gradient-to-r from-[#252550] to-[#1a1a4f] rounded-lg border border-[#3a3a70]' },
              React.createElement('label', { className: 'block text-gray-300 mb-2 font-semibold text-xs' }, 'Have you previously expanded internationally?'),
              React.createElement('div', { className: 'flex space-x-4' },
                React.createElement('label', { className: 'inline-flex items-center cursor-pointer group' },
                  React.createElement('input', {
                    type: 'radio',
                    name: 'previousExpansion',
                    value: 'Yes',
                    checked: formData.previousExpansion === 'Yes',
                    onChange: handleRadioChange,
                    className: 'mr-2 cursor-pointer w-3 h-3 text-[#F13D73] bg-[#252550] border-[#3a3a70] focus:ring-[#F13D73] focus:ring-1',
                    required: true
                  }),
                  React.createElement('span', { className: 'text-gray-300 group-hover:text-white transition-colors duration-200 text-xs font-medium' }, 'Yes')
                ),
                React.createElement('label', { className: 'inline-flex items-center cursor-pointer group' },
                  React.createElement('input', {
                    type: 'radio',
                    name: 'previousExpansion',
                    value: 'No',
                    checked: formData.previousExpansion === 'No',
                    onChange: handleRadioChange,
                    className: 'mr-2 cursor-pointer w-3 h-3 text-[#F13D73] bg-[#252550] border-[#3a3a70] focus:ring-[#F13D73] focus:ring-1'
                  }),
                  React.createElement('span', { className: 'text-gray-300 group-hover:text-white transition-colors duration-200 text-xs font-medium' }, 'No')
                )
              )
            ),
            formData.previousExpansion === 'Yes' && React.createElement('div', { className: 'mt-3 animate-fadeIn' },
              React.createElement('label', { htmlFor: 'previousCountries', className: 'block text-gray-300 mb-1 font-semibold text-xs' }, 'If yes, which countries?'),
              React.createElement('input', {
                type: 'text',
                id: 'previousCountries',
                name: 'previousCountries',
                value: formData.previousCountries,
                onChange: handleInputChange,
                className: 'w-full p-2 bg-gradient-to-r from-[#252550] to-[#1a1a4f] border border-[#3a3a70] rounded-md text-white focus:border-[#F13D73] focus:ring-1 focus:ring-[#F13D73]/20 transition-all duration-300 text-xs',
                placeholder: 'e.g., Germany, France, Netherlands'
              })
            )
          ),
          React.createElement('div', { className: 'flex items-center justify-center pt-3 text-center' },
            React.createElement('div', { className: 'bg-gradient-to-r from-[#252550] to-[#1a1a4f] px-3 py-2 rounded-md inline-flex items-center shadow-lg border border-[#3a3a70]' },
              React.createElement('span', { className: 'text-[#F13D73] mr-2 text-sm' }, '📋'),
              React.createElement('p', { className: 'text-gray-300 text-xs font-medium' }, 'Now let\'s start the actual survey about EU expansion')
            )
          )
        ),
        // Steps 1-7: box-in-box layout for every step
        currentStep > 0 && currentStep <= 7 && React.createElement('div', { className: 'space-y-8' },
          surveySteps[currentStep-1].map((q, idx) => React.createElement('div', {
            key: idx,
            className: 'mb-8 p-6 bg-gradient-to-br from-[#1a1a4f] to-[#252550] rounded-xl border border-[#252550] shadow-lg'
          },
            React.createElement('label', { className: 'block text-gray-300 mb-4 font-semibold text-lg' }, q.label),
            React.createElement('div', { className: 'flex flex-wrap gap-2' },
              q.options.map(option => React.createElement('label', {
                key: option,
                className: 'inline-flex items-center cursor-pointer group px-3 py-2 rounded-full border border-[#252550] bg-[#1a1a4f] hover:border-[#F13D73] hover:bg-[#252550] transition-all duration-200 text-xs font-medium mb-2'
              },
                React.createElement('input', {
                  type: q.type === 'checkbox' ? 'checkbox' : 'radio',
                  name: q.field,
                  value: option,
                  checked: q.type === 'checkbox' ? (formData[q.field] || []).includes(option) : formData[q.field] === option,
                  onChange: e => {
                    if (q.type === 'checkbox') {
                      // Enforce max selection if specified
                      if (q.max && e.target.checked && (formData[q.field] || []).length >= q.max) return;
                      handleCheckboxChange(e, q.field);
                    } else {
                      handleRadioChange(e);
                    }
                  },
                  className: 'mr-2 cursor-pointer w-4 h-4 text-[#F13D73] bg-[#252550] border-[#3a3a70] focus:ring-[#F13D73] focus:ring-1'
                }),
                React.createElement('span', { className: 'text-gray-300 group-hover:text-white transition-colors duration-200' }, option)
              ))
            )
          ))
        ),
        // Optional
        currentStep === 8 && React.createElement('div', { className: 'bg-gradient-to-br from-[#1a1a4f] to-[#252550] p-6 rounded-xl border border-[#252550] shadow-lg' },
          React.createElement('label', { className: 'block text-gray-300 mb-4 font-semibold text-base' }, 'How would you like to help shape the future of compliance?'),
          React.createElement('select', {
            id: 'helpShapeSolutions',
            name: 'helpShapeSolutions',
            value: formData.helpShapeSolutions,
            onChange: handleInputChange,
            className: 'w-full p-2 bg-gradient-to-r from-[#252550] to-[#1a1a4f] border border-[#3a3a70] rounded-md text-white focus:border-[#F13D73] focus:ring-1 focus:ring-[#F13D73]/20 transition-all duration-300 text-xs appearance-none',
            required: true
          },
            React.createElement('option', { value: '' }, 'Select how you want to help...'),
            React.createElement('option', { value: 'Participate in surveys' }, 'Participate in surveys'),
            React.createElement('option', { value: 'Provide feedback on prototypes' }, 'Provide feedback on prototypes'),
            React.createElement('option', { value: 'Join a community' }, 'Join a community'),
            React.createElement('option', { value: 'Other' }, 'Other')
          ),
          React.createElement('div', { className: 'mt-4' },
            React.createElement('label', { className: 'block text-gray-300 mb-4 font-semibold text-base' }, 'How can we reach you?'),
            React.createElement('input', {
              type: 'email',
              id: 'email',
              name: 'email',
              value: formData.email,
              onChange: handleInputChange,
              className: 'w-full p-2 bg-gradient-to-r from-[#252550] to-[#1a1a4f] border border-[#3a3a70] rounded-md text-white focus:border-[#F13D73] focus:ring-1 focus:ring-[#F13D73]/20 transition-all duration-300 text-xs',
              placeholder: 'Enter your email address'
            })
          )
        )
      ),
      // Navigation buttons
      React.createElement('div', { className: 'flex justify-between items-center mt-10 pt-8 border-t border-[#252550]' },
        currentStep > 0 ? React.createElement('button', {
          type: 'button',
          onClick: prevStep,
          className: 'group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#252550] to-[#1a1a4f] hover:from-[#303060] hover:to-[#252550] text-white rounded-xl transition-all duration-300 transform hover:-translate-x-2 shadow-lg hover:shadow-xl border border-[#3a3a70]'
        },
          React.createElement('span', { className: 'mr-3 text-2xl font-bold group-hover:-translate-x-1 transition-transform duration-300' }, '←'),
          React.createElement('span', { className: 'font-semibold text-lg' }, 'Previous')
        ) : React.createElement('button', {
          type: 'button',
          onClick: onClose,
          className: 'group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#252550] to-[#1a1a4f] hover:from-[#303060] hover:to-[#252550] text-white rounded-xl transition-all duration-300 transform hover:-translate-x-2 shadow-lg hover:shadow-xl border border-[#3a3a70]'
        },
          React.createElement('span', { className: 'mr-3 text-2xl font-bold' }, '✕'),
          React.createElement('span', { className: 'font-semibold text-lg' }, 'Cancel')
        ),
        React.createElement('div', { className: 'text-center text-sm text-gray-400 bg-[#252550] px-4 py-2 rounded-lg' },
          React.createElement('span', { className: 'font-semibold' }, `Step ${currentStep + 1} of ${totalSteps}`)
        ),
        currentStep === 0 ? React.createElement('button', {
          type: 'button',
          onClick: nextStep,
          className: 'group inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#F13D73] to-[#d82e60] hover:from-[#d82e60] hover:to-[#c01e4f] text-white rounded-xl transition-all duration-300 transform hover:translate-x-2 shadow-lg hover:shadow-xl relative overflow-hidden'
        },
          React.createElement('span', { className: 'relative z-10 font-semibold text-lg' },
            'Start Survey'
          ),
          React.createElement('span', { className: 'ml-3 text-2xl font-bold group-hover:translate-x-1 transition-transform duration-300 relative z-10' }, '→'),
          React.createElement('span', { className: 'absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300' })
        ) : currentStep < totalSteps - 1 ? React.createElement('button', {
          type: 'button',
          onClick: nextStep,
          className: 'group inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#F13D73] to-[#d82e60] hover:from-[#d82e60] hover:to-[#c01e4f] text-white rounded-xl transition-all duration-300 transform hover:translate-x-2 shadow-lg hover:shadow-xl relative overflow-hidden'
        },
          React.createElement('span', { className: 'relative z-10 font-semibold text-lg' },
            'Next'
          ),
          React.createElement('span', { className: 'ml-3 text-2xl font-bold group-hover:translate-x-1 transition-transform duration-300 relative z-10' }, '→'),
          React.createElement('span', { className: 'absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300' })
        ) : React.createElement('button', {
          type: 'submit',
          disabled: isSubmitting,
          className: `group inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#F13D73] to-[#d82e60] hover:from-[#d82e60] hover:to-[#c01e4f] text-white rounded-xl transition-all duration-300 transform hover:translate-x-2 shadow-lg hover:shadow-xl relative overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`
        },
          React.createElement('span', { className: 'relative z-10 font-semibold text-lg' },
            isSubmitting ? React.createElement('div', { className: 'flex items-center' },
              React.createElement('span', { className: 'animate-spin h-6 w-6 border-2 border-white border-opacity-20 border-t-white rounded-full mr-3' }),
              'Submitting...'
            ) : React.createElement(React.Fragment, {},
              'Submit Survey'
            )
          ),
          !isSubmitting && React.createElement('span', { className: 'ml-3 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 relative z-10' }, '✓'),
          React.createElement('span', { className: 'absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300' })
        )
      )
    )
  );
};

// Hero Component
const Hero = () => {
  const [showSurvey, setShowSurvey] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const features = ['Exclusive access to the complete survey findings', 'Practical strategies to navigate compliance hurdles without expensive legal consultations', 'Our commitment that your input will directly influence the development of AI-driven solutions that eliminate traditional barriers'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStartSurvey = () => {
    setShowSurvey(true);
  };

  const handleCloseSurvey = () => {
    setShowSurvey(false);
  };

  return React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-[#0A0A29] via-[#131340] to-[#0A0A29] flex items-center justify-center p-4 relative overflow-hidden' },
    // Background decorative elements
    React.createElement('div', { className: 'absolute inset-0 overflow-hidden' },
      React.createElement('div', { className: 'absolute -top-40 -right-40 w-80 h-80 bg-[#F13D73] rounded-full opacity-10 blur-3xl animate-pulse' }),
      React.createElement('div', { className: 'absolute -bottom-40 -left-40 w-96 h-96 bg-[#4964F5] rounded-full opacity-10 blur-3xl animate-pulse', style: { animationDuration: '4s' } }),
      React.createElement('div', { className: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#F13D73] to-[#4964F5] rounded-full opacity-5 blur-3xl animate-pulse', style: { animationDuration: '6s' } })
    ),
    // Left Vision Box
    React.createElement('div', { className: 'hidden lg:block w-96 mr-12' },
      React.createElement('div', { className: 'bg-gradient-to-br from-[#131340] via-[#1a1a4f] to-[#131340] p-8 rounded-2xl shadow-2xl border border-[#252550] h-fit backdrop-blur-sm relative overflow-hidden' },
        React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-transparent via-[#F13D73]/5 to-transparent' }),
        React.createElement('div', { className: 'relative z-10' },
          React.createElement('div', { className: 'mb-8' },
            React.createElement('div', { className: 'w-16 h-16 bg-gradient-to-r from-[#F13D73] to-[#d82e60] rounded-2xl flex items-center justify-center mb-6 shadow-lg' },
              React.createElement('span', { className: 'text-white text-3xl font-bold' }, '🌍')
            ),
            React.createElement('h3', { className: 'text-lg font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent' }, 'Vision'),
            React.createElement('p', { className: 'text-gray-300 leading-relaxed text-xs' },
              'To create a world where every business—regardless of size, location, or resources—can scale and operate globally without borders, empowered by intelligent automation and free from administrative and legal constraints.'
            )
          )
        )
      )
    ),
    // Main Content
    React.createElement('div', { className: 'max-w-3xl w-full relative z-10' },
      React.createElement('div', {
        className: `flex justify-center mb-10 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-8'}`
      },
        React.createElement('img', {
          src: 'hoclogo-DmXZ-0I3.png',
          alt: 'House of Companies Logo',
          className: 'h-24 md:h-28 w-auto drop-shadow-lg'
        })
      ),
      React.createElement('div', { className: 'relative' },
        React.createElement('div', {
          className: `transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
        },
          showSurvey ? React.createElement(SurveyForm, { onClose: handleCloseSurvey }) : React.createElement('div', { className: 'relative bg-gradient-to-br from-[#131340] via-[#1a1a4f] to-[#131340] p-8 md:p-12 rounded-2xl shadow-2xl border border-[#252550] overflow-hidden backdrop-blur-sm' },
            React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-transparent via-[#252550]/20 to-transparent' }),
            React.createElement('div', { className: 'mb-10 text-center relative z-10' },
              React.createElement('span', {
                className: `inline-block px-3 py-1 bg-gradient-to-r from-[#252550] to-[#1a1a4f] text-[#F13D73] rounded-full text-xs font-bold mb-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'} shadow-lg border border-[#3a3a70]`
              }, 'Survey 2025'),
              React.createElement('h1', {
                className: `text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'} bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent`
              }, '✨ Breaking Barriers: The Future of Borderless Business'),
              React.createElement('p', {
                className: `text-base md:text-lg text-gray-300 font-medium transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'} leading-relaxed`
              }, 'Help shape a world where entrepreneurs can scale globally without drowning in paperwork')
            ),
            React.createElement('div', {
              className: `mb-10 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`
            },
              React.createElement('p', { className: 'text-gray-300 text-sm leading-relaxed mb-4' },
                'By sharing your experiences, you\'re not just participating in a survey—you\'re joining a movement to democratize international business expansion.'
              ),
              React.createElement('div', { className: 'space-y-2 mb-6' },
                features.map((feature, index) => React.createElement('div', {
                  key: index,
                  className: `flex items-start transition-all duration-500 p-4 rounded-xl ${index === activeFeature ? 'scale-105 text-white bg-gradient-to-r from-[#252550]/50 to-[#1a1a4f]/50 shadow-lg' : 'scale-100 text-gray-300'}`
                },
                  React.createElement('div', {
                    className: `flex-shrink-0 h-8 w-8 rounded-full ${index === activeFeature ? 'bg-gradient-to-r from-[#F13D73] to-[#d82e60]' : 'bg-[#252550]'} flex items-center justify-center mr-4 transition-all duration-300 shadow-lg`
                  },
                    React.createElement('span', {
                      className: `text-lg font-bold ${index === activeFeature ? 'text-white' : 'text-[#F13D73]'}`,
                    }, '✓')
                  ),
                  React.createElement('p', { className: 'text-xs leading-relaxed' }, feature)
                ))
              )
            ),
            React.createElement('div', {
              className: `text-center transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`
            },
              React.createElement('p', { className: 'text-gray-300 font-semibold text-xs mb-3' }, '👉 Take 5 minutes to tell us about your compliance and bureaucracy challenges.'),
              React.createElement('button', {
                className: 'group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#F13D73] to-[#d82e60] hover:from-[#d82e60] hover:to-[#c01e4f] text-white font-bold rounded-lg transition-all duration-300 text-sm relative overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105',
                onClick: handleStartSurvey
              },
                                  React.createElement('span', { className: 'relative z-10 group-hover:translate-x-1 transition-transform duration-300' },
                    'Start Survey',
                    React.createElement('span', { className: 'ml-2 text-lg font-bold group-hover:translate-x-1 transition-transform duration-300' }, '→')
                  ),
                React.createElement('span', { className: 'absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300' })
              )
            )
          )
        )
      )
    ),
    // Right Mission Box
    React.createElement('div', { className: 'hidden lg:block w-96 ml-12' },
      React.createElement('div', { className: 'bg-gradient-to-br from-[#131340] via-[#1a1a4f] to-[#131340] p-8 rounded-2xl shadow-2xl border border-[#252550] h-fit backdrop-blur-sm relative overflow-hidden' },
        React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-transparent via-[#4964F5]/5 to-transparent' }),
        React.createElement('div', { className: 'relative z-10' },
          React.createElement('div', { className: 'mb-8' },
            React.createElement('div', { className: 'w-16 h-16 bg-gradient-to-r from-[#4964F5] to-[#3a4fd8] rounded-2xl flex items-center justify-center mb-6 shadow-lg' },
              React.createElement('span', { className: 'text-white text-3xl font-bold' }, '🚀')
            ),
            React.createElement('h3', { className: 'text-lg font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent' }, 'Mission'),
            React.createElement('p', { className: 'text-gray-300 leading-relaxed text-xs' },
              'To democratize global business expansion by harnessing cutting-edge AI technology that dismantles traditional barriers of cost, complexity, and compliance—enabling entrepreneurs and enterprises to launch, manage, and grow internationally with unprecedented ease and efficiency.'
            )
          )
        )
      )
    )
  );
};

export { SurveyForm, Hero };

// Survey step definitions based on user markdown
const surveySteps = [
  // Step 1: Business Bureaucracy
  [
    {
      type: 'checkbox',
      label: 'What aspects of compliance most discourage market expansion? (Select up to 3)',
      field: 'complianceDiscouragements',
      options: [
        'Complex tax regulations',
        'Multiple filing requirements',
        'Language barriers',
        'Cost of local experts',
        'Time investment',
        'Fear of penalties',
        'Unclear information',
        'Other',
      ],
      max: 3
    },
    {
      type: 'radio',
      label: 'How do you feel about relying on consultants for compliance?',
      field: 'consultantFeelings',
      options: [
        'Necessary cost to avoid the hassle',
        'Frustrating but unavoidable',
        'Excessive - system should be simpler',
        'Helpful but need better tools',
        'Other',
      ]
    },
    {
      type: 'radio',
      label: 'How would you prefer to handle compliance?',
      field: 'compliancePreference',
      options: [
        'Self-managed through simple platforms',
        'AI-driven tools with minimal oversight',
        'Automated systems with on-demand help',
        'Fully outsourced to experts',
        'Other',
      ]
    }
  ],
  // Step 2: VAT & Tax Management
  [
    {
      type: 'radio',
      label: `What's your experience with cross-border tax compliance?`,
      field: 'crossBorderTaxExperience',
      options: [
        'Successfully managed myself',
        'Tried but found too difficult',
        'Always outsourced',
        'Avoided expansion due to this',
        'Not applicable yet',
      ]
    },
    {
      type: 'checkbox',
      label: 'Why do entrepreneurs outsource tax filings? (Select all that apply)',
      field: 'outsourcingReasons',
      options: [
        'Lack of time',
        'Fear of mistakes',
        'Intentionally complex systems',
        'Language barriers',
        'More cost-effective',
        'Lack of user-friendly tools',
        'Other',
      ]
    },
    {
      type: 'radio',
      label: 'What would help you manage tax compliance yourself?',
      field: 'taxComplianceHelp',
      options: [
        'Simple step-by-step guidance',
        'Automated calculations',
        'Real-time expert support',
        'Compliance guarantee',
        'More simplicity in Accounting Software',
        'Prefer to outsource completely',
        'Other',
      ]
    }
  ],
  // Step 3: Market Entry Requirements
  [
    {
      type: 'checkbox',
      label: 'What do you consider essential for new market entry? (Select all that apply)',
      field: 'essentialMarketEntry',
      options: [
        'Virtual office address',
        'Local phone number',
        'Mail handling service',
        'Local domain name',
        'Google My Business listing',
        'Local bank account',
        'Local representative',
        'Other',
      ]
    },
    {
      type: 'radio',
      label: 'Would you expand if you could establish virtually without travel?',
      field: 'virtualExpansion',
      options: [
        'Yes, definitely',
        'Yes, for certain activities',
        'Maybe, depends on specifics',
        'No, physical presence essential',
        'Not sure',
      ]
    },
    {
      type: 'checkbox',
      label: 'What automated services would help your expansion? (Select up to 3)',
      field: 'automatedServices',
      options: [
        'Automated Google Business setup',
        'AI-powered local PR services',
        'Digital mail management',
        'Virtual receptionist in local language',
        'Document translation',
        'Local market research',
        'Other',
      ],
      max: 3
    }
  ],
  // Step 4: Company Formation vs Virtual Presence
  [
    {
      type: 'radio',
      label: 'Do you believe forming a local company is necessary for market entry?',
      field: 'localCompanyNecessity',
      options: [
        'Yes, always necessary',
        'Usually necessary',
        'Sometimes necessary',
        'Rarely necessary',
        'Should never be necessary',
      ]
    },
    {
      type: 'radio',
      label: 'If you could operate in a new market without forming a local company, would this change your expansion plans?',
      field: 'expansionWithoutLocalCompany',
      options: [
        'Yes, would expand to more markets',
        'Yes, would expand sooner',
        'Maybe, depends on other factors',
        'No, wouldn\'t change plans',
        'Not sure',
      ]
    },
    {
      type: 'checkbox',
      label: 'What benefits would you expect from not having to form a local company? (Select up to 3)',
      field: 'benefitsNoLocalCompany',
      options: [
        'Lower setup costs',
        'Faster market entry',
        'Reduced ongoing compliance',
        'Simplified exit if needed',
        'Less legal complexity',
        'Easier to test market viability',
        'Other',
      ],
      max: 3
    },
    {
      type: 'checkbox',
      label: 'What concerns would you have about operating without a local company? (Select all that apply)',
      field: 'concernsNoLocalCompany',
      options: [
        'Legal protection concerns',
        'Customer perception issues',
        'Limited access to local services',
        'Difficulty with local partnerships',
        'Credibility with suppliers',
        'No major concerns',
        'Other',
      ]
    }
  ],
  // Step 5: Financial Reporting Frustrations
  [
    {
      type: 'checkbox',
      label: 'What are your biggest financial reporting pain points? (Select up to 3)',
      field: 'financialReportingPainPoints',
      options: [
        'Disorganized document collection',
        'Too much back-and-forth communication',
        'Complex reporting software',
        'Delayed reports',
        'Irrelevant metrics',
        'Insights too late to be useful',
        'Generic templates',
        'High costs',
        'Other',
      ],
      max: 3
    },
    {
      type: 'radio',
      label: 'How quickly do you need financial insights?',
      field: 'financialInsightsSpeed',
      options: [
        'Real-time/daily',
        'Weekly',
        'Monthly',
        'Quarterly',
        'Annually',
        'Other',
      ]
    },
    {
      type: 'radio',
      label: 'Which financial reporting model do you prefer?',
      field: 'financialReportingModel',
      options: [
        'Traditional accounting software',
        'Self-managed AI-powered system',
        'Self-managed AI-powered system for data collection and presentation, but with expert help to process',
        'Fully outsourced',
        'Other',
      ]
    }
  ],
  // Step 6: The Future of Compliance
  [
    {
      type: 'checkbox',
      label: 'Which AI solutions would most benefit your business? (Select up to 3)',
      field: 'aiSolutions',
      options: [
        'Auto-process documents into financial report',
        'Generate legal documents',
        'Real-time compliance requirement calendar',
        'AI Chat with your reports and legal documents',
        'Prepare my tax return',
        'AI Powered Virtual office (AI agent to handle calls, letters, etc. autonomously)',
        'Other',
      ],
      max: 3
    },
    {
      type: 'radio',
      label: 'What would make you trust an AI compliance solution over a Traditional Accountant or lawyer?',
      field: 'aiTrustFactors',
      options: [
        'Human expert verification',
        'Proven track record',
        'Money-back guarantee',
        'Transparent calculations',
        'Official certification',
        'Other',
      ]
    },
    {
      type: 'checkbox',
      label: 'Why would you use an AI compliance solution to manage your company?',
      field: 'aiUsageReasons',
      options: [
        'To cut costs',
        'To get realtime results',
        'To centralize all requirements',
        'To enter multiple countries at once',
        'To expect a higher quality and more variable data',
        'As a matter of principle; Avoiding consultants where possible',
        'Limited business activities/market research purposes',
        'Other',
      ]
    }
  ]
];

