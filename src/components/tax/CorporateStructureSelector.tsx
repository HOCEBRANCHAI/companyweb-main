import React, { useEffect, useState, useRef } from 'react';
import { RelationshipDiagram } from '../corporate/RelationshipDiagram';
import { BuildingIcon, PlusIcon, TrashIcon, LinkIcon, XIcon, CheckCircleIcon } from 'lucide-react';
interface Company {
  id: string;
  name: string;
  type: 'base' | 'target' | 'custom';
  country: string;
  registrationNumber?: string;
  taxId?: string;
  status?: string;
  directorNationality?: string;
  expectedTurnover?: string;
}
interface Relationship {
  sourceId: string;
  targetId: string;
  type: 'shareholding' | 'royalty' | 'loan';
  percentage?: number;
}
interface CompanyCardProps {
  company: Company;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}
function CompanyCard({
  company,
  onDelete,
  onEdit
}: CompanyCardProps) {
  return <div className="border rounded-lg p-5 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <BuildingIcon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex space-x-2">
          <button onClick={() => onEdit(company.id)} className="text-gray-400 hover:text-gray-600">
            <LinkIcon className="h-5 w-5" />
          </button>
          <button onClick={() => onDelete(company.id)} className="text-gray-400 hover:text-red-600">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-900">{company.name}</h3>
      <div className="mt-2 space-y-1">
        <p className="text-sm text-gray-500">{company.country}</p>
        <p className="text-sm text-gray-500">{company.registrationNumber}</p>
      </div>
    </div>;
}
interface CorporateStructureSelectorProps {
  selectedStructure: string;
  onStructureSelect: (structure: string) => void;
  onEditStructure: () => void;
  onStructureChange?: (companies: Company[], relationships: Relationship[]) => void;
}
export function CorporateStructureSelector({
  selectedStructure,
  onStructureSelect,
  onEditStructure,
  onStructureChange
}: CorporateStructureSelectorProps) {
  const [companies, setCompanies] = useState<Company[]>([{
    id: '1',
    name: 'Tech Innovations Ltd',
    type: 'base',
    country: 'Netherlands',
    registrationNumber: 'NL123456789',
    taxId: 'NL123456789B01'
  }, {
    id: '2',
    name: 'Tech Innovations GmbH',
    type: 'target',
    country: 'Germany',
    registrationNumber: 'DE987654321',
    taxId: 'DE987654321'
  }]);
  const [relationships, setRelationships] = useState<Relationship[]>([{
    sourceId: '1',
    targetId: '2',
    type: 'shareholding',
    percentage: 100
  }]);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [showAddRelationship, setShowAddRelationship] = useState(false);
  const [selectedSourceId, setSelectedSourceId] = useState<string>('');
  const [selectedTargetId, setSelectedTargetId] = useState<string>('');
  const [relationshipType, setRelationshipType] = useState<'shareholding' | 'royalty' | 'loan'>('shareholding');
  const [percentage, setPercentage] = useState<string>('');
  const [relationshipAdded, setRelationshipAdded] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (onStructureChange) {
      onStructureChange(companies, relationships);
    }
  }, [companies, relationships, onStructureChange]);
  const deleteCompany = (id: string) => {
    const updatedCompanies = companies.filter(c => c.id !== id);
    const updatedRelationships = relationships.filter(r => r.sourceId !== id && r.targetId !== id);
    setCompanies(updatedCompanies);
    setRelationships(updatedRelationships);
  };
  const handleAddCompany = (company: Company) => {
    const updatedCompanies = [...companies, company];
    setCompanies(updatedCompanies);
    setShowAddCompany(false);
  };
  const handleAddRelationship = () => {
    if (!selectedSourceId || !selectedTargetId || !relationshipType) return;
    const newRelationship: Relationship = {
      sourceId: selectedSourceId,
      targetId: selectedTargetId,
      type: relationshipType,
      percentage: percentage ? parseInt(percentage) : undefined
    };
    const updatedRelationships = [...relationships, newRelationship];
    setRelationships(updatedRelationships);
    setRelationshipAdded(true);
    setTimeout(() => {
      setRelationshipAdded(false);
      setShowAddRelationship(false);
      setSelectedSourceId('');
      setSelectedTargetId('');
      setRelationshipType('shareholding');
      setPercentage('');
    }, 1500);
  };
  const renderStructureEditor = () => {
    if (companies.length === 0) {
      return <div className="flex flex-col items-center justify-center h-[400px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg">
          <BuildingIcon className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600 text-sm">No companies added yet.</p>
          <p className="text-gray-500 text-sm mt-1">
            Add companies using the buttons above to start building your
            structure.
          </p>
        </div>;
    }
    return <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map(company => <CompanyCard key={company.id} company={company} onDelete={deleteCompany} onEdit={() => {}} />)}
        </div>
        <div id="relationship-diagram-container" className="h-[400px] border border-gray-200 rounded-lg bg-white p-4 overflow-hidden" ref={diagramRef}>
          <RelationshipDiagram companies={companies} relationships={relationships} />
        </div>
      </div>;
  };
  return <div className="space-y-6">
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            Structure Editor
          </h3>
          <div className="flex space-x-2">
            <button onClick={() => setShowAddCompany(true)} className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
              <PlusIcon className="h-4 w-4 mr-1" />
              Add Company
            </button>
            <button onClick={() => setShowAddRelationship(true)} disabled={companies.length < 2} className={`px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium flex items-center
                ${companies.length < 2 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}`}>
              <LinkIcon className="h-4 w-4 mr-1" />
              Add Relationship
            </button>
          </div>
        </div>
        {renderStructureEditor()}
      </div>
      {showAddRelationship && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Add Relationship
              </h3>
              <button onClick={() => setShowAddRelationship(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            {relationshipAdded ? <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4 flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-green-700">
                  Relationship added successfully!
                </p>
              </div> : <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Source Company
                  </label>
                  <select value={selectedSourceId} onChange={e => setSelectedSourceId(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="">Select company...</option>
                    {companies.map(company => <option key={company.id} value={company.id}>
                        {company.name}
                      </option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Target Company
                  </label>
                  <select value={selectedTargetId} onChange={e => setSelectedTargetId(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="">Select company...</option>
                    {companies.filter(c => c.id !== selectedSourceId).map(company => <option key={company.id} value={company.id}>
                          {company.name}
                        </option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Relationship Type
                  </label>
                  <select value={relationshipType} onChange={e => setRelationshipType(e.target.value as 'shareholding' | 'royalty' | 'loan')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="shareholding">Shareholding</option>
                    <option value="royalty">Royalty Agreement</option>
                    <option value="loan">Loan Agreement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Percentage (optional)
                  </label>
                  <input type="number" value={percentage} onChange={e => setPercentage(e.target.value)} min="0" max="100" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                {selectedSourceId && selectedTargetId && <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="text-sm font-medium text-blue-700 mb-2">
                      Relationship Preview
                    </h4>
                    <div className="flex items-center text-sm">
                      <span className="font-medium">
                        {companies.find(c => c.id === selectedSourceId)?.name}
                      </span>
                      <span className="mx-2">→</span>
                      <span className="font-medium">
                        {companies.find(c => c.id === selectedTargetId)?.name}
                      </span>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-blue-600">
                      <span>{relationshipType}</span>
                      {percentage && <span className="ml-1">({percentage}%)</span>}
                    </div>
                  </div>}
                <div className="flex justify-end space-x-2 mt-6">
                  <button onClick={() => setShowAddRelationship(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                    Cancel
                  </button>
                  <button onClick={handleAddRelationship} disabled={!selectedSourceId || !selectedTargetId} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium disabled:bg-gray-300 disabled:cursor-not-allowed">
                    Add Relationship
                  </button>
                </div>
              </div>}
          </div>
        </div>}
      {showAddCompany && <AddCompanyModal onClose={() => setShowAddCompany(false)} onAdd={handleAddCompany} />}
    </div>;
}
interface AddCompanyModalProps {
  onClose: () => void;
  onAdd: (company: Company) => void;
}
const countries = ['Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Korea, Democratic People's Republic of", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela, Bolivarian Republic of', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
const businessActivities = ['Holding Company', 'Operational Company', 'Intellectual Property Company'];
function AddCompanyModal({
  onClose,
  onAdd
}: AddCompanyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'virtual-office' as 'virtual-office' | 'branch-office' | 'legal-entity',
    country: '',
    formationStatus: 'formed' as 'formed' | 'under-formation',
    directorResidenceCountry: '',
    businessActivity: 'Operational Company'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: 'custom-' + Date.now(),
      type: 'custom',
      name: formData.name,
      country: formData.country,
      formationStatus: formData.formationStatus,
      directorResidenceCountry: formData.directorResidenceCountry,
      businessActivity: formData.businessActivity
    });
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Add Custom Company
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input type="text" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Type
            </label>
            <select value={formData.type} onChange={e => setFormData({
            ...formData,
            type: e.target.value as typeof formData.type
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="virtual-office">Virtual Office</option>
              <option value="branch-office">Branch Office</option>
              <option value="legal-entity">Legal Entity</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select value={formData.country} onChange={e => setFormData({
            ...formData,
            country: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="">Select a country</option>
              {countries.map(country => <option key={country} value={country}>
                  {country}
                </option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Formation Status
            </label>
            <select value={formData.formationStatus} onChange={e => setFormData({
            ...formData,
            formationStatus: e.target.value as 'formed' | 'under-formation'
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="formed">Formed</option>
              <option value="under-formation">Under Formation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Director's Country of Residence
            </label>
            <select value={formData.directorResidenceCountry} onChange={e => setFormData({
            ...formData,
            directorResidenceCountry: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="">Select a country</option>
              {countries.map(country => <option key={country} value={country}>
                  {country}
                </option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Activity
            </label>
            <select value={formData.businessActivity} onChange={e => setFormData({
            ...formData,
            businessActivity: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              {businessActivities.map(activity => <option key={activity} value={activity}>
                  {activity}
                </option>)}
            </select>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
              Add Company
            </button>
          </div>
        </form>
      </div>
    </div>;
}