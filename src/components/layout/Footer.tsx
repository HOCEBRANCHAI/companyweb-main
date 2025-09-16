import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingIcon, MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import logo from '../../hoclogo.png';

export function Footer() {
  return <footer className="bg-[#0A0826] border-t border-[#4A2D80]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-14 sm:h-14 sm:w-16 lg:h-17 lg:w-20" />
            </Link>
           
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start text-indigo-300 text-sm sm:text-base">
                <MapPinIcon className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium">Stichting House of Companies</p>
                  <p>KvK: 62871676</p>
                  <p>Laanzichtweg 60B</p>
                  <p>4847 SJ Breda</p>
                  <p>The Netherlands</p>
                </div>
              </div>

              <div className="flex items-start text-indigo-300 text-sm sm:text-base">
                <MapPinIcon className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="font-medium">Branch Offices:</p>
                  <p>Thub</p>
                  <p>Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-center text-indigo-300 text-sm sm:text-base">
                <MailIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:support@houseofcompanies.io" className="hover:text-[#EA3A70] break-all">
                  support@houseofcompanies.io
                </a>
              </div>
              <div className="flex items-start text-indigo-300 text-sm sm:text-base">
                <PhoneIcon className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+31701234567" className="hover:text-[#EA3A70] block">
                    Netherlands: +31 70 123 4567
                  </a>
                  <a href="tel:+919876543210" className="hover:text-[#EA3A70] block">
                    India: +91 789 352 5665
                  </a>
                </div>
              </div>   
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/services/company-formation" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link to="/services/mailbox" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Mailbox
                </Link>
              </li>
              <li>
                <Link to="/services/accounting" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/tax-filing" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Tax Filing
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-secretary" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Corporate Secretary
                </Link>
              </li>
              <li>
                <Link to="/services/legal" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Legal
                </Link>
              </li>
              <li>
                <Link to="/ebranch" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  eBranch
                </Link>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/tutorials/getting-started" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/resources/knowledge-base" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link to="/resources/blog" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/faq" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/resources/case-studies" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/about" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-indigo-300 hover:text-[#EA3A70] text-sm sm:text-base">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6">
              <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-[#EA3A70]">
                  <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-[#EA3A70]">
                  <TwitterIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-[#EA3A70]">
                  <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-[#EA3A70]">
                  <LinkedinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#4A2D80]/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-indigo-300 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} House of Companies. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
            <Link to="/privacy-policy" className="text-indigo-300 hover:text-[#EA3A70] text-xs sm:text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-indigo-300 hover:text-[#EA3A70] text-xs sm:text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-indigo-300 hover:text-[#EA3A70] text-xs sm:text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}