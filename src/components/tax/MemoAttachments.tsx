import React, { useState, memo } from 'react';
import { FileTextIcon, DownloadIcon, ExternalLinkIcon, EyeIcon, FileIcon } from 'lucide-react';
interface Attachment {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'xls' | 'image';
  fileSize: string;
  url: string;
}
export function MemoAttachments() {
  const [attachments] = useState<Attachment[]>([{
    id: '1',
    title: 'Corporate Structure Diagram',
    description: 'Visual representation of recommended corporate structure',
    type: 'pdf',
    fileSize: '1.2 MB',
    url: "/MEMORANDUM_template_11.jpg"
  }, {
    id: '2',
    title: 'Tax Treaty Summary',
    description: 'Overview of applicable tax treaty provisions',
    type: 'pdf',
    fileSize: '850 KB',
    url: "/MEMORANDUM_template_12.jpg"
  }, {
    id: '3',
    title: 'VAT Registration Form Template',
    description: 'Pre-filled template for VAT registration',
    type: 'doc',
    fileSize: '320 KB',
    url: '#'
  }, {
    id: '4',
    title: 'Financial Projections',
    description: 'Sample financial projections with tax implications',
    type: 'xls',
    fileSize: '1.7 MB',
    url: '#'
  }, {
    id: '5',
    title: 'Substance Requirements Checklist',
    description: 'Detailed checklist for meeting substance requirements',
    type: 'pdf',
    fileSize: '450 KB',
    url: '#'
  }]);
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileTextIcon className="h-6 w-6 text-red-500" />;
      case 'doc':
        return <FileTextIcon className="h-6 w-6 text-blue-500" />;
      case 'xls':
        return <FileTextIcon className="h-6 w-6 text-green-500" />;
      case 'image':
        return <FileIcon className="h-6 w-6 text-purple-500" />;
      default:
        return <FileIcon className="h-6 w-6 text-gray-500" />;
    }
  };
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Supporting Attachments
      </h3>
      <p className="text-gray-600 mb-6">
        The following documents provide additional details and supporting
        information for the tax memorandum.
      </p>
      <div className="space-y-4">
        {attachments.map(attachment => <div key={attachment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
              <div className="p-2 bg-gray-100 rounded-lg mr-4">
                {getFileIcon(attachment.type)}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">
                  {attachment.title}
                </h4>
                <p className="text-sm text-gray-500 mb-2">
                  {attachment.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="uppercase mr-2">{attachment.type}</span>
                  <span>•</span>
                  <span className="ml-2">{attachment.fileSize}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 hover:bg-blue-50 rounded-full" title="Preview">
                  <EyeIcon className="h-5 w-5" />
                </a>
                <a href={attachment.url} download className="p-2 text-green-600 hover:bg-green-50 rounded-full" title="Download">
                  <DownloadIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}