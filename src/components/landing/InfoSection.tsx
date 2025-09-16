import React, { useState } from 'react'
import {
  BrainIcon,
  SparklesIcon,
  ShieldCheckIcon,
  RocketIcon,
  FileTextIcon,
  CheckIcon,
  CloudIcon,
  LightbulbIcon,
  ClockIcon,
  ScrollIcon,
  PlaneIcon,
} from 'lucide-react'
export function InfoSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const features = [
    {
      icon: <BrainIcon className="h-8 w-8" />,
      title: 'AI Analysis',
      description: 'Real-time market insights',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: <ScrollIcon className="h-8 w-8" />,
      title: 'Legal Document Lounge',
      description: 'AI-powered legal document generation',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: <PlaneIcon className="h-8 w-8" />,
      title: 'Annual Report Autopilot',
      description: 'Automated financial reporting suite',
      color: 'from-pink-600 to-pink-400',
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: 'Smart Processing',
      description: 'Automated documentation',
      color: 'from-indigo-600 to-indigo-400',
    },
    {
      icon: <RocketIcon className="h-8 w-8" />,
      title: 'Quick Setup',
      description: 'Instant company formation',
      color: 'from-green-600 to-green-400',
    },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl -top-1/2 -left-1/4 animate-pulse-slow" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl -bottom-1/2 -right-1/4 animate-pulse-slow delay-1000" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-${Math.random() > 0.5 ? '8' : '6'} h-${Math.random() > 0.5 ? '8' : '6'} 
                         ${Math.random() > 0.5 ? 'bg-purple-500/5' : 'bg-pink-500/5'} 
                         ${Math.random() > 0.5 ? 'rounded-full' : 'rounded-lg'}
                         transform rotate-${Math.floor(Math.random() * 360)}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEwyMCA0ME00MCAwTDQwIDQwTTAgMEwwIDQwTTAgMjBMNDAgMjAiIHN0cm9rZT0iIzJEMjc1NSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full text-purple-400 backdrop-blur-sm">
              <BrainIcon className="h-5 w-5 mr-2" />
              AI-Powered Solutions
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            Intelligent Business Formation
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our premium AI tools designed to make your international
            expansion as smooth as a first-class flight.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative transform hover:-translate-y-2 transition-all duration-300"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="relative bg-gradient-to-b from-[#2D2755]/50 to-[#1B1537]/50 rounded-xl p-6 border border-[#2D2755] backdrop-blur-sm overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className={`relative w-14 h-14 mb-4 rounded-xl bg-gradient-to-r ${feature.color} p-3 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                  <div className="absolute inset-0 bg-white opacity-20 rounded-xl group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-xl blur group-hover:opacity-100 opacity-0 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: <CloudIcon />,
              label: 'AI Processes',
              value: '24/7',
            },
            {
              icon: <ClockIcon />,
              label: 'Setup Time',
              value: '48h',
            },
            {
              icon: <CheckIcon />,
              label: 'Success Rate',
              value: '99%',
            },
            {
              icon: <LightbulbIcon />,
              label: 'Smart Features',
              value: '50+',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#2D2755]/20 rounded-lg p-4 backdrop-blur-sm border border-[#2D2755]/50"
            >
              <div className="text-purple-400 mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
