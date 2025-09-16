import React, { useState } from 'react';
import { HeadphonesIcon, MessageCircleIcon, PhoneIcon, ClockIcon, FileTextIcon, BookOpenIcon, ArrowRightIcon, CheckCircleIcon, GlobeIcon, RefreshCwIcon, MailIcon, VideoIcon, MessageSquareIcon } from 'lucide-react';
export function SupportFeatures() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const faqItems = [{
    id: 'faq-1',
    question: 'How quickly are legal updates implemented in the system?',
    answer: 'Our legal team monitors Dutch regulatory changes daily. Critical updates are implemented within 24 hours, while standard updates are typically implemented within 3-5 business days. All users receive notifications about relevant legal changes affecting their entities.'
  }, {
    id: 'faq-2',
    question: 'What support options are available outside business hours?',
    answer: 'Our 24/7 support system includes an AI-powered chatbot for immediate assistance, an extensive knowledge base, and an emergency contact line for urgent matters. Our global support team ensures someone is always available to assist you, regardless of your time zone.'
  }, {
    id: 'faq-3',
    question: 'How do I track the status of my corporate changes?',
    answer: 'All corporate changes can be tracked in real-time through the Corporate Changes dashboard. You will receive status updates via email and in-app notifications. Each change has a detailed timeline showing its current stage in the process and estimated completion date.'
  }, {
    id: 'faq-4',
    question: 'Can I share my KYC profile with multiple parties simultaneously?',
    answer: 'Yes, you can share your KYC profile with multiple parties simultaneously. Each share creates a separate access link with its own permissions and expiration date. You can monitor and manage all active shares from the KYC Profile Sharing dashboard.'
  }];
  const legalUpdates = [{
    id: 'update-1',
    title: 'UBO Register Requirements Update',
    date: '2024-03-15',
    category: 'Compliance',
    summary: 'New requirements for Ultimate Beneficial Owner registration coming into effect on May 1, 2024.'
  }, {
    id: 'update-2',
    title: 'Corporate Tax Rate Changes',
    date: '2024-02-20',
    category: 'Taxation',
    summary: 'Dutch corporate tax rates will change for fiscal year 2025. The standard rate will decrease from 25.8% to 25.0%.'
  }, {
    id: 'update-3',
    title: 'New KYC Verification Standards',
    date: '2024-01-10',
    category: 'Compliance',
    summary: 'Enhanced KYC verification requirements for financial institutions and business relationships.'
  }];
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              24/7 Support & Legal Updates
            </h3>
            <p className="text-indigo-200 mt-1">
              Round-the-clock assistance and the latest regulatory information
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <HeadphonesIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h4 className="text-white font-medium">24/7 Expert Support</h4>
            </div>
            <p className="text-indigo-200 text-sm mb-4">
              Access expert assistance around the clock through multiple
              channels, ensuring you always have the support you need for your
              corporate governance matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div className="bg-indigo-900/50 rounded-lg p-3 flex items-center">
                <div className="p-2 bg-indigo-900/70 rounded-lg mr-3">
                  <MessageCircleIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">Live Chat</h5>
                  <p className="text-xs text-indigo-300">Available 24/7</p>
                </div>
              </div>
              <div className="bg-indigo-900/50 rounded-lg p-3 flex items-center">
                <div className="p-2 bg-indigo-900/70 rounded-lg mr-3">
                  <PhoneIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Phone Support
                  </h5>
                  <p className="text-xs text-indigo-300">Global helpline</p>
                </div>
              </div>
              <div className="bg-indigo-900/50 rounded-lg p-3 flex items-center">
                <div className="p-2 bg-indigo-900/70 rounded-lg mr-3">
                  <VideoIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Video Consultation
                  </h5>
                  <p className="text-xs text-indigo-300">Schedule anytime</p>
                </div>
              </div>
              <div className="bg-indigo-900/50 rounded-lg p-3 flex items-center">
                <div className="p-2 bg-indigo-900/70 rounded-lg mr-3">
                  <MailIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Email Support
                  </h5>
                  <p className="text-xs text-indigo-300">4hr response time</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-indigo-900/50 rounded-lg p-3">
              <div className="flex items-center">
                <div className="p-2 bg-green-900/30 rounded-lg mr-3">
                  <MessageSquareIcon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h5 className="text-white text-sm font-medium">
                    Support Chat
                  </h5>
                  <p className="text-xs text-indigo-300">
                    Average response time: 2 minutes
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium">
                Start Chat
              </button>
            </div>
          </div>
          <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <RefreshCwIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h4 className="text-white font-medium">Legal Updates</h4>
            </div>
            <p className="text-indigo-200 text-sm mb-4">
              Stay informed about the latest Dutch legal and regulatory changes
              affecting your business with our continuous legal monitoring
              system.
            </p>
            <div className="space-y-3 mb-4">
              {legalUpdates.map(update => <div key={update.id} className="bg-indigo-900/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="text-white text-sm font-medium">
                      {update.title}
                    </h5>
                    <span className="px-2 py-0.5 bg-indigo-900/50 rounded-full text-xs text-indigo-300">
                      {update.category}
                    </span>
                  </div>
                  <p className="text-xs text-indigo-300 mb-2">
                    {new Date(update.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-indigo-200">{update.summary}</p>
                </div>)}
            </div>
            <button className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium flex items-center justify-center">
              View All Legal Updates
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5 mb-8">
          <div className="flex items-center mb-5">
            <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
              <BookOpenIcon className="h-6 w-6 text-[#EA3A70]" />
            </div>
            <h4 className="text-white font-medium">Knowledge Resources</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="bg-indigo-900/50 rounded-lg p-4 hover:bg-indigo-800/50 transition-colors cursor-pointer">
              <FileTextIcon className="h-5 w-5 text-indigo-300 mb-3" />
              <h5 className="text-white text-sm font-medium mb-1">
                Corporate Secretary Guides
              </h5>
              <p className="text-xs text-indigo-300">
                Comprehensive guides on corporate governance best practices
              </p>
            </div>
            <div className="bg-indigo-900/50 rounded-lg p-4 hover:bg-indigo-800/50 transition-colors cursor-pointer">
              <GlobeIcon className="h-5 w-5 text-indigo-300 mb-3" />
              <h5 className="text-white text-sm font-medium mb-1">
                Dutch Regulatory Framework
              </h5>
              <p className="text-xs text-indigo-300">
                Overview of Dutch corporate laws and regulations
              </p>
            </div>
            <div className="bg-indigo-900/50 rounded-lg p-4 hover:bg-indigo-800/50 transition-colors cursor-pointer">
              <ClockIcon className="h-5 w-5 text-indigo-300 mb-3" />
              <h5 className="text-white text-sm font-medium mb-1">
                Compliance Calendars
              </h5>
              <p className="text-xs text-indigo-300">
                Templates and guides for compliance deadline management
              </p>
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium flex items-center justify-center">
            Explore Knowledge Base
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
        <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
          <h4 className="text-white font-medium mb-5">
            Frequently Asked Questions
          </h4>
          <div className="space-y-3">
            {faqItems.map(faq => <div key={faq.id} className="bg-indigo-900/50 rounded-lg overflow-hidden">
                <button onClick={() => setSelectedQuestion(selectedQuestion === faq.id ? null : faq.id)} className="w-full px-4 py-3 text-left flex items-center justify-between">
                  <span className="text-white text-sm font-medium">
                    {faq.question}
                  </span>
                  <span className="text-indigo-300">
                    {selectedQuestion === faq.id ? '−' : '+'}
                  </span>
                </button>
                {selectedQuestion === faq.id && <div className="px-4 py-3 border-t border-indigo-500/30">
                    <p className="text-sm text-indigo-200">{faq.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}