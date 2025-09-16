import React, { useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

/**
 * Example component demonstrating how to use the click outside functionality
 * This can be used as a reference for implementing click outside in other components
 */
export function ClickOutsideExample() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  // Example 1: Simple dropdown with click outside
  const dropdownRef = useClickOutside<HTMLDivElement>(() => {
    setIsDropdownOpen(false);
  }, isDropdownOpen);

  // Example 2: Modal with click outside
  const modalRef = useClickOutside<HTMLDivElement>(() => {
    setIsModalOpen(false);
  }, isModalOpen);

  // Example 3: Tooltip with click outside
  const tooltipRef = useClickOutside<HTMLDivElement>(() => {
    setIsTooltipOpen(false);
  }, isTooltipOpen);

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-white mb-6">Click Outside Examples</h2>
      
      {/* Example 1: Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Toggle Dropdown
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <div className="p-2">
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                Option 1
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                Option 2
              </div>
              <div className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                Option 3
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Example 2: Modal */}
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Open Modal
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Modal Title</h3>
              <p className="text-gray-600 mb-4">
                This modal will close when you click outside of it.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Example 3: Tooltip */}
      <div className="relative" ref={tooltipRef}>
        <button
          onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Toggle Tooltip
        </button>
        {isTooltipOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 text-white rounded-lg p-3 shadow-lg z-10">
            <div className="text-sm">
              This tooltip will close when you click outside of it.
            </div>
            <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Usage Instructions:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
          <li>Import the hook: <code>import {`{ useClickOutside }`} from '../../hooks/useClickOutside';</code></li>
          <li>Create a ref: <code>const ref = useClickOutside{`<HTMLDivElement>`}(() => {`{ setIsOpen(false); }`}, isOpen);</code></li>
          <li>Attach the ref to your element: <code>ref={ref}</code></li>
          <li>The hook will automatically close the element when clicking outside</li>
        </ol>
      </div>
    </div>
  );
}
