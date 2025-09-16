import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { NewHero } from '../components/home/NewHero';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { TrustSection } from '../components/home/TrustSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { EducationalSection } from '../components/home/EducationalSection';
import { NewsSection } from '../components/home/NewsSection';
import { PageWrapper } from '../components/layout/PageWrapper';
import { fadeInUp } from '../animations';

export function Home() {
  return (
    <PageWrapper>
      <Header />
      <motion.section className="relative py-20" variants={fadeInUp}>
        <NewHero />
        <ProcessTimeline />
        <ProductShowcase />
        <TrustSection />
        <ServicesGrid />
        <EducationalSection />
        <NewsSection />
      </motion.section>
      <Footer />
    </PageWrapper>
  );
}