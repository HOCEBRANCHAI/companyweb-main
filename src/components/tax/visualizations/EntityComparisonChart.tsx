import React, { useState } from 'react';
import { ShieldIcon, FileTextIcon, CoinsIcon, BuildingIcon, ArrowUpRightIcon, ArrowDownRightIcon, UsersIcon, ScaleIcon } from 'lucide-react';
export function EntityComparisonChart() {
  const [activeTab, setActiveTab] = useState('overview');
  const comparisonCategories = [{
    id: 'overview',
    name: 'Overview',
    icon: <BuildingIcon className="h-5 w-5" />
  }, {
    id: 'liability',
    name: 'Liability',
    icon: <ShieldIcon className="h-5 w-5" />
  }, {
    id: 'tax',
    name: 'Tax Treatment',
    icon: <CoinsIcon className="h-5 w-5" />
  }, {
    id: 'compliance',
    name: 'Compliance',
    icon: <FileTextIcon className="h-5 w-5" />
  }, {
    id: 'perception',
    name: 'Market Perception',
    icon: <UsersIcon className="h-5 w-5" />
  }];
  const comparisonData = {
    overview: {
      bv: {
        title: 'Dutch BV (Private Limited)',
        points: ['Separate legal entity', 'Minimum share capital of €0.01', 'One or more shareholders', 'One or more directors', 'Incorporation through notarial deed'],
        icon: <BuildingIcon className="h-10 w-10 text-blue-500" />,
        recommendation: 'Ideal for established businesses seeking a permanent presence with full legal separation'
      },
      branch: {
        title: 'Dutch Branch Office',
        points: ['Extension of foreign company', 'No separate legal personality', 'No minimum capital requirement', 'Requires a representative', 'Registration with Dutch Chamber of Commerce'],
        icon: <BuildingIcon className="h-10 w-10 text-green-500" />,
        recommendation: 'Suitable for initial market entry or temporary operations'
      }
    },
    liability: {
      bv: {
        title: 'Limited Liability',
        points: ['Shareholders liability limited to capital contribution', 'Company assets separate from shareholder assets', 'Directors may be liable for mismanagement', 'Stronger protection against business risks', 'Can be sued independently from parent company'],
        icon: <ShieldIcon className="h-10 w-10 text-blue-500" />,
        recommendation: 'Choose BV when liability protection is a primary concern'
      },
      branch: {
        title: 'Extended Liability',
        points: ['Foreign company fully liable for branch obligations', 'No separation of assets between branch and parent', 'Claims against branch can extend to parent company', 'Lower protection against business risks', 'Legal actions can affect parent company directly'],
        icon: <ShieldIcon className="h-10 w-10 text-green-500" />,
        recommendation: 'Only suitable when parent company is comfortable with extended liability'
      }
    },
    tax: {
      bv: {
        title: 'Separate Tax Entity',
        points: ['Subject to Dutch corporate income tax (15-25.8%)', 'Dividend withholding tax on distributions (15%)', 'Access to Dutch tax treaty network', 'Eligible for participation exemption', 'Potential for tax-efficient structures'],
        icon: <CoinsIcon className="h-10 w-10 text-blue-500" />,
        recommendation: 'Beneficial for complex operations with profit retention plans'
      },
      branch: {
        title: 'Transparent Tax Treatment',
        points: ['Taxed only on Dutch-source income', 'No dividend withholding tax on profit transfers', 'Limited access to tax treaties', 'Tax losses may offset parent company profits', 'Simpler tax compliance overall'],
        icon: <CoinsIcon className="h-10 w-10 text-green-500" />,
        recommendation: 'More tax-efficient for operations expecting initial losses'
      }
    },
    compliance: {
      bv: {
        title: 'Comprehensive Compliance',
        points: ['Annual financial statements filing', 'Corporate income tax returns', 'VAT returns (if registered)', 'Annual shareholders meeting', 'UBO registration requirements'],
        icon: <FileTextIcon className="h-10 w-10 text-blue-500" />,
        recommendation: 'Requires more administrative resources but provides more benefits'
      },
      branch: {
        title: 'Moderate Compliance',
        points: ['Simplified financial reporting', 'Corporate income tax returns', 'VAT returns (if registered)', 'No separate shareholders meetings', 'Less extensive UBO requirements'],
        icon: <FileTextIcon className="h-10 w-10 text-green-500" />,
        recommendation: 'Lower administrative burden makes it suitable for smaller operations'
      }
    },
    perception: {
      bv: {
        title: 'Strong Market Presence',
        points: ['Perceived as committed to Dutch market', 'Higher credibility with local partners', 'Easier to open bank accounts', 'Better reception from government entities', 'More attractive to local employees'],
        icon: <UsersIcon className="h-10 w-10 text-blue-500" />,
        recommendation: 'Choose BV when local reputation and credibility are important'
      },
      branch: {
        title: 'Limited Market Presence',
        points: ['May be seen as temporary or limited commitment', 'Potentially lower credibility with partners', 'More challenging banking relationships', 'Adequate for service providers', 'May face hiring challenges for senior positions'],
        icon: <UsersIcon className="h-10 w-10 text-green-500" />,
        recommendation: 'Suitable when market perception is less critical to operations'
      }
    }
  };
  const activeData = comparisonData[activeTab as keyof typeof comparisonData];
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Legal Entities vs. Branches Comparison
      </h3>
      <p className="text-gray-600 mb-6">
        Compare the key differences between establishing a Dutch BV (private
        limited company) and a branch office to determine the best structure for
        your business needs.
      </p>
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {comparisonCategories.map(category => <button key={category.id} onClick={() => setActiveTab(category.id)} className={`flex items-center px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === category.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BV Column */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-4 flex items-center">
            {activeData.bv.icon}
            <h4 className="text-lg font-medium text-blue-800 ml-3">
              {activeData.bv.title}
            </h4>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {activeData.bv.points.map((point, index) => <li key={index} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>)}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-start">
                <ArrowUpRightIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  {activeData.bv.recommendation}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Branch Column */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-green-50 p-4 flex items-center">
            {activeData.branch.icon}
            <h4 className="text-lg font-medium text-green-800 ml-3">
              {activeData.branch.title}
            </h4>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {activeData.branch.points.map((point, index) => <li key={index} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>)}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-start">
                <ArrowDownRightIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                  {activeData.branch.recommendation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4 flex items-center">
          <ScaleIcon className="h-6 w-6 text-gray-500 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Final Recommendation</h4>
            <p className="text-sm text-gray-600 mt-1">
              For most businesses seeking a long-term presence in the
              Netherlands with significant local operations, a Dutch BV provides
              the optimal balance of liability protection, tax benefits, and
              market credibility. For smaller operations or market testing
              phases, a branch office offers a simpler, more cost-effective
              solution with easier exit options.
            </p>
          </div>
        </div>
      </div>
    </div>;
}