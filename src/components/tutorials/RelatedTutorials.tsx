import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface RelatedTutorial {
  title: string;
  category: string;
  duration: string;
  image: string;
  href: string;
}
interface RelatedTutorialsProps {
  tutorials?: RelatedTutorial[];
}
export function RelatedTutorials({
  tutorials = [
    {
      title: "Dutch VAT Registration Guide",
      category: "Taxation",
      duration: "12 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/tutorials/dutch-vat-requirements"
    },
    {
      title: "Opening a Business Bank Account",
      category: "Banking",
      duration: "10 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/tutorials/dutch-business-bank-account"
    },
    {
      title: "Employment Law in the Netherlands",
      category: "HR",
      duration: "14 min read",
      image: "https://images.unsplash.com/photo-1521791136064-7986c292e6b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/tutorials/hiring-employees"
    }
  ]
}: RelatedTutorialsProps) {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#0A0826] to-[#1E1B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Related Tutorials
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Continue your learning journey with these related guides
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Link key={index} to={tutorial.href} className="group relative overflow-hidden rounded-xl border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all h-64">
              <div className="absolute inset-0">
                <img src={tutorial.image} alt={tutorial.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0826] via-[#0A0826]/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-900/70 text-indigo-300 border border-indigo-500/30">
                    {tutorial.category}
                  </span>
                  <span className="text-xs text-indigo-300">
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#EA3A70] transition-colors">
                  {tutorial.title}
                </h3>
                <div className="flex items-center text-[#EA3A70] font-medium">
                  Read tutorial
                  <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}