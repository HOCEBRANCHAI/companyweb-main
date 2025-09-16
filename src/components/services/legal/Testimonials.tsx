import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    quote: 'The AI-powered legal templates saved us thousands in legal fees during our EU expansion. Documents for all countries were ready in minutes.',
    author: 'Sophia Martinez',
    role: 'COO, TechGrowth GmbH',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    rating: 5
  }, {
    quote: 'As a small business owner, I was worried about legal compliance across multiple EU countries. This platform made it simple and affordable.',
    author: 'Marcus Johansson',
    role: 'Founder, Nordic Essentials',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  }, {
    quote: 'The country-specific adaptations are impressive. Our documents were perfectly tailored for each European market we entered.',
    author: 'Claire Dubois',
    role: 'Legal Director, Parisian Exports',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4
  }];
  return <div className="py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-300">
          Trusted by businesses across Europe
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => <div key={index} className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 relative">
            <QuoteIcon className="h-8 w-8 text-[#EA3A70]/20 absolute top-4 right-4" />
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} fill={i < testimonial.rating ? 'currentColor' : 'none'} />)}
            </div>
            <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full mr-4" />
              <div>
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}