import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { PricingHero } from '../components/pricing/PricingHero';
import { PricingPlans } from '../components/pricing/PricingPlans';
import { EUBusinessServices } from '../components/pricing/EUBusinessServices';
import { WhyChooseUs } from '../components/pricing/WhyChooseUs';
import { PricingFaq } from '../components/pricing/PricingFaq';
import { PricingCta } from '../components/pricing/PricingCta';
export function Pricing() {
  return <MainLayout>
      <PricingHero />
      <PricingPlans />
      
      <WhyChooseUs />
      <PricingFaq />
      <PricingCta />
    </MainLayout>;
}