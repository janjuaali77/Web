import React, { useEffect, useRef, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import { ArrowRight, CheckCircle2, Star, Sofa, Hammer, PaintBucket, Ruler, MapPin, Phone } from 'lucide-react';

// --- Scroll Animation Helper Component ---
const RevealOnScroll: React.FC<{ 
  children: React.ReactNode; 
  animation?: string; 
  delay?: number;
  className?: string;
}> = ({ children, animation = 'animate-fade-in-up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0'} ${isVisible ? animation : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const services = [
    {
      title: "Custom Wood Furniture",
      desc: "Sheesham and Teak wood pieces designed and built to fit your unique space perfectly.",
      icon: <Ruler size={32} className="text-primary-600 group-hover:text-white transition-colors duration-300" />,
      img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Restoration & Polish",
      desc: "Expert restoration of antique furniture and high-quality lacquer/deco polishing.",
      icon: <Hammer size={32} className="text-primary-600 group-hover:text-white transition-colors duration-300" />,
      img: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Sofa Upholstery",
      desc: "Premium fabric selection and re-upholstery for sofas, chairs, and headboards.",
      icon: <Sofa size={32} className="text-primary-600 group-hover:text-white transition-colors duration-300" />,
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Office Furniture",
      desc: "Ergonomic desks, conference tables, and workstations for modern workspaces.",
      icon: <PaintBucket size={32} className="text-primary-600 group-hover:text-white transition-colors duration-300" />,
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const features = [
    "Over 55 years of craftsmanship experience",
    "Solid Sheesham & Imported Wood Specialist",
    "High-Quality Deco & Lacquer Polish",
    "Lifetime Structural Warranty",
    "Free On-Site Consultation in Rawalpindi/Islamabad"
  ];

  const projects = [
    { title: "Executive Office Desk", category: "Commercial", img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop" },
    { title: "Luxury Bridal Bed Set", category: "Residential", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
    { title: "Solid Wood Dining Table", category: "Residential", img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop" },
    { title: "Modern Media Wall", category: "Custom Build", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop" },
    { title: "Restaurant Interior", category: "Commercial", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" },
    { title: "Antique Cabinet Restoration", category: "Restoration", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop" },
  ];

  // Updated Clients List with stable Wikimedia thumbnails and UI Avatars for 100% loading reliability
  const clients = [
    { name: "PAEC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PAEC_Logo.svg/240px-PAEC_Logo.svg.png" },
    { name: "Pak Army", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pakistan_Army_Emblem.svg/240px-Pakistan_Army_Emblem.svg.png" },
    { name: "FGEI", logo: "https://ui-avatars.com/api/?name=FGEI&background=10b981&color=fff&size=200&bold=true&length=4" },
    { name: "Pakistan Air Force", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Pakistan_Air_Force_emblem.svg/240px-Pakistan_Air_Force_emblem.svg.png" },
    { name: "Ace Solutions", logo: "https://ui-avatars.com/api/?name=Ace+Solutions&background=0284c7&color=fff&size=200&bold=true" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    const subject = `New Inquiry from ${name} - ${service}`;
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:janjuaali77@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />

        {/* Introduction Section */}
        <section id="about" className="py-24 bg-primary-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <RevealOnScroll animation="animate-fade-in-left" className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                {/* Updated image to a product-focused shot of classic furniture, ensuring no people are in it */}
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop" 
                  alt="Elegant Wood Craftsmanship" 
                  className="relative rounded-lg shadow-2xl w-full h-[550px] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </RevealOnScroll>
              
              <RevealOnScroll animation="animate-fade-in-up" delay={200}>
                <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-3">Who We Are</h4>
                <h2 className="font-serif text-5xl font-bold text-gray-900 mb-8 leading-tight">Crafting Comfort &<br/>Elegance Since 1967</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  At Janjua Furniture House, we believe that furniture is the soul of a home. Founded in 1967 in Rawalpindi, what started as a small family workshop has grown into a trusted name for fine woodworking in Rawalpindi and Islamabad.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Whether you need a full bridal furniture set, office workstations, or restoration of a cherished family heirloom, our master craftsmen use the finest seasoned wood to deliver excellence that lasts generations.
                </p>
                <ul className="space-y-4 mb-10">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-medium">
                      <CheckCircle2 size={22} className="text-primary-600 mr-4 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="text-primary-700 font-bold text-lg flex items-center hover:text-primary-900 transition-colors group">
                  Learn more about our process
                  <ArrowRight size={22} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="solutions" className="py-24">
          <div className="container mx-auto px-4">
            <RevealOnScroll animation="animate-fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
                <p className="text-gray-600 text-lg">Comprehensive furniture services tailored to your lifestyle and budget.</p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <RevealOnScroll key={idx} animation="animate-fade-in-up" delay={idx * 150}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300 shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">{service.desc}</p>
                      <a href="#contact" className="text-primary-600 font-bold flex items-center hover:text-primary-800 uppercase tracking-wider text-xs mt-auto">
                        Get a Quote <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-primary-900 py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")'}}></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <RevealOnScroll animation="animate-fade-in-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-primary-200 mb-10 max-w-2xl mx-auto text-xl font-light">
                Visit our workshop in Askari 7 or call us for a free estimate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="#contact" className="bg-white text-primary-900 px-10 py-4 rounded font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Get a Free Quote
                </a>
                <a href="tel:+923315400327" className="border-2 border-primary-400 text-white px-10 py-4 rounded font-bold hover:bg-primary-800 hover:border-primary-800 transition-all">
                  Call 0331-5400327
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Projects / Gallery */}
        <section id="projects" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll animation="animate-fade-in-up">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2">Our Work</h4>
                  <h2 className="font-serif text-4xl font-bold text-gray-900">Recent Projects</h2>
                </div>
                <a href="#" className="hidden md:flex text-gray-600 hover:text-primary-700 items-center font-medium">
                  View All Portfolio <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <RevealOnScroll key={idx} animation="animate-fade-in-up" delay={idx * 100}>
                  <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <span className="text-primary-300 text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                      <h3 className="text-white text-2xl font-serif font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <a href="#" className="inline-flex items-center text-primary-700 font-bold">
                View All Portfolio <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
             <RevealOnScroll>
               <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-16">What Our Clients Say</h2>
             </RevealOnScroll>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Ahmed Malik", role: "CEO, TechSolutions", text: "Janjua Furniture designed my entire office furniture in Blue Area. The quality of the desks and conference table is top-notch. Highly professional team." },
                  { name: "Saira Bibi", role: "Homeowner", text: "I ordered my daughter's Jahez furniture from them. The finishing on the bridal bed set was perfect, and they delivered exactly on time." },
                  { name: "Usman Khan", role: "Restaurant Owner", text: "They did the wood paneling and tables for my cafe in Bahria Town. The craftsmanship is excellent and they gave me a very fair price." }
                ].map((t, i) => (
                  <RevealOnScroll key={i} delay={i * 200}>
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative hover:shadow-xl transition-shadow duration-300">
                      <div className="flex text-yellow-400 mb-6">
                        {[...Array(5)].map((_, si) => <Star key={si} size={18} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{t.text}"</p>
                      <div className="flex items-center">
                         <div className="w-12 h-12 bg-primary-200 rounded-full mr-4 flex-shrink-0 flex items-center justify-center text-primary-800 font-bold text-xl shadow-inner">
                            {t.name[0]}
                         </div>
                         <div>
                           <h4 className="font-bold text-gray-900 text-base">{t.name}</h4>
                           <span className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</span>
                         </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
             </div>
          </div>
        </section>

        {/* Distinguished Clients Marquee */}
        <section className="py-24 bg-gray-50 border-y border-gray-200 overflow-hidden">
           <div className="container mx-auto px-4 mb-12 text-center">
             <RevealOnScroll>
               <h3 className="text-primary-700 font-bold uppercase tracking-[0.2em] text-sm md:text-base">Trusted By Industry Leaders</h3>
             </RevealOnScroll>
           </div>
           
           <div className="relative w-full">
             <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
             <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
             
             <div className="flex w-max animate-scroll hover-pause">
               {/* Original Set */}
               <div className="flex gap-8 md:gap-16 px-4 md:px-8">
                  {clients.map((client, idx) => (
                    <div key={`client-${idx}`} className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center p-6 mx-4 hover:scale-105 transition-transform duration-300">
                       <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-4">
                         <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                       </div>
                       <span className="font-bold text-gray-700 text-sm md:text-base text-center">{client.name}</span>
                    </div>
                  ))}
               </div>
               {/* Duplicate Set for Loop */}
               <div className="flex gap-8 md:gap-16 px-4 md:px-8">
                  {clients.map((client, idx) => (
                    <div key={`client-dup-${idx}`} className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full shadow-lg border border-gray-100 flex flex-col items-center justify-center p-6 mx-4 hover:scale-105 transition-transform duration-300">
                       <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-4">
                         <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                       </div>
                       <span className="font-bold text-gray-700 text-sm md:text-base text-center">{client.name}</span>
                    </div>
                  ))}
               </div>
             </div>
           </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-24 bg-primary-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll animation="animate-fade-in-up">
              <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-5/12 bg-primary-800 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
                  <div className="relative z-10">
                    <h3 className="font-serif text-3xl font-bold mb-4">Contact Us</h3>
                    <p className="text-primary-200 mb-10 leading-relaxed">Ready to start your project? Visit our showroom or send us a message.</p>
                    
                    <div className="space-y-8">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-primary-50 mb-1">Address</h4>
                          <p className="text-sm opacity-90 leading-relaxed">Street 3, School Road,<br/>Askari 7, Rawalpindi</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-primary-50 mb-1">Phone</h4>
                          <p className="text-sm opacity-90">0331-5400327</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 relative z-10 pt-8 border-t border-primary-700">
                    <p className="text-sm opacity-70 font-medium">Opening Hours</p>
                    <p className="text-sm opacity-90 mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-sm opacity-90">Sunday: Closed</p>
                  </div>
                </div>

                <div className="md:w-7/12 p-12">
                  <h3 className="font-bold text-2xl text-gray-800 mb-6">Send us a Message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide">Name</label>
                        <input name="name" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-gray-50 transition-colors" placeholder="Your Name" required />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide">Phone</label>
                        <input name="phone" type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-gray-50 transition-colors" placeholder="0300-1234567" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide">Email (Optional)</label>
                      <input name="email" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-gray-50 transition-colors" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide">Service Needed</label>
                      <select name="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-gray-50 transition-colors">
                        <option>Home Furniture</option>
                        <option>Office Furniture</option>
                        <option>Repair & Polish</option>
                        <option>Kitchen & Wardrobes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide">Message</label>
                      <textarea name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-gray-50 transition-colors" placeholder="Tell us about your project..." required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/30">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-1">
                <span className="font-serif text-3xl font-bold text-white leading-none block mb-6">JANJUA</span>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Serving Rawalpindi and Islamabad with premium quality wood furniture and restoration services for over 50 years.
                </p>
                <div className="flex gap-4">
                  {/* Social placeholders */}
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                    <span className="font-bold text-xs">FB</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                    <span className="font-bold text-xs">IG</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-8 text-white">Services</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>Home Furniture</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>Office Setup</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>Antique Restoration</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>Sofa Poshish</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-8 text-white">Company</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">About Janjua</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Our Process</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Project Gallery</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-8 text-white">Visit Us</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Street 3, School Road, Askari 7, Rawalpindi</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+923315400327" className="bg-primary-600 px-6 py-3 rounded text-center hover:bg-primary-500 transition-colors text-white font-bold text-sm">
                    Call 0331-5400327
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Janjua Furniture House. All rights reserved.</p>
              <div className="flex space-x-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
