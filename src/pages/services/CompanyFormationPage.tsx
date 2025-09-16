import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { CountrySelector } from '../../components/services/CountrySelector';
import { ArrowRightIcon, BuildingIcon, CheckIcon, ChevronDownIcon, ClockIcon, CoinsIcon, FileTextIcon, GlobeIcon, InfoIcon, LayoutGridIcon, LightbulbIcon, MapPinIcon, ScaleIcon, ShieldIcon, TimerIcon, TrendingUpIcon, CheckCircleIcon, XCircleIcon, HelpCircleIcon, LayoutDashboardIcon, MonitorIcon, CloudIcon, ShieldCheckIcon, RocketIcon, ZapIcon, BarChartIcon, StarIcon, BriefcaseIcon, UploadIcon, DownloadIcon, MessageCircleIcon, ChevronUpIcon, UsersIcon, PlusIcon, CalendarIcon, AlertCircleIcon, BellIcon, UserIcon } from 'lucide-react';
import { SimpleImage } from '../../components/common/SimpleImage';
// Country-specific data
const COUNTRY_DATA = {
  netherlands: {
    name: 'Netherlands',
    flag: '🇳🇱',
    color: '#EA3A70',
    processingTime: '3-5 business days',
    complexity: 'Low',
    capitalRequirement: '€0.01',
    registrationFee: '€395',
    mainEntityType: 'BV (Private Limited Company)',
    secondaryEntityType: 'Branch Office',
    benefits: ['Fast registration process (3-5 days)', 'Minimal capital requirement (€0.01)', 'Extensive tax treaty network', 'Innovation-friendly business climate'],
    statistics: {
      easeOfBusiness: '#4 in EU',
      corporateTax: '25.8%',
      foreignCompanies: '15,000+',
      processingDays: '4'
    },
    entityStructures: [{
      name: 'BV (Private Limited Company)',
      description: 'Limited liability company with shares',
      capitalRequirement: '€0.01',
      timeline: '3-5 days',
      liability: 'Limited to share capital',
      suitableFor: 'Most business activities'
    }, {
      name: 'Branch Office',
      description: 'Extension of foreign company',
      capitalRequirement: 'None',
      timeline: '2-4 days',
      liability: 'Parent company fully liable',
      suitableFor: 'Testing the market before full entry'
    }],
    requirements: ['Valid passport/ID for all directors', 'Proof of address for directors', 'Articles of association', 'Parent company documents (for branch)'],
    registrationSteps: ['Digital onboarding and KYC verification', 'Document submission', 'Digital notarization', 'KVK (Chamber of Commerce) registration', 'Tax registration']
  },
  germany: {
    name: 'Germany',
    flag: '🇩🇪',
    color: '#003E6B',
    processingTime: '7-14 business days',
    complexity: 'Medium',
    capitalRequirement: '€25,000',
    registrationFee: '€595',
    mainEntityType: 'GmbH (Private Limited Company)',
    secondaryEntityType: 'Branch Office',
    benefits: ["Access to Europe's largest economy", 'Strong legal framework', 'Excellent infrastructure', 'Skilled workforce availability'],
    statistics: {
      easeOfBusiness: '#8 in EU',
      corporateTax: '30%',
      foreignCompanies: '20,000+',
      processingDays: '10'
    },
    entityStructures: [{
      name: 'GmbH (Private Limited Company)',
      description: 'Limited liability company with shares',
      capitalRequirement: '€25,000 (12,500 paid up)',
      timeline: '7-14 days',
      liability: 'Limited to share capital',
      suitableFor: 'Medium to large businesses'
    }, {
      name: 'UG (Mini GmbH)',
      description: 'Entrepreneurial company with limited liability',
      capitalRequirement: '€1',
      timeline: '5-10 days',
      liability: 'Limited to share capital',
      suitableFor: 'Startups with limited capital'
    }, {
      name: 'Branch Office',
      description: 'Extension of foreign company',
      capitalRequirement: 'None',
      timeline: '4-8 days',
      liability: 'Parent company fully liable',
      suitableFor: 'Testing the market before full entry'
    }],
    requirements: ['Valid passport/ID for all directors', 'Proof of address for directors', 'Articles of association', 'Bank confirmation of capital deposit', 'Parent company documents (for branch)'],
    registrationSteps: ['Digital onboarding and KYC verification', 'Document submission', 'Notarization of articles', 'Bank account opening and capital deposit', 'Commercial register entry', 'Tax registration']
  },
  france: {
    name: 'France',
    flag: '🇫🇷',
    color: '#002654',
    processingTime: '5-10 business days',
    complexity: 'Medium',
    capitalRequirement: '€1',
    registrationFee: '€495',
    mainEntityType: 'SAS (Simplified Joint-Stock Company)',
    secondaryEntityType: 'Branch Office',
    benefits: ['Strategic location in Western Europe', 'Large consumer market', 'R&D incentives', 'Strong IP protection'],
    statistics: {
      easeOfBusiness: '#10 in EU',
      corporateTax: '28%',
      foreignCompanies: '12,000+',
      processingDays: '7'
    },
    entityStructures: [{
      name: 'SAS (Simplified Joint-Stock Company)',
      description: 'Flexible limited liability company',
      capitalRequirement: '€1',
      timeline: '5-10 days',
      liability: 'Limited to contributions',
      suitableFor: 'Most business activities'
    }, {
      name: 'SARL (Limited Liability Company)',
      description: 'Traditional limited liability company',
      capitalRequirement: '€1',
      timeline: '5-10 days',
      liability: 'Limited to contributions',
      suitableFor: 'Small to medium businesses'
    }, {
      name: 'Branch Office',
      description: 'Extension of foreign company',
      capitalRequirement: 'None',
      timeline: '3-7 days',
      liability: 'Parent company fully liable',
      suitableFor: 'Testing the market before full entry'
    }],
    requirements: ['Valid passport/ID for all directors', 'Proof of address for directors', 'Articles of association', 'Registered office address', 'Parent company documents (for branch)'],
    registrationSteps: ['Digital onboarding and KYC verification', 'Document submission', 'Publication in legal gazette', 'Registration with Trade Register (RCS)', 'Tax and social security registration']
  },
  spain: {
    name: 'Spain',
    flag: '🇪🇸',
    color: '#AA151B',
    processingTime: '10-15 business days',
    complexity: 'Medium',
    capitalRequirement: '€3,000',
    registrationFee: '€545',
    mainEntityType: 'SL (Limited Liability Company)',
    secondaryEntityType: 'Branch Office',
    benefits: ['Gateway to Spanish-speaking markets', 'Strategic location between Europe and Africa', 'Favorable holding company regime', 'Strong tourism and service sectors'],
    statistics: {
      easeOfBusiness: '#14 in EU',
      corporateTax: '25%',
      foreignCompanies: '10,000+',
      processingDays: '12'
    },
    entityStructures: [{
      name: 'SL (Limited Liability Company)',
      description: 'Standard limited liability company',
      capitalRequirement: '€3,000',
      timeline: '10-15 days',
      liability: 'Limited to share capital',
      suitableFor: 'Small to medium businesses'
    }, {
      name: 'SA (Public Limited Company)',
      description: 'Public limited company with shares',
      capitalRequirement: '€60,000',
      timeline: '15-20 days',
      liability: 'Limited to share capital',
      suitableFor: 'Larger businesses and public offerings'
    }, {
      name: 'Branch Office',
      description: 'Extension of foreign company',
      capitalRequirement: 'None',
      timeline: '7-12 days',
      liability: 'Parent company fully liable',
      suitableFor: 'Testing the market before full entry'
    }],
    requirements: ['Valid passport/ID for all directors', 'Proof of address for directors', 'Articles of association', 'Bank certificate of capital deposit', 'Parent company documents (for branch)'],
    registrationSteps: ['Digital onboarding and KYC verification', 'Document submission', 'Notarization of articles', 'Bank account opening and capital deposit', 'Registration with Commercial Registry', 'Tax registration and obtaining CIF']
  }
};
// Default country data
const DEFAULT_COUNTRY_DATA = {
  name: 'EU Country',
  flag: '🇪🇺',
  color: '#004494',
  processingTime: '10-15 business days',
  complexity: 'Medium',
  capitalRequirement: 'Varies',
  registrationFee: '€495',
  mainEntityType: 'Limited Liability Company',
  secondaryEntityType: 'Branch Office',
  benefits: ['Access to EU single market', 'European business presence', 'EU regulatory compliance', 'Gateway to European expansion'],
  statistics: {
    easeOfBusiness: 'Varies',
    corporateTax: 'Varies',
    foreignCompanies: '5,000+',
    processingDays: '12'
  },
  entityStructures: [{
    name: 'Limited Liability Company',
    description: 'Standard limited liability company',
    capitalRequirement: 'Varies by country',
    timeline: '7-15 days',
    liability: 'Limited to share capital',
    suitableFor: 'Most business activities'
  }, {
    name: 'Branch Office',
    description: 'Extension of foreign company',
    capitalRequirement: 'None',
    timeline: '5-10 days',
    liability: 'Parent company fully liable',
    suitableFor: 'Testing the market before full entry'
  }],
  requirements: ['Valid passport/ID for all directors', 'Proof of address for directors', 'Articles of association', 'Additional documents vary by country'],
  registrationSteps: ['Digital onboarding and KYC verification', 'Document submission', 'Legal formalization (varies by country)', 'Business registry registration', 'Tax registration']
};
// Add after DEFAULT_COUNTRY_DATA and before the component
const registrationProgress = {
  status: 'in-progress',
  steps: [{
    id: 1,
    name: 'Document Collection',
    date: 'June 10, 2024',
    completed: true
  }, {
    id: 2,
    name: 'Document Processing',
    date: 'June 11, 2024',
    completed: false
  }, {
    id: 3,
    name: 'Official Filing',
    date: 'June 12, 2024',
    completed: false
  }, {
    id: 4,
    name: 'Registration Complete',
    date: 'June 13, 2024',
    completed: false
  }]
};
const documents = [{
  id: 1,
  name: 'Certificate of Incorporation',
  date: 'June 10, 2024',
  status: 'available'
}, {
  id: 2,
  name: 'Articles of Association',
  date: 'Pending',
  status: 'pending'
}, {
  id: 3,
  name: 'Company Extract',
  date: 'Pending',
  status: 'pending'
}, {
  id: 4,
  name: 'VAT Registration',
  date: 'Pending',
  status: 'pending'
}];
const generalFaqs = [{
  question: 'How long does it take to form a company in the EU?',
  answer: 'Formation times vary by country, typically ranging from 3-5 business days in the Netherlands to 10-15 days in other EU countries. Our expedited services can reduce these timeframes in many jurisdictions.'
}, {
  question: 'What are the minimum capital requirements?',
  answer: 'Capital requirements vary significantly across the EU. Some countries like the Netherlands require as little as €0.01, while others like Germany require €25,000 for a GmbH. Our country selector provides specific information for each jurisdiction.'
}, {
  question: 'Do I need to be physically present to form a company?',
  answer: 'No, our digital-first approach allows you to complete the entire process remotely for all EU countries. We handle all local paperwork and filings on your behalf.'
}, {
  question: 'What documents are required?',
  answer: 'Generally, you will need proof of identity (passport/ID), proof of address, and if applicable, corporate documents of the parent company. Specific requirements vary by country and can be viewed in our detailed country guides.'
}, {
  question: 'Can I open a business bank account remotely?',
  answer: 'Yes, we have partnerships with various EU banks that allow for remote account opening. The process and requirements vary by country and banking institution.'
}, {
  question: 'What ongoing compliance requirements will my company have?',
  answer: 'All EU companies have annual filing requirements, including financial statements and tax returns. Specific requirements vary by country, company type, and size. Our compliance calendar tool helps you track all deadlines.'
}];
// Country-specific FAQs
const countryFaqs = {
  netherlands: [{
    question: 'What is the difference between a Legal Entity and a Branch Office?',
    answer: 'A Legal Entity is a separate legal entity with limited liability protection for shareholders, while a Branch Office is an extension of your existing company without separate legal status. Legal Entities offer better liability protection but have more formal requirements.'
  }, {
    question: 'How does the Dutch tax system work for companies?',
    answer: 'The Netherlands has a corporate tax rate of 15% on the first €395,000 of profits and 25.8% on profits exceeding that amount. The country is known for its extensive tax treaty network and favorable holding company regime.'
  }, {
    question: 'What is the UBO register in the Netherlands?',
    answer: 'The UBO (Ultimate Beneficial Owner) register requires all Dutch companies to register individuals who ultimately own or control the company (25% or more ownership/voting rights). This information must be registered with the Chamber of Commerce.'
  }],
  germany: [{
    question: 'What is the difference between a GmbH and a UG in Germany?',
    answer: 'A GmbH (Gesellschaft mit beschränkter Haftung) requires a minimum capital of €25,000, while a UG (Unternehmergesellschaft) can be formed with just €1. UGs must accumulate 25% of annual profits until they reach the €25,000 threshold.'
  }, {
    question: 'Is a German residence permit required to form a company?',
    answer: 'Non-EU citizens do not need a residence permit to form a company in Germany, but may need one to act as a managing director. We can provide local nominee directors as a solution while you arrange your residence status.'
  }, {
    question: 'How does the German trade tax system work?',
    answer: 'In addition to corporate income tax, German companies are subject to trade tax (Gewerbesteuer), which varies by municipality (typically between 14-17%). This makes the effective corporate tax rate approximately 30-33%.'
  }],
  france: [{
    question: 'What is the difference between SAS and SARL in France?',
    answer: 'An SAS (Société par Actions Simplifiée) offers more flexibility in governance and is suitable for companies seeking external investment. A SARL (Société à Responsabilité Limitée) has a more rigid structure but simpler governance, making it suitable for smaller businesses.'
  }, {
    question: 'What are the requirements for a registered office in France?',
    answer: 'Every French company must have a physical registered address in France. We offer virtual office services with a prestigious Paris address that fulfills all legal requirements.'
  }, {
    question: 'How does the French social security system affect employers?',
    answer: 'French employers must pay substantial social security contributions (approximately 40-45% of gross salary). These cover health insurance, pension, unemployment, and other social benefits for employees.'
  }],
  spain: [{
    question: 'What is the difference between SL and SA in Spain?',
    answer: 'An SL (Sociedad Limitada) requires €3,000 minimum capital and is suitable for small to medium businesses. An SA (Sociedad Anónima) requires €60,000 minimum capital and is designed for larger businesses or those planning to go public.'
  }, {
    question: 'What is the process for obtaining a CIF in Spain?',
    answer: 'The CIF (Código de Identificación Fiscal) is the tax identification number for Spanish companies. It is initially provisional when you form your company and becomes permanent once all formation steps are completed. We handle the entire application process.'
  }, {
    question: 'Are there regional differences in company formation in Spain?',
    answer: 'Yes, Spain has 17 autonomous communities with varying regional regulations. These can affect aspects like regional taxes, grants, and specific business permits. Our service includes guidance on regional specificities based on your chosen location.'
  }]
};
const countries = {
  netherlands: 'Netherlands',
  germany: 'Germany',
  france: 'France',
  spain: 'Spain',
  italy: 'Italy',
  belgium: 'Belgium',
  ireland: 'Ireland'
};
export function CompanyFormationPage() {
  const [selectedCountry, setSelectedCountry] = useState('netherlands');
  const [formStep, setFormStep] = useState(1);
  const [companyType, setCompanyType] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);
  // Get country data with fallback to default
  const getCountryData = countryCode => {
    return COUNTRY_DATA[countryCode] || {
      ...DEFAULT_COUNTRY_DATA,
      name: countryCode.charAt(0).toUpperCase() + countryCode.slice(1)
    };
  };
  const currentCountryData = getCountryData(selectedCountry);
  // Get country-specific FAQs with fallback to general FAQs
  const getFaqs = countryCode => {
    return countryFaqs[countryCode] || generalFaqs.slice(0, 4);
  };
  const currentFaqs = getFaqs(selectedCountry);
  // Load selected country from localStorage on initial load
  useEffect(() => {
    const savedCountry = localStorage.getItem('preferredCountry');
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry);
    }
  }, []);
  // Save country preference to localStorage
  const handleCountrySelect = country => {
    setSelectedCountry(country);
    localStorage.setItem('preferredCountry', country);
  };
  const toggleFaq = index => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  const filteredCountries = Object.entries(countries).filter(([key, name]) => name.toLowerCase().includes(searchQuery.toLowerCase()));
  return <MainLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80)`,
        filter: 'brightness(0.2)'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0826]/90 to-[#0A0826]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <BuildingIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
                <span className="text-indigo-300 text-sm font-medium">
                  Business Formation
                </span>


  {/* Move CountrySelector to top right */}
 

  <div className="absolute top-4 right-4 z-20">
    <CountrySelector 
      onCountrySelect={handleCountrySelect} 
      selectedCountry={selectedCountry} 
    />
  </div>

              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Company Formation in {currentCountryData.name}
              </h1>
              <p className="text-xl text-indigo-200 max-w-2xl">
                Fast, secure, and hassle-free company registration through our
                digital platform. Get your {currentCountryData.name} company up
                and running in {currentCountryData.processingTime}.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">

            <Link to={`/pricing`} className="px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg shadow-lg shadow-[#EA3A70]/20 font-medium flex items-center justify-center">
              Start Formation Process
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <ClockIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">
                {currentCountryData.statistics.processingDays} days
              </div>
              <div className="text-sm text-indigo-300">
                Average Formation Time
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <BuildingIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">
                {currentCountryData.statistics.foreignCompanies}
              </div>
              <div className="text-sm text-indigo-300">Foreign Companies</div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <CoinsIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">
                {currentCountryData.statistics.corporateTax}
              </div>
              <div className="text-sm text-indigo-300">Corporate Tax Rate</div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <TrendingUpIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">
                {currentCountryData.statistics.easeOfBusiness}
              </div>
              <div className="text-sm text-indigo-300">
                Ease of Doing Business
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portal Features Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Digital Platform Makes Company Formation Easy
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Experience a streamlined, fully digital process designed for
              entrepreneurs worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-indigo-900/20 rounded-xl overflow-hidden border border-indigo-500/30">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-lg mr-4">
                    <LayoutDashboardIcon className="h-6 w-6 text-[#EA3A70]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Interactive Portal
                  </h3>
                </div>
                <p className="text-indigo-200 mb-6">
                  Our intuitive dashboard guides you through each step of the
                  company formation process, from entity selection to document
                  submission and registration tracking.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Simple step-by-step process
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Real-time status updates
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Secure document upload
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-indigo-500/30 bg-indigo-900/30 p-4">
                <SimpleImage imageName="branch_registration_portal.jpg" alt="Company Formation Portal Interface" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="bg-indigo-900/20 rounded-xl overflow-hidden border border-indigo-500/30">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-lg mr-4">
                    <MessageCircleIcon className="h-6 w-6 text-[#EA3A70]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    AI Company Formation Agent
                  </h3>
                </div>
                <p className="text-indigo-200 mb-6">
                  Our AI assistant guides you through the entire formation
                  process, answering questions about business structures in{' '}
                  {currentCountryData.name} and helping with statutory
                  documents.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      24/7 instant assistance
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Personalized recommendations
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Document explanation and guidance
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-indigo-500/30 bg-indigo-900/30 p-4">
                <SimpleImage imageName="company_formation_chatbot_demo.jpg" alt="AI Company Formation Agent" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="p-3 bg-indigo-900/50 rounded-lg inline-block mb-4">
                <UploadIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Document Management
              </h3>
              <p className="text-indigo-200 mb-4">
                Secure upload and storage of all formation documents with guided
                submission requirements for {currentCountryData.name}
              </p>
              <SimpleImage imageName="branch_registration_upload_documents.jpg" alt="Document Management Interface" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="p-3 bg-indigo-900/50 rounded-lg inline-block mb-4">
                <ClockIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Real-time Progress Tracking
              </h3>
              <p className="text-indigo-200 mb-4">
                Monitor every step of your company formation with detailed
                status updates and timeline
              </p>
              <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/50">
                <div className="space-y-3">
                  {registrationProgress.steps.slice(0, 3).map(step => <div key={step.id} className="flex items-center">
                      {step.completed ? <div className="h-6 w-6 rounded-full bg-[#EA3A70] flex items-center justify-center mr-3">
                          <CheckIcon className="h-4 w-4 text-white" />
                        </div> : <div className="h-6 w-6 rounded-full border border-indigo-500/50 flex items-center justify-center mr-3">
                          <span className="text-indigo-300 text-xs">
                            {step.id}
                          </span>
                        </div>}
                      <div>
                        <p className="text-white text-sm">{step.name}</p>
                        <p className="text-indigo-300 text-xs">{step.date}</p>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="p-3 bg-indigo-900/50 rounded-lg inline-block mb-4">
                <GlobeIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Remote Formation
              </h3>
              <p className="text-indigo-200 mb-4">
                Complete the entire process from anywhere in the world, with no
                need to visit {currentCountryData.name}
              </p>
              <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/50">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Digital document submission
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Video verification for KYC
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Electronic signatures
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Virtual business address
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Entity Selection Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your {currentCountryData.name} Business Structure
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Select the right legal structure for your business needs and
              objectives
            </p>
          </div>
          <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 rounded-full bg-[#EA3A70] text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Select Company Type
                </h2>
                <p className="text-indigo-300">
                  Select the type of company you want to establish in{' '}
                  {currentCountryData.name}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`bg-[#0F0B1F] rounded-xl p-6 border-2 cursor-pointer transition-colors ${companyType === 'branch' ? 'border-[#EA3A70]' : 'border-[#2D2755] hover:border-[#EA3A70]/50'}`} onClick={() => setCompanyType('branch')}>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#EA3A70]/10 p-3 rounded-lg">
                    <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
                  </div>
                  {companyType === 'branch' && <div className="bg-[#EA3A70] rounded-full p-1">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentCountryData.secondaryEntityType}
                </h3>
                <p className="text-indigo-300 mb-4">
                  Establish a branch of your existing company in{' '}
                  {currentCountryData.name}. Simpler setup, but operates under
                  the liability of the parent company.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-300">
                      Faster registration process
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-300">
                      Lower capital requirements
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-300">
                      Simplified accounting
                    </span>
                  </div>
                </div>
              </div>
              <div className={`bg-[#0F0B1F] rounded-xl p-6 border-2 cursor-pointer transition-colors ${companyType === 'entity' ? 'border-[#EA3A70]' : 'border-[#2D2755] hover:border-[#EA3A70]/50'}`} onClick={() => setCompanyType('entity')}>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#EA3A70]/10 p-3 rounded-lg">
                    <BriefcaseIcon className="h-8 w-8 text-[#EA3A70]" />
                  </div>
                  {companyType === 'entity' && <div className="bg-[#EA3A70] rounded-full p-1">
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentCountryData.mainEntityType}
                </h3>
                <p className="text-indigo-300 mb-4">
                  Form a new independent company with its own legal identity in{' '}
                  {currentCountryData.name}. More formalities but offers limited
                  liability protection.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-300">
                      Limited liability protection
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-300">
                      Greater operational autonomy
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-300">
                      Better perception with local clients
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 mt-4">
                <button onClick={() => window.location.href = `/portal/company-formation/${selectedCountry}`} disabled={!companyType} className={`w-full py-3 rounded-lg font-medium ${companyType ? 'bg-[#EA3A70] text-white hover:bg-[#EA3A70]/90' : 'bg-[#2D2755] text-gray-400 cursor-not-allowed'} transition-colors`}>
                  Continue in Our Portal
                </button>
              </div>
            </div>
          </div>
          <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#EA3A70]/10 rounded-lg mr-4">
                <AlertCircleIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Not sure which structure is right for you?
              </h3>
            </div>
            <p className="text-indigo-200 mb-6">
              Our AI Company Formation Agent can help you determine the best
              structure based on your specific business needs, goals, and
              circumstances in {currentCountryData.name}.
            </p>
            <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30">
              <div className="flex items-start space-x-4">
                <div className="bg-[#EA3A70] rounded-full p-2 flex-shrink-0">
                  <MessageCircleIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white">
                    "Hi there! I'm Emma, your AI business setup assistant. I can
                    help you choose between a{' '}
                    {currentCountryData.secondaryEntityType} and a{' '}
                    {currentCountryData.mainEntityType} based on your specific
                    situation. Would you like me to ask you a few questions to
                    determine the best option?"
                  </p>
                  <div className="mt-4">
                    <Link to="/portal/ai-advisor" className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center">
                      Chat with AI Advisor
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business Entity Types Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {currentCountryData.name} Business Entity Types
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Compare the different legal structures available in{' '}
              {currentCountryData.name}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-indigo-900/20 rounded-xl border border-indigo-500/30">
              <thead>
                <tr className="border-b border-indigo-500/30">
                  <th className="px-6 py-4 text-left text-white">
                    Entity Type
                  </th>
                  <th className="px-6 py-4 text-left text-white">
                    Capital Requirement
                  </th>
                  <th className="px-6 py-4 text-left text-white">
                    Formation Timeline
                  </th>
                  <th className="px-6 py-4 text-left text-white">Liability</th>
                  <th className="px-6 py-4 text-left text-white">Best For</th>
                </tr>
              </thead>
              <tbody>
                {currentCountryData.entityStructures.map((entity, index) => <tr key={index} className="border-b border-indigo-500/30">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">
                        {entity.name}
                      </div>
                      <div className="text-sm text-indigo-300">
                        {entity.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-indigo-200">
                      {entity.capitalRequirement}
                    </td>
                    <td className="px-6 py-4 text-indigo-200">
                      {entity.timeline}
                    </td>
                    <td className="px-6 py-4 text-indigo-200">
                      {entity.liability}
                    </td>
                    <td className="px-6 py-4 text-indigo-200">
                      {entity.suitableFor}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Process Timeline Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Streamlined Formation Process
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Experience a faster, simpler way to establish your business in{' '}
              {currentCountryData.name}
            </p>
          </div>
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 mb-12">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Digital {currentCountryData.mainEntityType} Formation:{' '}
                  {currentCountryData.processingTime}
                </h3>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-0 h-full w-0.5 bg-indigo-500/30"></div>
                <div className="space-y-8">
                  {currentCountryData.registrationSteps.map((step, index) => <div key={index} className="relative flex items-start">
                      <div className="absolute left-6 top-6 h-0.5 w-6 bg-indigo-500/30"></div>
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-900/50 border border-indigo-500/30 flex items-center justify-center z-10">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="ml-8 bg-indigo-900/20 rounded-lg p-4 border border-indigo-500/30 flex-grow">
                        <h4 className="text-white font-medium mb-1">{step}</h4>
                        <div className="flex items-center text-indigo-300 text-xs">
                          <TimerIcon className="h-4 w-4 mr-1" />
                          {index === 0 ? '30 minutes' : index === 1 ? '1 day' : index === 2 ? '1-2 days' : index === 3 ? '1 day' : 'Same day'}
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#EA3A70]/10 rounded-lg mr-4">
                  <UploadIcon className="h-6 w-6 text-[#EA3A70]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Document Requirements
                </h3>
              </div>
              <div className="space-y-4">
                {currentCountryData.requirements.map((requirement, index) => <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-indigo-200">{requirement}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#EA3A70]/10 rounded-lg mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-[#EA3A70]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Post-Registration Support
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">
                      Bank Account Setup
                    </h4>
                    <p className="text-indigo-200 text-sm">
                      Assistance with opening a {currentCountryData.name}{' '}
                      business bank account
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Tax Registration</h4>
                    <p className="text-indigo-200 text-sm">
                      VAT and corporate tax registration assistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">
                      Compliance Calendar
                    </h4>
                    <p className="text-indigo-200 text-sm">
                      Automated reminders for all statutory deadlines
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Digital Mailbox</h4>
                    <p className="text-indigo-200 text-sm">
                      Virtual business address with mail scanning and forwarding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Order Process Preview */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Simple 3-Step Order Process
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our streamlined process makes it easy to get started with your
              {currentCountryData.name} company formation
            </p>
          </div>
          <div className="bg-[#0A0826] rounded-xl border border-indigo-500/30 overflow-hidden">
            <div className="border-b border-indigo-500/30 p-4">
              <div className="flex space-x-4">
                <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'overview' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                  Overview
                </button>
                <button onClick={() => setActiveTab('order')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'order' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                  Order Form
                </button>
                <button onClick={() => setActiveTab('progress')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'progress' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                  Progress Tracking
                </button>
                <button onClick={() => setActiveTab('documents')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'documents' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                  Documents
                </button>
              </div>
            </div>
            <div className="p-6">
              {/* Order Form Section */}
              {activeTab === 'order' && <div className="space-y-8">
                  <div className="flex items-center mb-6">
                    <div className="h-8 w-8 rounded-full bg-[#EA3A70] text-white flex items-center justify-center font-bold">
                      {formStep}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-white">
                        {formStep === 1 ? 'Select Company Type' : formStep === 2 ? 'Choose Country' : 'Complete Your Order'}
                      </h2>
                      <p className="text-indigo-300">
                        {formStep === 1 ? 'Select the type of company you want to establish' : formStep === 2 ? 'Choose the country where you want to form your company' : 'Provide your details to complete the registration'}
                      </p>
                    </div>
                  </div>
                  {/* Step 1: Company Type Selection */}
                  {formStep === 1 && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className={`bg-[#0F0B1F] rounded-xl p-6 border-2 cursor-pointer transition-colors ${companyType === 'branch' ? 'border-[#EA3A70]' : 'border-[#2D2755] hover:border-[#EA3A70]/50'}`} onClick={() => setCompanyType('branch')}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="bg-[#EA3A70]/10 p-3 rounded-lg">
                            <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
                          </div>
                          {companyType === 'branch' && <div className="bg-[#EA3A70] rounded-full p-1">
                              <CheckIcon className="h-4 w-4 text-white" />
                            </div>}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Branch Office
                        </h3>
                        <p className="text-indigo-300 mb-4">
                          Establish a branch of your existing company in a new
                          country. Simpler setup, but operates under the
                          liability of the parent company.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo-300">
                              Faster registration process
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo-300">
                              Lower capital requirements
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo-300">
                              Simplified accounting
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`bg-[#0F0B1F] rounded-xl p-6 border-2 cursor-pointer transition-colors ${companyType === 'entity' ? 'border-[#EA3A70]' : 'border-[#2D2755] hover:border-[#EA3A70]/50'}`} onClick={() => setCompanyType('entity')}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="bg-[#EA3A70]/10 p-3 rounded-lg">
                            <BriefcaseIcon className="h-8 w-8 text-[#EA3A70]" />
                          </div>
                          {companyType === 'entity' && <div className="bg-[#EA3A70] rounded-full p-1">
                              <CheckIcon className="h-4 w-4 text-white" />
                            </div>}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Legal Entity
                        </h3>
                        <p className="text-indigo-300 mb-4">
                          Form a new independent company with its own legal
                          identity. More formalities but offers limited
                          liability protection.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo-300">
                              Limited liability protection
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo-300">
                              Greater operational autonomy
                            </span>
                          </div>
                          <div className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-indigo-300">
                              Better perception with local clients
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-2 mt-4">
                        <button onClick={() => setFormStep(2)} disabled={!companyType} className={`w-full py-3 rounded-lg font-medium ${companyType ? 'bg-[#EA3A70] text-white hover:bg-[#EA3A70]/90' : 'bg-[#2D2755] text-indigo-400 cursor-not-allowed'} transition-colors`}>
                          Continue
                        </button>
                      </div>
                    </div>}
                  {/* Step 2: Country Selection */}
                  {formStep === 2 && <div>
                      <div className="relative mb-6">
                        <div className="flex items-center justify-between p-4 bg-[#0F0B1F] border border-[#2D2755] rounded-lg cursor-pointer" onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}>
                          <div className="flex items-center">
                            <GlobeIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                            <span className="text-white">
                              {selectedCountry ? countries[selectedCountry] : 'Select a country'}
                            </span>
                          </div>
                          <ChevronDownIcon className={`h-5 w-5 text-indigo-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isCountryDropdownOpen && <div className="absolute z-10 mt-1 w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg shadow-lg max-h-64 overflow-y-auto">
                            <div className="p-2">
                              <div className="relative mb-2">
                                <input type="text" placeholder="Search countries..." className="w-full bg-[#1B1537] border border-[#2D2755] rounded-lg pl-4 pr-4 py-2 text-white focus:outline-none focus:border-[#EA3A70]" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                              </div>
                              <div className="space-y-1">
                                {filteredCountries.map(([key, name]) => <div key={key} className={`px-3 py-2 rounded-md cursor-pointer ${selectedCountry === key ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-[#2D2755]'}`} onClick={() => handleCountrySelect(key)}>
                                    {name}
                                  </div>)}
                              </div>
                            </div>
                          </div>}
                      </div>
                      {selectedCountry && <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6 mb-6">
                          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="bg-[#EA3A70]/10 p-2 rounded-full mr-3">
                              <BuildingIcon className="h-5 w-5 text-[#EA3A70]" />
                            </span>
                            {companyType === 'branch' ? `Branch in ${countries[selectedCountry]}` : `${countries[selectedCountry]} ${currentCountryData.mainEntityType}`}
                          </h3>
                          <div className="space-y-4">
                            <div className="flex justify-between py-2 border-b border-[#2D2755]">
                              <span className="text-indigo-300">
                                Registration Time
                              </span>
                              <span className="text-white font-medium">
                                {currentCountryData.processingTime}
                              </span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-[#2D2755]">
                              <span className="text-indigo-300">
                                Capital Requirement
                              </span>
                              <span className="text-white font-medium">
                                {companyType === 'branch' ? 'None' : currentCountryData.capitalRequirement}
                              </span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-[#2D2755]">
                              <span className="text-indigo-300">
                                VAT Registration
                              </span>
                              <span className="text-white font-medium">
                                Included
                              </span>
                            </div>
                            <div className="flex justify-between py-2">
                              <span className="text-indigo-300">Price</span>
                              <span className="text-[#EA3A70] font-bold text-xl">
                                {companyType === 'branch' ? selectedCountry === 'netherlands' ? '€895' : selectedCountry === 'germany' ? '€1,295' : selectedCountry === 'france' ? '€1,195' : '€1,495' : selectedCountry === 'netherlands' ? '€1,495' : selectedCountry === 'germany' ? '€1,995' : selectedCountry === 'france' ? '€1,795' : '€2,195'}
                              </span>
                            </div>
                          </div>
                          <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <button onClick={() => setFormStep(3)} className="flex-1 bg-[#EA3A70] text-white py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors">
                              Continue
                            </button>
                            <button onClick={() => setFormStep(1)} className="flex-1 border border-[#2D2755] text-white py-3 rounded-lg font-medium hover:bg-[#2D2755] transition-colors">
                              Back
                            </button>
                          </div>
                        </div>}
                      {!selectedCountry && <div className="flex justify-end mt-4">
                          <button onClick={() => setFormStep(1)} className="border border-[#2D2755] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2D2755] transition-colors">
                            Back
                          </button>
                        </div>}
                    </div>}
                  {/* Step 3: Order Form */}
                  {formStep === 3 && <div className="space-y-6">
                      <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6">
                        <h3 className="text-xl font-bold text-white mb-4">
                          Order Summary
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between py-2 border-b border-[#2D2755]">
                            <span className="text-indigo-300">
                              Company Type
                            </span>
                            <span className="text-white font-medium">
                              {companyType === 'branch' ? currentCountryData.secondaryEntityType : currentCountryData.mainEntityType}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-[#2D2755]">
                            <span className="text-indigo-300">Country</span>
                            <span className="text-white font-medium">
                              {currentCountryData.name}
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-[#2D2755]">
                            <span className="text-indigo-300">
                              Registration Fee
                            </span>
                            <span className="text-white font-medium">
                              {companyType === 'branch' ? 
                                selectedCountry === 'netherlands' ? '€80' : 
                                selectedCountry === 'germany' ? '€899' : 
                                selectedCountry === 'france' ? '€1,850' : 
                                selectedCountry === 'spain' ? '€1,050' : 
                                selectedCountry === 'italy' ? '€1,300' : 
                                selectedCountry === 'austria' ? '€1,728' : 
                                selectedCountry === 'poland' ? '€600' : 
                                selectedCountry === 'estonia' ? '€190' : 
                                selectedCountry === 'bulgaria' ? '€500' : 
                                selectedCountry === 'hungary' ? '€700' : '€800'
                              : 
                                selectedCountry === 'netherlands' ? '€799' : 
                                selectedCountry === 'germany' ? '€1,500' : 
                                selectedCountry === 'france' ? '€2,500' : 
                                selectedCountry === 'spain' ? '€2,500' : 
                                selectedCountry === 'italy' ? '€2,800' : 
                                selectedCountry === 'austria' ? '€2,200' : 
                                selectedCountry === 'poland' ? '€1,200' : 
                                selectedCountry === 'estonia' ? '€265' : 
                                selectedCountry === 'bulgaria' ? '€650' : 
                                selectedCountry === 'hungary' ? '€1,500' : '€1,500'
                              }
                            </span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-[#2D2755]">
                            <span className="text-indigo-300">
                              Government Fees
                            </span>
                            <span className="text-white font-medium">
                              {companyType === 'branch' ? 
                                selectedCountry === 'netherlands' ? '€0' : 
                                selectedCountry === 'germany' ? '€49' : 
                                selectedCountry === 'france' ? '€100' : 
                                selectedCountry === 'spain' ? '€300' : 
                                selectedCountry === 'italy' ? '€200' : 
                                selectedCountry === 'austria' ? '€200' : 
                                selectedCountry === 'poland' ? '€100' : 
                                selectedCountry === 'estonia' ? '€0' : 
                                selectedCountry === 'bulgaria' ? '€100' : 
                                selectedCountry === 'hungary' ? '€50' : '€100'
                              : 
                                selectedCountry === 'netherlands' ? '€100' : 
                                selectedCountry === 'germany' ? '€400' : 
                                selectedCountry === 'france' ? '€400' : 
                                selectedCountry === 'spain' ? '€700' : 
                                selectedCountry === 'italy' ? '€500' : 
                                selectedCountry === 'austria' ? '€300' : 
                                selectedCountry === 'poland' ? '€200' : 
                                selectedCountry === 'estonia' ? '€75' : 
                                selectedCountry === 'bulgaria' ? '€200' : 
                                selectedCountry === 'hungary' ? '€200' : '€200'
                              }
                            </span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-indigo-300 font-bold">
                              Total
                            </span>
                            <span className="text-[#EA3A70] font-bold text-xl">
                              {companyType === 'branch' ? 
                                selectedCountry === 'netherlands' ? '€80' : 
                                selectedCountry === 'germany' ? '€899' : 
                                selectedCountry === 'france' ? '€1,850' : 
                                selectedCountry === 'spain' ? '€1,050' : 
                                selectedCountry === 'italy' ? '€1,300' : 
                                selectedCountry === 'austria' ? '€1,728' : 
                                selectedCountry === 'poland' ? '€600' : 
                                selectedCountry === 'estonia' ? '€190' : 
                                selectedCountry === 'bulgaria' ? '€500' : 
                                selectedCountry === 'hungary' ? '€700' : '€800'
                              : 
                                selectedCountry === 'netherlands' ? '€899' : 
                                selectedCountry === 'germany' ? '€1,900' : 
                                selectedCountry === 'france' ? '€2,900' : 
                                selectedCountry === 'spain' ? '€3,200' : 
                                selectedCountry === 'italy' ? '€3,300' : 
                                selectedCountry === 'austria' ? '€2,500' : 
                                selectedCountry === 'poland' ? '€1,400' : 
                                selectedCountry === 'estonia' ? '€340' : 
                                selectedCountry === 'bulgaria' ? '€850' : 
                                selectedCountry === 'hungary' ? '€1,700' : '€1,700'
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-indigo-400 mb-2">
                            Desired Company Name*
                          </label>
                          <input type="text" className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]" required />
                        </div>
                        <div>
                          <label className="block text-sm text-indigo-400 mb-2">
                            Industry*
                          </label>
                          <select className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]" required>
                            <option value="">Select your industry</option>
                            <option value="tech">Technology</option>
                            <option value="retail">Retail</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="services">Services</option>
                            <option value="finance">Finance</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-indigo-400 mb-2">
                            Business Email*
                          </label>
                          <input type="email" className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]" required />
                        </div>
                        <div>
                          <label className="block text-sm text-indigo-400 mb-2">
                            Phone Number*
                          </label>
                          <input type="tel" className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]" required />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link to={`/portal/company-formation/${selectedCountry}`} className="flex-1 bg-[#EA3A70] text-white py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
                          Place Order
                          <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </Link>
                        <button onClick={() => setFormStep(2)} className="flex-1 border border-[#2D2755] text-white py-3 rounded-lg font-medium hover:bg-[#2D2755] transition-colors">
                          Back
                        </button>
                      </div>
                      <div className="mt-4 text-center text-sm text-indigo-400">
                        <p>
                          By placing an order, you agree to our{' '}
                          <Link to="/terms" className="text-[#EA3A70] hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" className="text-[#EA3A70] hover:underline">
                            Privacy Policy
                          </Link>
                        </p>
                      </div>
                    </div>}
                </div>}
              {/* Progress Tracking Section */}
              {activeTab === 'progress' && <div>
                  <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Registration Progress
                        </h3>
                        <p className="text-indigo-400">
                          Track the status of your company formation
                        </p>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${registrationProgress.status === 'completed' ? 'bg-green-500/20 text-green-500' : registrationProgress.status === 'in-progress' ? 'bg-[#EA3A70]/20 text-[#EA3A70]' : 'bg-yellow-500/20 text-yellow-500'}`}>
                        {registrationProgress.status === 'completed' ? 'Completed' : registrationProgress.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-6 top-0 bottom-0 w-px bg-[#2D2755]" />
                      <div className="space-y-8">
                        {registrationProgress.steps.map(step => <div key={step.id} className="relative pl-16">
                            <div className={`absolute left-4 w-5 h-5 rounded-full border-2 ${step.completed ? 'border-[#EA3A70] bg-[#EA3A70]' : 'border-[#2D2755] bg-[#0F0B1F]'}`} />
                            <div className={`bg-[#1B1537] rounded-lg p-4 border ${step.completed ? 'border-[#EA3A70]/30' : 'border-[#2D2755]'}`}>
                              <div className="flex justify-between items-center">
                                <h4 className={`font-medium ${step.completed ? 'text-white' : 'text-indigo-400'}`}>
                                  {step.name}
                                </h4>
                                <span className={`text-sm ${step.completed ? 'text-[#EA3A70]' : 'text-indigo-400'}`}>
                                  {step.date}
                                </span>
                              </div>
                              {step.id === 2 && <div className="mt-3 text-indigo-300 text-sm">
                                  <p>
                                    We're currently processing your documents.
                                    You can upload any missing documents in the
                                    Documents tab.
                                  </p>
                                </div>}
                            </div>
                          </div>)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Next Steps
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#EA3A70]/10 p-2 rounded-lg mr-3 flex-shrink-0">
                          <UploadIcon className="h-5 w-5 text-[#EA3A70]" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            Upload Required Documents
                          </h4>
                          <p className="text-indigo-400 text-sm">
                            Please upload the remaining documents in the
                            Documents tab to continue the registration process.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#EA3A70]/10 p-2 rounded-lg mr-3 flex-shrink-0">
                          <ClockIcon className="h-5 w-5 text-[#EA3A70]" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            Verification Process
                          </h4>
                          <p className="text-indigo-400 text-sm">
                            Our team will verify your documents and prepare them
                            for submission to the authorities.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#EA3A70]/10 p-2 rounded-lg mr-3 flex-shrink-0">
                          <FileTextIcon className="h-5 w-5 text-[#EA3A70]" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            Official Filing
                          </h4>
                          <p className="text-indigo-400 text-sm">
                            We'll submit your application to the relevant
                            authorities and keep you updated on the progress.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
              {/* Documents Section */}
              {activeTab === 'documents' && <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <UploadIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                        Required Documents
                      </h3>
                      <p className="text-indigo-400 mb-4">
                        Please upload the following documents to proceed with
                        your registration
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-[#1B1537] rounded-lg border border-[#2D2755]">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-3" />
                            <span className="text-white">
                              Certificate of Incorporation
                            </span>
                          </div>
                          <button className="bg-[#EA3A70] text-white text-sm px-3 py-1 rounded-md">
                            Upload
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[#1B1537] rounded-lg border border-[#2D2755]">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-3" />
                            <span className="text-white">
                              Director ID/Passport
                            </span>
                          </div>
                          <button className="bg-[#EA3A70] text-white text-sm px-3 py-1 rounded-md">
                            Upload
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[#1B1537] rounded-lg border border-[#2D2755]">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-3" />
                            <span className="text-white">
                              Proof of Address (Director)
                            </span>
                          </div>
                          <button className="bg-[#EA3A70] text-white text-sm px-3 py-1 rounded-md">
                            Upload
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[#1B1537] rounded-lg border border-[#2D2755]">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-3" />
                            <span className="text-white">
                              Articles of Association
                            </span>
                          </div>
                          <div className="flex items-center text-green-500 text-sm">
                            <CheckIcon className="h-4 w-4 mr-1" />
                            Uploaded
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <DownloadIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                        Company Documents
                      </h3>
                      <p className="text-indigo-400 mb-4">
                        Your official company documents will appear here once
                        available
                      </p>
                      <div className="space-y-4">
                        {documents.map(doc => <div key={doc.id} className="flex items-center justify-between p-3 bg-[#1B1537] rounded-lg border border-[#2D2755]">
                            <div className="flex items-center">
                              <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-3" />
                              <div>
                                <div className="text-white">{doc.name}</div>
                                <div className="text-indigo-400 text-xs">
                                  {doc.date}
                                </div>
                              </div>
                            </div>
                            {doc.status === 'available' ? <button className="bg-[#EA3A70] text-white text-sm px-3 py-1 rounded-md flex items-center">
                                <DownloadIcon className="h-4 w-4 mr-1" />
                                Download
                              </button> : <span className="text-indigo-400 text-sm">
                                Pending
                              </span>}
                          </div>)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1B1537] border border-[#2D2755] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-6">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {currentFaqs.map((faq, index) => <div key={index} className={`bg-[#0F0B1F] rounded-xl border ${expandedFaq === index ? 'border-[#EA3A70]' : 'border-[#2D2755]'} overflow-hidden transition-all`}>
                          <button className="w-full px-6 py-4 flex items-center justify-between text-left" onClick={() => toggleFaq(index)}>
                            <h3 className="font-medium text-white">
                              {faq.question}
                            </h3>
                            {expandedFaq === index ? <ChevronUpIcon className="h-5 w-5 text-[#EA3A70] flex-shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-indigo-400 flex-shrink-0" />}
                          </button>
                          {expandedFaq === index && <div className="px-6 pb-4 text-indigo-200">
                              {faq.answer}
                            </div>}
                        </div>)}
                    </div>
                  </div>
                </div>}
              {/* Overview Section */}
              {activeTab === 'overview' && <div className="space-y-6">
                  <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Digital Company Formation Portal
                    </h3>
                    <p className="text-indigo-300 mb-6">
                      Our intuitive portal guides you through every step of the
                      company formation process, from entity selection to
                      document submission and progress tracking.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#1B1537] rounded-lg p-4 border border-[#2D2755]">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-[#EA3A70]/10 rounded-lg mr-2">
                            <BuildingIcon className="h-5 w-5 text-[#EA3A70]" />
                          </div>
                          <h4 className="text-white font-medium">
                            Company Setup
                          </h4>
                        </div>
                        <p className="text-indigo-300 text-sm">
                          Select your business structure and complete the
                          initial registration
                        </p>
                      </div>
                      <div className="bg-[#1B1537] rounded-lg p-4 border border-[#2D2755]">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-[#EA3A70]/10 rounded-lg mr-2">
                            <UploadIcon className="h-5 w-5 text-[#EA3A70]" />
                          </div>
                          <h4 className="text-white font-medium">
                            Document Upload
                          </h4>
                        </div>
                        <p className="text-indigo-300 text-sm">
                          Securely upload and manage all required formation
                          documents
                        </p>
                      </div>
                      <div className="bg-[#1B1537] rounded-lg p-4 border border-[#2D2755]">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-[#EA3A70]/10 rounded-lg mr-2">
                            <ClockIcon className="h-5 w-5 text-[#EA3A70]" />
                          </div>
                          <h4 className="text-white font-medium">
                            Progress Tracking
                          </h4>
                        </div>
                        <p className="text-indigo-300 text-sm">
                          Monitor the status of your formation in real-time with
                          detailed updates
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link to={`/pricing`} className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center">
                        Start Company Formation
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-[#0F0B1F] border border-[#2D2755] rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-[#EA3A70]/10 rounded-lg mr-4 flex-shrink-0">
                        <MessageCircleIcon className="h-6 w-6 text-[#EA3A70]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          AI Company Formation Agent
                        </h3>
                        <p className="text-indigo-300 mb-4">
                          Our AI assistant provides 24/7 guidance through the
                          entire formation process, answering questions about
                          {currentCountryData.name} business structures and
                          helping with statutory documents.
                        </p>
                        <div className="bg-[#1B1537] rounded-lg p-4 border border-[#2D2755]">
                          <div className="flex items-start space-x-3">
                            <div className="bg-[#EA3A70] rounded-full p-2 flex-shrink-0 mt-1">
                              <UserIcon className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-indigo-300 text-sm">
                                What's the difference between a{' '}
                                {currentCountryData.mainEntityType} and a{' '}
                                {currentCountryData.secondaryEntityType}?
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 mt-3">
                            <div className="bg-indigo-900/50 rounded-full p-2 flex-shrink-0 mt-1">
                              <MessageCircleIcon className="h-4 w-4 text-indigo-300" />
                            </div>
                            <div className="flex-1">
                              <p className="text-white text-sm">
                                A {currentCountryData.mainEntityType} is a
                                separate legal entity with limited liability
                                protection for shareholders, while a{' '}
                                {currentCountryData.secondaryEntityType} is an
                                extension of your existing company without
                                separate legal status. The main differences are:
                              </p>
                              <ul className="mt-2 space-y-1 text-indigo-300 text-sm pl-4 list-disc">
                                <li>
                                  Liability: {currentCountryData.mainEntityType}{' '}
                                  offers limited liability,{' '}
                                  {currentCountryData.secondaryEntityType}
                                  has no liability separation
                                </li>
                                <li>
                                  Setup: {currentCountryData.mainEntityType}{' '}
                                  requires more formal procedures,{' '}
                                  {currentCountryData.secondaryEntityType} is
                                  simpler to establish
                                </li>
                                <li>
                                  Capital: {currentCountryData.mainEntityType}{' '}
                                  may need minimum capital,
                                  {currentCountryData.secondaryEntityType} has
                                  no requirement
                                </li>
                                <li>
                                  Taxation: {currentCountryData.mainEntityType}{' '}
                                  files separate tax returns,
                                  {currentCountryData.secondaryEntityType} files
                                  as part of parent
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link to="/portal/ai-advisor" className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center">
                            Ask the AI Advisor
                            <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </section>
      {/* Client Testimonial Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-900/20 rounded-xl p-8 border border-indigo-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EA3A70]/20 to-indigo-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-xl overflow-hidden border-2 border-indigo-500/30 h-64 w-64 mx-auto">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Client Portrait" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-500" />)}
                </div>
                <blockquote className="text-xl text-white italic mb-6">
                  "I was amazed at how easy it was to form my{' '}
                  {currentCountryData.name} Legal Entity through House of
                  Companies' portal. The step-by-step process was intuitive, and
                  I could track progress in real-time. What would have taken
                  weeks with traditional service providers took just days, and I
                  could do everything from my office in Singapore."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-white">Michael Chen</p>
                  <p className="text-indigo-300">CEO, TechAsia Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Get answers to common questions about forming a company in{' '}
              {currentCountryData.name}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentFaqs.map((faq, index) => <div key={index} className={`bg-indigo-900/20 rounded-xl border ${expandedFaq === index ? 'border-[#EA3A70]' : 'border-indigo-500/30'} overflow-hidden transition-all`}>
                <button className="w-full px-6 py-4 flex items-center justify-between text-left" onClick={() => toggleFaq(index)}>
                  <h3 className="font-medium text-white">{faq.question}</h3>
                  {expandedFaq === index ? <ChevronUpIcon className="h-5 w-5 text-[#EA3A70] flex-shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-indigo-400 flex-shrink-0" />}
                </button>
                {expandedFaq === index && <div className="px-6 pb-4 text-indigo-200">{faq.answer}</div>}
              </div>)}
          </div>
          <div className="text-center">
            <Link to="/faq" className="px-6 py-3 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors text-lg font-medium inline-flex items-center">
              View All FAQs
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Establish Your Business in {currentCountryData.name}?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Get started today through our secure portal and have your company up
            and running in as little as {currentCountryData.processingTime}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://clientdashboard.houseofcompanies.co.in/" className="px-8 py-4 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-lg font-medium inline-flex items-center">
              Access Portal
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors text-lg font-medium inline-flex items-center">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>;
}