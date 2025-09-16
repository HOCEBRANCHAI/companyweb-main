import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalculatorIcon, BuildingIcon, PercentIcon, CoinsIcon, GlobeIcon, FileTextIcon, ShieldIcon, BookOpenIcon, BarChart2Icon, ArrowRightIcon, ClockIcon, CheckCircleIcon, LightbulbIcon, FileIcon, DollarSignIcon } from 'lucide-react';
export function ToolsMegaMenu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Categories',
    icon: null
  }, {
    id: 'calculators',
    name: 'Calculators',
    icon: CalculatorIcon
  }, {
    id: 'formation',
    name: 'Company Formation',
    icon: BuildingIcon
  }, {
    id: 'tax',
    name: 'Tax Tools',
    icon: PercentIcon
  }, {
    id: 'finance',
    name: 'Financial Tools',
    icon: CoinsIcon
  }, {
    id: 'legal',
    name: 'Legal Resources',
    icon: FileTextIcon
  }, {
    id: 'tutorials',
    name: 'Tutorials',
    icon: BookOpenIcon
  }];
  return <section className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E1B3F] border border-indigo-500/30 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`
                  flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${activeCategory === category.id ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/30 border border-indigo-500/30 text-white hover:bg-indigo-800/50'}
                `}>
                {category.icon && <category.icon className="h-4 w-4 mr-2" />}
                {category.name}
              </button>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Calculators */}
            <div className="space-y-4">
              <div className="flex items-center mb-2">
                <CalculatorIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <h3 className="text-lg font-bold text-white">
                  Business Calculators
                </h3>
              </div>
              <Link to="/tools/tax-calculator" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <PercentIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Dutch Tax Calculator
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Estimate your corporate tax liability
                  </p>
                </div>
              </Link>
              <Link to="/tools/vat-calculator" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <PercentIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    VAT Calculator
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Calculate VAT amounts for invoices
                  </p>
                </div>
              </Link>
              <Link to="/tools/salary-calculator" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <DollarSignIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Salary Calculator
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Calculate net salary and employer costs
                  </p>
                </div>
              </Link>
            </div>
            {/* Interactive Tools */}
            <div className="space-y-4">
              <div className="flex items-center mb-2">
                <LightbulbIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <h3 className="text-lg font-bold text-white">
                  Interactive Tools
                </h3>
              </div>
              <Link to="/tools/entity-selector" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <BuildingIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Entity Type Selector
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Find the right Dutch business structure
                  </p>
                </div>
              </Link>
              <Link to="/tools/compliance-checker" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <CheckCircleIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Compliance Checker
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Verify your business compliance status
                  </p>
                </div>
              </Link>
              <Link to="/tools/business-name-checker" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <FileTextIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Business Name Checker
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Check availability of company names
                  </p>
                </div>
              </Link>
            </div>
            {/* Document Generators */}
            <div className="space-y-4">
              <div className="flex items-center mb-2">
                <FileIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <h3 className="text-lg font-bold text-white">
                  Document Generators
                </h3>
              </div>
              <Link to="/tools/invoice-generator" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <FileTextIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Invoice Generator
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Create compliant Dutch invoices
                  </p>
                </div>
              </Link>
              <Link to="/tools/contract-generator" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <ShieldIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Contract Generator
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Generate basic legal documents
                  </p>
                </div>
              </Link>
              <Link to="/tools/privacy-policy-generator" className="flex items-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all group">
                <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                  <ShieldIcon className="h-5 w-5 text-indigo-300 group-hover:text-[#EA3A70] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    Privacy Policy Generator
                  </h4>
                  <p className="text-indigo-300 text-sm">
                    Create GDPR-compliant privacy policies
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-indigo-500/30 flex justify-between items-center">
            <p className="text-indigo-300">
              These free tools are simplified versions of the premium features
              available in our eBranch package
            </p>
            <Link to="/ebranch" className="inline-flex items-center px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors">
              Explore eBranch
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>;
}