import React, { useState, useRef } from 'react';
import { FileTextIcon, DownloadIcon, BarChart2Icon, TrendingUpIcon, BookIcon, FolderIcon, EyeIcon, MessageSquareIcon, SendIcon, XIcon, ChevronRightIcon, BrainCircuitIcon } from 'lucide-react';
type DocumentType = 'all' | 'balance-sheet' | 'trial-balance' | 'profit-loss' | 'financial-statement';
interface SampleReport {
  id: string;
  name: string;
  type: DocumentType;
  year: string;
  date: string;
  size: string;
  thumbnail?: string;
  content?: React.ReactNode;
}
export function Reports() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState<DocumentType>('all');
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [showAIAgent, setShowAIAgent] = useState(false);
  const [chatMessages, setChatMessages] = useState<{
    sender: 'user' | 'ai';
    text: string;
  }[]>([{
    sender: 'ai',
    text: "Hello! I'm your AI Accounting Agent. I can answer questions about this financial report. What would you like to know?"
  }]);
  const [messageInput, setMessageInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const years = ['all', '2023', '2024', '2025'];
  const documentTypes = [{
    id: 'all',
    name: 'All Documents',
    icon: FolderIcon
  }, {
    id: 'balance-sheet',
    name: 'Balance Sheet',
    icon: BarChart2Icon
  }, {
    id: 'trial-balance',
    name: 'Trial Balance',
    icon: BookIcon
  }, {
    id: 'profit-loss',
    name: 'Profit & Loss Statement',
    icon: TrendingUpIcon
  }, {
    id: 'financial-statement',
    name: 'Financial Statement',
    icon: FileTextIcon
  }];
  const sampleReports: SampleReport[] = [{
    id: 'sample-1',
    name: 'Annual Balance Sheet 2023',
    type: 'balance-sheet',
    year: '2023',
    date: '2023-12-31',
    size: '2.5 MB',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    content: <div className="space-y-4">
          <h3 className="text-xl font-bold text-center mb-6">
            Tech Innovations B.V. - Balance Sheet
          </h3>
          <p className="text-sm text-gray-500 text-center">
            As of December 31, 2023
          </p>
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-lg mb-3">Assets</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Cash and Cash Equivalents</span>
                <span className="font-medium">€ 1,235,600</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Accounts Receivable</span>
                <span className="font-medium">€ 856,450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Inventory</span>
                <span className="font-medium">€ 342,800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Property, Plant & Equipment
                </span>
                <span className="font-medium">€ 1,750,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Intangible Assets</span>
                <span className="font-medium">€ 950,000</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-300 pt-2 mt-2">
                <span>Total Assets</span>
                <span>€ 5,134,850</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-lg mb-3">Liabilities & Equity</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Accounts Payable</span>
                <span className="font-medium">€ 423,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Short-term Loans</span>
                <span className="font-medium">€ 350,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Long-term Debt</span>
                <span className="font-medium">€ 1,250,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Share Capital</span>
                <span className="font-medium">€ 1,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Retained Earnings</span>
                <span className="font-medium">€ 2,111,350</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-300 pt-2 mt-2">
                <span>Total Liabilities & Equity</span>
                <span>€ 5,134,850</span>
              </div>
            </div>
          </div>
        </div>
  }, {
    id: 'sample-2',
    name: 'Annual Financial Statements 2023',
    type: 'financial-statement',
    year: '2023',
    date: '2024-01-15',
    size: '3.8 MB',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    content: <div className="space-y-4">
          <h3 className="text-xl font-bold text-center mb-6">
            Tech Innovations B.V. - Income Statement
          </h3>
          <p className="text-sm text-gray-500 text-center">
            For the Year Ended December 31, 2023
          </p>
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-lg mb-3">Revenue</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Product Sales</span>
                <span className="font-medium">€ 5,245,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Revenue</span>
                <span className="font-medium">€ 2,890,000</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-300 pt-2 mt-2">
                <span>Total Revenue</span>
                <span>€ 8,135,000</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-lg mb-3">Expenses</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Cost of Goods Sold</span>
                <span className="font-medium">€ 2,950,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Employee Salaries</span>
                <span className="font-medium">€ 1,850,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Marketing & Advertising</span>
                <span className="font-medium">€ 560,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Research & Development</span>
                <span className="font-medium">€ 780,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">General & Administrative</span>
                <span className="font-medium">€ 430,000</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-300 pt-2 mt-2">
                <span>Total Expenses</span>
                <span>€ 6,570,000</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="space-y-2">
              <div className="flex justify-between font-bold">
                <span>Net Income Before Tax</span>
                <span>€ 1,565,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Income Tax (25%)</span>
                <span className="font-medium">€ 391,250</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
                <span>Net Income</span>
                <span>€ 1,173,750</span>
              </div>
            </div>
          </div>
        </div>
  }, {
    id: 'sample-3',
    name: 'Q4 Profit & Loss Statement 2023',
    type: 'profit-loss',
    year: '2023',
    date: '2024-01-15',
    size: '1.8 MB'
  }];
  const filteredReports = sampleReports.filter(report => (selectedYear === 'all' || report.year === selectedYear) && (selectedType === 'all' || report.type === selectedType));
  const currentReport = selectedReport ? sampleReports.find(r => r.id === selectedReport) : null;
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    setChatMessages([...chatMessages, {
      sender: 'user',
      text: messageInput
    }]);
    setTimeout(() => {
      let aiResponse = "I'm analyzing the financial data...";
      if (currentReport?.type === 'balance-sheet') {
        if (messageInput.toLowerCase().includes('assets')) {
          aiResponse = 'The total assets are €5,134,850. The largest asset category is Property, Plant & Equipment at €1,750,000, followed by Cash and Cash Equivalents at €1,235,600.';
        } else if (messageInput.toLowerCase().includes('liabilities')) {
          aiResponse = 'The total liabilities are €2,023,500, with long-term debt being the largest component at €1,250,000.';
        } else if (messageInput.toLowerCase().includes('equity')) {
          aiResponse = 'The total equity is €3,111,350, consisting of €1,000,000 in share capital and €2,111,350 in retained earnings.';
        } else if (messageInput.toLowerCase().includes('ratio') || messageInput.toLowerCase().includes('analysis')) {
          aiResponse = 'The current ratio is 2.87 (current assets/current liabilities), indicating strong short-term liquidity. The debt-to-equity ratio is 0.65, which is relatively conservative.';
        }
      } else if (currentReport?.type === 'financial-statement') {
        if (messageInput.toLowerCase().includes('revenue')) {
          aiResponse = 'The total revenue for 2023 was €8,135,000, with €5,245,000 from product sales and €2,890,000 from service revenue.';
        } else if (messageInput.toLowerCase().includes('expenses')) {
          aiResponse = 'Total expenses were €6,570,000, with the largest expense being Cost of Goods Sold at €2,950,000.';
        } else if (messageInput.toLowerCase().includes('profit') || messageInput.toLowerCase().includes('income')) {
          aiResponse = 'The net income for 2023 was €1,173,750 after accounting for €391,250 in income tax.';
        } else if (messageInput.toLowerCase().includes('margin')) {
          aiResponse = 'The gross profit margin is 63.7%, and the net profit margin is 14.4%. Both are above industry average, indicating efficient operations.';
        }
      }
      setChatMessages(prev => [...prev, {
        sender: 'ai',
        text: aiResponse
      }]);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 1000);
    setMessageInput('');
  };
  const handleDownload = (reportId: string) => {
    console.log(`Downloading report ${reportId}`);
    alert('Download started. In a real application, this would download the actual report file.');
  };
  return <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2">
            {years.map(year => <option key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Document Type
          </label>
          <div className="flex flex-wrap gap-2">
            {documentTypes.map(type => {
            const Icon = type.icon;
            return <button key={type.id} onClick={() => setSelectedType(type.id as DocumentType)} className={`flex items-center px-3 py-2 rounded-md text-sm ${selectedType === type.id ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <Icon className="h-4 w-4 mr-2" />
                  {type.name}
                </button>;
          })}
          </div>
        </div>
      </div>
      {selectedReport && currentReport ? <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {currentReport.name}
                </h2>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleDownload(currentReport.id)} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 text-sm flex items-center">
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Download
                  </button>
                  <button onClick={() => setSelectedReport(null)} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                    Back to List
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-auto">
                {currentReport.content ? currentReport.content : <div className="text-center py-12">
                    <FileTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      Preview not available
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      This is a sample report without detailed content.
                    </p>
                  </div>}
              </div>
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <button onClick={() => setShowAIAgent(!showAIAgent)} className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${showAIAgent ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                  <BrainCircuitIcon className="h-5 w-5 mr-2" />
                  {showAIAgent ? 'Hide AI Accounting Agent' : 'Ask AI Accounting Agent'}
                </button>
              </div>
            </div>
          </div>
          {showAIAgent && <div className="w-full md:w-96 flex flex-col bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="p-4 border-b border-gray-200 bg-indigo-50">
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-100 rounded-full mr-3">
                    <BrainCircuitIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      AI Accounting Agent
                    </h3>
                    <p className="text-xs text-gray-500">
                      Ask questions about your financial report
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
                {chatMessages.map((msg, index) => <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg p-3 ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                      {msg.text}
                    </div>
                  </div>)}
                <div ref={chatEndRef} />
              </div>
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                  <input type="text" value={messageInput} onChange={e => setMessageInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Ask about this financial report..." className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <button onClick={handleSendMessage} className="bg-indigo-600 text-white p-2 rounded-r-md hover:bg-indigo-700">
                    <SendIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  <p>
                    Try asking: "What's the total revenue?" or "Explain the
                    debt-to-equity ratio"
                  </p>
                </div>
              </div>
            </div>}
        </div> : <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredReports.length > 0 ? filteredReports.map(report => <div key={report.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedReport(report.id)}>
                <div className="flex items-start space-x-3">
                  {report.thumbnail ? <img src={report.thumbnail} alt={report.name} className="w-16 h-16 object-cover rounded" /> : <div className="bg-blue-100 p-3 rounded">
                      <FileTextIcon className="h-5 w-5 text-blue-600" />
                    </div>}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {report.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Generated: {new Date(report.date).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500">Size: {report.size}</p>
                    <div className="flex mt-2 space-x-2">
                      <button onClick={e => {
                e.stopPropagation();
                setSelectedReport(report.id);
              }} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs flex items-center">
                        <EyeIcon className="h-3 w-3 mr-1" />
                        View
                      </button>
                      <button onClick={e => {
                e.stopPropagation();
                handleDownload(report.id);
              }} className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs flex items-center">
                        <DownloadIcon className="h-3 w-3 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>) : <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <FileTextIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No reports found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your filters to see sample reports.
              </p>
              <button onClick={() => {
          setSelectedYear('all');
          setSelectedType('all');
        }} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                Reset Filters
              </button>
            </div>}
        </div>}
    </div>;
}