import React from 'react';
import { StarIcon } from 'lucide-react';
export function TestimonialsSection() {
  const testimonials = [{
    quote: 'House of Companies made expanding our business to the Netherlands incredibly simple. Their all-in-one solution saved us months of research and administrative work.',
    author: 'Sarah K.',
    title: 'CEO, TechVision GmbH',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    quote: 'The eBranch solution is revolutionary. We were operational in the EU market within days instead of months. Their platform is intuitive and their support team is exceptional.',
    author: 'Michael R.',
    title: 'Operations Director, Global Retail Inc',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }, {
    quote: 'As a US company entering Europe, we faced many challenges. House of Companies guided us through the entire process with expertise and efficiency.',
    author: 'Elena T.',
    title: 'International Expansion Manager',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }];
  return <section className="py-20 relative bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Businesses Around the World
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our clients say about their experience expanding into
            Europe
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-8 hover:border-[#EA3A70]/30 transition-all">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-[#EA3A70] fill-[#EA3A70]" />)}
              </div>
              <p className="text-gray-300 italic mb-8">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-medium">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}