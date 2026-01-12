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

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden text-foreground">
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Celestial Background with Stars */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop" 
            alt="Cosmic Night Sky" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        </div>

        {/* Floating Particles/Stars */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-bold tracking-[0.2em] mb-6 backdrop-blur-md uppercase glow-gold">
              Divine Solutions Await
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight text-shadow-md">
              Master <span className="text-gradient-gold">Astrology</span> & <br/>
              Spiritual Healing
            </h1>
            <p className="text-xl md:text-2xl text-accent/80 mb-10 max-w-3xl mx-auto leading-relaxed font-display italic">
              "When the stars align, your path becomes clear." — Baba Siddheshwar Nath Aghori
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-black py-8 px-10 text-xl rounded-full shadow-2xl glow-gold hover:scale-110 transition-all duration-300">
                <Phone className="mr-3 h-7 w-7" /> Call: +91-9251298230
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-8 px-10 text-xl rounded-full backdrop-blur-md hover:scale-110 transition-all duration-300">
                <MessageCircle className="mr-3 h-7 w-7" /> WhatsApp Chat
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Mystical scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent"
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase font-bold">Explore Divine Wisdom</span>
            <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* === FEATURED NUMBERS === */}
      <section className="py-12 bg-accent text-primary relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-display">
            {[
              { label: "Happy Clients", value: "10,000+" },
              { label: "Years Experience", value: "25+" },
              { label: "Solutions Given", value: "50,000+" },
              { label: "Global Presence", value: "20+" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black">{stat.value}</span>
                <span className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === ABOUT ASTROLOGER === */}
      <section id="about" className="py-32 relative bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-accent/20 glow-purple">
                <img 
                  src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=2069&auto=format&fit=crop" 
                  alt="Mystical Ritual" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              {/* Decorative Frame Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 border-t-4 border-l-4 border-accent rounded-tl-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b-4 border-r-4 border-accent rounded-br-3xl opacity-50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
                The Legend of <br/>
                <span className="text-gradient-gold">Baba Siddheshwar Nath</span>
              </h2>
              <p className="text-xl text-accent/70 mb-8 leading-relaxed font-light">
                For over a quarter-century, Baba Siddheshwar Nath Aghori has been the beacon of light for those lost in the shadows of despair. His mastery over Vedic astrology and ancient Vashikaran techniques is unparalleled.
              </p>
              <p className="text-lg text-foreground/80 mb-10 leading-relaxed italic border-l-4 border-accent pl-8">
                "Astrology is not just prediction; it is the science of harmonizing your energy with the cosmic vibrations of the universe."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Shield, text: "Divine Protection" },
                  { icon: Clock, text: "Instant Results" },
                  { icon: Star, text: "Ancient Wisdom" },
                  { icon: Award, text: "Global Recognition" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-accent/30 transition-colors">
                    <item.icon className="text-accent w-8 h-8" />
                    <span className="font-display font-bold text-lg tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-secondary hover:bg-secondary/80 text-white px-10 py-8 text-xl rounded-full shadow-2xl hover:scale-105 transition-all">
                Seek Divine Guidance
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SERVICES SECTION === */}
      <section id="services" className="py-32 relative bg-card">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Mystical Services" 
            subtitle="Unlock the secrets of the universe and reclaim your destiny with our specialized spiritual treatments." 
          />

          {servicesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[450px] bg-white/5 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services?.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* === CALL TO ACTION PARALLAX === */}
      <section className="py-40 bg-celestial relative flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Stop Worrying, Start Living</h2>
          <p className="text-2xl text-accent/80 mb-12 max-w-2xl mx-auto">One phone call can change your entire life. Are you ready?</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-accent text-primary font-black py-10 px-12 text-2xl rounded-full glow-gold hover:scale-110">
              <Phone className="mr-4 h-10 w-10" /> +91-9251298230
            </Button>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS === */}
      <section id="testimonials" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Divine Testimonials" 
            subtitle="Real stories of transformation from our global family of devotees." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonialsLoading ? (
              <div className="col-span-full text-center py-20">Searching for souls we've helped...</div>
            ) : (
              testimonials?.map((testimonial, i) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card/50 backdrop-blur-md p-10 rounded-[40px] border border-accent/10 relative hover:border-accent/40 transition-all group"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent shadow-xl group-hover:scale-110 transition-transform">
                      <img src={testimonial.imageUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2"} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="mt-12 text-center">
                    <div className="flex justify-center gap-1 mb-4">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-accent fill-accent" />)}
                    </div>
                    <p className="text-foreground/80 italic leading-relaxed mb-6 font-display text-lg">
                      "{testimonial.content}"
                    </p>
                    <h4 className="font-black text-xl text-accent uppercase tracking-widest">{testimonial.name}</h4>
                    <p className="text-sm text-secondary uppercase tracking-widest font-bold">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* === CONTACT SECTION === */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-card rounded-[50px] overflow-hidden shadow-[0_0_100px_rgba(74,20,140,0.3)] border border-white/10">
            <div className="grid lg:grid-cols-2">
              <div className="p-16 bg-secondary text-white relative">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Star className="w-64 h-64 rotate-12" />
                </div>
                <h3 className="text-4xl font-display font-bold mb-8">Reach Out to the Divine</h3>
                <p className="text-xl text-white/80 mb-12">Your problems are temporary, but the solution is eternal. Contact Baba Ji now for a private consultation.</p>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <Phone className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 uppercase tracking-widest">Global Support</p>
                      <p className="text-2xl font-bold">+91-9251298230</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <MessageCircle className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 uppercase tracking-widest">WhatsApp Chat</p>
                      <p className="text-2xl font-bold">Always Active</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-accent font-bold tracking-[0.2em] uppercase">Private & Confidential</p>
                </div>
              </div>

              <div className="p-16 bg-white/5 backdrop-blur-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919251298230"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MessageCircle className="w-10 h-10" />
      </motion.a>
    </div>
  );
}
