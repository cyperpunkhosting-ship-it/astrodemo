import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { useServices, useTestimonials } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Award, Star, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: services, isLoading: servicesLoading } = useServices();
  const { data: testimonials, isLoading: testimonialsLoading } = useTestimonials();

  // Loading state placeholder if needed, though we'll let UI skeleton handle it naturally
  
  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Mystical landscape - nebula or stars */}
          <img 
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop" 
            alt="Mystical Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-accent border border-primary/30 text-sm font-bold tracking-wider mb-6 backdrop-blur-sm">
              #1 ASTROLOGY EXPERT
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight text-shadow-md">
              Solve All Your <span className="text-primary">Life Problems</span><br/>
              With Ancient Vedic Solutions
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              World-renowned astrologer Baba Siddheshwar Nath Aghori helps you overcome obstacles in Love, Marriage, Career, and Family life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold py-8 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
                <Phone className="mr-2 h-6 w-6" /> Call Now: +91-9251298230
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold py-8 px-8 text-lg rounded-full shadow-lg shadow-green-500/25 hover:scale-105 transition-transform">
                <MessageCircle className="mr-2 h-6 w-6" /> Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* === ABOUT ASTROLOGER === */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Portrait of a spiritual person/guru */}
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                  alt="Baba Siddheshwar Nath" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-0 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/20 rounded-full -z-0 blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">
                About <span className="text-primary">Baba Siddheshwar Nath Aghori</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The most effective strategy for overcoming life's daily obstacles is astrology. 
                Many people are unaware that planetary movements affect our daily lives, causing 
                disturbances in relationships, career, and health.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Baba Ji is an expert in ancient Vedic astrological predictions. With over 25 years 
                of experience, he has helped thousands of people globally to find love, restore 
                marriages, and achieve success. He is available 24/7 to listen to your problems 
                and provide instant, effective solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-slate-700">100% Confidential</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-slate-700">Immediate Results</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-slate-700">Vedic Remedies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-slate-700">Global Clientele</span>
                </div>
              </div>

              <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-6 rounded-xl shadow-lg">
                Contact For Solutions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section id="services" className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            title="Our Spiritual Services" 
            subtitle="Expert solutions for every aspect of your life using powerful astrological remedies." 
          />

          {servicesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 bg-slate-200 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-xl font-bold mb-6">Do you have a different problem?</p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-6 text-lg shadow-xl shadow-primary/20">
              Discuss Your Problem Now
            </Button>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            title="Why Choose Baba Ji?" 
            subtitle="Trusted by thousands of devotees across the globe for accurate predictions and effective remedies."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Shield, title: "Safe & Secure", desc: "Your information is kept 100% private and confidential." },
              { icon: Clock, title: "Fast Results", desc: "See positive changes in your life within 24-48 hours." },
              { icon: Award, title: "Expert Guidance", desc: "25+ Years of experience in Vedic astrology and rituals." },
              { icon: Star, title: "Satisfaction", desc: "Thousands of happy clients worldwide are living proof." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl text-center hover:bg-slate-800 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Success Stories" 
            subtitle="Hear from people whose lives have been transformed." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsLoading ? (
              <div className="col-span-3 text-center py-10 text-muted-foreground">Loading success stories...</div>
            ) : (
              testimonials?.map((testimonial, i) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative"
                >
                  <div className="absolute top-6 right-6 text-primary/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                      {testimonial.imageUrl ? (
                        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">
                          {testimonial.name[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg font-display">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* === CONTACT SECTION === */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-primary/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="Fill out the form below or call us directly. We are available 24/7 to help you." 
          />
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Contact Info Side */}
            <div className="md:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold font-display mb-6">Contact Info</h3>
                <p className="text-slate-400 mb-8">Reach out to us anytime. Your happiness is our priority.</p>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <span className="block text-sm text-slate-400">Phone & WhatsApp</span>
                      <span className="text-lg font-bold">+91-9251298230</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <span className="block text-sm text-slate-400">Chat Support</span>
                      <span className="text-lg font-bold">Available 24/7</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <p className="text-sm text-slate-500">
                  Trusted by 10,000+ happy families worldwide.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="md:col-span-3 p-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
