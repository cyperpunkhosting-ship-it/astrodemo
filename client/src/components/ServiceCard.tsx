import { motion } from "framer-motion";
import { type Service } from "@shared/schema";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-xl md:text-2xl font-bold font-display text-white text-shadow-sm group-hover:text-accent transition-colors">
            {service.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground line-clamp-3 mb-6">
          {service.description}
        </p>
        
        <a 
          href="https://wa.me/919251298230?text=I%20want%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary font-bold hover:text-red-600 transition-colors"
        >
          Consult Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
