import React, { useState } from 'react';
import { PlaneIcon, CheckIcon, AlertTriangleIcon, ArrowRightIcon, RefreshCwIcon, ClipboardCheckIcon } from 'lucide-react';
interface AssessmentQuestion {
  id: string;
  question: string;
  category: 'financial' | 'operational' | 'legal' | 'market';
  options: string[];
}
const questions: AssessmentQuestion[] = [{
  id: 'revenue',
  question: 'What is your annual revenue?',
  category: 'financial',
  options: ['<€100k', '€100k-€500k', '€500k-€2M', '>€2M']
}, {
  id: 'employees',
  question: 'How many employees do you have?',
  category: 'operational',
  options: ['1-10', '11-50', '51-200', '200+']
}, {
  id: 'market',
  question: 'Which markets are you currently active in?',
  category: 'market',
  options: ['Domestic only', '1-2 countries', '3-5 countries', '5+ countries']
}, {
  id: 'experience',
  question: 'International business experience?',
  category: 'operational',
  options: ['None', 'Some exports', 'Have subsidiaries', 'Extensive']
}];
export function ReadinessChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [questions[currentStep].id]: answer
    });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setShowResults(true);
      }, 2000);
    }
  };
  const calculateReadiness = () => {
    // Simulate AI analysis
    return {
      financial: 85,
      operational: 70,
      legal: 90,
      market: 75
    };
  };
  const getRecommendations = () => {
    return ['Consider establishing a Dutch BV entity', 'Review VAT registration requirements', 'Prepare compliance documentation', 'Schedule consultation with legal expert'];
  };
  if (showResults) {
    const readiness = calculateReadiness();
    const recommendations = getRecommendations();
    return <div className="space-y-6">
        <div className="bg-[#1B1537] rounded-lg p-6 border border-[#2D2755]">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <ClipboardCheckIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
            Flight Readiness Report
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(readiness).map(([category, score]) => <div key={category} className="bg-[#0F0B1F] rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 capitalize">{category}</span>
                  <span className="text-white font-bold">{score}%</span>
                </div>
                <div className="h-2 bg-[#2D2755] rounded-full overflow-hidden">
                  <div className="h-full bg-[#EA3A70] transition-all duration-1000" style={{
                width: `${score}%`
              }} />
                </div>
              </div>)}
          </div>
        </div>
        <div className="bg-[#1B1537] rounded-lg p-6 border border-[#2D2755]">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <PlaneIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
            Next Steps
          </h3>
          <div className="space-y-3">
            {recommendations.map((rec, index) => <div key={index} className="flex items-center space-x-3 text-gray-300">
                <CheckIcon className="h-5 w-5 text-[#EA3A70]" />
                <span>{rec}</span>
              </div>)}
          </div>
        </div>
        <button onClick={() => {
        setShowResults(false);
        setCurrentStep(0);
        setAnswers({});
      }} className="w-full bg-[#EA3A70] text-white py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
          <RefreshCwIcon className="h-5 w-5 mr-2" />
          Start New Assessment
        </button>
      </div>;
  }
  if (analyzing) {
    return <div className="bg-[#1B1537] rounded-lg p-6 border border-[#2D2755]">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin">
            <RefreshCwIcon className="h-8 w-8 text-[#EA3A70]" />
          </div>
          <p className="text-white">Analyzing your business readiness...</p>
        </div>
      </div>;
  }
  return <div className="bg-[#1B1537] rounded-lg p-6 border border-[#2D2755]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Pre-Flight Check</h3>
        <div className="text-gray-400">
          Step {currentStep + 1} of {questions.length}
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-lg text-white mb-4">
          {questions[currentStep].question}
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {questions[currentStep].options.map(option => <button key={option} onClick={() => handleAnswer(option)} className="flex items-center justify-between p-4 bg-[#0F0B1F] border border-[#2D2755] rounded-lg text-white hover:border-[#EA3A70] transition-colors">
              <span>{option}</span>
              <ArrowRightIcon className="h-5 w-5 text-[#EA3A70]" />
            </button>)}
        </div>
      </div>
    </div>;
}