import React, { useState } from 'react';
import { PackageIcon, FileTextIcon, TruckIcon, BuildingIcon, ArrowRightIcon, InfoIcon, CheckIcon, AlertTriangleIcon, XIcon, MessageCircleIcon } from 'lucide-react';
import { DocumentVerification } from './DocumentVerification';
import { ShipmentCreation } from './ShipmentCreation';
interface Shipment {
  id: string;
  type: 'standard' | 'express' | 'priority';
  documents: string[];
  status: 'draft' | 'pending_verification' | 'verified' | 'ready' | 'shipped' | 'rejected';
  destination: string;
  estimatedDelivery?: string;
  rejectionReason?: string;
  adminComments?: string;
}
export function ShipmentPreparation() {
  const [showVerification, setShowVerification] = useState(false);
  const [showCreation, setShowCreation] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
  const shipments: Shipment[] = [{
    id: 'ship1',
    type: 'priority',
    documents: ['Company Registration Form', 'Articles of Association', 'UBO Declaration'],
    status: 'rejected',
    destination: 'Chamber of Commerce',
    estimatedDelivery: '2-3 business days',
    rejectionReason: 'Missing signatures on page 2 and 3',
    adminComments: 'Please ensure all pages are properly signed by authorized representatives.'
  }, {
    id: 'ship2',
    type: 'standard',
    documents: ['Annual Accounts', "Director's Report"],
    status: 'draft',
    destination: 'Tax Authority'
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckIcon className="h-3 w-3 mr-1" />
            Verified
          </span>;
      case 'rejected':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertTriangleIcon className="h-3 w-3 mr-1" />
            Rejected
          </span>;
      case 'pending_verification':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <AlertTriangleIcon className="h-3 w-3 mr-1" />
            Pending Verification
          </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Draft
          </span>;
    }
  };
  return <main className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Document Shipments
            </h1>
            <p className="text-gray-600 mt-1">
              Prepare and track your document shipments
            </p>
          </div>
          <button onClick={() => setShowCreation(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
            <PackageIcon className="h-4 w-4 mr-2" />
            New Shipment
          </button>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <div className="flex">
            <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Shipping Process
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Documents will be shipped to your virtual office for processing
                and forwarding to the appropriate government agency. Please
                ensure all documents are properly signed and legalized before
                uploading.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {shipments.map(shipment => <div key={shipment.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FileTextIcon className="h-5 w-5 text-gray-400" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Shipment to {shipment.destination}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {shipment.documents.length} documents • {shipment.type}{' '}
                        shipping
                      </p>
                    </div>
                  </div>
                  <div className="pl-8">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Documents:
                    </h4>
                    <ul className="space-y-1">
                      {shipment.documents.map((doc, index) => <li key={index} className="text-sm text-gray-600 flex items-center">
                          <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                          {doc}
                        </li>)}
                    </ul>
                  </div>
                  {shipment.status === 'rejected' && shipment.rejectionReason && <div className="mt-4 bg-red-50 border border-red-100 rounded-lg p-4">
                        <div className="flex items-start">
                          <AlertTriangleIcon className="h-5 w-5 text-red-500 mt-0.5" />
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-red-800">
                              Documents Rejected
                            </h4>
                            <p className="text-sm text-red-700 mt-1">
                              {shipment.rejectionReason}
                            </p>
                            {shipment.adminComments && <div className="mt-2 flex items-start space-x-2">
                                <MessageCircleIcon className="h-4 w-4 text-red-500 mt-1" />
                                <p className="text-sm text-red-700">
                                  {shipment.adminComments}
                                </p>
                              </div>}
                          </div>
                        </div>
                      </div>}
                </div>
                <div className="flex flex-col items-end space-y-3">
                  {getStatusBadge(shipment.status)}
                  {shipment.estimatedDelivery && <p className="text-sm text-gray-500">
                      Est. delivery: {shipment.estimatedDelivery}
                    </p>}
                  <div className="flex space-x-2">
                    {shipment.status === 'rejected' && <button onClick={() => {
                  setSelectedShipment(shipment);
                  setShowVerification(true);
                }} className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 text-sm font-medium">
                        Review & Resubmit
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </button>}
                    {shipment.status === 'draft' && <button onClick={() => {
                  setSelectedShipment(shipment);
                  setShowVerification(true);
                }} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                        Continue Preparation
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </button>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Shipping Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FileTextIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  1. Upload Documents
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Upload your signed and legalized documents for verification
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <TruckIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  2. Ship to Virtual Office
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Documents are shipped to your virtual office address
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BuildingIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  3. Government Processing
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Documents forwarded to appropriate government agency
                </p>
              </div>
            </div>
          </div>
        </div>
        {showCreation && <ShipmentCreation onClose={() => setShowCreation(false)} />}
        {showVerification && selectedShipment && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Document Verification
                </h2>
                <button onClick={() => setShowVerification(false)} className="text-gray-400 hover:text-gray-500">
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              <DocumentVerification shipment={selectedShipment} onClose={() => setShowVerification(false)} />
            </div>
          </div>}
      </div>
    </main>;
}