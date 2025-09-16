import React from 'react';
import { FileTextIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function DocumentsSection() {
  const documents = [{
    title: 'Certificate of Registration',
    description: 'Official proof of your registered branch',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    title: 'Proof of Address',
    description: 'Verification of your business location',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    title: 'Articles of Association',
    description: 'Legal framework for your business',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    title: 'VAT Certificate',
    description: 'Your EU VAT identification document',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }];
  return <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Documents You'll Receive
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get all the legal documentation you need to operate in Europe,
            delivered digitally to your dashboard
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => <div key={index} className="bg-[#1B1537]/50 rounded-xl border border-[#2D2755] overflow-hidden group hover:border-[#EA3A70]/30 transition-all">
              <div className="relative h-48">
                <img src={doc.image} alt={doc.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 right-3 h-8 w-8 bg-[#EA3A70]/20 rounded-full flex items-center justify-center border border-[#EA3A70]/30">
                  <FileTextIcon className="h-4 w-4 text-[#EA3A70]" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {doc.title}
                </h3>
                <p className="text-gray-400 text-sm">{doc.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 bg-[#1B1537]/50 border border-[#2D2755] rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-4 mt-1">
              <CheckIcon className="h-5 w-5 text-[#EA3A70]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                48-Hour Delivery
              </h3>
              <p className="text-gray-300 mb-4">
                We deliver all your legal documents within 48 hours of
                completing your registration process.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                  <span className="text-gray-300 text-sm">
                    Digital certificates with QR verification
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                  <span className="text-gray-300 text-sm">
                    Secure storage in your dashboard
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                  <span className="text-gray-300 text-sm">
                    Physical copies delivered to your address
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                  <span className="text-gray-300 text-sm">
                    Legally verified and ready to use
                  </span>
                </div>
              </div>
              <Link to="/services" className="inline-flex items-center text-white hover:text-[#EA3A70] font-medium mt-4">
                Learn more about our document services
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
}