import React, { useState } from 'react'
import {
  SendIcon,
  SparklesIcon,
  CheckIcon,
  ChevronRightIcon,
  StarIcon,
} from 'lucide-react'
export function NewsletterSignup() {
  const [tier, setTier] = useState<'economy' | 'business'>('economy')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  return (
    <div className="bg-[#1B1537] rounded-lg p-6 border border-[#2D2755]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-[#EA3A70]/10 px-3 py-1 rounded-full text-[#EA3A70] mb-3">
            <SendIcon className="h-4 w-4 mr-1.5" />
            Business Class Insights
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Get Premium Market Intelligence
          </h2>
          <p className="text-gray-300 text-sm">
            Choose your subscription tier and receive AI-curated insights
            tailored to your business interests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Economy Class */}
          <div
            className={`rounded-lg p-3 border cursor-pointer transition-colors ${tier === 'economy' ? 'border-[#EA3A70] bg-[#EA3A70]/5' : 'border-[#2D2755] hover:border-[#EA3A70]/50'}`}
            onClick={() => setTier('economy')}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Economy Class
                </h3>
                <p className="text-sm text-gray-400">
                  Essential market updates
                </p>
              </div>
              <div
                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${tier === 'economy' ? 'border-[#EA3A70] bg-[#EA3A70]' : 'border-[#2D2755]'}`}
              >
                {tier === 'economy' && (
                  <CheckIcon className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-1 mt-2">
              {[
                'Monthly market updates',
                'Basic regulatory changes',
                'Standard newsletter format',
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-gray-300 text-sm"
                >
                  <ChevronRightIcon className="h-3.5 w-3.5 mr-1.5 text-[#EA3A70] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {/* Business Class */}
          <div
            className={`rounded-lg p-3 border cursor-pointer transition-colors ${tier === 'business' ? 'border-[#EA3A70] bg-[#EA3A70]/5' : 'border-[#2D2755] hover:border-[#EA3A70]/50'}`}
            onClick={() => setTier('business')}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center mb-0.5">
                  <h3 className="text-lg font-semibold text-white">
                    Business Class
                  </h3>
                  <span className="bg-[#EA3A70] text-white text-xs px-1.5 py-0.5 rounded-full ml-2">
                    Premium
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  AI-powered premium insights
                </p>
              </div>
              <div
                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${tier === 'business' ? 'border-[#EA3A70] bg-[#EA3A70]' : 'border-[#2D2755]'}`}
              >
                {tier === 'business' && (
                  <CheckIcon className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-1 mt-2">
              {[
                'AI-curated market opportunities',
                'Detailed compliance updates',
                'Personalized content',
                'Priority access to features',
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-gray-300 text-sm"
                >
                  <StarIcon className="h-3.5 w-3.5 mr-1.5 text-[#EA3A70] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#EA3A70]"
          />
          {tier === 'business' && (
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full md:w-1/3 bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#EA3A70]"
            />
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-xs">
            Join 10,000+ businesses receiving our insights
          </p>
          <button
            type="submit"
            className="bg-[#EA3A70] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center"
          >
            <SparklesIcon className="h-4 w-4 mr-1.5" />
            {tier === 'business' ? 'Start Premium' : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  )
}
