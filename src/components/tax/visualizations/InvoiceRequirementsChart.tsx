import React, { useState } from 'react';
import { CheckCircleIcon, AlertCircleIcon, InfoIcon } from 'lucide-react';
export function InvoiceRequirementsChart() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const requirementCategories = [{
    id: 'must-have',
    name: 'Must-Have',
    color: 'bg-red-100 text-red-800 border-red-200'
  }, {
    id: 'country-specific',
    name: 'Country-Specific',
    color: 'bg-orange-100 text-orange-800 border-orange-200'
  }, {
    id: 'best-practice',
    name: 'Best Practice',
    color: 'bg-green-100 text-green-800 border-green-200'
  }];
  const invoiceRequirements = [{
    id: 1,
    name: 'VAT ID (Supplier)',
    description: 'Supplier VAT identification number',
    category: 'must-have',
    icon: '🆔'
  }, {
    id: 2,
    name: 'VAT ID (Customer)',
    description: 'Customer VAT identification number for B2B transactions',
    category: 'must-have',
    icon: '🆔'
  }, {
    id: 3,
    name: 'Invoice Date',
    description: 'Date when the invoice was issued',
    category: 'must-have',
    icon: '📅'
  }, {
    id: 4,
    name: 'Invoice Number',
    description: 'Sequential number uniquely identifying the invoice',
    category: 'must-have',
    icon: '🔢'
  }, {
    id: 5,
    name: 'Goods/Services Description',
    description: 'Clear description of goods or services provided',
    category: 'must-have',
    icon: '📝'
  }, {
    id: 6,
    name: 'Quantity & Unit Price',
    description: 'Quantity of goods/extent of services and price per unit',
    category: 'must-have',
    icon: '💰'
  }, {
    id: 7,
    name: 'VAT Rate & Amount',
    description: 'Applicable VAT rate and calculated amount',
    category: 'must-have',
    icon: '💲'
  }, {
    id: 8,
    name: 'Intra-Community Supply Notation',
    description: 'Required notation for intra-EU supplies',
    category: 'country-specific',
    icon: '🇪🇺'
  }, {
    id: 9,
    name: 'Reverse Charge Notation',
    description: 'Notation when VAT is due by the recipient',
    category: 'country-specific',
    icon: '🔄'
  }, {
    id: 10,
    name: 'Currency & Exchange Rate',
    description: 'For non-local currency invoices, exchange rate must be shown',
    category: 'country-specific',
    icon: '💱'
  }, {
    id: 11,
    name: 'Payment Instructions',
    description: 'Bank details and payment terms',
    category: 'best-practice',
    icon: '🏦'
  }, {
    id: 12,
    name: 'Company Registration Details',
    description: 'Registration numbers and legal entity information',
    category: 'best-practice',
    icon: '📋'
  }];
  const filteredRequirements = selectedCategory ? invoiceRequirements.filter(req => req.category === selectedCategory) : invoiceRequirements;
  const getCategoryColor = (category: string) => {
    const found = requirementCategories.find(cat => cat.id === category);
    return found ? found.color : 'bg-gray-100 text-gray-800 border-gray-200';
  };
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Cross-Border Invoice Requirements
      </h3>
      <p className="text-gray-600 mb-6">
        Ensure your invoices comply with EU and Dutch requirements for
        cross-border transactions. The chart below shows key elements required
        for compliant invoicing.
      </p>
      <div className="flex items-center justify-center mb-6">
        <div className="flex space-x-4">
          <button onClick={() => setSelectedCategory(null)} className={`px-3 py-1.5 rounded-full text-sm font-medium ${!selectedCategory ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            All Requirements
          </button>
          {requirementCategories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)} className={`px-3 py-1.5 rounded-full text-sm font-medium ${category.id === selectedCategory ? category.color + ' border' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {category.name}
            </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRequirements.map(requirement => <div key={requirement.id} className={`border rounded-lg p-4 ${getCategoryColor(requirement.category)}`}>
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{requirement.icon}</span>
              <h4 className="font-medium">{requirement.name}</h4>
            </div>
            <p className="text-sm">{requirement.description}</p>
            <div className="mt-3 flex items-center">
              {requirement.category === 'must-have' && <div className="flex items-center text-xs font-medium">
                  <AlertCircleIcon className="h-3.5 w-3.5 mr-1" />
                  Required for all invoices
                </div>}
              {requirement.category === 'country-specific' && <div className="flex items-center text-xs font-medium">
                  <InfoIcon className="h-3.5 w-3.5 mr-1" />
                  Varies by country
                </div>}
              {requirement.category === 'best-practice' && <div className="flex items-center text-xs font-medium">
                  <CheckCircleIcon className="h-3.5 w-3.5 mr-1" />
                  Recommended
                </div>}
            </div>
          </div>)}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex">
            <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-blue-800">Pro Tip</h4>
              <p className="text-sm text-blue-700 mt-1">
                Consider using specialized invoicing software that automatically
                includes all required elements based on the transaction type and
                countries involved. This can significantly reduce compliance
                risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}