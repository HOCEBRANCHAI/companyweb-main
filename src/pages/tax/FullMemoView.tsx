import React, { useEffect, useState, useRef, memo, Component } from 'react';
import { ArrowLeftIcon, DownloadIcon, MessageCircleIcon, SendIcon, XIcon, ChevronLeftIcon, ChevronRightIcon, BookmarkIcon, FileTextIcon, CheckIcon, SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IncorporationTimeline } from '../../components/tax/IncorporationTimeline';
import { MemoAttachments } from '../../components/tax/MemoAttachments';
import { InvoiceRequirementsChart } from '../../components/tax/visualizations/InvoiceRequirementsChart';
import { TrademarkFlowchart } from '../../components/tax/visualizations/TrademarkFlowchart';
import { EntityComparisonChart } from '../../components/tax/visualizations/EntityComparisonChart';
import { TaxRateComparisonChart } from '../../components/tax/visualizations/TaxRateComparisonChart';
import { CorporateGovernanceChart } from '../../components/tax/visualizations/CorporateGovernanceChart';
export function FullMemoView() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{
    sender: string;
    text: string;
  }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    'executive-summary': true,
    'business-context': false,
    'jurisdictional-analysis': false,
    'tax-treaty': false,
    'corporate-structure': false,
    'substance-requirements': false,
    'vat-registration': false,
    employment: false,
    'key-factors': false,
    recommendations: false,
    'incorporation-timeline': false,
    attachments: false,
    'invoice-requirements': false,
    'trademark-flowchart': false,
    'entity-comparison': false,
    'tax-comparison': false,
    'governance-chart': false
  });
  const sectionRefs = useRef<{
    [key: string]: HTMLElement | null;
  }>({});
  const totalPages = 17;
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setChatMessages([...chatMessages, {
      sender: 'user',
      text: message
    }]);
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        sender: 'ai',
        text: `Thank you for your question about the tax memo. I'll help clarify the information regarding "${message}".`
      }]);
    }, 1000);
    setMessage('');
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };
  const toggleBookmark = (page: number) => {
    if (bookmarks.includes(page)) {
      setBookmarks(bookmarks.filter(p => p !== page));
    } else {
      setBookmarks([...bookmarks, page]);
    }
  };
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  const scrollToSection = (sectionId: string) => {
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId]?.scrollIntoView({
        behavior: 'smooth'
      });
      if (!expandedSections[sectionId]) {
        toggleSection(sectionId);
      }
    }
  };
  const memoPages = ["/MEMORANDUM_template_1.jpg", "/MEMORANDUM_template_2.jpg", "/MEMORANDUM_template_3.jpg", "/MEMORANDUM_template_4.jpg", "/MEMORANDUM_template_5.jpg", "/MEMORANDUM_template_6.jpg", "/MEMORANDUM_template_7.jpg", "/MEMORANDUM_template_8.jpg", "/MEMORANDUM_template_9.jpg", "/MEMORANDUM_template_10.jpg", "/MEMORANDUM_template_11.jpg", "/MEMORANDUM_template_12.jpg"];
  const sections = [{
    id: 'executive-summary',
    title: 'Executive Summary',
    page: 1
  }, {
    id: 'business-context',
    title: 'Business Context & Facts',
    page: 2
  }, {
    id: 'jurisdictional-analysis',
    title: 'Jurisdictional Analysis',
    page: 3
  }, {
    id: 'tax-treaty',
    title: 'Tax Treaty Considerations',
    page: 4
  }, {
    id: 'corporate-structure',
    title: 'Corporate Structure Options',
    page: 5
  }, {
    id: 'entity-comparison',
    title: 'Legal Entities vs. Branches',
    page: 6,
    component: EntityComparisonChart
  }, {
    id: 'substance-requirements',
    title: 'Substance Requirements',
    page: 7
  }, {
    id: 'governance-chart',
    title: 'Corporate Governance',
    page: 8,
    component: CorporateGovernanceChart
  }, {
    id: 'vat-registration',
    title: 'VAT Registration Options',
    page: 9
  }, {
    id: 'invoice-requirements',
    title: 'Cross-Border Invoice Requirements',
    page: 10,
    component: InvoiceRequirementsChart
  }, {
    id: 'employment',
    title: 'Employment Considerations',
    page: 11
  }, {
    id: 'tax-comparison',
    title: 'Tax Rate Comparison',
    page: 12,
    component: TaxRateComparisonChart
  }, {
    id: 'trademark-flowchart',
    title: 'Trademark Registration Process',
    page: 13,
    component: TrademarkFlowchart
  }, {
    id: 'key-factors',
    title: 'Key Supporting Factors',
    page: 14
  }, {
    id: 'recommendations',
    title: 'Recommendations & Action Items',
    page: 15
  }, {
    id: 'incorporation-timeline',
    title: 'Incorporation Timeline',
    page: 16,
    component: IncorporationTimeline
  }, {
    id: 'attachments',
    title: 'Supporting Attachments',
    page: 17,
    component: MemoAttachments
  }];
  const sectionSubtopics = {
    'executive-summary': ['Overview of Tax Recommendations', 'Key Benefits & Considerations', 'Timeline Summary'],
    'business-context': ['Company Profile', 'Business Activities', 'International Expansion Goals'],
    'jurisdictional-analysis': ['Dutch Tax Environment', 'Comparison with Alternative Jurisdictions', 'Strategic Advantages'],
    'tax-treaty': ['Applicable Treaties', 'Withholding Tax Implications', 'Permanent Establishment Considerations'],
    'corporate-structure': ['Dutch BV Structure', 'Branch Office Options', 'Holding Company Considerations'],
    'entity-comparison': ['Legal Status & Formation', 'Liability Protection', 'Tax Treatment', 'Compliance Requirements', 'Market Perception'],
    'substance-requirements': ['Director Requirements', 'Office Space Considerations', 'Decision-Making Process Documentation'],
    'governance-chart': ['Shareholders Rights', 'Board of Directors', 'Documentation Requirements', 'Filing Requirements'],
    'vat-registration': ['Non-Resident Registration Process', 'Compliance Requirements', 'Reporting Obligations'],
    'invoice-requirements': ['Required Elements', 'Country-Specific Requirements', 'Best Practices', 'Compliance Tips'],
    employment: ['Payroll Options', 'Social Security Implications', 'Employment Contracts'],
    'tax-comparison': ['Corporate Income Tax', 'Dividend Withholding Tax', 'VAT Rates', 'Innovation Box Rates'],
    'trademark-flowchart': ['Pre-Filing Research', 'Application Process', 'Opposition Period', 'Registration & Maintenance'],
    'key-factors': ['Banking Infrastructure', 'Operational Considerations', 'Risk Management'],
    recommendations: ['Immediate Action Items', 'Medium-Term Strategy', 'Long-Term Considerations'],
    'incorporation-timeline': ['Business Decision Phase', 'Onboarding Process', 'Company Registration', 'Bank Account Opening', 'VAT Registration', 'First Year Compliance'],
    attachments: ['Corporate Structure Diagram', 'Tax Treaty Summary', 'VAT Registration Templates', 'Financial Projections']
  };
  const renderPageContent = () => {
    const currentSection = sections[currentPage - 1];
    if (!currentSection) {
      return null;
    }
    if (currentSection.component) {
      const Component = currentSection.component;
      return <Component />;
    }
    return <div>
        <img src={memoPages[Math.min(currentPage - 1, memoPages.length - 1)]} alt={`Tax Memo Page ${currentPage}`} className="w-full rounded-lg shadow-sm" />
      </div>;
  };
  return <div className="bg-gray-50 min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link to="/taxes" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Back to Summary</span>
          </Link>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download PDF
          </button>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Table of Contents
                </h3>
                <div className="relative">
                  <SearchIcon className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Search..." className="pl-8 pr-2 py-1 text-sm border border-gray-300 rounded-md w-24 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
              </div>
              <div className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto">
                {sections.map(section => <div key={section.id} className="mb-2">
                    <button onClick={() => {
                  setCurrentPage(section.page);
                  scrollToSection(section.id);
                }} className={`flex items-center w-full text-left px-2 py-1.5 rounded-md transition-colors ${currentPage === section.page ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${bookmarks.includes(section.page) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                        {section.page}
                      </div>
                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                    {sectionSubtopics[section.id as keyof typeof sectionSubtopics] && <div className="ml-8 mt-1 space-y-1">
                        {sectionSubtopics[section.id as keyof typeof sectionSubtopics].map((subtopic, i) => <button key={i} onClick={() => {
                    setCurrentPage(section.page);
                    scrollToSection(section.id);
                  }} className="w-full text-left text-xs text-gray-600 hover:text-blue-600 py-1 px-2 rounded hover:bg-gray-50">
                            • {subtopic}
                          </button>)}
                      </div>}
                  </div>)}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Bookmarked Pages
                </h4>
                {bookmarks.length > 0 ? <div className="flex flex-wrap gap-2">
                    {bookmarks.map(page => <button key={page} onClick={() => setCurrentPage(page)} className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 text-sm hover:bg-blue-200">
                        {page}
                      </button>)}
                  </div> : <p className="text-xs text-gray-500">
                    No bookmarks yet. Click the bookmark icon on any page to
                    save it for quick access.
                  </p>}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Confidential Tax Memorandum
                  </h1>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>
                      Page {currentPage} of {totalPages}
                    </span>
                    <button onClick={() => toggleBookmark(currentPage)} className={`ml-3 ${bookmarks.includes(currentPage) ? 'text-blue-600' : 'text-gray-400'}`}>
                      <BookmarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  Your comprehensive agent-independent blueprint to successful
                  international market entry and tax optimization
                </p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800" ref={el => sectionRefs.current[sections[currentPage - 1]?.id] = el}>
                    {sections[currentPage - 1]?.title}
                  </h2>
                </div>
                {renderPageContent()}
                <div className="flex justify-between mt-8">
                  <button onClick={prevPage} disabled={currentPage === 1} className={`flex items-center px-4 py-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}>
                    <ChevronLeftIcon className="h-5 w-5 mr-1" />
                    Previous
                  </button>
                  <div className="flex space-x-2">
                    {Array.from({
                    length: totalPages
                  }, (_, i) => <button key={i} onClick={() => setCurrentPage(i + 1)} className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === i + 1 ? 'bg-blue-600 text-white' : bookmarks.includes(i + 1) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} hover:bg-blue-200`}>
                          {i + 1}
                        </button>)}
                  </div>
                  <button onClick={nextPage} disabled={currentPage === totalPages} className={`flex items-center px-4 py-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}>
                    Next
                    <ChevronRightIcon className="h-5 w-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!chatOpen && <div className="fixed bottom-0 right-0 left-0 bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-white font-medium">
                  Have questions about this tax memo?
                </h3>
                <p className="text-blue-100 text-sm mt-1">
                  Ask our AI assistant for clarification on any part of the
                  memorandum
                </p>
              </div>
              <button onClick={() => setChatOpen(true)} className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 text-sm font-medium flex items-center">
                <MessageCircleIcon className="h-4 w-4 mr-2" />
                Ask a Question
              </button>
            </div>
          </div>}
        {chatOpen && <div className="fixed bottom-0 right-0 left-0 bg-white shadow-lg border-t border-gray-200 h-80">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">
                  Tax Memo Assistant
                </h3>
                <button onClick={() => setChatOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.length === 0 ? <div className="text-center text-gray-500 mt-10">
                    <MessageCircleIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>
                      Ask any questions about the tax memo and our AI assistant
                      will help you understand it better.
                    </p>
                    <div className="mt-4 text-sm">
                      <p className="font-medium">Example questions:</p>
                      <ul className="mt-2 space-y-1">
                        <li className="text-blue-600 hover:underline cursor-pointer" onClick={() => setMessage('Can you explain the substance requirements in more detail?')}>
                          • Can you explain the substance requirements in more
                          detail?
                        </li>
                        <li className="text-blue-600 hover:underline cursor-pointer" onClick={() => setMessage('What are the main VAT registration options available?')}>
                          • What are the main VAT registration options
                          available?
                        </li>
                        <li className="text-blue-600 hover:underline cursor-pointer" onClick={() => setMessage('How do the employment alternatives compare?')}>
                          • How do the employment alternatives compare?
                        </li>
                        <li className="text-blue-600 hover:underline cursor-pointer" onClick={() => setMessage("What's the fastest way to complete the incorporation process?")}>
                          • What's the fastest way to complete the incorporation
                          process?
                        </li>
                        <li className="text-blue-600 hover:underline cursor-pointer" onClick={() => setMessage('Can you compare the tax rates between Netherlands and Germany?')}>
                          • Can you compare the tax rates between Netherlands
                          and Germany?
                        </li>
                      </ul>
                    </div>
                  </div> : chatMessages.map((msg, index) => <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-3/4 rounded-lg p-3 ${msg.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                        {msg.text}
                      </div>
                    </div>)}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your question about the tax memo..." className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 flex items-center">
                  <SendIcon className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>}
      </div>
    </div>;
}