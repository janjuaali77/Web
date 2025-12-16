import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-wider mb-6 backdrop-blur-sm opacity-0 animate-fade-in-left">
            EST. 1967
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-left [animation-delay:200ms]">
            Legacy of Wood, <br/>
            <span className="text-primary-300">Crafted to Perfection.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed opacity-0 animate-fade-in-left [animation-delay:400ms]">
            From classic Chinioti craftsmanship to modern minimal designs. We build furniture that defines your home and office in Rawalpindi and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-left [animation-delay:600ms]">
            <a href="#contact" className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded font-medium transition-colors flex items-center justify-center shadow-lg hover:shadow-primary-600/30">
              Start Your Project
              <ChevronRight size={18} className="ml-2" />
            </a>
            <a href="#projects" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded font-medium transition-colors text-center">
              View Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
