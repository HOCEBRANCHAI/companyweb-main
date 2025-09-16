import React from 'react';
import { FileTextIcon, CheckIcon, AlertCircleIcon } from 'lucide-react';
const templateCategories = [{
  name: 'Employment Documents',
  templates: ['Employment Contract', 'Employee Handbook', 'Confidentiality Agreement', 'Non-compete Agreement']
}, {
  name: 'Business Operations',
  templates: ['Terms of Service', 'Privacy Policy', 'Supplier Agreement', 'Distribution Agreement']
}, {
  name: 'Corporate Documents',
  templates: ['Shareholder Agreement', 'Board Resolutions', 'Corporate Governance', 'Investment Agreement']
}];
export function TemplateExplorer() {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {templateCategories.map(category => <div key={category.name} className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6">
          <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
          <ul className="space-y-3">
            {category.templates.map(template => <li key={template} className="flex items-center space-x-3">
                <FileTextIcon className="h-5 w-5 text-[#EA3A70]" />
                <span className="text-gray-300">{template}</span>
              </li>)}
          </ul>
        </div>)}
    </div>;
}