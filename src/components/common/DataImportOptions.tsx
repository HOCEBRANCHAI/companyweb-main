import React from 'react';
import { BuildingIcon, UploadIcon, ArrowRightIcon, ScanIcon, FileTextIcon, UserIcon, MapPinIcon, GlobeIcon, DownloadIcon } from 'lucide-react';

interface DataImportOptionsProps {
  onSelectMethod: (method: 'base' | 'upload' | 'target') => void;
  availableMethods?: ('base' | 'upload' | 'target')[];
  context?: 'vatid' | 'employer' | 'branch' | 'registration';
  description?: string;
}

export function DataImportOptions({
  onSelectMethod,
  availableMethods = ['base', 'upload', 'target'],
  context = 'registration',
  description
}: DataImportOptionsProps) {
  
  const getContextDescription = () => {
    if (description) return description;
    
    switch (context) {
      case 'vatid':
        return "Let's make the registration process easier by importing your data. Choose one of the options below to get started.";
      case 'employer':
        return "Choose how you want to import your company information for the employer registration process.";
      case 'branch':
        return "Let's make the registration process easier by importing your data. Choose one of the options below to get started.";
      default:
        return "Let's make the registration process easier by importing your data. Choose one of the options below to get started.";
    }
  };

  const getMethodConfig = (method: string) => {
    const configs = {
      target: {
        icon: BuildingIcon,
        title: context === 'employer' ? 'Target Company' : 'Import from Target Company',
        description: context === 'employer' 
          ? 'Import data from your existing Dutch entity'
          : "We'll use information from your target market presence to pre-fill the registration forms.",
        buttonText: context === 'employer' ? 'Select' : 'Import from Target Company',
        features: context === 'employer' ? [] : [
          { icon: FileTextIcon, text: 'Target market details automatically imported' },
          { icon: MapPinIcon, text: 'Local address information pre-filled' },
          { icon: ScanIcon, text: 'Market-specific compliance details' }
        ]
      },
      base: {
        icon: DownloadIcon,
        title: context === 'employer' ? 'Base Company' : 'Import from Base Company',
        description: context === 'employer'
          ? 'Import data from your home country company'
          : "We'll use information from your existing company profile to pre-fill the registration forms.",
        buttonText: context === 'employer' ? 'Select' : 'Import from Base Company',
        features: context === 'employer' ? [] : [
          { icon: FileTextIcon, text: 'Company details automatically imported' },
          { icon: UserIcon, text: 'Directors and shareholders information pre-filled' },
          { icon: ScanIcon, text: 'Faster registration process' }
        ]
      },
      upload: {
        icon: UploadIcon,
        title: context === 'employer' ? 'Document Upload' : 'Upload Documents',
        description: context === 'employer'
          ? 'Upload documents to extract information automatically'
          : "Upload key documents and we'll extract the information to help pre-fill your registration forms.",
        buttonText: context === 'employer' ? 'Select' : 'Upload Documents',
        features: context === 'employer' ? [] : [
          { icon: FileTextIcon, text: 'Upload passport copies' },
          { icon: FileTextIcon, text: 'Upload company extract' },
          { icon: ScanIcon, text: 'AI-powered data extraction' }
        ]
      }
    };
    return configs[method as keyof typeof configs];
  };

  const getGridCols = () => {
    return availableMethods.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3';
  };

  const getCardPadding = () => {
    return context === 'employer' ? 'p-6' : 'p-6';
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          {getContextDescription()}
        </p>
      </div>
      
      <div className={`grid ${getGridCols()} gap-6`}>
        {availableMethods.map((method) => {
          const config = getMethodConfig(method);
          const IconComponent = config.icon;
          
          return (
            <div
              key={method}
              className={`${context === 'employer' ? 'border' : 'bg-white border'} border-gray-200 rounded-lg ${getCardPadding()} hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors`}
              onClick={() => onSelectMethod(method)}
            >
              <div className="flex flex-col items-center text-center p-4">
                <IconComponent className={`${context === 'employer' ? 'h-12 w-12' : 'h-16 w-16'} text-blue-600 mb-4`} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {config.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {config.description}
                </p>
                
                {config.features.length > 0 && (
                  <ul className="text-sm text-gray-600 text-left space-y-2 mb-6 w-full">
                    {config.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <li key={index} className="flex items-start">
                          <FeatureIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
                
                <button className={`${context === 'employer' ? 'mt-2 flex items-center text-blue-600 text-sm font-medium' : 'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center'}`}>
                  {config.buttonText}
                  <ArrowRightIcon className={`${context === 'employer' ? 'ml-1 h-4 w-4' : 'ml-2 h-4 w-4'}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
