import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../layout/Header';
import { countries } from '../../constants/countries';
import { Hero } from './Hero';
import { IntroSection } from './IntroSection';
import { CoreBenefits } from './CoreBenefits';
import { CountryAdvantage } from './CountryAdvantage';
import { PricingOptions } from './PricingOptions';
import { RequiredDocuments } from './RequiredDocuments';
import { Timeline } from './Timeline';
import { DocumentationSection } from './DocumentationSection';
import { Footer as CountryFooter } from './Footer';

export const CountryPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  // redirect if invalid code
  useEffect(() => {
    if (!countryCode || !countries[countryCode as keyof typeof countries]) {
      navigate('/services');
    }
  }, [countryCode, navigate]);

  if (!countryCode || !countries[countryCode as keyof typeof countries]) {
    return null;
  }

  const countryName = countries[countryCode as keyof typeof countries];

  const getMainCity = (code: string) => {
    const cities: Record<string, string> = {
      fr: 'Paris', de: 'Berlin', nl: 'Amsterdam', es: 'Madrid', it: 'Rome', ie: 'Dublin',
      be: 'Brussels', at: 'Vienna', pl: 'Warsaw', hu: 'Budapest', gr: 'Athens', ro: 'Bucharest',
      bg: 'Sofia', ee: 'Tallinn', lt: 'Vilnius', lv: 'Riga', dk: 'Copenhagen', fi: 'Helsinki',
      se: 'Stockholm', pt: 'Lisbon', cy: 'Nicosia', cz: 'Prague', sk: 'Bratislava', si: 'Ljubljana',
      hr: 'Zagreb', mt: 'Valletta'
    };
    return cities[code] || 'European Capital';
  };

  const getCountryBackgroundImage = (code: string) => {
    const backgroundImages: Record<string, string> = {
      fr: 'https://images.unsplash.com/photo-1502602898534-8610c9d4a8a3?auto=format&fit=crop&w=2000&q=80',
      de: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2000&q=80',
      nl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=2000&q=80',
      es: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2000&q=80',
      it: 'https://images.unsplash.com/photo-1526266066863-8a2fce2f5a5f?auto=format&fit=crop&w=2000&q=80',
      ie: 'https://images.unsplash.com/photo-1525348371953-e8e63ef1a79b?auto=format&fit=crop&w=2000&q=80',
      be: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=2000&q=80',
      at: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=2000&q=80',
      pl: 'https://images.unsplash.com/photo-1516549420931-6869f7f98f54?auto=format&fit=crop&w=2000&q=80',
      hu: 'https://images.unsplash.com/photo-1542571560-873f17a7a088?auto=format&fit=crop&w=2000&q=80',
      gr: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=2000&q=80',
      ro: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=2000&q=80',
      bg: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=2000&q=80',
      ee: 'https://images.unsplash.com/photo-1507812980524-bf9b3d3273d5?auto=format&fit=crop&w=2000&q=80',
      lt: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80',
      lv: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=2000&q=80',
      dk: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=2000&q=80',
      fi: 'https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?auto=format&fit=crop&w=2000&q=80',
      se: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?auto=format&fit=crop&w=2000&q=80',
      pt: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=2000&q=80',
      cy: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80',
      cz: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=2000&q=80',
      sk: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2000&q=80',
      si: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80',
      hr: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2000&q=80',
      mt: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=2000&q=80'
    };
    return backgroundImages[code] || backgroundImages.fr;
  };

  const getCountryDescription = (code: string) => {
    const descriptions: Record<string, string> = {
      fr: 'France is a strategic European business hub with exceptional infrastructure and strong government support for innovation.',
      de: 'Germany is Europe\'s economic powerhouse with access to 83M consumers and a robust manufacturing base.',
      nl: 'The Netherlands is a strategic gateway to Europe with world-class logistics and a business-friendly environment.',
      es: 'Spain offers access to Mediterranean markets with strong tourism and manufacturing sectors.',
      it: 'Italy is a strategic European hub with rich commercial tradition and gateway to Mediterranean markets.',
      ie: 'Ireland is a dynamic business hub with strong tech sector and English-speaking workforce.',
      be: 'Belgium is the heart of the EU with access to major institutions and international organizations.',
      at: 'Austria is a central European hub with stable business environment and high standards.',
      pl: 'Poland offers access to Central Europe\'s largest economy and a skilled workforce at competitive costs.',
      hu: 'Hungary offers strategic location and competitive business costs within the EU.',
      gr: 'Greece is a Mediterranean gateway with access to Southern Europe and the Middle East.',
      ro: 'Romania offers access to emerging Eastern European markets with competitive costs.',
      bg: 'Bulgaria provides access to emerging markets with competitive costs and EU membership.',
      ee: 'Estonia is a digital-first nation with advanced e-government services.',
      lt: 'Lithuania offers access to Baltic markets with strategic location and EU membership.',
      lv: 'Latvia provides access to Baltic markets with strategic location and EU membership.',
      dk: 'Denmark offers access to Nordic markets with high standards and innovation focus.',
      fi: 'Finland provides access to Nordic markets with strong innovation culture.',
      se: 'Sweden offers access to Nordic markets with strong innovation focus and high standards.',
      pt: 'Portugal offers access to Atlantic markets with strategic location and EU membership.',
      cy: 'Cyprus provides access to Mediterranean markets with strategic location.',
      cz: 'Czech Republic offers access to Central European markets with manufacturing tradition.',
      sk: 'Slovakia provides access to Central European markets with strategic location.',
      si: 'Slovenia offers access to Central European markets with EU membership.',
      hr: 'Croatia provides access to Balkan markets with strategic location.',
      mt: 'Malta offers access to Mediterranean markets with strategic location.'
    };
    return descriptions[code] || 'Strategic European business hub with access to EU markets.';
  };

  const getCountryIntroImage = (code: string) => {
    const introImages: Record<string, string> = {
      fr: 'https://images.unsplash.com/photo-1502602898534-8610c9d4a8a3?auto=format&fit=crop&w=2000&q=80',
      de: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2000&q=80',
      nl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=2000&q=80',
      es: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2000&q=80',
      it: 'https://images.unsplash.com/photo-1526266066863-8a2fce2f5a5f?auto=format&fit=crop&w=2000&q=80',
      ie: 'https://images.unsplash.com/photo-1525348371953-e8e63ef1a79b?auto=format&fit=crop&w=2000&q=80'
    };
    return introImages[code] || 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=2000&q=80';
  };

  const getCountryTags = (code: string) => {
    const tags: Record<string, string[]> = {
      fr: ['Innovation Hub', 'EU Presence', 'Strong Infrastructure', 'Global Connectivity'],
      de: ['Largest EU Economy', 'Tech Ecosystem', 'R&D Excellence', 'Skilled Workforce'],
      nl: ['Gateway to Europe', 'Tax Advantages', 'Excellent Infrastructure', 'English Proficiency'],
      es: ['Mediterranean Access', 'Tourism Industry', 'Strategic Location', 'EU Membership'],
      it: ['Manufacturing Excellence', 'EU Presence', 'Cultural Heritage', 'Strategic Location'],
      ie: ['Tech Hub', 'English Speaking', 'EU Access', 'Favorable Taxes']
    };
    return tags[code] || ['Digital-first', 'EU Presence', 'Streamlined', 'Efficient'];
  };

  return (
    <div className="min-h-screen bg-[#0F0B1F] text-white">
      <Header />
      <main>
        <Hero
          countryName={`${countryName}`}
          cityName={getMainCity(countryCode)}
          description={`Launch your business in ${countryName} with our efficient branch registration package`}
          backgroundImage={getCountryBackgroundImage(countryCode)}
        />

        <IntroSection
          countryName={countryName}
          countryDescription={getCountryDescription(countryCode)}
          countryImage={getCountryIntroImage(countryCode)}
          countryTags={getCountryTags(countryCode)}
        />

        <CoreBenefits countryName={countryName} />
        <CountryAdvantage countryName={countryName} mainCity={getMainCity(countryCode)} />
        <PricingOptions />
        <RequiredDocuments countryName={countryName} />
        <Timeline countryName={countryName} />
        <DocumentationSection countryName={countryName} />
      </main>
      <CountryFooter countryName={countryName} mainCity={getMainCity(countryCode)} />
    </div>
  );
};
