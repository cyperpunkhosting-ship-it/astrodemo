import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-white font-bold font-serif text-xl shadow-lg group-hover:rotate-12 transition-transform">
                BS
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-xl leading-none ${isScrolled ? "text-slate-900" : "text-white"}`}>
                  Baba Siddheshwar
                </span>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Expert Astrologer</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    isScrolled ? "text-slate-700" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              <Button 
                asChild
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 shadow-lg hover:shadow-green-500/25 transition-all"
              >
                <a href="https://wa.me/919251298230" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-slate-900" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-slate-900 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <Button className="w-full py-6 text-lg bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
                <Button className="w-full py-6 text-lg bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Chat
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
