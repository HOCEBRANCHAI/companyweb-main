import React, { useState } from 'react';
import { TruckIcon, SearchIcon, FilterIcon, BoxIcon, CheckCircleIcon, ClockIcon, AlertTriangleIcon, MapPinIcon, CalendarIcon, BarChart2Icon, EyeIcon, DownloadIcon, PlusIcon, ChevronDownIcon, PackageIcon, FileTextIcon, MailIcon } from 'lucide-react';
interface Shipment {
  id: string;
  trackingNumber: string;
  type: 'letter' | 'package' | 'document';
  status: 'in_transit' | 'delivered' | 'processing' | 'delayed';
  sender: string;
  recipient: string;
  destination: string;
  sentDate: string;
  estimatedDelivery: string;
  priority: 'standard' | 'express' | 'priority';
  weight?: string;
  dimensions?: string;
}
export function ShipmentsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const shipments: Shipment[] = [{
    id: '1',
    trackingNumber: 'SHP-12345-NL',
    type: 'document',
    status: 'in_transit',
    sender: 'Tech Innovations B.V.',
    recipient: 'Dutch Tax Authority',
    destination: 'Amsterdam, Netherlands',
    sentDate: '2023-10-15',
    estimatedDelivery: '2023-10-18',
    priority: 'priority',
    weight: '0.2 kg'
  }, {
    id: '2',
    trackingNumber: 'SHP-12346-NL',
    type: 'package',
    status: 'delivered',
    sender: 'Tech Innovations B.V.',
    recipient: 'Global Partners Inc.',
    destination: 'Rotterdam, Netherlands',
    sentDate: '2023-10-10',
    estimatedDelivery: '2023-10-12',
    priority: 'standard',
    weight: '1.5 kg',
    dimensions: '30 x 20 x 15 cm'
  }, {
    id: '3',
    trackingNumber: 'SHP-12347-NL',
    type: 'letter',
    status: 'processing',
    sender: 'Tech Innovations B.V.',
    recipient: 'Chamber of Commerce',
    destination: 'The Hague, Netherlands',
    sentDate: '2023-10-16',
    estimatedDelivery: '2023-10-19',
    priority: 'express'
  }, {
    id: '4',
    trackingNumber: 'SHP-12348-NL',
    type: 'package',
    status: 'delayed',
    sender: 'Tech Innovations B.V.',
    recipient: 'Legal Advisors Co.',
    destination: 'Utrecht, Netherlands',
    sentDate: '2023-10-08',
    estimatedDelivery: '2023-10-14',
    priority: 'express',
    weight: '2.3 kg',
    dimensions: '40 x 30 x 20 cm'
  }, {
    id: '5',
    trackingNumber: 'SHP-12349-NL',
    type: 'document',
    status: 'delivered',
    sender: 'Tech Innovations B.V.',
    recipient: 'Financial Services Ltd.',
    destination: 'Eindhoven, Netherlands',
    sentDate: '2023-10-05',
    estimatedDelivery: '2023-10-07',
    priority: 'standard'
  }];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in_transit':
        return <TruckIcon className="h-4 w-4 text-blue-400" />;
      case 'delivered':
        return <CheckCircleIcon className="h-4 w-4 text-green-400" />;
      case 'processing':
        return <ClockIcon className="h-4 w-4 text-yellow-400" />;
      case 'delayed':
        return <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70]" />;
      default:
        return <ClockIcon className="h-4 w-4 text-indigo-400" />;
    }
  };
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'letter':
        return <MailIcon className="h-4 w-4 text-indigo-300" />;
      case 'package':
        return <BoxIcon className="h-4 w-4 text-indigo-300" />;
      case 'document':
        return <FileTextIcon className="h-4 w-4 text-indigo-300" />;
      default:
        return <BoxIcon className="h-4 w-4 text-indigo-300" />;
    }
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'standard':
        return 'bg-indigo-900/30 text-indigo-300';
      case 'express':
        return 'bg-blue-900/30 text-blue-300';
      case 'priority':
        return 'bg-[#EA3A70]/20 text-[#EA3A70]';
      default:
        return 'bg-indigo-900/30 text-indigo-300';
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_transit':
        return 'text-blue-400';
      case 'delivered':
        return 'text-green-400';
      case 'processing':
        return 'text-yellow-400';
      case 'delayed':
        return 'text-[#EA3A70]';
      default:
        return 'text-indigo-300';
    }
  };
  const filteredShipments = shipments.filter(shipment => {
    if (statusFilter !== 'all' && shipment.status !== statusFilter) {
      return false;
    }
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return shipment.trackingNumber.toLowerCase().includes(searchLower) || shipment.recipient.toLowerCase().includes(searchLower) || shipment.destination.toLowerCase().includes(searchLower);
    }
    return true;
  });
  return <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto md:flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-300" />
          <input type="text" placeholder="Search shipments..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50" />
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={() => setShowFilters(!showFilters)} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
            <FilterIcon className="h-4 w-4 mr-2" />
            Filter
            <ChevronDownIcon className="h-4 w-4 ml-2" />
          </button>
          <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Shipment
          </button>
        </div>
      </div>
      {showFilters && <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-indigo-300 text-sm mb-1">
                Status
              </label>
              <select className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="in_transit">In Transit</option>
                <option value="delivered">Delivered</option>
                <option value="processing">Processing</option>
                <option value="delayed">Delayed</option>
              </select>
            </div>
            <div>
              <label className="block text-indigo-300 text-sm mb-1">
                Date Range
              </label>
              <div className="flex items-center space-x-2">
                <input type="date" className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" />
                <span className="text-indigo-300">to</span>
                <input type="date" className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" />
              </div>
            </div>
            <div>
              <label className="block text-indigo-300 text-sm mb-1">Type</label>
              <select className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white">
                <option value="">All</option>
                <option value="letter">Letter</option>
                <option value="package">Package</option>
                <option value="document">Document</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-300 text-sm">Total Shipments</p>
              <p className="text-white text-2xl font-medium">23</p>
            </div>
            <div className="p-3 bg-indigo-900/50 rounded-lg">
              <PackageIcon className="h-6 w-6 text-indigo-300" />
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-300 text-sm">In Transit</p>
              <p className="text-white text-2xl font-medium">5</p>
            </div>
            <div className="p-3 bg-indigo-900/50 rounded-lg">
              <TruckIcon className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-300 text-sm">Delivered</p>
              <p className="text-white text-2xl font-medium">16</p>
            </div>
            <div className="p-3 bg-indigo-900/50 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-300 text-sm">Delayed</p>
              <p className="text-white text-2xl font-medium">2</p>
            </div>
            <div className="p-3 bg-indigo-900/50 rounded-lg">
              <AlertTriangleIcon className="h-6 w-6 text-[#EA3A70]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium text-white">Recent Shipments</h2>
          <div className="text-indigo-300 text-sm">
            Showing {filteredShipments.length} of {shipments.length} shipments
          </div>
        </div>
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="bg-indigo-900/50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Tracking Number
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-500/20">
                {filteredShipments.map(shipment => <tr key={shipment.id} className="hover:bg-indigo-900/30 transition-colors">
                    <td className="px-4 py-4">
                      <div className="text-white font-medium">
                        {shipment.trackingNumber}
                      </div>
                      <div className={`mt-1 flex items-center text-xs ${getPriorityColor(shipment.priority)} rounded-full px-2 py-0.5 inline-flex`}>
                        <BarChart2Icon className="h-3 w-3 mr-1" />
                        <span className="capitalize">{shipment.priority}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <div className="flex items-center">
                            {getTypeIcon(shipment.type)}
                            <p className="text-white font-medium ml-2 capitalize">
                              {shipment.type}
                            </p>
                          </div>
                          <p className="text-indigo-300 text-sm mt-1">
                            To: {shipment.recipient}
                          </p>
                          {shipment.weight && <p className="text-indigo-400 text-xs mt-1">
                              {shipment.weight}{' '}
                              {shipment.dimensions && `• ${shipment.dimensions}`}
                            </p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center text-white">
                        <MapPinIcon className="h-4 w-4 mr-2 text-indigo-300" />
                        <span>{shipment.destination}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-indigo-300 text-sm">
                          <CalendarIcon className="h-3 w-3 mr-2" />
                          <span>
                            Sent:{' '}
                            {new Date(shipment.sentDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center text-indigo-300 text-sm">
                          <ClockIcon className="h-3 w-3 mr-2" />
                          <span>
                            ETA:{' '}
                            {new Date(shipment.estimatedDelivery).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(shipment.status)}
                        <span className={`ml-2 capitalize ${getStatusColor(shipment.status)}`}>
                          {shipment.status.replace('_', ' ')}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
                          <DownloadIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
}