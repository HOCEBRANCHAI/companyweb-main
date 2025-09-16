import React, { useState } from 'react';
import { FileTextIcon, UploadIcon, FolderIcon, EyeIcon, TrashIcon, ReceiptIcon, LineChartIcon, ScaleIcon, BuildingIcon, DollarSignIcon, TrendingUpIcon, FileSignatureIcon, FilesIcon, BoxIcon } from 'lucide-react';
interface Document {
  id: string;
  name: string;
  category: string;
  type: string;
  size: string;
  uploadDate: string;
  year: string;
}
export function FinancialDocuments() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Documents',
    icon: FilesIcon
  }, {
    id: 'invoices',
    name: 'Invoices',
    icon: ReceiptIcon
  }, {
    id: 'statements',
    name: 'Financial Statements',
    icon: LineChartIcon
  }, {
    id: 'compliance',
    name: 'Tax & Compliance',
    icon: ScaleIcon
  }, {
    id: 'banking',
    name: 'Banking & Investment',
    icon: BoxIcon
  }, {
    id: 'accounts',
    name: 'Accounts Payable & Receivable',
    icon: DollarSignIcon
  }, {
    id: 'valuation',
    name: 'Company Valuation & Shareholding',
    icon: TrendingUpIcon
  }, {
    id: 'loans',
    name: 'Debt & Loan Documentation',
    icon: FileSignatureIcon
  }, {
    id: 'other',
    name: 'Other Documents',
    icon: FileTextIcon
  }];
  const documents: Document[] = [{
    id: '1',
    name: 'Shareholders Register.pdf',
    category: 'valuation',
    type: 'PDF',
    size: '5.35 MB',
    uploadDate: '2024-02-15',
    year: '2024'
  }, {
    id: '2',
    name: 'Annual Financial Statement.pdf',
    category: 'statements',
    type: 'PDF',
    size: '2.8 MB',
    uploadDate: '2024-02-10',
    year: '2024'
  }
  // Add more sample documents as needed
  ];
  const years = ['2023', '2024', '2025'];
  const filteredDocuments = documents.filter(doc => doc.year === selectedYear && (selectedCategory === 'all' || doc.category === selectedCategory));
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Handle file upload logic here
      console.log('Files to upload:', files);
    }
  };
  return <div className="space-y-6">
      {/* Year Selection */}
      <div className="flex justify-center space-x-2">
        {years.map(year => <button key={year} onClick={() => setSelectedYear(year)} className={`px-6 py-3 text-sm font-medium rounded-full transition-colors
              ${selectedYear === year ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {year}
          </button>)}
      </div>
      {/* Upload Button */}
      <div className="flex justify-end">
        <label className="cursor-pointer">
          <input type="file" multiple className="hidden" onChange={handleFileUpload} />
          <div className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            <UploadIcon className="h-4 w-4 mr-2" />
            Upload Documents
          </div>
        </label>
      </div>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(category => {
        const Icon = category.icon;
        return <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center p-4 rounded-lg border transition-colors
                ${selectedCategory === category.id ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-200 hover:bg-gray-50'}`}>
              <Icon className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>;
      })}
      </div>
      {/* Documents List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Upload Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocuments.map(doc => <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-sm font-medium text-gray-900">
                        {doc.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(doc.uploadDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {doc.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-3">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}