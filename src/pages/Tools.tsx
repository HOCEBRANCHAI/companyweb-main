import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { ToolsHero } from '../components/tools/ToolsHero';
import { ToolsMegaMenu } from '../components/tools/ToolsMegaMenu';
import { FeaturedTools } from '../components/tools/FeaturedTools';
import { PopularTutorials } from '../components/tools/PopularTutorials';
import { CtaSection } from '../components/home/CtaSection';
export function Tools() {
  return <MainLayout>
      <ToolsHero />
      <ToolsMegaMenu />
      <FeaturedTools />
      <PopularTutorials />
      <CtaSection />
    </MainLayout>;
}