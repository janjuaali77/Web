import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import { ArrowRight, CheckCircle2, Star, Sofa, Hammer, PaintBucket, Ruler, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  const services = [
    {
      title: "Custom Furniture",
      desc: "Bespoke pieces designed and built to fit your unique space and style perfectly.",
      icon: <Ruler className="text-primary-600" size={32} />,
      img: "https://picsum.photos/seed/furn1/600/400"
    },
    {
      title: "Restoration & Repair",
      desc: "Expert restoration of antique furniture to preserve its history and beauty.",
      icon: <Hammer className="text-primary-600" size={32} />,
      img: "https://picsum.photos/seed/furn2/600/400"
    },
    {
      title: "Upholstery Services",
      desc: "Premium fabric selection and re-upholstery for sofas, chairs, and headboards.",
      icon: <Sofa className="text-primary-600" size={32} />,
      img: "https://picsum.photos/seed/furn3/600/400"
    },
    {
      title: "Wood Polishing",
      desc: "High-quality finishing and refinishing to protect and enhance wood grain.",
      icon: <PaintBucket className="text-primary-600" size={32} />,
      img: "https://picsum.photos/seed/furn4/600/400"
    }
  ];

  const features = [
    "Over 35 years of craftsmanship experience",
    "Premium imported and local wood selection",
    "Eco-friendly polishes and fabrics",
    "Lifetime structural warranty",
    "Free design consultation"
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
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop" 
                  alt="Workshop" 
                  className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <h4 className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h4>
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Crafting Comfort &<br/>Elegance Since 1985</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Janjua Furniture House, we believe that furniture is the soul of a home. What started as a small family workshop has grown into a premier destination for fine woodworking and interior solutions. 
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you need a statement piece for your living room or a complete restoration of a cherished heirloom, our master craftsmen combine traditional techniques with modern aesthetics to deliver excellence.
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
                    <a href="#" className="text-primary-600 text-sm font-semibold flex items-center hover:text-primary-800">
                      View Details <ArrowRight size={14} className="ml-1" />
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
              Get a free consultation and quote for your next furniture project. Our experts are ready to help.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-white text-primary-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                Get a Free Quote
              </a>
              <a href="tel:+15551234567" className="border border-primary-400 text-white px-8 py-3 rounded font-bold hover:bg-primary-800 transition-colors">
                Call (555) 123-4567
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
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-lg aspect-[4/3]">
                  <img 
                    src={`https://picsum.photos/seed/project${item}/800/600`} 
                    alt="Project" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary-300 text-xs font-bold uppercase tracking-wider mb-1">Residential</span>
                    <h3 className="text-white text-xl font-serif font-medium">Custom Living Room Set</h3>
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
             <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-16">Client Testimonials</h2>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Sarah Jenkins", role: "Homeowner", text: "The restoration of my grandmother's dining table was incredible. They kept the original charm but made it look brand new." },
                  { name: "Michael Chen", role: "Interior Designer", text: "Janjua Furniture House is my go-to for custom pieces. Their attention to detail and wood quality is unmatched in the city." },
                  { name: "Emily Ross", role: "Hotel Manager", text: "They furnished our entire lobby area. Professional, timely, and the quality speaks for itself. Highly recommended." }
                ].map((t, i) => (
                  <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, si) => <Star key={si} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                    <div className="flex items-center">
                       <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex-shrink-0 overflow-hidden">
                          <img src={`https://picsum.photos/seed/face${i}/100/100`} alt={t.name} />
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
                  <p className="text-primary-200 mb-8">Let's discuss your next project.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="mt-1 mr-4 text-primary-300" size={20} />
                      <div>
                        <h4 className="font-bold text-sm text-primary-100">Visit Us</h4>
                        <p className="text-sm opacity-80">123 Craftsman Blvd, Design City, State 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mt-1 mr-4 text-primary-300" size={20} />
                      <div>
                        <h4 className="font-bold text-sm text-primary-100">Call Us</h4>
                        <p className="text-sm opacity-80">(555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <p className="text-sm opacity-60">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-sm opacity-60">Sunday: Closed</p>
                </div>
              </div>

              <div className="md:w-7/12 p-10">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone</label>
                      <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Service Needed</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 bg-gray-50">
                      <option>Custom Furniture</option>
                      <option>Restoration</option>
                      <option>Upholstery</option>
                      <option>Other</option>
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
                  Dedicated to the art of furniture making. We create pieces that tell a story and last for generations.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Services</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Residential Furniture</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Commercial Fit-outs</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Antique Restoration</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Custom Upholstery</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Company</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Our Process</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Gallery</a></li>
                  <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Stay Connected</h4>
                <p className="text-gray-400 text-sm mb-4">Subscribe for design tips and offers.</p>
                <div className="flex">
                  <input type="email" placeholder="Email Address" className="bg-gray-800 border-none rounded-l px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary-500" />
                  <button className="bg-primary-600 px-4 py-2 rounded-r hover:bg-primary-500 transition-colors">OK</button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Janjua Furniture House. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
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