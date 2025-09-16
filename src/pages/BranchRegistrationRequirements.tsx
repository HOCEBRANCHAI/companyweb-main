import React, {
    useEffect,
    useMemo,
    useState,
    Fragment,
    createElement,
  } from 'react'
  import {
    CheckIcon,
    XIcon,
    ChevronDownIcon,
    GlobeIcon,
    FileTextIcon,
    BuildingIcon,
    MapPinIcon,
    UserIcon,
    ClipboardCheckIcon,
    ArrowLeftIcon,
    SearchIcon,
    FilterIcon,
    DownloadIcon,
    RefreshCwIcon,
    InfoIcon,
    EyeIcon,
    EyeOffIcon,
  } from 'lucide-react'
  import { Link } from 'react-router-dom'
  import { Header } from '../components/layout/Header'
  import { Footer } from '../components/layout/Footer'
  // Define country data type
  interface CountryData {
    country: string
    forms: string[]
    submitTo: string
    documents: string[]
    postalSubmission: string
    thirdParty: string
    uniqueFields: string[]
    activityCodeSystem: string
    requiresBankAccount: boolean
    requiresExpectedTurnover: boolean
    requiresNotarization: boolean
  }
  // Define data field type
  interface DataField {
    name: string
    category: string
    requiredIn: {
      [country: string]: boolean
    }
  }
  export function BranchRegistrationRequirements() {
    // State for UI controls
    const [activeTab, setActiveTab] = useState('overview')
    const [expandedCountry, setExpandedCountry] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCountries, setSelectedCountries] = useState<string[]>([
      'Netherlands',
      'Belgium',
      'Spain',
      'Germany',
      'France',
    ])
    const [showAllFields, setShowAllFields] = useState(true)
    const [activeCategory, setActiveCategory] = useState<string | null>(null)
    const [isComparing, setIsComparing] = useState(false)
    // Country data
    const countryData: CountryData[] = [
      {
        country: 'Netherlands',
        forms: [
          'Form 6: Branch registration',
          'Form 11: Registration of directors',
          'Form 20: Registration of company details',
        ],
        submitTo:
          'Chamber of Commerce (KvK) by mail or online with Dutch authentication',
        documents: [
          'Trade register extract',
          'Articles of incorporation',
          'Proof of identity for directors',
        ],
        postalSubmission: 'Yes - forms can be printed and mailed to KvK',
        thirdParty: 'No - direct submission possible',
        uniqueFields: [
          'Dutch trade register classification',
          'Other branches in the Netherlands',
        ],
        activityCodeSystem: 'Dutch SBI codes',
        requiresBankAccount: false,
        requiresExpectedTurnover: false,
        requiresNotarization: false,
      },
      {
        country: 'Belgium',
        forms: [
          'Form I: Registration with Crossroads Bank for Enterprises',
          'Form II: Registration of establishment unit',
        ],
        submitTo:
          'Crossroads Bank for Enterprises (CBE), My Enterprise platform online',
        documents: [
          'Trade register extract',
          'Articles of incorporation',
          'Proof of activity in Belgium',
          'ID of legal representatives',
        ],
        postalSubmission: 'Yes - but online registration is preferred',
        thirdParty: 'No - direct submission possible',
        uniqueFields: [
          'VAT activity codes',
          'Establishment unit details',
          'NACEBEL codes',
        ],
        activityCodeSystem: 'NACEBEL codes',
        requiresBankAccount: false,
        requiresExpectedTurnover: true,
        requiresNotarization: false,
      },
      {
        country: 'Spain',
        forms: [
          'Form 036 (general tax registration)',
          'Form "Documento de constitución de sucursal"',
        ],
        submitTo:
          'Mercantile Registry (Registro Mercantil), Tax authorities (Agencia Tributaria)',
        documents: [
          'Notarized trade register extract',
          'Articles of incorporation',
          'Board resolution',
          'Powers of attorney',
        ],
        postalSubmission: 'Yes - after notarization',
        thirdParty: 'Yes - Notary public must authenticate documents',
        uniqueFields: [
          'Spanish tax identification details',
          'Property ownership information',
          'Bank account information',
        ],
        activityCodeSystem: 'CNAE codes',
        requiresBankAccount: true,
        requiresExpectedTurnover: true,
        requiresNotarization: true,
      },
      {
        country: 'Germany',
        forms: [
          'Form "Anmeldung einer Zweigniederlassung"',
          'Form "Handelsregisteranmeldung"',
        ],
        submitTo:
          'Local commercial register (Handelsregister), Local trade office (Gewerbeamt)',
        documents: [
          'Notarized trade register extract',
          'Notarized articles of incorporation',
          'Resolution to establish a branch',
          'Passport copies of directors',
        ],
        postalSubmission: 'Yes - after notarization',
        thirdParty:
          'Yes - Notary is legally required to authenticate documents and submit to Commercial Register',
        uniqueFields: [
          'Notarized signatures section',
          'German commercial register classification',
          'Manufacturing activities information',
        ],
        activityCodeSystem: 'German WZ codes',
        requiresBankAccount: false,
        requiresExpectedTurnover: false,
        requiresNotarization: true,
      },
      {
        country: 'France',
        forms: [
          "Form M0 (Création d'entreprise)",
          'Form TNS (for branch managers)',
        ],
        submitTo:
          'Centre de Formalités des Entreprises (CFE), Registre du Commerce et des Sociétés (RCS)',
        documents: [
          'K-bis extract (equivalent to trade register)',
          'Articles of incorporation',
          'Resolution establishing branch',
          'ID of representatives',
        ],
        postalSubmission: 'Yes - forms can be sent to local CFE',
        thirdParty: 'No - though legal counsel is commonly used',
        uniqueFields: [
          'SIRET number details',
          'French-specific classification of economic activities',
          'Social regime selection options',
        ],
        activityCodeSystem: 'NAF/APE codes',
        requiresBankAccount: true,
        requiresExpectedTurnover: true,
        requiresNotarization: false,
      },
    ]
    // Data fields with categories
    const dataFields: DataField[] = [
      // Parent Company Information
      {
        name: 'Legal Name of Parent Company',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Legal Form of Parent Company',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Registration Number in Home Country',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Tax/VAT Number in Home Country',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Registered Office Address',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Date of Incorporation',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Country of Incorporation',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Business Activity/NACE Code',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Share Capital',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Financial Year End',
        category: 'Parent Company Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      // Branch Information
      {
        name: 'Proposed Name of Branch',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Branch Address in Host Country',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Business Activities of Branch',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'NACE Codes of Branch Activities',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Date of Branch Establishment',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Phone Number',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Email Address',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Website (if applicable)',
        category: 'Branch Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      // Branch Representatives
      {
        name: 'Branch Manager Name',
        category: 'Branch Representatives',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Branch Manager Date of Birth',
        category: 'Branch Representatives',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Branch Manager Nationality',
        category: 'Branch Representatives',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Branch Manager Residential Address',
        category: 'Branch Representatives',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Branch Manager ID/Passport Number',
        category: 'Branch Representatives',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Branch Manager Powers/Authority',
        category: 'Branch Representatives',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      // Directors/Officers Information
      {
        name: 'Director/Board Member Names',
        category: 'Directors/Officers Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Director Dates of Birth',
        category: 'Directors/Officers Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Director Nationalities',
        category: 'Directors/Officers Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Director Residential Addresses',
        category: 'Directors/Officers Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Director ID/Passport Numbers',
        category: 'Directors/Officers Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Director Positions/Roles',
        category: 'Directors/Officers Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      // Tax and Employment Information
      {
        name: 'Expected Number of Employees',
        category: 'Tax and Employment Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Intended Tax Registration',
        category: 'Tax and Employment Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Social Security Registration Intent',
        category: 'Tax and Employment Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      // Additional Information
      {
        name: 'Bank Account Details',
        category: 'Additional Information',
        requiredIn: {
          Netherlands: false,
          Belgium: false,
          Spain: true,
          Germany: false,
          France: true,
        },
      },
      {
        name: 'Ultimate Beneficial Owners',
        category: 'Additional Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Local Contact Person',
        category: 'Additional Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Fiscal Year/Accounting Period',
        category: 'Additional Information',
        requiredIn: {
          Netherlands: true,
          Belgium: true,
          Spain: true,
          Germany: true,
          France: true,
        },
      },
      {
        name: 'Expected Annual Turnover',
        category: 'Additional Information',
        requiredIn: {
          Netherlands: false,
          Belgium: true,
          Spain: true,
          Germany: false,
          France: true,
        },
      },
    ]
    // Toggle country selection
    const toggleCountry = (country: string) => {
      if (expandedCountry === country) {
        setExpandedCountry(null)
      } else {
        setExpandedCountry(country)
      }
    }
    // Toggle country for comparison
    const toggleCountrySelection = (country: string) => {
      if (selectedCountries.includes(country)) {
        setSelectedCountries(selectedCountries.filter((c) => c !== country))
      } else {
        setSelectedCountries([...selectedCountries, country])
      }
    }
    // Filter data fields based on search query and category
    const filteredDataFields = useMemo(() => {
      return dataFields.filter((field) => {
        const matchesSearch = field.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        const matchesCategory = activeCategory
          ? field.category === activeCategory
          : true
        return matchesSearch && matchesCategory
      })
    }, [dataFields, searchQuery, activeCategory])
    // Get unique categories
    const categories = useMemo(() => {
      return Array.from(new Set(dataFields.map((field) => field.category)))
    }, [dataFields])
    // Generate CSV data for export
    const generateCSV = () => {
      // Create header row with country names
      let csv = 'Data Field,Category,' + selectedCountries.join(',') + '\n'
      // Add data rows
      filteredDataFields.forEach((field) => {
        let row = `"${field.name}","${field.category}",`
        selectedCountries.forEach((country) => {
          row += field.requiredIn[country] ? 'Yes,' : 'No,'
        })
        csv += row.slice(0, -1) + '\n' // Remove trailing comma and add newline
      })
      return csv
    }
    // Handle download
    const handleDownload = () => {
      const csv = generateCSV()
      const blob = new Blob([csv], {
        type: 'text/csv',
      })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.setAttribute('hidden', '')
      a.setAttribute('href', url)
      a.setAttribute('download', 'branch_registration_requirements.csv')
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    // Reset filters
    const resetFilters = () => {
      setSearchQuery('')
      setActiveCategory(null)
      setSelectedCountries([
        'Netherlands',
        'Belgium',
        'Spain',
        'Germany',
        'France',
      ])
      setShowAllFields(true)
    }
    return (
      <div className="min-h-screen bg-[#0F0B1F]">
        <Header />
        <main>
          <section className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="mb-8">
                <Link
                  to="/ebranch"
                  className="inline-flex items-center text-[#EA3A70] hover:text-[#EA3A70]/90 transition-colors mb-4"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Back to eBranch
                </Link>
                <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl mb-4">
                  Branch Registration Requirements Across EU
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Comprehensive guide to branch registration data field
                  requirements across key EU countries
                </p>
              </div>
              {/* Country Selector Bar */}
              <div className="bg-[#2D2755]/50 backdrop-blur-sm rounded-lg border border-[#2D2755] p-4 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-white font-medium mb-2 md:mb-0">
                    Select Countries to Compare:
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsComparing(!isComparing)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium ${isComparing ? 'bg-[#EA3A70] text-white' : 'bg-[#2D2755]/70 text-gray-300 hover:bg-[#2D2755]'}`}
                    >
                      {isComparing ? 'Exit Comparison' : 'Compare Selected'}
                    </button>
                    <button
                      onClick={resetFilters}
                      className="px-3 py-1.5 bg-[#2D2755]/70 text-gray-300 rounded-md text-sm font-medium hover:bg-[#2D2755] flex items-center"
                    >
                      <RefreshCwIcon className="h-3.5 w-3.5 mr-1" />
                      Reset
                    </button>
                    <button
                      onClick={handleDownload}
                      className="px-3 py-1.5 bg-[#2D2755]/70 text-gray-300 rounded-md text-sm font-medium hover:bg-[#2D2755] flex items-center"
                    >
                      <DownloadIcon className="h-3.5 w-3.5 mr-1" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {countryData.map((country) => (
                    <div
                      key={country.country}
                      onClick={() => toggleCountrySelection(country.country)}
                      className={`cursor-pointer p-3 rounded-md border transition-all ${selectedCountries.includes(country.country) ? 'border-[#EA3A70] bg-[#EA3A70]/10' : 'border-[#2D2755] bg-[#1B1537]/50 hover:bg-[#2D2755]/30'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">
                          {country.country}
                        </span>
                        {selectedCountries.includes(country.country) && (
                          <CheckIcon className="h-4 w-4 text-[#EA3A70]" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-lg shadow-sm border border-[#2D2755] overflow-hidden">
                <div className="border-b border-[#2D2755]">
                  <nav className="flex overflow-x-auto">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-[#EA3A70] text-[#EA3A70]' : 'text-gray-300 hover:text-white'}`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('dataFields')}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'dataFields' ? 'border-b-2 border-[#EA3A70] text-[#EA3A70]' : 'text-gray-300 hover:text-white'}`}
                    >
                      Required Data Fields
                    </button>
                    <button
                      onClick={() => setActiveTab('forms')}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'forms' ? 'border-b-2 border-[#EA3A70] text-[#EA3A70]' : 'text-gray-300 hover:text-white'}`}
                    >
                      Registration Forms
                    </button>
                    <button
                      onClick={() => setActiveTab('countryDetails')}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === 'countryDetails' ? 'border-b-2 border-[#EA3A70] text-[#EA3A70]' : 'text-gray-300 hover:text-white'}`}
                    >
                      Country-Specific Details
                    </button>
                  </nav>
                </div>
                <div className="p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-white">
                        Branch Registration Requirements Across EU Countries
                      </h2>
                      <p className="text-gray-300">
                        Establishing a branch office in the EU requires
                        understanding the specific registration requirements for
                        each country. While there are common elements across all
                        EU member states, each country has unique forms,
                        procedures, and data requirements.
                      </p>
                      {isComparing ? (
                        <div className="bg-[#2D2755]/30 p-4 rounded-lg border border-[#2D2755] mb-6">
                          <h3 className="text-lg font-medium text-white mb-4">
                            Comparing Selected Countries
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-md font-medium text-white mb-2">
                                Document Authentication
                              </h4>
                              <div className="space-y-2">
                                {selectedCountries.map((country) => {
                                  const countryInfo = countryData.find(
                                    (c) => c.country === country,
                                  )
                                  return (
                                    <div
                                      key={country}
                                      className="flex items-center justify-between p-2 bg-[#1B1537]/50 rounded-md"
                                    >
                                      <span className="text-gray-300">
                                        {country}
                                      </span>
                                      <span
                                        className={`text-sm font-medium ${countryInfo?.requiresNotarization ? 'text-[#EA3A70]' : 'text-green-400'}`}
                                      >
                                        {countryInfo?.requiresNotarization
                                          ? 'Notarization Required'
                                          : 'No Notarization'}
                                      </span>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-md font-medium text-white mb-2">
                                Banking Requirements
                              </h4>
                              <div className="space-y-2">
                                {selectedCountries.map((country) => {
                                  const countryInfo = countryData.find(
                                    (c) => c.country === country,
                                  )
                                  return (
                                    <div
                                      key={country}
                                      className="flex items-center justify-between p-2 bg-[#1B1537]/50 rounded-md"
                                    >
                                      <span className="text-gray-300">
                                        {country}
                                      </span>
                                      <span
                                        className={`text-sm font-medium ${countryInfo?.requiresBankAccount ? 'text-[#EA3A70]' : 'text-green-400'}`}
                                      >
                                        {countryInfo?.requiresBankAccount
                                          ? 'Bank Account Required'
                                          : 'No Bank Account Required'}
                                      </span>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <h4 className="text-md font-medium text-white mb-2">
                              Activity Classification Systems
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              {selectedCountries.map((country) => {
                                const countryInfo = countryData.find(
                                  (c) => c.country === country,
                                )
                                return (
                                  <div
                                    key={country}
                                    className="p-3 bg-[#1B1537]/50 rounded-md"
                                  >
                                    <span className="text-white font-medium block mb-1">
                                      {country}
                                    </span>
                                    <span className="text-sm text-gray-300">
                                      {countryInfo?.activityCodeSystem}
                                    </span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          <div className="bg-[#2D2755]/30 p-4 rounded-lg border border-[#2D2755]">
                            <h3 className="text-lg font-medium text-white mb-2">
                              Core Requirements
                            </h3>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Parent company information (legal name,
                                  registration, address)
                                </span>
                              </li>
                              <li className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Branch details (name, address, activities)
                                </span>
                              </li>
                              <li className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Representative information (branch managers,
                                  directors)
                                </span>
                              </li>
                              <li className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Tax and employment information
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-[#2D2755]/30 p-4 rounded-lg border border-[#2D2755]">
                            <h3 className="text-lg font-medium text-white mb-2">
                              Country Variations
                            </h3>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <ChevronDownIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Different form requirements and submission
                                  procedures
                                </span>
                              </li>
                              <li className="flex items-start">
                                <ChevronDownIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Varying document authentication requirements
                                </span>
                              </li>
                              <li className="flex items-start">
                                <ChevronDownIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Country-specific data fields (e.g., bank account
                                  details)
                                </span>
                              </li>
                              <li className="flex items-start">
                                <ChevronDownIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">
                                  Different business classification systems
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                      <div className="mt-6">
                        <h3 className="text-lg font-medium text-white mb-3">
                          Key EU Countries for Branch Registration
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                          {countryData.map((country) => (
                            <div
                              key={country.country}
                              className={`bg-[#2D2755]/50 border rounded-lg p-4 transition-all ${selectedCountries.includes(country.country) ? 'border-[#EA3A70] hover:border-[#EA3A70]/70' : 'border-[#2D2755] hover:border-[#2D2755]/70 opacity-60'}`}
                            >
                              <div className="flex justify-between items-start">
                                <h4 className="font-medium text-white">
                                  {country.country}
                                </h4>
                                <button
                                  onClick={() =>
                                    toggleCountrySelection(country.country)
                                  }
                                  className={`h-5 w-5 rounded-full flex items-center justify-center ${selectedCountries.includes(country.country) ? 'bg-[#EA3A70]/20 text-[#EA3A70]' : 'bg-[#2D2755] text-gray-400 hover:bg-[#2D2755]/70'}`}
                                >
                                  {selectedCountries.includes(country.country) ? (
                                    <CheckIcon className="h-3 w-3" />
                                  ) : (
                                    <span className="h-3 w-3" />
                                  )}
                                </button>
                              </div>
                              <div className="mt-2 space-y-1 text-xs text-gray-400">
                                <div className="flex items-center">
                                  <FileTextIcon className="h-3 w-3 mr-1 text-gray-500" />
                                  <span>{country.forms.length} forms</span>
                                </div>
                                <div className="flex items-center">
                                  <InfoIcon className="h-3 w-3 mr-1 text-gray-500" />
                                  <span>
                                    {country.requiresNotarization
                                      ? 'Notarization required'
                                      : 'No notarization'}
                                  </span>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setActiveTab('countryDetails')
                                  setExpandedCountry(country.country)
                                }}
                                className="mt-2 text-sm text-[#EA3A70] hover:text-[#EA3A70]/80"
                              >
                                View details →
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'dataFields' && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-white">
                        Comparative Analysis of Required Data Fields
                      </h2>
                      <p className="text-gray-300 mb-6">
                        This table provides a comparative analysis of the data
                        fields required for branch registration across your
                        selected EU countries.
                      </p>
                      {/* Search and Filter Controls */}
                      <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-grow">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search data fields..."
                            className="block w-full pl-10 pr-3 py-2 border border-[#2D2755] rounded-md bg-[#1B1537]/30 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <select
                            value={activeCategory || ''}
                            onChange={(e) =>
                              setActiveCategory(e.target.value || null)
                            }
                            className="block w-full px-3 py-2 border border-[#2D2755] rounded-md bg-[#1B1537]/30 text-white focus:outline-none focus:ring-1 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
                          >
                            <option value="">All Categories</option>
                            {categories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                          <button
                            onClick={() => setShowAllFields(!showAllFields)}
                            className="px-3 py-2 bg-[#2D2755]/70 text-gray-300 rounded-md text-sm font-medium hover:bg-[#2D2755] flex items-center whitespace-nowrap"
                          >
                            {showAllFields ? (
                              <>
                                <EyeOffIcon className="h-4 w-4 mr-1" />
                                Show Differences
                              </>
                            ) : (
                              <>
                                <EyeIcon className="h-4 w-4 mr-1" />
                                Show All
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-[#2D2755]">
                          <thead className="bg-[#2D2755]/50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                              >
                                Data Field Category
                              </th>
                              {selectedCountries.map((country) => (
                                <th
                                  key={country}
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                                >
                                  {country}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-[#1B1537]/50 divide-y divide-[#2D2755]">
                            {/* Group data fields by category */}
                            {categories
                              .filter((category) =>
                                filteredDataFields.some(
                                  (field) => field.category === category,
                                ),
                              )
                              .map((category) => {
                                const categoryFields = filteredDataFields.filter(
                                  (field) => field.category === category,
                                )
                                // Skip rendering if we're only showing differences and all fields in this category are the same across countries
                                if (!showAllFields) {
                                  const allFieldsIdentical = categoryFields.every(
                                    (field) => {
                                      const firstCountryValue =
                                        field.requiredIn[selectedCountries[0]]
                                      return selectedCountries.every(
                                        (country) =>
                                          field.requiredIn[country] ===
                                          firstCountryValue,
                                      )
                                    },
                                  )
                                  if (allFieldsIdentical) return null
                                }
                                return (
                                  <Fragment key={category}>
                                    <tr className="bg-[#2D2755]/30">
                                      <td
                                        colSpan={selectedCountries.length + 1}
                                        className="px-6 py-2 text-sm font-medium text-white"
                                      >
                                        {category}
                                      </td>
                                    </tr>
                                    {categoryFields.map((field) => {
                                      // Skip rendering if we're only showing differences and this field is the same across countries
                                      if (!showAllFields) {
                                        const firstCountryValue =
                                          field.requiredIn[selectedCountries[0]]
                                        const isIdentical =
                                          selectedCountries.every(
                                            (country) =>
                                              field.requiredIn[country] ===
                                              firstCountryValue,
                                          )
                                        if (isIdentical) return null
                                      }
                                      return (
                                        <tr
                                          key={field.name}
                                          className="hover:bg-[#2D2755]/20"
                                        >
                                          <td className="px-6 py-2 text-sm text-gray-300">
                                            {field.name}
                                          </td>
                                          {selectedCountries.map((country) => (
                                            <td
                                              key={country}
                                              className="px-6 py-2 text-sm text-gray-300"
                                            >
                                              {field.requiredIn[country] ? (
                                                <CheckIcon className="h-5 w-5 text-[#EA3A70]" />
                                              ) : (
                                                <XIcon className="h-5 w-5 text-gray-500" />
                                              )}
                                            </td>
                                          ))}
                                        </tr>
                                      )
                                    })}
                                  </Fragment>
                                )
                              })}
                          </tbody>
                        </table>
                      </div>
                      {filteredDataFields.length === 0 && (
                        <div className="text-center py-8">
                          <p className="text-gray-400">
                            No data fields match your search criteria.
                          </p>
                          <button
                            onClick={resetFilters}
                            className="mt-2 text-[#EA3A70] hover:text-[#EA3A70]/80"
                          >
                            Reset filters
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {activeTab === 'forms' && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-white">
                        EU Branch Office Registration Forms by Country
                      </h2>
                      <p className="text-gray-300 mb-6">
                        Each EU country has specific forms and submission
                        requirements for branch registration. Below is a
                        comprehensive overview of the registration forms and
                        submission process for your selected countries.
                      </p>
                      <div className="space-y-4">
                        {countryData
                          .filter((country) =>
                            selectedCountries.includes(country.country),
                          )
                          .map((country) => (
                            <div
                              key={country.country}
                              className="border border-[#2D2755] rounded-lg overflow-hidden"
                            >
                              <button
                                onClick={() => toggleCountry(country.country)}
                                className="w-full flex items-center justify-between p-4 bg-[#2D2755]/50 text-left"
                              >
                                <span className="font-medium text-white">
                                  {country.country}
                                </span>
                                <ChevronDownIcon
                                  className={`h-5 w-5 text-[#EA3A70] transform transition-transform ${expandedCountry === country.country ? 'rotate-180' : ''}`}
                                />
                              </button>
                              {expandedCountry === country.country && (
                                <div className="p-4 bg-[#1B1537]/80">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="text-sm font-medium text-white mb-2">
                                        Registration Forms
                                      </h4>
                                      <ul className="space-y-1">
                                        {country.forms.map((form, index) => (
                                          <li
                                            key={index}
                                            className="text-sm text-gray-300 flex items-start"
                                          >
                                            <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                            <span>{form}</span>
                                          </li>
                                        ))}
                                      </ul>
                                      <h4 className="text-sm font-medium text-white mt-4 mb-2">
                                        Where to Submit
                                      </h4>
                                      <p className="text-sm text-gray-300">
                                        {country.submitTo}
                                      </p>
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-medium text-white mb-2">
                                        Supporting Documents
                                      </h4>
                                      <ul className="space-y-1">
                                        {country.documents.map((doc, index) => (
                                          <li
                                            key={index}
                                            className="text-sm text-gray-300 flex items-start"
                                          >
                                            <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                            <span>{doc}</span>
                                          </li>
                                        ))}
                                      </ul>
                                      <div className="mt-4 grid grid-cols-1 gap-2">
                                        <div>
                                          <h4 className="text-sm font-medium text-white">
                                            Postal Submission
                                          </h4>
                                          <p className="text-sm text-gray-300">
                                            {country.postalSubmission}
                                          </p>
                                        </div>
                                        <div>
                                          <h4 className="text-sm font-medium text-white">
                                            Third Party Required
                                          </h4>
                                          <p className="text-sm text-gray-300">
                                            {country.thirdParty}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        {selectedCountries.length === 0 && (
                          <div className="text-center py-8">
                            <p className="text-gray-400">
                              Please select at least one country to view
                              registration forms.
                            </p>
                          </div>
                        )}
                        <div className="mt-4 bg-[#2D2755]/30 p-4 rounded-lg border border-[#2D2755]">
                          <h3 className="text-md font-medium text-white mb-2">
                            General Notes
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start">
                              <span className="font-medium mr-2">•</span>
                              <span>
                                <strong>Postal Submission:</strong> While most
                                countries allow postal submission, many now
                                prioritize electronic submissions. Postal
                                submissions may take longer to process.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-medium mr-2">•</span>
                              <span>
                                <strong>Document Authentication:</strong> Most
                                countries require supporting documents to be
                                legalized (with Apostille for countries party to
                                the Hague Convention).
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="font-medium mr-2">•</span>
                              <span>
                                <strong>Processing Times:</strong> Postal
                                submissions typically take 3-6 weeks; electronic
                                submissions are generally faster (2-4 weeks).
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'countryDetails' && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-white">
                        Country-Specific Form Details
                      </h2>
                      <p className="text-gray-300 mb-6">
                        Each country has unique form requirements and specific
                        data fields that must be completed as part of the branch
                        registration process.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {countryData
                          .filter((country) =>
                            selectedCountries.includes(country.country),
                          )
                          .map((country) => (
                            <div
                              key={country.country}
                              className={`bg-[#2D2755]/30 border rounded-lg p-5 transition-all ${expandedCountry === country.country ? 'border-[#EA3A70] ring-1 ring-[#EA3A70]/30' : 'border-[#2D2755] hover:border-[#EA3A70]/30'}`}
                              onClick={() => toggleCountry(country.country)}
                            >
                              <div className="flex items-center mb-4">
                                <GlobeIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                                <h3 className="text-lg font-medium text-white">
                                  {country.country}
                                </h3>
                              </div>
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-sm font-medium text-white">
                                    Forms
                                  </h4>
                                  <ul className="mt-1 space-y-1">
                                    {country.forms.map((form, index) => (
                                      <li
                                        key={index}
                                        className="text-sm text-gray-300"
                                      >
                                        {form}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium text-white">
                                    Unique Fields
                                  </h4>
                                  <ul className="mt-1 space-y-1">
                                    {country.uniqueFields.map((field, index) => (
                                      <li
                                        key={index}
                                        className="text-sm text-gray-300"
                                      >
                                        • {field}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="pt-2">
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-300">
                                      Notarization:
                                    </span>
                                    <span
                                      className={
                                        country.requiresNotarization
                                          ? 'text-[#EA3A70]'
                                          : 'text-green-400'
                                      }
                                    >
                                      {country.requiresNotarization
                                        ? 'Required'
                                        : 'Not Required'}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm mt-1">
                                    <span className="text-gray-300">
                                      Bank Account:
                                    </span>
                                    <span
                                      className={
                                        country.requiresBankAccount
                                          ? 'text-[#EA3A70]'
                                          : 'text-green-400'
                                      }
                                    >
                                      {country.requiresBankAccount
                                        ? 'Required'
                                        : 'Not Required'}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm mt-1">
                                    <span className="text-gray-300">
                                      Turnover Projection:
                                    </span>
                                    <span
                                      className={
                                        country.requiresExpectedTurnover
                                          ? 'text-[#EA3A70]'
                                          : 'text-green-400'
                                      }
                                    >
                                      {country.requiresExpectedTurnover
                                        ? 'Required'
                                        : 'Not Required'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        {selectedCountries.length === 0 && (
                          <div className="col-span-3 text-center py-8">
                            <p className="text-gray-400">
                              Please select at least one country to view
                              country-specific details.
                            </p>
                          </div>
                        )}
                        <div className="bg-[#2D2755]/30 border border-[#2D2755] rounded-lg p-5 hover:border-[#EA3A70]/30 transition-shadow">
                          <div className="flex items-center mb-4">
                            <BuildingIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                            <h3 className="text-lg font-medium text-white">
                              Unified Data Collection
                            </h3>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-white">
                              Recommendations
                            </h4>
                            <ul className="mt-1 space-y-2">
                              <li className="text-sm text-gray-300">
                                • Collect all "Common to All" data fields as the
                                core dataset
                              </li>
                              <li className="text-sm text-gray-300">
                                • Include country-specific sections for unique
                                requirements
                              </li>
                              <li className="text-sm text-gray-300">
                                • Establish a mapping system for different
                                activity classification codes
                              </li>
                              <li className="text-sm text-gray-300">
                                • Implement flexible document collection that
                                accounts for varying authentication requirements
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-[#2D2755]/30 border border-[#2D2755] rounded-lg p-5">
                        <h3 className="text-lg font-medium text-white mb-3">
                          Analysis for Unified Data Collection
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-md font-medium text-white mb-2">
                              Core Data Fields Required by All Countries
                            </h4>
                            <ul className="space-y-2">
                              <li className="text-sm text-gray-300 flex items-start">
                                <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>
                                    Parent Company Basic Information:
                                  </strong>{' '}
                                  Legal name, form, registration number, address,
                                  incorporation details, business activities and
                                  classification codes
                                </span>
                              </li>
                              <li className="text-sm text-gray-300 flex items-start">
                                <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>Branch Basic Information:</strong> Name,
                                  address, activities, contact details,
                                  establishment date and purpose
                                </span>
                              </li>
                              <li className="text-sm text-gray-300 flex items-start">
                                <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>Representative Information:</strong>{' '}
                                  Branch manager and director details, identity
                                  documentation and powers/authority
                                </span>
                              </li>
                              <li className="text-sm text-gray-300 flex items-start">
                                <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>Regulatory Information:</strong> Tax,
                                  social security, and employment intentions,
                                  ultimate beneficial ownership information
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-md font-medium text-white mb-2">
                              Divergent Data Requirements
                            </h4>
                            <ul className="space-y-2">
                              <li className="text-sm text-gray-300 flex items-start">
                                <ChevronDownIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>Banking Information:</strong> Required
                                  in Spain and France, but not in other countries
                                  initially
                                </span>
                              </li>
                              <li className="text-sm text-gray-300 flex items-start">
                                <ChevronDownIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>Business Projections:</strong> Expected
                                  turnover required in Belgium, Spain and France,
                                  not required in Netherlands and Germany
                                  initially
                                </span>
                              </li>
                              <li className="text-sm text-gray-300 flex items-start">
                                <ChevronDownIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>
                                    Activity Classification Systems:
                                  </strong>{' '}
                                  Each country uses slightly different
                                  classification systems, NACE codes are standard
                                  but national variations exist
                                </span>
                              </li>
                              <li className="text-sm text-gray-300 flex items-start">
                                <ChevronDownIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                  <strong>
                                    Document Authentication Requirements:
                                  </strong>{' '}
                                  Germany requires notarized documentation, other
                                  countries accept certified copies
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
  