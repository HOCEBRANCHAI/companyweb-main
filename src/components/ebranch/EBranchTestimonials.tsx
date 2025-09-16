import React from 'react'
import { StarIcon, QuoteIcon } from 'lucide-react'
export function EBranchTestimonials() {
  const testimonials = [
    {
      content:
        'eBranch transformed our expansion into the Netherlands. What would have taken months with traditional service providers took just days. The all-in-one platform made managing our Dutch operations seamless.',
      author: 'Sarah K.',
      role: 'Tech Startup Founder',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    {
      content:
        'The digital dashboard is a game-changer. I can track all our compliance deadlines, manage documents, and communicate with our Dutch team in one place. The 24/7 support team is always available when we need them.',
      author: 'Michael R.',
      role: 'CFO, E-commerce Company',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    {
      content:
        'As a non-EU business, navigating Dutch regulations seemed daunting until we found eBranch. Their fixed monthly fee structure means no surprise costs, and their expertise has saved us from costly compliance mistakes.',
      author: 'Jennifer T.',
      role: 'International Operations Director',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
  ]
  return (
    <section className="py-20 relative bg-[#1B1537]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Global Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from entrepreneurs and companies who successfully expanded to
            the Netherlands with eBranch
          </p>
        </div>
        <div className="relative mb-16">
          <div className="rounded-xl overflow-hidden border border-[#2D2755] shadow-2xl">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/9EfnDwQL91wGs8fBLsPb5T/banners.png"
              alt="Global Community Platform"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-4 border border-[#2D2755] shadow-xl max-w-xs">
            <h3 className="text-lg font-bold text-white mb-2">
              Join Our Global Community
            </h3>
            <p className="text-gray-300 text-sm">
              Connect with 500+ business owners who have expanded to Europe
              using our platform
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all hover:shadow-lg shadow-[#0F0B1F]/50 relative"
            >
              <div className="absolute top-6 right-6">
                <QuoteIcon className="h-10 w-10 text-[#EA3A70]/20" />
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-[#EA3A70]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-[#EA3A70] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-8 border border-[#2D2755] shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Join hundreds of businesses using eBranch
              </h3>
              <p className="text-gray-300 mb-6">
                Our platform is trusted by companies from over 30 countries to
                manage their Dutch business operations efficiently and
                compliantly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2D2755]/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-gray-400 text-sm">Active Businesses</p>
                </div>
                <div className="bg-[#2D2755]/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">30+</p>
                  <p className="text-gray-400 text-sm">Countries</p>
                </div>
                <div className="bg-[#2D2755]/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">98%</p>
                  <p className="text-gray-400 text-sm">Client Retention</p>
                </div>
                <div className="bg-[#2D2755]/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-gray-400 text-sm">Support</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-[#2D2755] shadow-xl">
                <img
                  src="https://uploadthingy.s3.us-west-1.amazonaws.com/osQA9AYWibpfFAkrUjLCwg/profile.jpg"
                  alt="Company Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1B1537]/80 backdrop-blur-sm rounded-lg p-3 border border-[#2D2755] shadow-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-green-500/20 mr-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-white text-sm">Live Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
