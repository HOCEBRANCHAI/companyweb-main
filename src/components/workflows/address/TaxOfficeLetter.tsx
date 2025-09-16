import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon, DownloadIcon, EyeIcon, FileTextIcon, PencilIcon } from 'lucide-react';
interface TaxOfficeLetterProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function TaxOfficeLetter({
  formData,
  onDataChange,
  onContinue,
  onBack
}: TaxOfficeLetterProps) {
  const [letterContent, setLetterContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [letterPreview, setLetterPreview] = useState('');
  // Generate initial letter content based on company data
  useEffect(() => {
    const today = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    const initialContent = `Belastingdienst / Ondernemingen [Relevant Region]
[relevant address]
${formData.companyName}
[relevant address]
${formData.newCity}, ${today}
Subject: Change of correspondence address
Dear sir, madam,
We hereby request you to change our correspondence address of ${formData.companyName}
(kvk: ${formData.kvkNumber})(RSIN: [RSIN number]) from at ${formData.currentAddress},
to ${formData.newStreet} ${formData.newNumber}, ${formData.newPostalCode} ${formData.newCity}, ${formData.newCountry}.
I hereby also confirm that House of Companies, and Dennis Vermeulen (as board members
of House of Companies in particular) is (are) authorised to deal with the tax authorities on
behalf of ${formData.companyName}.
Should you have any further questions, please do not hesitate to contact us.
Kind regards,
mr. [Name Director]
Director of ${formData.companyName}`;
    setLetterContent(initialContent);
    setLetterPreview(initialContent);
  }, [formData]);
  // Handle letter content changes
  const handleLetterChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLetterContent(e.target.value);
  };
  // Save edited letter and update preview
  const handleSaveLetter = () => {
    setLetterPreview(letterContent);
    setIsEditing(false);
    onDataChange({
      taxOfficeLetter: letterContent
    });
  };
  // Cancel editing and revert to previous content
  const handleCancelEdit = () => {
    setLetterContent(letterPreview);
    setIsEditing(false);
  };
  return <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Tax Office Address Change Letter
            </h3>
          </div>
          <div className="flex space-x-2">
            {!isEditing ? <button onClick={() => setIsEditing(true)} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <PencilIcon className="h-4 w-4 mr-1" />
                Edit Letter
              </button> : <>
                <button onClick={handleCancelEdit} className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
                  Cancel
                </button>
                <button onClick={handleSaveLetter} className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Save Changes
                </button>
              </>}
            <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
              <DownloadIcon className="h-4 w-4 mr-1" />
              Download
            </button>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-600">
            This letter will be sent to the Tax Office to update your
            correspondence address. You can edit the content to fit your
            specific needs. The letter will be automatically filled with your
            company details.
          </p>
        </div>
        {isEditing ? <div className="border border-gray-300 rounded-lg">
            <textarea value={letterContent} onChange={handleLetterChange} className="w-full h-96 p-4 font-mono text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div> : <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <div className="whitespace-pre-line font-mono text-sm">
              {letterPreview}
            </div>
          </div>}
        <div className="mt-4 flex justify-between">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Note:</span> This letter will be
            generated as a PDF document for submission to the Tax Office.
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
            <EyeIcon className="h-4 w-4 mr-1" />
            Preview as PDF
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue
        </button>
      </div>
    </div>;
}