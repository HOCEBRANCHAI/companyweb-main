import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, CalendarIcon, UserIcon, BookmarkIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from 'lucide-react';
interface TutorialStep {
  title: string;
  content: string;
  isActive?: boolean;
  isCompleted?: boolean;
}
interface TutorialContentProps {
  title?: string;
  category?: string;
  duration?: string;
  date?: string;
  author?: string;
  heroImage?: string;
  steps?: TutorialStep[];
  currentStep?: number;
}
export function TutorialContent({
  title = "Setting Up Your Business in the Netherlands",
  category = "Business Formation",
  duration = "15 min read",
  date = "2024",
  author = "House of Companies",
  heroImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  steps = [
    {
      title: "Choose Your Business Structure",
      content: "Select between BV, NV, or branch office based on your needs.",
      isCompleted: true
    },
    {
      title: "Prepare Required Documents",
      content: "Gather all necessary paperwork for registration.",
      isCompleted: false
    },
    {
      title: "Submit Registration",
      content: "File your application with the Dutch Chamber of Commerce.",
      isCompleted: false
    }
  ],
  currentStep = 1
}: TutorialContentProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Steps Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 sticky top-8">
              <h3 className="text-white font-bold mb-4">Tutorial Steps</h3>
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <Link key={index} to={`#step-${index + 1}`} className={`
                        flex items-center p-2 rounded-lg transition-colors
                        ${currentStep === index + 1 ? 'bg-[#EA3A70]/20 text-white border border-[#EA3A70]/30' : step.isCompleted ? 'bg-indigo-900/20 text-indigo-200 border border-indigo-500/30' : 'text-indigo-300 hover:bg-indigo-900/20 hover:text-indigo-200'}
                      `}>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full mr-2 flex-shrink-0 border border-indigo-500/30">
                      {step.isCompleted ? <CheckCircleIcon className="h-4 w-4 text-green-400" /> : <span className={currentStep === index + 1 ? 'text-[#EA3A70]' : 'text-indigo-300'}>
                            {index + 1}
                          </span>}
                    </div>
                    <span className="text-sm">{step.title}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-500/30">
                <button className="w-full px-4 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Save Tutorial
                </button>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 mb-2">
                {category}
              </span>
              <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
              <div className="flex flex-wrap items-center text-sm text-indigo-300 gap-4">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {duration}
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {date}
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  {author}
                </div>
              </div>
            </div>
            <div className="mb-8 rounded-xl overflow-hidden">
              <img src={heroImage} alt={title} className="w-full h-64 object-cover" />
            </div>
            <div className="prose prose-invert prose-indigo max-w-none">
              <p className="text-indigo-200 text-lg mb-8">
                This tutorial will guide you through the process of{' '}
                {title.toLowerCase()}. Follow these steps to ensure a smooth and
                compliant setup for your business in the Netherlands.
              </p>
              <div id={`step-${currentStep}`} className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 mb-8">
                <h2 className="text-xl font-bold text-white mb-4">
                  Step {currentStep}: {steps[currentStep - 1].title}
                </h2>
                <p className="text-indigo-200">
                  {steps[currentStep - 1].content}
                </p>
              </div>
              <div className="flex justify-between mt-12">
                {currentStep > 1 ? (
                  <Link to={`?step=${currentStep - 1}`} className="inline-flex items-center px-4 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                    <ArrowLeftIcon className="h-4 w-4 mr-2" />
                    Previous Step
                  </Link>
                ) : (
                  <div></div>
                )}
                {currentStep < steps.length && (
                  <Link to={`?step=${currentStep + 1}`} className="inline-flex items-center px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors">
                    Next Step
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}