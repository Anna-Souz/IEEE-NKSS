
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExecutiveSection from "@/components/ExecutiveSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <ExecutiveSection />
      <EventsSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
