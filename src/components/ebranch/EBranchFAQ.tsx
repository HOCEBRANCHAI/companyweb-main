import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, CalendarIcon } from 'lucide-react'
export function EBranchFAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const faqs = [
    {
      question: 'What exactly is eBranch in relation to your other solutions?',
      answer:
        'eBranch is our comprehensive platform that integrates all our specialized solutions—Company Formation, Mailbox, Tax Filing, Corporate Secretary, Accounting, Legal, and Marketing Services—into a single, unified system. Rather than purchasing these services individually, eBranch provides them all under one subscription, with intelligent coordination between each component.',
    },
    {
      question: 'How does eBranch compare to traditional service providers?',
      answer:
        'Traditional business services typically require multiple providers with separate systems, costs, and approaches. eBranch replaces this fragmented model with a unified platform that handles all aspects of European business operations. This integration eliminates coordination overhead, reduces costs by up to 80%, and provides unprecedented visibility across your entire business.',
    },
    {
      question: 'Is company formation really possible in 48 hours?',
      answer:
        'Yes. Our Formation Agent streamlines the process by preparing all documentation simultaneously, submitting through optimized channels, and leveraging digital verification methods. The system eliminates the administrative delays that traditionally extend this process to weeks.',
    },
    {
      question: 'How does eBranch handle multiple European jurisdictions?',
      answer:
        'The platform is built from the ground up to operate across all European countries. It continuously monitors regulatory changes in each jurisdiction, maintains country-specific knowledge bases, and automatically applies the correct requirements based on where you operate. This eliminates the need for multiple service providers across different countries.',
    },
    {
      question: 'Can I start with just one solution and expand later?',
      answer:
        "While we do offer individual solutions, eBranch provides significantly greater value through its integrated approach. The platform's power comes from how the solutions work together to create a coherent business operation. However, we do offer migration paths for clients who started with individual services and wish to upgrade to the full eBranch platform.",
    },
    {
      question: 'How is my business information protected?',
      answer:
        'eBranch employs enterprise-grade security protocols, including end-to-end encryption, strict access controls, and continuous monitoring. Your data is stored in compliance with GDPR and other European regulations, with clearly defined access parameters and comprehensive audit trails.',
    },
    {
      question: 'How does the platform evolve over time?',
      answer:
        'As technology advances, new capabilities are continuously integrated into the platform. Current subscribers benefit from these enhancements while maintaining their original pricing for 5 years from subscription date, creating increasing value over time.',
    },
    {
      question: 'How can I see the system in action?',
      answer:
        'We offer comprehensive demonstrations showing exactly how eBranch manages real-world business scenarios. These demonstrations can be customized to your specific industry and operational requirements.',
    },
  ]
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }
  return (
    <section className="py-20 relative bg-[#1B1537]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Essential Information
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about establishing and running your
            business with eBranch
          </p>
        </div>
        <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden mb-12">
          <div className="divide-y divide-[#2D2755]">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <div className="ml-4">
                    {openIndex === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-[#EA3A70]" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <div
                  className={`px-6 pb-5 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-8 border border-[#2D2755] text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to see eBranch in action?
          </h3>
          <button className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center font-medium">
            <CalendarIcon className="h-5 w-5 mr-2" />
            Schedule a Demonstration
          </button>
        </div>
      </div>
    </section>
  )
}
