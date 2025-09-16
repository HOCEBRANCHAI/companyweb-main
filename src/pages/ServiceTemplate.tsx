import React from 'react';
import { BuildingIcon, MailIcon, LineChartIcon, PercentIcon, FileTextIcon, ShieldIcon, CheckCircleIcon, ClockIcon, CoinsIcon, GlobeIcon, LockIcon, BookOpenIcon } from 'lucide-react';
import { MainLayout } from '../components/layout/MainLayout';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceBenefits } from '../components/services/ServiceBenefits';
import { HowItWorks } from '../components/services/HowItWorks';
import { PricingSection } from '../components/services/PricingSection';
import { FaqSection } from '../components/services/FaqSection';
import { RelatedServices } from '../components/services/RelatedServices';
import { CtaSection } from '../components/home/CtaSection';
export function ServiceTemplate() {
  // This is a template that would be customized for each service
  // For demonstration, I'm using Company Formation service data
  const benefits = [{
    title: 'Fast Registration',
    description: 'Complete your Dutch company registration in as little as 48 hours with our streamlined process.',
    icon: <ClockIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Legal Compliance',
    description: 'Ensure your company meets all Dutch legal requirements with our expert guidance.',
    icon: <CheckCircleIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Cost-Effective',
    description: 'Save thousands of euros compared to traditional law firms and service providers.',
    icon: <CoinsIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Global Access',
    description: 'Use your Dutch entity as a gateway to European and international markets.',
    icon: <GlobeIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Ongoing Support',
    description: 'Receive continuous assistance with compliance and administrative requirements.',
    icon: <BookOpenIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Data Security',
    description: 'Your sensitive business information is protected with enterprise-grade security.',
    icon: <LockIcon className="h-6 w-6 text-indigo-300" />
  }];
  const steps = [{
    title: 'Initial Consultation',
    description: "We'll discuss your business needs and goals to determine the best Dutch entity structure for your situation.",
    icon: <BuildingIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Document Preparation',
    description: 'Our team prepares all necessary legal documents and forms for your Dutch company registration.',
    icon: <FileTextIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'KYC Verification',
    description: 'Complete our streamlined KYC process to verify director and shareholder identities.',
    icon: <CheckCircleIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Official Registration',
    description: 'We submit your application to the Dutch Chamber of Commerce (KVK) and handle all interactions.',
    icon: <GlobeIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Bank Account Setup',
    description: 'Receive assistance with opening a Dutch business bank account for your new entity.',
    icon: <CoinsIcon className="h-6 w-6 text-indigo-300" />
  }];
  const pricingPackages = [{
    name: 'Basic',
            price: '€199',
    description: 'Essential company formation service for startups and small businesses.',
    buttonText: 'Get Started',
    buttonLink: '/get-started?plan=basic'
  }, {
    name: 'Standard',
            price: '€399',
    description: 'Comprehensive formation package with additional legal support.',
    buttonText: 'Get Started',
    buttonLink: '/get-started?plan=standard',
    highlighted: true
  }, {
    name: 'Premium',
    price: '€1,499',
    description: 'Complete business setup with premium support and additional services.',
    buttonText: 'Get Started',
    buttonLink: '/get-started?plan=premium'
  }];
  const pricingFeatures = [{
    name: 'Company name reservation',
    basic: true,
    standard: true,
    premium: true
  }, {
    name: 'Company registration (KVK)',
    basic: true,
    standard: true,
    premium: true
  }, {
    name: 'Articles of Association',
    basic: true,
    standard: true,
    premium: true
  }, {
    name: 'Registered office address',
    basic: false,
    standard: true,
    premium: true
  }, {
    name: 'VAT registration',
    basic: false,
    standard: true,
    premium: true
  }, {
    name: 'Corporate bank account assistance',
    basic: false,
    standard: false,
    premium: true
  }, {
    name: 'Legal compliance review',
    basic: false,
    standard: true,
    premium: true
  }, {
    name: 'Business license application',
    basic: false,
    standard: false,
    premium: true
  }, {
    name: 'Priority processing',
    basic: false,
    standard: false,
    premium: true
  }];
  const faqs = [{
    question: 'How long does it take to form a Dutch company?',
    answer: 'With our standard service, the process typically takes 3-5 business days. With our expedited service, we can complete the registration in as little as 48 hours after receiving all required documentation.'
  }, {
    question: 'What types of business entities can I register in the Netherlands?',
    answer: 'The most common entity types are the BV (private limited company), Branch Office, and Sole Proprietorship. Each has different legal and tax implications. Our team can help you determine which structure is best for your business needs.'
  }, {
    question: 'Do I need to be physically present in the Netherlands to form a company?',
    answer: 'No, our digital-first approach allows you to complete the entire process remotely. We handle all local paperwork and filings on your behalf.'
  }, {
    question: 'What are the minimum capital requirements for a Dutch BV?',
    answer: 'A Dutch BV requires a minimum capital of €0.01, making it one of the most accessible limited liability structures in Europe.'
  }, {
    question: 'Do I need a Dutch resident director for my company?',
    answer: 'No, there is no legal requirement for Dutch companies to have resident directors. Directors can be of any nationality and reside anywhere in the world.'
  }, {
    question: 'What ongoing compliance requirements will my Dutch company have?',
    answer: 'Dutch companies must file annual accounts, maintain proper administration, and comply with tax obligations. Our Corporate Secretary service can handle these requirements for you to ensure ongoing compliance.'
  }];
  const relatedServices = [{
    title: 'Mailbox Service',
    description: 'Get a prestigious Dutch business address with mail handling and forwarding services.',
    icon: <MailIcon className="h-6 w-6 text-indigo-300" />,
    href: '/services/mailbox'
  }, {
    title: 'Accounting',
    description: 'Comprehensive bookkeeping and financial reporting tailored for international businesses.',
    icon: <LineChartIcon className="h-6 w-6 text-indigo-300" />,
    href: '/services/accounting'
  }, {
    title: 'Tax Filing',
    description: 'Stay compliant with Dutch and EU tax regulations with our expert tax filing services.',
    icon: <PercentIcon className="h-6 w-6 text-indigo-300" />,
    href: '/services/tax-filing'
  }];
  return <MainLayout>
      <ServiceHero title="Dutch Company Formation" description="Establish your business in the Netherlands quickly and efficiently with our streamlined company formation service." icon={<BuildingIcon className="h-4 w-4" />} image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
      <ServiceBenefits title="Benefits of Dutch Company Formation" description="Why choose the Netherlands for your business expansion?" benefits={benefits} />
      <HowItWorks title="How It Works" description="Our streamlined process makes forming your Dutch company simple and hassle-free." steps={steps} />
      <PricingSection title="Pricing & Packages" description="Transparent pricing with no hidden fees or surprises." packages={pricingPackages} features={pricingFeatures} />
      <FaqSection title="Frequently Asked Questions" description="Get answers to common questions about Dutch company formation." faqs={faqs} />
      <RelatedServices title="Related Services" description="Explore other services to support your Dutch business operations." services={relatedServices} />
      <CtaSection />
    </MainLayout>;
}