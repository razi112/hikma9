import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="University campus at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/70 to-navy-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-gold/20 text-gold border border-gold/30 rounded-full mb-6">
            Class Union Platform
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gold-light leading-tight mb-6 text-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Hikma Class Union
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-sidebar-foreground/90 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Uniting scholars, building futures. Connect with your classmates, 
          celebrate achievements, and grow together as a community.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link to="/register">
            <Button size="lg" className="bg-gold text-navy hover:bg-gold-dark font-semibold px-8 text-base">
              Join the Union <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="#about">
            <Button size="lg" variant="outline" className="border-gold-light/40 text-gold-light hover:bg-gold-light/10 px-8 text-base">
              Learn More
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Users, label: "Members", value: "500+" },
            { icon: Calendar, label: "Events", value: "50+" },
            { icon: Award, label: "Graduates", value: "200+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-6 w-6 text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-gold-light font-display">{stat.value}</div>
              <div className="text-xs text-sidebar-foreground/70 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
