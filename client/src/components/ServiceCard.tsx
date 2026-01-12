import { motion } from "framer-motion";
import { type Service } from "@shared/schema";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-[40px] overflow-hidden border border-white/10 hover:border-accent/40 shadow-2xl transition-all duration-500 hover:-translate-y-4"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity" />
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-3"
        />
        
        {/* Floating Icon */}
        <div className="absolute top-6 right-6 z-20 bg-accent/20 backdrop-blur-md p-3 rounded-full border border-accent/30 group-hover:rotate-[360deg] transition-transform duration-700">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>

        <div className="absolute bottom-10 left-10 right-10 z-20">
          <h3 className="text-3xl md:text-4xl font-black font-display text-white mb-4 leading-tight group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-white/70 line-clamp-3 mb-8 text-lg font-light leading-relaxed group-hover:text-white transition-colors">
            {service.description}
          </p>
          
          <a 
            href="https://wa.me/919251298230?text=I%20need%20help%20with%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl glow-gold hover:scale-110 active:scale-95 transition-all"
          >
            Heal Now <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
