import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import { ArrowRight, CheckCircle2, Star, Sofa, Hammer, PaintBucket, Ruler, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  const services = [
    {
      title: "Custom Wood Furniture",
      desc: "Sheesham and Teak wood pieces designed and built to fit your unique space perfectly.",
      icon: <Ruler className="text-primary-600" size={32} />,
      img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Restoration & Polish",
      desc: "Expert restoration of antique furniture and high-quality lacquer/deco polishing.",
      icon: <Hammer className="text-primary-600" size={32} />,
      img: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Sofa Upholstery",
      desc: "Premium fabric selection and re-upholstery for sofas, chairs, and headboards.",
      icon: <Sofa className="text-primary-600" size={32} />,
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Office Furniture",
      desc: "Ergonomic desks, conference tables, and workstations for modern workspaces.",
      icon: <PaintBucket className="text-primary-600" size={32} />,
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
    { title: "Luxury Bridal Bed Set", category: "Residential", img: "https://images.unsplash.com/photo-1505693416388-b0346efee539?q=80&w=800&auto=format&fit=crop" },
    { title: "Solid Wood Dining Table", category: "Residential", img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=800&auto=format&fit=crop" },
    { title: "Modern Media Wall", category: "Custom Build", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=800&auto=format&fit=crop" },
    { title: "Restaurant Interior", category: "Commercial", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop" },
    { title: "Antique Cabinet Restoration", category: "Restoration", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navigation />
      
      <main>
        <Hero />

        {/* Introduction Section */}
        <section id="about" className="py-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1601614995914-7422f42a59d9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Carpenter Workshop" 
                  className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h4>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Crafting Comfort &<br/>Elegance Since 1967</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Janjua Furniture House, we believe that furniture is the soul of a home. Founded in 1967 in Dhok Kaloor, what started as a small family workshop has grown into a trusted name for fine woodworking in Rawalpindi and Islamabad.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you need a full bridal furniture set, office workstations, or restoration of a cherished family heirloom, our master craftsmen use the finest seasoned wood to deliver excellence that lasts generations.
                </p>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="text-primary-700 font-semibold flex items-center hover:text-primary-900 transition-colors group">
                  Learn more about our process
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-gray-600">Comprehensive furniture services tailored to your lifestyle and budget.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <a href="#contact" className="text-primary-600 text-sm font-semibold flex items-center hover:text-primary-800">
                      Get a Quote <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-primary-900 py-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")'}}></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-primary-200 mb-8 max-w-2xl mx-auto text-lg">
              Visit our workshop in Dhok Kaloor or call us for a free estimate.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-white text-primary-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                Get a Free Quote
              </a>
              <a href="tel:+923315400327" className="border border-primary-400 text-white px-8 py-3 rounded font-bold hover:bg-primary-800 transition-colors">
                Call 0331-5400327
              </a>
            </div>
          </div>
        </section>

        {/* Projects / Gallery */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2">Our Work</h4>
                <h2 className="font-serif text-4xl font-bold text-gray-900">Recent Projects</h2>
              </div>
              <a href="#" className="hidden md:flex text-gray-600 hover:text-primary-700 items-center font-medium">
                View All Portfolio <ArrowRight size={16} className="ml-2" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-lg aspect-[4/3]">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary-300 text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                    <h3 className="text-white text-xl font-serif font-medium">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <a href="#" className="inline-flex items-center text-primary-700 font-bold">
                View All Portfolio <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-16">What Our Clients Say</h2>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Ahmed Malik", role: "CEO, TechSolutions", text: "Janjua Furniture designed my entire office furniture in Blue Area. The quality of the desks and conference table is top-notch. Highly professional team." },
                  { name: "Saira Bibi", role: "Homeowner", text: "I ordered my daughter's Jahez furniture from them. The finishing on the bridal bed set was perfect, and they delivered exactly on time." },
                  { name: "Usman Khan", role: "Restaurant Owner", text: "They did the wood paneling and tables for my cafe in Bahria Town. The craftsmanship is excellent and they gave me a very fair price." }
                ].map((t, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, si) => <Star key={si} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                    <div className="flex items-center">
                       <div className="w-10 h-10 bg-primary-200 rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-primary-800 font-bold">
                          {t.name[0]}
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                         <span className="text-xs text-gray-500">{t.role}</span>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-5/12 bg-primary-800 p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Contact Us</h3>
                  <p className="text-primary-200 mb-8">Visit our showroom or workshop.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="mt-1 mr-4 text-primary-300" size={20} />
                      <div>
                        <h4 className="font-bold text-sm text-primary-100">Address</h4>
                        <p className="text-sm opacity-80">Street 3, Dhok Kaloor,<br/>Rawalpindi, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mt-1 mr-4 text-primary-300" size={20} />
                      <div>
                        <h4 className="font-bold text-sm text-primary-100">Phone</h4>
                        <p className="text-sm opacity-80">0331-5400327</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <p className="text-sm opacity-60">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm opacity-60">Sunday: Closed</p>
                </div>
              </div>

              <div className="md:w-7/12 p-10">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone</label>
                      <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50" placeholder="0300-1234567" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email (Optional)</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Service Needed</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50">
                      <option>Home Furniture</option>
                      <option>Office Furniture</option>
                      <option>Repair & Polish</option>
                      <option>Kitchen & Wardrobes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 rounded hover:bg-primary-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-1">
                <span className="font-serif text-2xl font-bold text-white leading-none block mb-4">JANJUA</span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Serving Rawalpindi and Islamabad with premium quality wood furniture and restoration services for over 50 years.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Services</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Home Furniture</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Office Setup</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Antique Restoration</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Sofa Poshish</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Company</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">About Janjua</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Our Process</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Project Gallery</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Visit Us</h4>
                <p className="text-gray-400 text-sm mb-4">Street 3, Dhok Kaloor, Rawalpindi</p>
                <div className="flex">
                  <a href="tel:+923315400327" className="bg-primary-600 px-6 py-2 rounded hover:bg-primary-500 transition-colors text-white font-medium">
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Janjua Furniture House. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
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