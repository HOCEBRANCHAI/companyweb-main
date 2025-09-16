import React, { useState } from 'react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, ShieldCheckIcon, ClipboardCheckIcon, ShieldIcon, ArrowRightIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const Footer = ({ countryName = 'Italy', mainCity = 'Rome' }: { countryName?: string; mainCity?: string }) => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [email, setEmail] = useState('');
  return <footer className="bg-[#0c0a20] text-white pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#1c1a40]/70 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '4s'
    }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px] group">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-pink-400 after:transition-all after:duration-300 group-hover:after:w-full">
                House of Companies
              </span>
            </h2>
            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
              Your trusted partner for international business expansion and
              European market entry solutions.
            </p>
            <div className="flex space-x-4">
              {[{
              icon: <FacebookIcon className="w-5 h-5" />,
              label: 'Facebook'
            }, {
              icon: <TwitterIcon className="w-5 h-5" />,
              label: 'Twitter'
            }, {
              icon: <LinkedinIcon className="w-5 h-5" />,
              label: 'LinkedIn'
            }].map((social, index) => <a key={index} href="#" className="bg-gradient-to-br from-pink-500/20 to-pink-500/30 hover:from-pink-500 hover:to-pink-600 rounded-full p-2 transition-all duration-300 transform hover:scale-110 hover:rotate-6 group/icon" aria-label={social.label}>
                  <div className="transition-transform duration-300 group-hover/icon:scale-110 text-pink-200">
                    {social.icon}
                  </div>
                </a>)}
            </div>
          </div>
          {/* Our Services */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px] group">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-pink-400 after:transition-all after:duration-300 group-hover:after:w-full">
                Our Services
              </span>
            </h3>
            <ul className="space-y-4">
              {['Branch Registration', 'EU Market Entry', 'Business Address Service', 'Tax Registration', 'Company Formation'].map((service, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center group/item">
                    <span className="mr-2 text-pink-500 transition-transform duration-300 group-hover/item:translate-x-1">
                      →
                    </span>{' '}
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Resources */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px] group">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-pink-400 after:transition-all after:duration-300 group-hover:after:w-full">
                Resources
              </span>
            </h3>
            <ul className="space-y-4">
              {['Knowledge Center', 'EU Business Guide', 'FAQ', 'Blog', 'Case Studies'].map((resource, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center group/item">
                    <span className="mr-2 text-pink-500 transition-transform duration-300 group-hover/item:translate-x-1">
                      →
                    </span>{' '}
                    {resource}
                  </a>
                </li>)}
            </ul>
          </div>
          {/* Contact Us */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px] group">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-pink-400 after:transition-all after:duration-300 group-hover:after:w-full">
                Contact Us
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group/item">
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/30 rounded-full p-2 mr-3 flex-shrink-0 group-hover/item:from-pink-500 group-hover/item:to-pink-600 transition-colors duration-300">
                  <MailIcon className="h-5 w-5 text-pink-200 group-hover/item:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:support@houseofcompanies.com" className="hover:text-pink-500 transition-colors">
                    support@houseofcompanies.com
                  </a>
                </div>
              </li>
              <li className="flex items-start group/item">
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/30 rounded-full p-2 mr-3 flex-shrink-0 group-hover/item:from-pink-500 group-hover/item:to-pink-600 transition-colors duration-300">
                  <PhoneIcon className="h-5 w-5 text-pink-200 group-hover/item:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:+31201234567" className="hover:text-pink-500 transition-colors">
                    +31 20 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start group/item">
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/30 rounded-full p-2 mr-3 flex-shrink-0 group-hover/item:from-pink-500 group-hover/item:to-pink-600 transition-colors duration-300">
                  <MapPinIcon className="h-5 w-5 text-pink-200 group-hover/item:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="hover:text-pink-500 transition-colors">
                    {mainCity}, {countryName}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Newsletter Subscription */}
        <div className="text-center mb-12 transform transition-all duration-500 hover:translate-y-[-5px] group">
          <h3 className="text-2xl font-bold mb-6 relative inline-block">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-500 after:to-pink-400 after:transition-all after:duration-300 group-hover:after:w-full">
              Subscribe to Our Newsletter
            </span>
          </h3>
          <div className="max-w-md mx-auto flex">
            <div className={`flex-grow relative ${emailFocused ? 'ring-2 ring-pink-500 rounded-l-md' : ''}`}>
              <input type="email" placeholder="Your email address" className="w-full p-3 rounded-l-md bg-[#1c1a40] border border-[#2c2a50] focus:outline-none" onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} value={email} onChange={e => setEmail(e.target.value)} />
              {emailFocused && email && <div className="absolute top-0 right-2 h-full flex items-center text-xs text-pink-500">
                  {email.includes('@') ? '✓' : ''}
                </div>}
            </div>
            <button className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-r-md transition-all duration-300 group/btn shadow-lg hover:shadow-pink-500/30">
              <span className="relative z-10 flex items-center">
                Subscribe{' '}
                <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></span>
            </button>
          </div>
        </div>
        {/* Security Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[{
          icon: <ShieldCheckIcon className="w-6 h-6 text-pink-500 mr-2" />,
          label: 'Secure Payments'
        }, {
          icon: <ClipboardCheckIcon className="w-6 h-6 text-pink-500 mr-2" />,
          label: 'KVK Registered'
        }, {
          icon: <ShieldIcon className="w-6 h-6 text-pink-500 mr-2" />,
          label: 'GDPR Compliant'
        }].map((badge, index) => <div key={index} className="flex items-center text-gray-400 transition-all duration-300 hover:text-white transform hover:scale-105 group/badge">
              <div className="transition-transform duration-300 group-hover/badge:scale-110 text-pink-500">
                {badge.icon}
              </div>
              <span>{badge.label}</span>
            </div>)}
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2023 House of Companies. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};