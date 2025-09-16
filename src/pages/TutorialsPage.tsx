import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BookOpenIcon, SearchIcon, MapPinIcon, ArrowRightIcon, Loader2Icon, ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { supabase } from '../utils/supabase';


// Interface for tutorial step data from Supabase
interface TutorialStep {
  id: number;
  tutorial_id: number;
  step_number: number;
  step_title: string;
  step_description: string;
  step_image_url: string;
}

// Interface for tutorial data from Supabase
interface Tutorial {
  id: number;
  title: string;
  description: string;
  country: string;
  main_url: string;
  steps?: TutorialStep[];
}

export function TutorialsPage() {
  const { country: _country } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [filteredTutorials, setFilteredTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // New state for tutorial detail view
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Fetch tutorials from Supabase
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch tutorials from Supabase tutorials table - only specific columns
        console.log('Fetching tutorials from Supabase...');
        const { data: tutorialsData, error } = await supabase
          .from('tutorials')
          .select('id, title, description, main_url, country')
          .order('id', { ascending: true });

        if (error) {
          console.error('Supabase error:', error);
          throw new Error(error.message);
        }

        console.log('Tutorials fetched:', tutorialsData);

        // Fetch tutorial steps for each tutorial
        let tutorialsWithSteps: Tutorial[] = [];
        
        if (tutorialsData && tutorialsData.length > 0) {
          console.log(`Found ${tutorialsData.length} tutorials, fetching steps...`);
          for (const tutorial of tutorialsData) {
            console.log(`Fetching steps for tutorial ${tutorial.id}: ${tutorial.title}`);
            const { data: stepsData, error: stepsError } = await supabase
              .from('tutorial_steps')
              .select('id, tutorial_id, step_number, step_title, step_description, step_image_url')
              .eq('tutorial_id', tutorial.id)
              .order('step_number', { ascending: true });

            if (stepsError) {
              console.error(`Error fetching steps for tutorial ${tutorial.id}:`, stepsError);
            } else {
              console.log(`Steps for tutorial ${tutorial.id}:`, stepsData);
            }

            tutorialsWithSteps.push({
              ...tutorial,
              steps: stepsData || []
            });
          }
          console.log('Final tutorials with steps:', tutorialsWithSteps);
        } else {
          console.log('No tutorials found in database');
        }

        if (!tutorialsWithSteps || tutorialsWithSteps.length === 0) {
          // No tutorials available - show empty state
          setTutorials([]);
          setFilteredTutorials([]);
        } else {
          setTutorials(tutorialsWithSteps);
          setFilteredTutorials(tutorialsWithSteps);
        }
      } catch (err) {
        console.error('Error fetching tutorials:', err);
        setError('Failed to load tutorials. Please try again later.');
        // Fallback to empty array
        setTutorials([]);
        setFilteredTutorials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  // Filter tutorials based on search and country
  useEffect(() => {
    let filtered = tutorials;

    // Filter by country
    if (selectedCountry !== 'all') {
      filtered = filtered.filter(tutorial => tutorial.country === selectedCountry);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(tutorial =>
        tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTutorials(filtered);
  }, [searchQuery, selectedCountry, tutorials]);

  // Function to handle starting a tutorial
  const startTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setCurrentStep(0);
  };

  // Function to go back to tutorial list
  const backToTutorials = () => {
    setSelectedTutorial(null);
    setCurrentStep(0);
  };

  // Function to navigate between steps
  const nextStep = () => {
    if (selectedTutorial?.steps && currentStep < selectedTutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (selectedTutorial?.steps && stepIndex >= 0 && stepIndex < selectedTutorial.steps.length) {
      setCurrentStep(stepIndex);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0F0B1F] via-[#1B1537] to-[#0F0B1F]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Loader2Icon className="h-12 w-12 text-[#EA3A70] animate-spin mx-auto mb-4" />
            <p className="text-gray-300 text-lg">Loading tutorials...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0F0B1F] via-[#1B1537] to-[#0F0B1F]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6">
              <p className="text-red-400 text-lg mb-4">Error Loading Tutorials</p>
              <p className="text-gray-300 text-sm mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If a tutorial is selected, show the tutorial detail view
  if (selectedTutorial) {
    const currentStepData = selectedTutorial.steps?.[currentStep];
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0F0B1F] via-[#1B1537] to-[#0F0B1F]">
        <Header />
        
        {/* Tutorial Header */}
        <section className="relative py-12 sm:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center mb-4 sm:mb-6">
              <button 
                onClick={backToTutorials}
                className="inline-flex items-center text-[#EA3A70] hover:text-[#EA3A70]/80 transition-colors mr-4 text-sm sm:text-base"
              >
                <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Back to Tutorials
              </button>
            </div>
            
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
                {selectedTutorial.title}: Complete Step-by-Step Guide
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                {selectedTutorial.description}
              </p>
            </div>
          </div>
        </section>

        {/* Tutorial Content with Sidebar Layout */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Left Sidebar - Steps Navigation */}
              <div className="lg:col-span-1">
                <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-4 sm:p-6 sticky top-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Steps</h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {selectedTutorial.steps?.map((step, index) => (
                      <button
                        key={step.id}
                        onClick={() => goToStep(index)}
                        className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-200 ${
                          index === currentStep
                            ? 'bg-[#EA3A70] text-white shadow-lg'
                            : 'bg-[#2D2755]/50 text-gray-300 hover:bg-[#2D2755]/80 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm sm:text-base">{step.step_title}</span>
                          {index < currentStep && (
                            <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                          )}
                        </div>
                      </button>
                    )) || (
                      <div className="text-gray-500 text-center py-6 sm:py-8 text-sm sm:text-base">
                        No steps available
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Content - Current Step Display */}
              <div className="lg:col-span-2">
                {currentStepData ? (
                  <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[#2D2755] shadow-lg shadow-[#0F0B1F]/50">
                    {/* Step Header */}
                    <div className="p-4 sm:p-6 border-b border-[#2D2755]/30">
                      <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#EA3A70] text-white text-lg sm:text-2xl font-bold">
                          {currentStepData.step_number}
                        </div>
                        <div>
                          <span className="text-gray-400 text-xs sm:text-sm">Step {currentStepData.step_number} of {selectedTutorial.steps?.length || 0}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        {currentStepData.step_title}
                      </h2>
                    </div>

                    {/* Step Image */}
                    <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                      <img 
                        src={currentStepData.step_image_url} 
                        alt={currentStepData.step_title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] to-transparent opacity-60"></div>
                      
                      {/* Image Overlay Text */}
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                        <div className="text-xs sm:text-sm font-medium opacity-80">Dutch Business District</div>
                        <div className="text-sm sm:text-lg font-semibold">Amsterdam's financial center</div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                          {currentStepData.step_description}
                        </p>
                        
                        {/* Example: BV Advantages Section */}
                        {currentStepData.step_number === 1 && (
                          <div className="mt-6 sm:mt-8">
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">BV Advantages:</h4>
                            <div className="space-y-3 sm:space-y-4">
                              <div className="flex items-start gap-2 sm:gap-3">
                                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                  <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                                </div>
                                <div>
                                  <h5 className="text-white font-medium text-sm sm:text-base">Limited Liability Protection</h5>
                                  <p className="text-gray-300 text-xs sm:text-sm">Your personal assets remain protected from business debts and liabilities</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-[#2D2755]/30 gap-3 sm:gap-0">
                        <button
                          onClick={prevStep}
                          disabled={currentStep === 0}
                          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                            currentStep === 0
                              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                              : 'bg-[#2D2755] text-white hover:bg-[#2D2755]/80'
                          }`}
                        >
                          <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                          Previous Step
                        </button>
                        
                        <button
                          onClick={nextStep}
                          disabled={!selectedTutorial.steps || currentStep === selectedTutorial.steps.length - 1}
                          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                            !selectedTutorial.steps || currentStep === selectedTutorial.steps.length - 1
                              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                              : 'bg-[#EA3A70] text-white hover:bg-[#EA3A70]/90'
                          }`}
                        >
                          Next Step
                          <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                        </button>
                      </div>

                      {/* Completion Message */}
                      {selectedTutorial.steps && currentStep === selectedTutorial.steps.length - 1 && (
                        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-500/20 border border-green-500/30 rounded-lg text-center">
                          <CheckIcon className="h-8 w-8 sm:h-12 sm:w-12 text-green-400 mx-auto mb-3 sm:mb-4" />
                          <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2">Tutorial Complete!</h3>
                          <p className="text-green-300 mb-3 sm:mb-4 text-sm sm:text-base">
                            Congratulations! You've completed "{selectedTutorial.title}".
                          </p>
                          <button 
                            onClick={backToTutorials}
                            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-500/90 transition-colors text-sm sm:text-base"
                          >
                            Explore More Tutorials
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-12 text-center">
                    <h2 className="text-2xl font-semibold text-gray-300 mb-4">No Steps Available</h2>
                    <p className="text-gray-500 mb-8">
                      This tutorial doesn't have any steps yet. Please check back later or contact support.
                    </p>
                    <button 
                      onClick={backToTutorials}
                      className="inline-flex items-center px-6 py-3 bg-[#EA3A70] text-white font-medium rounded-lg hover:bg-[#EA3A70]/90 transition-colors"
                    >
                      Back to Tutorials
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Main tutorial list view
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0B1F] via-[#1B1537] to-[#0F0B1F]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-4 sm:mb-6 backdrop-blur-sm">
              <BookOpenIcon className="h-4 w-4 mr-2" />
              <span>Knowledge Center</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Tutorials & Resources
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Learn everything you need to know about establishing and operating
              your business in the Netherlands and beyond.
            </p>
            <div className="relative max-w-xl mx-auto mb-4 sm:mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search tutorials and resources..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-3 border border-[#2D2755] bg-[#1B1537]/80 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50 focus:border-transparent shadow-lg shadow-[#0F0B1F]/50 text-sm sm:text-base" 
              />
            </div>
            
            {/* Country Filter */}
            <div className="flex justify-center">
              <div className="relative">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-[#1B1537]/80 text-white border border-[#2D2755] focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50 focus:border-transparent shadow-lg shadow-[#0F0B1F]/50 appearance-none cursor-pointer pr-8 sm:pr-10"
                >
                  <option value="all">Select Country</option>
                  {Array.from(new Set(tutorials.map(t => t.country))).sort().map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTutorials.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <BookOpenIcon className="h-12 w-12 sm:h-16 sm:w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-medium text-gray-300 mb-2">
                {tutorials.length === 0 ? 'No tutorials available' : 'No tutorials found'}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {tutorials.length === 0 
                  ? 'No tutorials available. Please run the supabase-setup.sql script in your Supabase database to create the tutorials and tutorial_steps tables with sample data.'
                  : 'Try adjusting your search to find what you\'re looking for.'
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="group bg-[#1B1537]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all shadow-lg shadow-[#0F0B1F]/50 hover:shadow-xl hover:shadow-[#0F0B1F]/70">
                  {/* Tutorial Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={tutorial.main_url} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback image if the main_url fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] to-transparent opacity-60"></div>
                    
                    {/* Country Badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center px-2 py-1 rounded-full bg-[#EA3A70]/90 text-white text-xs font-medium backdrop-blur-sm">
                      <MapPinIcon className="h-3 w-3 mr-1" />
                      {tutorial.country}
                    </div>
                  </div>

                  {/* Tutorial Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-[#EA3A70] transition-colors line-clamp-2">
                      {tutorial.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>

                    {/* Steps Count */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xs text-gray-400">
                        {tutorial.steps ? `${tutorial.steps.length} step${tutorial.steps.length !== 1 ? 's' : ''}` : 'No steps available'}
                      </span>
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => startTutorial(tutorial)}
                      className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 bg-[#EA3A70] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-[#EA3A70]/90 transition-colors group-hover:bg-[#EA3A70]/90"
                    >
                      Start Tutorial
                      <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#EA3A70]/10 to-[#2D2755]/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              Our team of experts is here to help. Get personalized guidance for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-[#EA3A70] text-white font-medium rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm sm:text-base"
              >
                Contact Our Experts
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-[#2D2755] text-white font-medium rounded-lg hover:bg-[#1B1537] transition-colors text-sm sm:text-base"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}