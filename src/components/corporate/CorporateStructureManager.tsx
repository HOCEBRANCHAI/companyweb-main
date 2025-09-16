import React, { useState, createElement } from 'react';
import { BuildingIcon, GlobeIcon, PlusIcon, ArrowRightIcon, LinkIcon, TrashIcon } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { RelationshipDiagram } from './RelationshipDiagram';
import { StructureAnalysis } from './StructureAnalysis';
import { QuickActions } from './QuickActions';
import { toPng } from 'html-to-image';
interface Company {
  id: string;
  type: 'base' | 'target' | 'custom';
  name: string;
  country: string;
  registrationNumber: string;
}
interface Relationship {
  sourceId: string;
  targetId: string;
  type: 'shareholding' | 'royalty' | 'loan';
  details: string;
}
interface CompanyCardProps {
  company: Company;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}
const CompanyCard = ({
  company,
  onDelete,
  onEdit
}: CompanyCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: company.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="border rounded-lg p-5 bg-white shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-blue-100">
          {company.type === 'base' ? <BuildingIcon className="h-6 w-6 text-blue-600" /> : company.type === 'target' ? <GlobeIcon className="h-6 w-6 text-green-600" /> : <BuildingIcon className="h-6 w-6 text-gray-600" />}
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
};
export function CorporateStructureManager() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [showRelationshipEditor, setShowRelationshipEditor] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));
  const handleDragEnd = (event: DragEndEvent) => {
    const {
      active,
      over
    } = event;
    if (over && active.id !== over.id) {
      setCompanies(items => {
        const oldIndex = items.findIndex(i => i.id === active.id);
        const newIndex = items.findIndex(i => i.id === over.id);
        const newItems = [...items];
        const [removed] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, removed);
        return newItems;
      });
    }
  };
  const addBaseCompany = () => {
    const baseCompany: Company = {
      id: 'base-' + Date.now(),
      type: 'base',
      name: 'Tech Innovations Ltd',
      country: 'India',
      registrationNumber: 'U72200MH2022PTC123456'
    };
    setCompanies([...companies, baseCompany]);
  };
  const addTargetCompany = () => {
    const targetCompany: Company = {
      id: 'target-' + Date.now(),
      type: 'target',
      name: 'Tech Innovations Netherlands B.V.',
      country: 'Netherlands',
      registrationNumber: 'NL123456789B01'
    };
    setCompanies([...companies, targetCompany]);
  };
  const deleteCompany = (id: string) => {
    setCompanies(companies.filter(c => c.id !== id));
    setRelationships(relationships.filter(r => r.sourceId !== id && r.targetId !== id));
  };
  const editCompanyRelationships = (id: string) => {
    setSelectedCompany(id);
    setShowRelationshipEditor(true);
  };
  const handleExport = async () => {
    const element = document.getElementById('structure-diagram');
    if (element) {
      const dataUrl = await toPng(element);
      const link = document.createElement('a');
      link.download = 'corporate-structure.png';
      link.href = dataUrl;
      link.click();
    }
  };
  const handleShare = () => {
    console.log('Share functionality to be implemented');
  };
  const handlePrint = () => {
    window.print();
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          Build your corporate structure by adding companies and defining their
          relationships. Drag and drop companies to rearrange them.
        </p>
      </div>
      <div className="flex space-x-4">
        <button onClick={addBaseCompany} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          <BuildingIcon className="h-4 w-4 mr-2" />
          Add Base Company
        </button>
        <button onClick={addTargetCompany} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium flex items-center">
          <GlobeIcon className="h-4 w-4 mr-2" />
          Add Target Company
        </button>
        <button onClick={() => setShowAddCompany(true)} className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm font-medium flex items-center">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Custom Company
        </button>
      </div>
      <QuickActions onExport={handleExport} onShare={handleShare} onPrint={handlePrint} />
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SortableContext items={companies} strategy={rectSortingStrategy}>
            {companies.map(company => <CompanyCard key={company.id} company={company} onDelete={deleteCompany} onEdit={editCompanyRelationships} />)}
          </SortableContext>
        </div>
      </DndContext>
      {showAddCompany && <AddCompanyModal onClose={() => setShowAddCompany(false)} onAdd={company => {
      setCompanies([...companies, company]);
      setShowAddCompany(false);
    }} />}
      {showRelationshipEditor && selectedCompany && <RelationshipEditorModal companyId={selectedCompany} companies={companies} relationships={relationships} onClose={() => {
      setShowRelationshipEditor(false);
      setSelectedCompany(null);
    }} onSave={newRelationships => {
      setRelationships(newRelationships);
      setShowRelationshipEditor(false);
      setSelectedCompany(null);
    }} />}
    </div>;
}
interface AddCompanyModalProps {
  onClose: () => void;
  onAdd: (company: Company) => void;
}
function AddCompanyModal({
  onClose,
  onAdd
}: AddCompanyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    registrationNumber: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      id: 'custom-' + Date.now(),
      type: 'custom',
      ...formData
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
              Country
            </label>
            <input type="text" value={formData.country} onChange={e => setFormData({
            ...formData,
            country: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Registration Number
            </label>
            <input type="text" value={formData.registrationNumber} onChange={e => setFormData({
            ...formData,
            registrationNumber: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
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
interface RelationshipEditorModalProps {
  companyId: string;
  companies: Company[];
  relationships: Relationship[];
  onClose: () => void;
  onSave: (relationships: Relationship[]) => void;
}
function RelationshipEditorModal({
  companyId,
  companies,
  relationships,
  onClose,
  onSave
}: RelationshipEditorModalProps) {
  const [newRelationship, setNewRelationship] = useState({
    targetId: '',
    type: 'shareholding' as 'shareholding' | 'royalty' | 'loan',
    details: ''
  });
  const sourceCompany = companies.find(c => c.id === companyId);
  const existingRelationships = relationships.filter(r => r.sourceId === companyId);
  const handleAddRelationship = () => {
    const relationship: Relationship = {
      sourceId: companyId,
      ...newRelationship
    };
    onSave([...relationships, relationship]);
  };
  const handleRemoveRelationship = (targetId: string) => {
    onSave(relationships.filter(r => !(r.sourceId === companyId && r.targetId === targetId)));
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Edit Relationships for {sourceCompany?.name}
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Target Company
              </label>
              <select value={newRelationship.targetId} onChange={e => setNewRelationship({
              ...newRelationship,
              targetId: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option value="">Select company...</option>
                {companies.filter(c => c.id !== companyId).map(company => <option key={company.id} value={company.id}>
                      {company.name}
                    </option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Relationship Type
              </label>
              <select value={newRelationship.type} onChange={e => setNewRelationship({
              ...newRelationship,
              type: e.target.value as any
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option value="shareholding">Shareholding</option>
                <option value="royalty">Royalty Agreement</option>
                <option value="loan">Loan Agreement</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <input type="text" value={newRelationship.details} onChange={e => setNewRelationship({
              ...newRelationship,
              details: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 100% ownership" />
            </div>
          </div>
          <button onClick={handleAddRelationship} disabled={!newRelationship.targetId} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            Add Relationship
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Existing Relationships
          </h3>
          <div className="space-y-2">
            {existingRelationships.map(relationship => {
            const targetCompany = companies.find(c => c.id === relationship.targetId);
            return <div key={relationship.targetId} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <div>
                    <span className="font-medium">{targetCompany?.name}</span>
                    <span className="mx-2">-</span>
                    <span className="text-gray-600">{relationship.type}</span>
                    <span className="mx-2">-</span>
                    <span className="text-gray-600">
                      {relationship.details}
                    </span>
                  </div>
                  <button onClick={() => handleRemoveRelationship(relationship.targetId)} className="text-red-600 hover:text-red-800">
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>;
          })}
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
            Close
          </button>
        </div>
      </div>
    </div>;
}