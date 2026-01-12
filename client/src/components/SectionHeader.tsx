import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl md:text-5xl font-bold font-display mb-4 ${light ? "text-white" : "text-primary-foreground/90"} drop-shadow-sm`}>
          <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        {subtitle && (
          <div className="flex justify-center">
            <p className={`text-lg md:text-xl max-w-2xl ${light ? "text-white/80" : "text-muted-foreground"}`}>
              {subtitle}
            </p>
          </div>
        )}
        <div className={`mt-4 h-1 w-24 bg-accent mx-auto ${centered ? "" : "ml-0"} rounded-full`} />
      </motion.div>
    </div>
  );
}
