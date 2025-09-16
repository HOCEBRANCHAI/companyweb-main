import React, { useEffect, useState } from 'react';
import { FileTextIcon, CheckIcon, RefreshCwIcon, DownloadIcon, SparklesIcon } from 'lucide-react';
interface Field {
  name: string;
  type: string;
  value: string;
  highlighted?: boolean;
}
export function DocumentCoPilot() {
  const [generating, setGenerating] = useState(false);
  const [currentField, setCurrentField] = useState<string | null>(null);
  const [fields, setFields] = useState<Field[]>([{
    name: 'Company Name',
    type: 'text',
    value: ''
  }, {
    name: 'Registration Country',
    type: 'text',
    value: ''
  }, {
    name: 'Business Activity',
    type: 'text',
    value: ''
  }, {
    name: 'Directors',
    type: 'text',
    value: ''
  }]);
  const generateDocument = () => {
    setGenerating(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fields.length) {
        setFields(prev => prev.map((field, i) => ({
          ...field,
          highlighted: i === currentIndex,
          value: i === currentIndex ? 'AI-generated content for ' + field.name.toLowerCase() : field.value
        })));
        setCurrentField(fields[currentIndex].name);
        currentIndex++;
      } else {
        clearInterval(interval);
        setGenerating(false);
        setCurrentField(null);
      }
    }, 1000);
  };
  return <div className="bg-[#1B1537] rounded-lg p-6 border border-[#2D2755]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <FileTextIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
          Document Co-Pilot
        </h3>
        {generating && <div className="flex items-center text-[#EA3A70]">
            <RefreshCwIcon className="h-5 w-5 animate-spin mr-2" />
            Generating {currentField}...
          </div>}
      </div>
      <div className="space-y-4 mb-6">
        {fields.map(field => <div key={field.name} className={`bg-[#0F0B1F] rounded-lg p-4 border transition-colors ${field.highlighted ? 'border-[#EA3A70]' : field.value ? 'border-green-500' : 'border-[#2D2755]'}`}>
            <div className="flex items-center justify-between mb-2">
              <label className="text-gray-300">{field.name}</label>
              {field.value && <CheckIcon className="h-4 w-4 text-green-500" />}
            </div>
            <div className="font-medium text-white">{field.value || '...'}</div>
          </div>)}
      </div>
      <div className="flex space-x-4">
        <button onClick={generateDocument} disabled={generating} className="flex-1 bg-[#EA3A70] text-white py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center disabled:opacity-50">
          <SparklesIcon className="h-5 w-5 mr-2" />
          Generate Document
        </button>
        {fields.every(f => f.value) && <button className="bg-[#2D2755] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#2D2755]/70 transition-colors">
            <DownloadIcon className="h-5 w-5" />
          </button>}
      </div>
    </div>;
}