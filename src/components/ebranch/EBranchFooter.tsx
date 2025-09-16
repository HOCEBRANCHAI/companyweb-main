import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MapPinIcon, PhoneIcon, MailIcon, ExternalLinkIcon } from 'lucide-react';
export function EBranchFooter() {
  return <footer className="bg-[#0F0B1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-5">
              <img src="https://uploadthingy.s3.us-west-1.amazonaws.com/24t42cBe4oWwMUwS2xaPtn/sample_dashboard_banner.png" alt="eBranch Logo" className="h-12 w-auto rounded-md" />
            </div>
            <p className="text-gray-400 mb-6">
              Your complete Dutch business solution. Launch and manage your
              Netherlands-based company with our all-in-one platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#EA3A70] transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EA3A70] transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EA3A70] transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EA3A70] transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/company-formation" className="text-gray-400 hover:text-white transition-colors">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link to="/services/business-address" className="text-gray-400 hover:text-white transition-colors">
                  Business Address
                </Link>
              </li>
              <li>
                <Link to="/services/accounting" className="text-gray-400 hover:text-white transition-colors">
                  Accounting & Tax
                </Link>
              </li>
              <li>
                <Link to="/services/banking" className="text-gray-400 hover:text-white transition-colors">
                  Banking Assistance
                </Link>
              </li>
              <li>
                <Link to="/services/compliance" className="text-gray-400 hover:text-white transition-colors">
                  Compliance Services
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="text-gray-400 hover:text-white transition-colors">
                  Business Consultancy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">
                  Business Tools
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Prinses Beatrixlaan 582, 2595 BM, The Hague, Netherlands
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-[#EA3A70] mr-3 flex-shrink-0" />
                <span className="text-gray-400">+31 70 123 4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-[#EA3A70] mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@ebranch.com</span>
              </li>
              <li className="mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 bg-[#EA3A70]/10 text-[#EA3A70] rounded-lg hover:bg-[#EA3A70]/20 transition-colors">
                  <span>Visit our Knowledge Center</span>
                  <ExternalLinkIcon className="h-4 w-4 ml-2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#2D2755]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} eBranch. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0A0826] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-2 md:mb-0">
              eBranch is a registered trademark. Chamber of Commerce: KVK
              12345678
            </p>
            <p className="text-gray-500 text-xs">
              Authorized and regulated by the Dutch Financial Authorities
            </p>
          </div>
        </div>
      </div>
    </footer>;
}