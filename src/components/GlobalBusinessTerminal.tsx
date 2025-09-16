import React, { useState } from 'react'
import {
  GlobeIcon,
  PlaneIcon,
  BuildingIcon,
  MapIcon,
  CalendarIcon,
  ArrowRightIcon,
  EuroIcon,
  UsersIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  SparklesIcon,
  XIcon,
  PlusIcon,
  LeafIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
export function GlobalBusinessTerminal() {
  const [selectedHub, setSelectedHub] = useState<string | null>(null)
  const [compareList, setCompareList] = useState<string[]>([])
  const [selectedHubs, setSelectedHubs] = useState<string[]>([])
  const [showComparison, setShowComparison] = useState(false)
  const businessHubs = [
    {
      id: 'netherlands',
      name: 'Netherlands',
      score: 92,
      setupTime: '3-5 days',
      opportunities: ['Tech', 'Logistics', 'Finance'],
      metrics: {
        taxRate: '25%',
        gdpGrowth: '+4.2%',
        marketAccess: '500M EU consumers',
      },
    },
    {
      id: 'germany',
      name: 'Germany',
      score: 89,
      setupTime: '5-7 days',
      opportunities: ['Manufacturing', 'R&D', 'Digital'],
      metrics: {
        taxRate: '30%',
        gdpGrowth: '+3.8%',
        marketAccess: 'Largest EU economy',
      },
    },
    {
      id: 'france',
      name: 'France',
      score: 87,
      setupTime: '4-6 days',
      opportunities: ['Luxury', 'Tech', 'Tourism'],
      metrics: {
        taxRate: '28%',
        gdpGrowth: '+3.5%',
        marketAccess: 'Strategic EU location',
      },
    },
  ]
  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <header className="bg-[#1B1537] border-b border-[#2D2755]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
              <span className="text-lg font-bold text-white">
                House of Companies
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-400">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Local Time: {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="h-6 w-px bg-[#2D2755]" />
              <div className="flex items-center text-gray-400">
                <CompassIcon className="h-5 w-5 mr-2" />
                <span>Business Terminal</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-[#EA3A70]/10 px-4 py-2 rounded-full text-[#EA3A70] mb-6">
            <GlobeIcon className="h-5 w-5 mr-2" />
            Global Business Terminal
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Choose Your Next Business Destination
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore prime business locations across Europe with real-time market
            intelligence and expert insights.
          </p>
        </div>
        <div className="relative mb-12 bg-[#1B1537] rounded-2xl border border-[#2D2755] p-8">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-5 rounded-2xl bg-cover" />
          <div className="relative">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <MapIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
                Business Hub Radar
              </h2>
              <div className="flex items-center space-x-4">
                {selectedHubs.length > 0 && (
                  <div className="flex -space-x-2">
                    {selectedHubs.map((hub) => (
                      <div
                        key={hub}
                        className="h-8 w-8 rounded-full bg-[#EA3A70] border-2 border-[#1B1537] flex items-center justify-center text-xs font-bold text-white"
                      >
                        {hub.charAt(0)}
                      </div>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setShowComparison(true)}
                  className="bg-[#2D2755] text-white px-4 py-2 rounded-lg hover:bg-[#EA3A70] transition-colors flex items-center"
                >
                  <UsersIcon className="h-4 w-4 mr-2" />
                  Compare Hubs ({selectedHubs.length}/4)
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {businessHubs.map((hub) => (
                <div
                  key={hub.id}
                  className={`group relative bg-[#1B1537] rounded-lg border ${selectedHubs.includes(hub.id) ? 'border-[#EA3A70]' : 'border-[#2D2755]'} p-6 hover:border-[#EA3A70] transition-all transform hover:-translate-y-1`}
                >
                  <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-[#EA3A70] to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white flex items-center">
                        {hub.name}
                        {selectedHubs.includes(hub.id) && (
                          <CheckIcon className="h-4 w-4 text-[#EA3A70] ml-2" />
                        )}
                      </h3>
                      <div className="flex items-center text-[#EA3A70] mt-1">
                        <PlaneIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">{hub.setupTime} setup</span>
                      </div>
                    </div>
                    <div className="bg-[#EA3A70]/10 rounded-full h-12 w-12 flex items-center justify-center">
                      <span className="text-[#EA3A70] font-bold">
                        {hub.score}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4 transform transition-all duration-300">
                    <div>
                      <div className="text-sm text-gray-400 mb-2 flex items-center">
                        <SparklesIcon className="h-4 w-4 mr-1" />
                        Key Opportunities
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {hub.opportunities.map((opp) => (
                          <span
                            key={opp}
                            className="px-2 py-1 bg-[#2D2755] rounded-full text-xs text-white hover:bg-[#EA3A70] transition-colors cursor-pointer"
                          >
                            {opp}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {Object.entries(hub.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-[#2D2755] transition-colors"
                        >
                          <span className="text-gray-400">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-white font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          if (selectedHubs.includes(hub.id)) {
                            setSelectedHubs(
                              selectedHubs.filter((id) => id !== hub.id),
                            )
                          } else if (selectedHubs.length < 4) {
                            setSelectedHubs([...selectedHubs, hub.id])
                          }
                        }}
                        className={`flex-1 py-2 rounded-lg mt-4 flex items-center justify-center transition-colors ${selectedHubs.includes(hub.id) ? 'bg-[#2D2755] text-white hover:bg-red-500' : 'bg-[#EA3A70] text-white hover:bg-[#EA3A70]/90'}`}
                      >
                        {selectedHubs.includes(hub.id) ? (
                          <>
                            <XIcon className="h-4 w-4 mr-2" />
                            Remove
                          </>
                        ) : (
                          <>
                            <PlusIcon className="h-4 w-4 mr-2" />
                            Add to Compare
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => setSelectedHub(hub.id)}
                        className="bg-[#2D2755] text-white p-2 rounded-lg mt-4 hover:bg-[#2D2755]/70 transition-colors"
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#1B1537] rounded-lg border border-[#2D2755] p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <CalendarIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
              Market Intelligence Terminal
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                season: 'Spring 2024',
                highlight: 'Tax Incentives',
                description: 'New startup benefits in major EU hubs',
                icon: <EuroIcon className="h-5 w-5" />,
              },
              {
                season: 'Summer 2024',
                highlight: 'Digital Markets',
                description: 'Enhanced e-commerce regulations',
                icon: <GlobeIcon className="h-5 w-5" />,
              },
              {
                season: 'Autumn 2024',
                highlight: 'Green Business',
                description: 'Sustainability grants and subsidies',
                icon: <LeafIcon className="h-5 w-5" />,
              },
            ].map((period) => (
              <div
                key={period.season}
                className="group bg-[#0F0B1F] rounded-lg p-4 border border-[#2D2755] hover:border-[#EA3A70] transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="text-[#EA3A70]">{period.icon}</div>
                  <div className="text-[#EA3A70] font-medium">
                    {period.season}
                  </div>
                </div>
                <h3 className="text-white font-medium mb-1 group-hover:text-[#EA3A70] transition-colors">
                  {period.highlight}
                </h3>
                <p className="text-gray-400 text-sm">{period.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/market-entry"
            className="inline-flex items-center bg-[#EA3A70] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors"
          >
            Begin Your Journey
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </main>
    </div>
  )
}
