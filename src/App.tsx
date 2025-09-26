import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ServiceTemplate } from './pages/ServiceTemplate'
import { EBranch } from './pages/EBranch'
import { Tools } from './pages/Tools'
import { Pricing } from './pages/Pricing'
import { NewTutorial } from './pages/NewTutorial'
import { CompanyFormationPage } from './pages/services/CompanyFormationPage'
import { MailboxPage } from './pages/services/MailboxPage'
import { AccountingPage } from './pages/services/AccountingPage'
import { TaxFilingPage } from './pages/services/TaxFilingPage'
import { CorporateSecretaryPage } from './pages/services/CorporateSecretaryPage'
import { LegalPage } from './pages/services/LegalPage'
import { MarketingServicesPage } from './pages/services/MarketingServicesPage'
import { CompanyEssentialsPage } from './pages/services/CompanyEssentialsPage'
import { BranchRegistrationRequirements } from './pages/BranchRegistrationRequirements'
import { BlogDetail } from './pages/blog/BlogDetail'
import { BlogPage } from './pages/blog/BlogPage'
import { Services } from './pages/Services'
import { EUServicesPage } from './components/EUServicesPage'
import { PaymentPage } from './components/PaymentPage'
import { PaymentSuccess } from './pages/PaymentSuccess'
import { PaymentCancelled } from './pages/PaymentCancelled'
import { PaymentTest } from './pages/PaymentTest'
import { AboutUs } from './pages/AboutUs'
import {SurveyForm} from './components/SurveyForm'
import { NetherlandsProductPage } from './components/expansion/NetherlandsProductPage'
import { FranceProductPage } from './components/expansion/FranceProductPage'
import { GermanyProductPage } from './components/expansion/GermanyProductPage'
import { CountryPage } from './components/countryyy p/CountryPage'
import { Contact } from './pages/Contact'
import { QuotePage } from './pages/QuotePage'
import { FloatingChatbot } from './components/FloatingChatbot'
import './styles/globals.css'

// Redirect component for sending users to external URLs (e.g., client dashboard)
function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.href = to
  }, [to])
  return null
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/company-formation" element={<CompanyFormationPage />} />
        <Route path="/services/mailbox" element={<MailboxPage />} />
        <Route path="/services/accounting" element={<AccountingPage />} />
        <Route path="/services/tax-filing" element={<TaxFilingPage />} />
        <Route path="/services/corporate-secretary" element={<CorporateSecretaryPage />} />
        <Route path="/services/payment" element={<PaymentPage />} />
        <Route path="/services/legal" element={<LegalPage />} />
        <Route path="/services/marketing" element={<MarketingServicesPage />} />
        <Route path="/services/company-essentials" element={<CompanyEssentialsPage />} />
        <Route path="/market-entry" element={<EUServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceTemplate />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ebranch" element={<EBranch />} />
        <Route path ="/survey" element={<SurveyForm onClose={() => window.history.back()} />} />
        <Route path="/ebranch/branch-registration-requirements" element={<BranchRegistrationRequirements />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/tutorials/:tutorialId" element={<NewTutorial />} />
        <Route path="/tutorials" element={<NewTutorial />} />
        <Route path="/tutorials/:country-vat-requirements" element={<NewTutorial />} />
        <Route path="/tutorials/:country-corporate-tax-filing" element={<NewTutorial />} />
        <Route path="/tutorials/:country-business-bank-account" element={<NewTutorial />} />
        <Route path="/tutorials/hiring-employees-:country" element={<NewTutorial />} />
        <Route path="/tutorials/:country-employment-contracts" element={<NewTutorial />} />
        <Route path="/tutorials/choosing-:country-business-entity" element={<NewTutorial />} />
        <Route path="/tutorials/setting-up-:country-company" element={<NewTutorial />} />
        <Route path="/tutorials/required-documents-:country" element={<NewTutorial />} />
        <Route path="/tutorials/:country-compliance-calendar" element={<NewTutorial />} />
        <Route path="/tutorials/:country-ubo-registration" element={<NewTutorial />} />
        <Route path="/tutorials/:country-business-financing" element={<NewTutorial />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/resources" element={<BlogPage />} />
        <Route path="/resources/knowledge-base" element={<BlogPage />} />
        <Route path="/resources/faq" element={<BlogPage />} />
        <Route path="/resources/case-studies" element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/netherlands-business-setup" element={<NetherlandsProductPage />} />
        <Route path="/france-business-setup" element={<FranceProductPage />} />
        <Route path="/germany-business-setup" element={<GermanyProductPage />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancelled" element={<PaymentCancelled />} />
        <Route path="/payment-test" element={<PaymentTest />} />
        {/* Redirect any portal signup routes to the external client dashboard */}
        <Route path="/portal/*" element={<ExternalRedirect to="https://clientdashboard2.houseofcompanies.co.in/" />} />
        {/* Optional: direct signup path redirect */}
        <Route path="/signup" element={<ExternalRedirect to="https://clientdashboard2.houseofcompanies.co.in/" />} />
        
      </Routes>
      
      {/* Floating Chatbot - Available on all pages */}
      <FloatingChatbot />
    </Router>
  )
}
