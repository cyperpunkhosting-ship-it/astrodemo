import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-accent">Baba Siddheshwar Nath</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              World famous astrologer offering powerful Vedic solutions for all life problems including love, marriage, career, and family disputes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Astrologer</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Lost Love Back</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Love Problem Solution</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Intercaste Marriage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Husband Wife Dispute</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business Problem</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                <span>
                  <div className="text-xs text-slate-500 mb-1">Call Now</div>
                  <a href="tel:+919251298230" className="text-lg font-bold text-white hover:text-accent">+91-9251298230</a>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <a href="mailto:info@greatlovebackexpertastro.com" className="hover:text-accent">info@expertastro.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                <span>Available Online Worldwide & In-Person</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Baba Siddheshwar Nath Aghori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
