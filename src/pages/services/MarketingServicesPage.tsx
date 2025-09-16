import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { MicIcon, Share2Icon, FileTextIcon, ArrowRightIcon, CheckIcon, GlobeIcon, ShieldIcon, SparklesIcon, BookmarkIcon, CalendarIcon, BarChart2Icon, PlusCircleIcon, UsersIcon, MessageSquareIcon, PhoneIcon, PlayCircleIcon, LayoutDashboardIcon, LockIcon, BrainCircuitIcon, CheckCircleIcon, ListIcon, LanguagesIcon, PieChartIcon, LineChartIcon, SearchIcon, MapPinIcon, TargetIcon, HeadphonesIcon, SendIcon, StarIcon } from 'lucide-react';
import { VoiceAgentDemo } from '../../components/marketing/demos/VoiceAgentDemo';
import { CitationBuilderDemo } from '../../components/marketing/demos/CitationBuilderDemo';
import { ContentGeneratorDemo } from '../../components/marketing/demos/ContentGeneratorDemo';
import { LeadListDemo } from '../../components/marketing/demos/LeadListDemo';
import { MainLayout } from '../../components/layout/MainLayout';
import { CallToAction } from '../../components/CallToAction';
export function MarketingServicesPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const closeDemo = () => {
    setActiveDemo(null);
  };
  const marketingServices = [{
    id: 'voice-agent',
    title: 'AI Voice Agent',
    description: 'Automate calls and conversations with leads and customers',
    icon: <MicIcon className="h-6 w-6 text-[#EA3A70]" />,
    progress: 75,
    dueDate: '2024-06-05'
  }, {
    id: 'citation-builder',
    title: 'Local Citation Builder',
    description: 'Boost your local SEO with consistent business listings',
    icon: <MapPinIcon className="h-6 w-6 text-[#4A2D80]" />,
    progress: 50,
    dueDate: '2024-06-12'
  }, {
    id: 'content-generator',
    title: 'Content Generator',
    description: 'Create engaging content for social media and blogs',
    icon: <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />,
    progress: 40,
    dueDate: '2024-06-18'
  }, {
    id: 'lead-list',
    title: 'Lead List Generation',
    description: 'Targeted lead lists ready for outreach campaigns',
    icon: <ListIcon className="h-6 w-6 text-[#4A2D80]" />,
    progress: 20,
    dueDate: '2024-06-25'
  }];
  const additionalServices = [{
    title: 'Social Media Management',
    description: 'Complete management of your social media presence',
    icon: <Share2Icon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Brand Voice Analysis',
    description: 'AI-powered analysis and enhancement of your brand voice',
    icon: <LanguagesIcon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: 'Competitor Intelligence',
    description: 'Insights on competitor marketing strategies',
    icon: <TargetIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Marketing Analytics',
    description: 'Comprehensive analytics dashboard for all marketing efforts',
    icon: <PieChartIcon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: 'Email Marketing Automation',
    description: 'Automated email campaigns based on customer behavior',
    icon: <SendIcon className="h-6 w-6 text-[#EA3A70]" />,
    premiumOnly: true
  }];
  const portalFeatures = [{
    title: 'AI-Powered Automation',
    description: 'Leverage artificial intelligence to automate repetitive marketing tasks',
    icon: <BrainCircuitIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Local & Global Reach',
    description: 'Market effectively both locally and internationally',
    icon: <GlobeIcon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: 'CRM Integration',
    description: 'Seamless integration with your existing CRM systems',
    icon: <UsersIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Performance Tracking',
    description: 'Real-time tracking of all your marketing campaigns',
    icon: <LineChartIcon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: 'Multi-channel Marketing',
    description: 'Consistent messaging across all marketing channels',
    icon: <LayoutDashboardIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Compliance Assurance',
    description: 'Ensure all marketing efforts comply with local regulations',
    icon: <ShieldIcon className="h-6 w-6 text-[#4A2D80]" />
  }];
  const handleContinue = () => {
    // Scroll to pricing or contact section
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <MainLayout showBackground={true}>
      <main className="w-full min-h-screen bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-[#1E1B3F] to-[#2A2456] rounded-2xl p-8 mb-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                AI-Powered Marketing Services
              </h1>
              <p className="text-xl text-purple-200/80 mb-8">
                Transform your marketing strategy with our suite of AI-powered
                tools designed to automate, optimize, and elevate your brand
                presence
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-[#EA3A70] to-[#4A2D80] text-white rounded-lg font-medium hover:from-[#EA3A70]/90 hover:to-[#4A2D80]/90 flex items-center">
                  Explore Features
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 flex items-center">
                  Schedule Demo
                  <CalendarIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Marketing automation visualization" className="h-full w-full object-cover" />
            </div>
          </div>
          {/* Interactive Demo Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interactive Marketing Solutions
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                Experience our innovative marketing tools that combine AI
                technology with expert marketing strategies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingServices.map(service => <div key={service.id} className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30 hover:border-[#EA3A70]/30 transition-colors cursor-pointer" onClick={() => setActiveDemo(service.id)}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#4A2D80]/10 p-2 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="bg-[#4A2D80]/20 text-[#4A2D80] text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Available
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-purple-200/70 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm text-purple-200/70 mb-3">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>Setup by: {service.dueDate}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-purple-200/70">Completion</span>
                      <span className="text-white font-medium">
                        {service.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-[#0A0826]/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#EA3A70] to-[#4A2D80] h-2 rounded-full" style={{
                    width: `${service.progress}%`
                  }}></div>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg text-white hover:bg-[#EA3A70]/20 transition-colors">
                    <PlayCircleIcon className="mr-2 h-5 w-5 text-[#EA3A70]" />
                    Preview Demo
                  </button>
                </div>)}
            </div>
            <div className="mt-8 p-4 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-xl">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <LockIcon className="h-5 w-5 text-[#EA3A70]" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-purple-200/70">
                    These interactive demos showcase our AI-powered marketing
                    tools. To access full functionality and begin implementing
                    these solutions for your business, please activate the
                    corresponding service in your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Voice Agent Feature Highlight */}
          <div className="mb-16 bg-[#1E1B3F] rounded-2xl p-8 border border-[#4A2D80]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#4A2D80]/10 p-3 inline-block rounded-lg mb-4">
                  <MicIcon className="h-8 w-8 text-[#EA3A70]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  AI Voice Agent: Your 24/7 Sales Representative
                </h2>
                <p className="text-purple-200/80 mb-6">
                  Our AI Voice Agent technology handles calls automatically,
                  engaging with leads and customers in natural conversation. It
                  qualifies prospects, answers questions, and schedules
                  appointments - all while sending real-time updates to your
                  CRM.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Natural language conversations that sound human
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Automatic call handling for inbound and outbound calls
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Real-time CRM updates with conversation summaries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Customizable to match your brand voice and messaging
                    </span>
                  </li>
                </ul>
                <button onClick={() => setActiveDemo('voice-agent')} className="px-6 py-3 bg-gradient-to-r from-[#EA3A70] to-[#4A2D80] text-white rounded-lg font-medium hover:from-[#EA3A70]/90 hover:to-[#4A2D80]/90 flex items-center">
                  Try Voice Agent Demo
                  <PlayCircleIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="bg-[#0A0826]/50 rounded-xl p-6 border border-[#4A2D80]/30">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg bg-[#0A0826] flex items-center justify-center">
                  <div className="text-center p-8">
                    <HeadphonesIcon className="h-16 w-16 text-[#EA3A70]/50 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">
                      Voice Agent Preview
                    </h3>
                    <p className="text-purple-200/70 mb-6">
                      Click the demo button to experience an interactive preview
                      of our AI Voice Agent in action
                    </p>
                    <button onClick={() => setActiveDemo('voice-agent')} className="px-6 py-3 bg-[#EA3A70]/20 border border-[#EA3A70]/30 text-white rounded-lg hover:bg-[#EA3A70]/30 transition-colors flex items-center mx-auto">
                      <PlayCircleIcon className="mr-2 h-5 w-5 text-[#EA3A70]" />
                      Play Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Services Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Marketing Services
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                Beyond our core AI tools, we offer specialized marketing
                services to enhance your brand presence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => <div key={index} className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30 hover:border-[#EA3A70]/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-[#4A2D80]/10 p-2 rounded-lg">
                      {service.icon}
                    </div>
                    {service.premiumOnly && <span className="bg-[#EA3A70]/20 text-[#EA3A70] text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Premium Plan
                      </span>}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-purple-200/70 mb-4">
                    {service.description}
                  </p>
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-[#4A2D80]/20 border border-[#4A2D80]/30 rounded-lg text-white hover:bg-[#4A2D80]/30 transition-colors">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>)}
            </div>
            <div className="mt-8 text-center">
              <button className="inline-flex items-center px-6 py-3 bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg text-white hover:bg-[#1E1B3F]/80 transition-colors">
                <PlusCircleIcon className="mr-2 h-5 w-5 text-[#EA3A70]" />
                Explore All Services
              </button>
            </div>
          </div>
          {/* Lead List Generation Feature */}
          <div className="mb-16 bg-[#1E1B3F] rounded-2xl p-8 border border-[#4A2D80]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-[#0A0826]/50 rounded-xl p-6 border border-[#4A2D80]/30">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg bg-[#0A0826] flex items-center justify-center">
                    <div className="text-center p-8">
                      <TargetIcon className="h-16 w-16 text-[#4A2D80]/50 mx-auto mb-4" />
                      <h3 className="text-xl font-medium text-white mb-2">
                        Lead List Preview
                      </h3>
                      <p className="text-purple-200/70 mb-6">
                        Click the demo button to see how our targeted lead lists
                        are generated and prepared for your campaigns
                      </p>
                      <button onClick={() => setActiveDemo('lead-list')} className="px-6 py-3 bg-[#4A2D80]/20 border border-[#4A2D80]/30 text-white rounded-lg hover:bg-[#4A2D80]/30 transition-colors flex items-center mx-auto">
                        <PlayCircleIcon className="mr-2 h-5 w-5 text-[#4A2D80]" />
                        Play Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-[#4A2D80]/10 p-3 inline-block rounded-lg mb-4">
                  <ListIcon className="h-8 w-8 text-[#4A2D80]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Targeted Lead Lists: Ready for Outreach
                </h2>
                <p className="text-purple-200/80 mb-6">
                  Our bespoke lead generation service delivers curated lists of
                  potential customers tailored to your business. These leads are
                  verified, enriched with contact details, and ready to be
                  contacted through our AI Voice Agent or your preferred
                  outreach method.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Industry and location-specific targeting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Verified contact information with direct phone numbers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Seamless integration with our AI Voice Agent
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">
                      Monthly refreshed lists based on campaign performance
                    </span>
                  </li>
                </ul>
                <button onClick={() => setActiveDemo('lead-list')} className="px-6 py-3 bg-gradient-to-r from-[#4A2D80] to-[#6E36C9] text-white rounded-lg font-medium hover:from-[#4A2D80]/90 hover:to-[#6E36C9]/90 flex items-center">
                  View Lead List Demo
                  <PlayCircleIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          {/* Portal Features Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our Marketing Platform
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                Designed to transform your marketing efforts with cutting-edge
                AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portalFeatures.map((feature, index) => <div key={index} className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30">
                  <div className="bg-[#4A2D80]/10 p-2 rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-purple-200/70">
                    {feature.description}
                  </p>
                </div>)}
            </div>
          </div>
          {/* Testimonials Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                See how businesses are transforming their marketing with our
                AI-powered tools
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                </div>
                <p className="text-purple-200/90 mb-4">
                  "The AI Voice Agent has revolutionized our sales process. It
                  handles initial qualification calls perfectly, and our sales
                  team now focuses only on highly qualified leads."
                </p>
                <div>
                  <p className="text-white font-medium">David Kowalski</p>
                  <p className="text-purple-200/70 text-sm">
                    Sales Director, TechSolutions GmbH
                  </p>
                </div>
              </div>
              <div className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                </div>
                <p className="text-purple-200/90 mb-4">
                  "The Content Generator has saved us countless hours. It
                  creates engaging posts that perfectly match our brand voice,
                  and our social engagement has increased by 45%."
                </p>
                <div>
                  <p className="text-white font-medium">Sophie Martins</p>
                  <p className="text-purple-200/70 text-sm">
                    Marketing Manager, Eco Innovations
                  </p>
                </div>
              </div>
              <div className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                </div>
                <p className="text-purple-200/90 mb-4">
                  "The Lead List service combined with the AI Voice Agent has
                  transformed our outreach. We've seen a 3x increase in
                  qualified meetings with a fraction of the effort."
                </p>
                <div>
                  <p className="text-white font-medium">Marco Rossi</p>
                  <p className="text-purple-200/70 text-sm">
                    Founder, Rossi Digital Consulting
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#4A2D80] to-[#EA3A70] rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to revolutionize your marketing?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Get started with our AI-powered marketing platform today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-[#EA3A70] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Activate Marketing Services
              </button>
              <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
        {/* Call to Action Component */}
        <CallToAction onContinue={handleContinue} />
        {/* Demo Modals */}
        {activeDemo === 'voice-agent' && <VoiceAgentDemo onClose={closeDemo} />}
        {activeDemo === 'citation-builder' && <CitationBuilderDemo onClose={closeDemo} />}
        {activeDemo === 'content-generator' && <ContentGeneratorDemo onClose={closeDemo} />}
        {activeDemo === 'lead-list' && <LeadListDemo onClose={closeDemo} />}
      </main>
    </MainLayout>;
}