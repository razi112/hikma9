import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import EventsSection from "@/components/landing/EventsSection";
import AnnouncementsSection from "@/components/landing/AnnouncementsSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <AnnouncementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
