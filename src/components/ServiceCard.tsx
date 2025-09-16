import React, { cloneElement } from 'react'
import { CheckIcon, PlusIcon, MessageSquareIcon } from 'lucide-react'
interface ServiceCardProps {
  icon: React.ReactElement
  title: string
  description: string
  isIncluded: boolean
  onAddToCart: () => void
}
export function ServiceCard({
  icon,
  title,
  description,
  isIncluded,
  onAddToCart,
}: ServiceCardProps) {
  return (
    <div className="bg-[#1B1537] rounded-lg border border-[#2D2755] p-6 transition-all hover:border-[#EA3A70]/50">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="bg-[#EA3A70]/10 p-3 rounded-lg">
            {cloneElement(icon, {
              className: 'h-6 w-6 text-[#EA3A70]',
            })}
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <p className="text-gray-400 mt-1">{description}</p>
            {isIncluded && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400 mt-2">
                <CheckIcon className="h-3 w-3 mr-1" />
                Included with membership
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onAddToCart}
          className="mt-2 inline-flex items-center px-4 py-2 border border-[#EA3A70] rounded-md text-sm font-medium text-[#EA3A70] hover:bg-[#EA3A70]/10"
        >
          Add to Cart
          <PlusIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
