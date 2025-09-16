import React, { useState, Fragment } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PlusIcon, PencilIcon, GlobeIcon, BuildingIcon, UserIcon, AlertTriangleIcon, ShieldIcon } from 'lucide-react';
interface EntityMember {
  id: number;
  name: string;
  role: 'Director' | 'Shareholder' | 'Both';
  type: 'Individual' | 'Corporate';
  shares?: string;
  details: {
    dateOfBirth?: string;
    nationality?: string;
    passportNumber?: string;
    address: string;
    appointmentDate: string;
    registrationNumber?: string;
    jurisdiction?: string;
    speaksEnglish?: boolean;
    isPEP?: boolean;
    corporateDocuments?: {
      provided: boolean;
      verified: boolean;
    };
  };
}
export function DirectorsAndShareholders() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const members: EntityMember[] = [{
    id: 1,
    name: 'John Smith',
    role: 'Both',
    type: 'Individual',
    shares: '40%',
    details: {
      dateOfBirth: '1980-05-15',
      nationality: 'British',
      passportNumber: 'GB123456789',
      address: '45 Oxford Street, London, UK',
      appointmentDate: '2022-01-15',
      speaksEnglish: true,
      isPEP: false
    }
  }, {
    id: 2,
    name: 'Global Ventures BV',
    role: 'Shareholder',
    type: 'Corporate',
    shares: '60%',
    details: {
      registrationNumber: 'NL987654321',
      jurisdiction: 'Netherlands',
      address: '123 Amsterdam Avenue, Amsterdam, NL',
      appointmentDate: '2022-01-15',
      corporateDocuments: {
        provided: true,
        verified: false
      }
    }
  }];
  const getRoleBadge = (role: string) => {
    const colors = {
      Director: 'bg-blue-100 text-blue-800',
      Shareholder: 'bg-green-100 text-green-800',
      Both: 'bg-purple-100 text-purple-800'
    };
    return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[role]}`}>
        {role}
      </span>;
  };
  return <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Total Members</h3>
          <p className="text-2xl font-semibold text-gray-900">
            {members.length}
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Member
        </button>
      </div>
      <div className="overflow-hidden border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name & Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Shares
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {members.map(member => <Fragment key={member.id}>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {member.type === 'Individual' ? <UserIcon className="h-5 w-5 text-gray-400" /> : <BuildingIcon className="h-5 w-5 text-gray-400" />}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                        <div className="mt-1">{getRoleBadge(member.role)}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{member.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {member.shares || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {member.type === 'Individual' && member.details.isPEP && <div className="flex items-center text-amber-600" title="Politically Exposed Person">
                          <ShieldIcon className="h-4 w-4" />
                          <span className="ml-1 text-xs">PEP</span>
                        </div>}
                      {member.type === 'Individual' && !member.details.speaksEnglish && <div className="flex items-center text-blue-600" title="Translator Required">
                            <GlobeIcon className="h-4 w-4" />
                            <span className="ml-1 text-xs">Translator</span>
                          </div>}
                      {member.type === 'Corporate' && !member.details.corporateDocuments?.verified && <div className="flex items-center text-amber-600" title="Documents Pending Verification">
                            <AlertTriangleIcon className="h-4 w-4" />
                            <span className="ml-1 text-xs">
                              Pending Verification
                            </span>
                          </div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-3">
                      <button onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)} className="text-blue-600 hover:text-blue-900">
                        {expandedMember === member.id ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <PencilIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedMember === member.id && <tr className="bg-gray-50">
                    <td colSpan={5} className="px-6 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        {member.type === 'Individual' ? <>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500">
                                Date of Birth
                              </h4>
                              <p className="mt-1 text-sm text-gray-900">
                                {member.details.dateOfBirth}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500">
                                Nationality
                              </h4>
                              <p className="mt-1 text-sm text-gray-900">
                                {member.details.nationality}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500">
                                Passport Number
                              </h4>
                              <p className="mt-1 text-sm text-gray-900">
                                {member.details.passportNumber}
                              </p>
                            </div>
                          </> : <>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500">
                                Registration Number
                              </h4>
                              <p className="mt-1 text-sm text-gray-900">
                                {member.details.registrationNumber}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500">
                                Jurisdiction
                              </h4>
                              <p className="mt-1 text-sm text-gray-900">
                                {member.details.jurisdiction}
                              </p>
                            </div>
                          </>}
                        <div>
                          <h4 className="text-xs font-medium text-gray-500">
                            Address
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            {member.details.address}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-gray-500">
                            Appointment Date
                          </h4>
                          <p className="mt-1 text-sm text-gray-900">
                            {member.details.appointmentDate}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>}
              </Fragment>)}
          </tbody>
        </table>
      </div>
    </div>;
}