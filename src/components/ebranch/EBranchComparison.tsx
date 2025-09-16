import React from 'react'
import {
  CheckCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  BuildingIcon,
  ClockIcon,
  FileTextIcon,
  ShieldIcon,
  BookIcon,
  LineChartIcon,
  ScaleIcon,
} from 'lucide-react'
export function EBranchComparison() {
  const comparisonData = [
    {
      feature: 'European Presence Establishment',
      individual: '4-6 weeks, multiple vendors',
      ebranch: '48 hours, single platform',
    },
    {
      feature: 'Document Management',
      individual: 'Physical storage, limited retrieval',
      ebranch: 'Digital system with intelligence',
    },
    {
      feature: 'Compliance Monitoring',
      individual: 'Manual tracking, often reactive',
      ebranch: 'Automated, proactive system',
    },
    {
      feature: 'Financial Management',
      individual: 'Periodic reporting, limited context',
      ebranch: 'Real-time insights with business context',
    },
    {
      feature: 'Legal Documentation',
      individual: 'Standardized templates, high fees',
      ebranch: 'Intelligent generation, unlimited usage',
    },
    {
      feature: 'Growth Support',
      individual: 'Disconnected from operational reality',
      ebranch: 'Informed by actual business data',
    },
    {
      feature: 'Total Monthly Cost',
      individual: '€1,500+ across multiple providers',
      ebranch: '€199 all-inclusive',
    },
    {
      feature: 'Administrative Time Required',
      individual: '15+ hours/week',
      ebranch: '2-3 hours/week',
    },
  ]
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Traditional Approach vs. eBranch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare our integrated platform with traditional business service
            providers
          </p>
        </div>
        <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden shadow-lg shadow-[#0F0B1F]/50 mb-16">
          <div className="p-6 border-b border-[#2D2755]">
            <div className="flex items-center">
              <BuildingIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
              <h3 className="text-xl font-bold text-white">
                eBranch vs. Individual Services
              </h3>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2D2755]">
                  <th className="py-4 px-6 text-left text-white font-medium">
                    Business Need
                  </th>
                  <th className="py-4 px-6 text-center text-white font-medium">
                    Multiple Service Providers
                  </th>
                  <th className="py-4 px-6 text-center text-white font-medium bg-[#EA3A70]/10">
                    eBranch Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index !== comparisonData.length - 1
                        ? 'border-b border-[#2D2755]'
                        : ''
                    }
                  >
                    <td className="py-4 px-6 text-white">{item.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-300">
                      {item.individual}
                    </td>
                    <td className="py-4 px-6 text-center bg-[#EA3A70]/5 text-white font-medium">
                      {item.ebranch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
