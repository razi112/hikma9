import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-sidebar-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-gold" />
            <span className="font-display text-xl font-bold text-gold-light">
              Hikma Class Union
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-sidebar-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-navy">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gold text-navy hover:bg-gold-dark">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-sidebar-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-sidebar-foreground hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-3">
              <Link to="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full border-gold text-gold hover:bg-gold hover:text-navy">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button size="sm" className="w-full bg-gold text-navy hover:bg-gold-dark">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
