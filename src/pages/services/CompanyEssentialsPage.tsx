import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { BuildingIcon, CreditCardIcon, UsersIcon, EuroIcon, ArrowRightIcon, CheckIcon, GlobeIcon, ShieldIcon, SparklesIcon, BookmarkIcon, CalendarIcon, BarChart2Icon, PlusCircleIcon, AnchorIcon, BadgePercentIcon, ShieldCheckIcon, CheckCircleIcon, PlayCircleIcon, LayoutDashboardIcon, LockIcon } from 'lucide-react';
import { SimpleImage } from '../../components/common/SimpleImage';
import { BranchRegistrationFlow } from '../../components/workflows/branch/BranchRegistrationFlow';
import { BankAccountSetupFlow } from '../../components/workflows/bank/BankAccountSetupFlow';
import { VATRegistrationFlow } from '../../components/workflows/vat/VATRegistrationFlow';
import { EmployerRegistrationFlow } from '../../components/workflows/employer/EmployerRegistrationFlow';
import { MainLayout } from '../../components/layout/MainLayout';
import { CallToAction } from '../../components/CallToAction';
export function CompanyEssentialsPage() {
  const [activeFlow, setActiveFlow] = useState<string | null>(null);
  const closeFlow = () => {
    setActiveFlow(null);
  };
  const essentialServices = [{
    id: 'branch',
    title: 'Branch Registration',
    description: 'Complete your branch registration process across EU countries',
    icon: <BuildingIcon className="h-6 w-6 text-[#4A2D80]" />,
    progress: 60,
    dueDate: '2024-06-15'
  }, {
    id: 'bank',
    title: 'Bank Account Setup',
    description: 'Complete your business bank account application',
    icon: <CreditCardIcon className="h-6 w-6 text-[#EA3A70]" />,
    progress: 30,
    dueDate: '2024-06-10'
  }, {
    id: 'vat',
    title: 'VAT Registration',
    description: 'Register for VAT to comply with tax regulations',
    icon: <EuroIcon className="h-6 w-6 text-[#EA3A70]" />,
    progress: 15,
    dueDate: '2024-06-20'
  }, {
    id: 'employer',
    title: 'Employer Registration',
    description: 'Set up payroll for your employees in any EU country',
    icon: <UsersIcon className="h-6 w-6 text-[#4A2D80]" />,
    progress: 10,
    dueDate: '2024-06-25'
  }];
  const additionalServices = [{
    title: 'Trademark Registration',
    description: 'Protect your brand across the EU market',
    icon: <BookmarkIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Startup Visa Application',
    description: 'Streamlined visa process for innovative startups',
    icon: <SparklesIcon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: 'Vessel Registration',
    description: 'Register commercial or private vessels in the EU',
    icon: <AnchorIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'REMIT Representation',
    description: 'Compliance with EU energy market regulations',
    icon: <ShieldIcon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: '30% Ruling Application',
    description: 'Tax advantage for highly skilled migrants in the Netherlands',
    icon: <BadgePercentIcon className="h-6 w-6 text-[#EA3A70]" />,
    nlOnly: true
  }];
  const portalFeatures = [{
    title: 'All-in-One Solution',
    description: 'Manage all your EU business essentials in one secure platform',
    icon: <LayoutDashboardIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'EU-Wide Coverage',
    description: 'Consistent service across all 27 EU member states',
    icon: <GlobeIcon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: 'Expert Guidance',
    description: 'Access to specialized advisors for each business process',
    icon: <UsersIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Progress Tracking',
    description: 'Real-time updates on all your business applications',
    icon: <BarChart2Icon className="h-6 w-6 text-[#4A2D80]" />
  }, {
    title: 'Document Management',
    description: 'Secure storage and management of all business documents',
    icon: <ShieldCheckIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Compliance Assurance',
    description: 'Stay compliant with all EU and local regulations',
    icon: <CheckCircleIcon className="h-6 w-6 text-[#4A2D80]" />
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
                Company Essentials Portal
              </h1>
              <p className="text-xl text-purple-200/80 mb-8">
                Your all-in-one solution for establishing and managing your
                business presence across the European Union
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
              <SimpleImage imageName="corporate_secretary_demo_abstract_portal.jpg" alt="Abstract visualization of business portal" className="h-full w-full object-cover" />
            </div>
          </div>
          {/* Interactive Demo Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interactive Business Setup Solutions
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                Experience our streamlined workflows for essential business
                services across the EU
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {essentialServices.map(service => <div key={service.id} className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30 hover:border-[#EA3A70]/30 transition-colors cursor-pointer" onClick={() => setActiveFlow(service.id)}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#4A2D80]/10 p-2 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="bg-[#4A2D80]/20 text-[#4A2D80] text-xs font-medium px-2.5 py-0.5 rounded-full">
                      In Progress
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
                    <span>Due: {service.dueDate}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-purple-200/70">Progress</span>
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
                    Preview Flow
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
                    The interactive demos showcase our streamlined workflows. To
                    access full functionality and begin your actual business
                    setup process, please activate the corresponding service in
                    your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Services Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Business Services
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                Beyond the essentials, our portal offers specialized services to
                support your business growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => <div key={index} className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30 hover:border-[#EA3A70]/30 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-[#4A2D80]/10 p-2 rounded-lg">
                      {service.icon}
                    </div>
                    {service.nlOnly && <span className="bg-[#EA3A70]/20 text-[#EA3A70] text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Netherlands Only
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
          {/* Portal Features Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our Portal
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                Designed to simplify complex business processes across the
                European Union
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
                Trusted by Businesses Across Europe
              </h2>
              <p className="text-purple-200/70 max-w-2xl mx-auto">
                See what our clients say about their experience with our portal
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>)}
                  </div>
                </div>
                <p className="text-purple-200/90 mb-4">
                  "The branch registration process was seamless. Their expertise
                  in EU regulations saved us countless hours and potential
                  pitfalls."
                </p>
                <div>
                  <p className="text-white font-medium">Sarah Chen</p>
                  <p className="text-purple-200/70 text-sm">
                    CEO, TechGrowth Asia
                  </p>
                </div>
              </div>
              <div className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>)}
                  </div>
                </div>
                <p className="text-purple-200/90 mb-4">
                  "The VAT registration flow was intuitive and efficient. We
                  were able to complete the process in record time thanks to the
                  guided approach."
                </p>
                <div>
                  <p className="text-white font-medium">Michael Schmidt</p>
                  <p className="text-purple-200/70 text-sm">
                    Director, European Operations
                  </p>
                </div>
              </div>
              <div className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>)}
                  </div>
                </div>
                <p className="text-purple-200/90 mb-4">
                  "Setting up our EU banking and employer registration was
                  remarkably straightforward with this portal. The attention to
                  detail made all the difference."
                </p>
                <div>
                  <p className="text-white font-medium">Elena Rodriguez</p>
                  <p className="text-purple-200/70 text-sm">
                    CFO, Global Solutions Inc
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#4A2D80] to-[#EA3A70] rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to streamline your EU business setup?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Get started with our comprehensive Company Essentials portal today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-[#EA3A70] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Activate Your Portal
              </button>
              <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
        {/* Call to Action Component */}
        <CallToAction onContinue={handleContinue} />
        {/* Flow Modals */}
        {activeFlow === 'branch' && <BranchRegistrationFlow onClose={closeFlow} />}
        {activeFlow === 'bank' && <BankAccountSetupFlow onClose={closeFlow} />}
        {activeFlow === 'vat' && <VATRegistrationFlow onClose={closeFlow} />}
        {activeFlow === 'employer' && <EmployerRegistrationFlow onClose={closeFlow} />}
      </main>
    </MainLayout>;
}