import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-gold" />
              <span className="font-display text-xl font-bold text-gold-light">
                Hikma Class Union
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80 max-w-md">
              Building lasting connections among alumni, fostering academic excellence, 
              and creating opportunities for growth through unity and collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-gold transition-colors">Events</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><Link to="/login" className="hover:text-gold transition-colors">Sign In</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <span>info@hikmaclassunion.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Hikma Campus, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Hikma Class Union. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
