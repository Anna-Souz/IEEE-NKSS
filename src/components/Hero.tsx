import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-top bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-900/20 to-blue-900/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto text-white">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/80 text-blue-700 text-sm font-semibold rounded-full mb-6 animate-fade-in">
            
              Advancing Technology for Humanity
            </span>
            <h1 className="text-blue-100 text-4xl md:text-6xl font-bold mb-6 animate-fade-in-1">
              IEEE North Karnataka SubSection
              <span className="block text-blue-200 text-3xl md:text-4xl font-light mt-2"></span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-3">
            Empowering Engineers, Inspiring Innovation, and Building Tomorrow's Technology Leaders
            across North Karnataka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-3">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link to="https://students.ieee.org/">
                Become a Member <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-blue-700 hover:bg-white hover:text-blue-700 px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/events">
                <Calendar className="mr-2 h-5 w-5" />
                Explore Events
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
