import React, { useState } from 'react'
import { MessageSquareIcon, SparklesIcon } from 'lucide-react'
import { ServiceCard } from './ServiceCard'
interface CartItem {
  name: string
  price: number
  type: 'service' | 'plan' | 'addon' | 'custom'
  country?: string
  included?: boolean
  description?: string
}
interface ServiceComparisonProps {
  country: string
  services: any
  countryName: string
  onAddToCart?: (service: CartItem) => void
}
export function ServiceComparison({
  country,
  services,
  countryName,
  onAddToCart,
}: ServiceComparisonProps) {
  const [customRequest, setCustomRequest] = useState('')
  const handleAddToCart = (service: any) => {
    if (onAddToCart) {
      const cartItem: CartItem = {
        name: service.title,
        price: service.pricing[country].included
          ? 0
          : service.pricing[country].price,
        type: 'service',
        country: countryName,
        included: service.pricing[country].included,
      }
      onAddToCart(cartItem)
    }
  }
  const handleCustomRequest = () => {
    if (onAddToCart && customRequest.trim()) {
      const cartItem: CartItem = {
        name: 'Custom Request',
        price: 0,
        type: 'custom',
        country: countryName,
        description: customRequest,
      }
      onAddToCart(cartItem)
      setCustomRequest('')
    }
  }
  return (
    <div className="space-y-4">
      {Object.entries(services).map(([key, service]: [string, any]) => (
        <ServiceCard
          key={key}
          icon={service.icon}
          title={service.title}
          description={service.description}
          isIncluded={service.pricing[country].included}
          onAddToCart={() => handleAddToCart(service)}
        />
      ))}
      {/* Custom Request Section */}
      <div className="bg-[#1B1537] rounded-lg border border-[#2D2755] p-6 transition-all hover:border-[#EA3A70]/50">
        <div className="flex items-start space-x-4 mb-4">
          <div className="bg-[#EA3A70]/10 p-3 rounded-lg">
            <MessageSquareIcon className="h-6 w-6 text-[#EA3A70]" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Custom Request</h3>
            <p className="text-gray-400 mt-1">
              Describe your unique requirements and our AI will analyze and
              process them
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <textarea
            value={customRequest}
            onChange={(e) => setCustomRequest(e.target.value)}
            placeholder="Describe your specific needs or requirements..."
            className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70] min-h-[100px]"
          />
          <button
            onClick={handleCustomRequest}
            disabled={!customRequest.trim()}
            className="w-full flex items-center justify-center px-4 py-3 border border-[#EA3A70] rounded-lg text-sm font-medium text-[#EA3A70] hover:bg-[#EA3A70]/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SparklesIcon className="h-4 w-4 mr-2" />
            Process with AI
          </button>
        </div>
      </div>
    </div>
  )
}
