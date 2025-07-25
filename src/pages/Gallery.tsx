import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Filter, Camera, Sparkles } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", "agm", "nkcon", "events", "workshops", "conferences", "awards", "networking"];
  
  const galleryItems = [
    {
      id: 1,
      image: "/images/agm1.jpg",
      title: "Glimpse of AGM-2025",
      category: "agm",
      date: "2025",
      description: "Annual General Meeting 2025 with technical presentations and networking",
      imageCode: "DSC_0080"
    },
    {
      id: 2,
      image: "/images/nkcon1.jpg",
      title: "Glimpse of NKCon-2023@BEC",
      category: "nkcon",
      date: "2023",
      description: "North Karnataka Conference 2023 at Basaveshwar Engineering College",
      imageCode: "DSC_0018"
    },
    {
      id: 3,
      image: "/images/nkcon1.2.jpg",
      title: "Glimpse of NKCON-2024@Belagavi",
      category: "nkcon",
      date: "2024",
      description: "North Karnataka Conference 2024 at Belagavi with industry experts",
      imageCode: "NKCON_2024"
    },
    {
      id: 4,
      image: "/images/event.jpg",
      title: "Glimpse of NKCon-2022@Vijaypur",
      category: "nkcon",
      date: "2022",
      description: "North Karnataka Conference 2022 at Vijaypur",
      imageCode: "NKCON 2022"
    },
    {
      id: 5,
      image: "/images/nkcon8.jpg",
      title: "Technical Seminar",
      category: "events",
      date: "June 2023",
      description: "Technical seminar on emerging technologies"
    },
    {
      id: 6,
      image: "/images/nkcon6.jpg",
      title: "Student Hackathon",
      category: "events",
      date: "May 2023",
      description: "48-hour hackathon with innovative project solutions"
    },
    {
      id: 7,
      image: "/images/event2.jpg",
      title: "Industry Networking Event",
      category: "networking",
      date: "April 2023",
      description: "Networking session with industry professionals and alumni"
    },
    {
      id: 8,
      image: "/images/event4.jpg",
      title: "Women in Engineering Workshop",
      category: "workshops",
      date: "March 2023",
      description: "Special workshop promoting women's participation in engineering"
    },
   
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section - matching About section design */}
      <Header />
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 animate-fade-in">
              <Camera className="w-4 h-4 mr-2" />
              Moments & Memories
            </Badge>
            
             <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 animate-fade-in-1">
              Gallery
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-2">
              Explore moments from our conferences, events, workshops, and achievements
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      

      {/* Gallery Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border border-white/50 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white border-0 backdrop-blur-sm">
                      {item.category === "nkcon" ? "NKCon" : item.category === "agm" ? "AGM" : item.category}
                    </Badge>
                  </div>
                  
                  {/* Image Code Badge */}
                  {item.imageCode && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-orange-500/90 to-red-500/90 text-white border-0 backdrop-blur-sm">
                        {item.imageCode}
                      </Badge>
                    </div>
                  )}

                  {/* Hover Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold drop-shadow-lg mb-1">
                      {item.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mb-2"></div>
                    <p className="text-sm text-white/90 drop-shadow-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded-full">
                      {item.date}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group/btn">
                      View Details 
                      <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-3">No results found</h3>
              <p className="text-slate-500 max-w-md mx-auto">Try adjusting your search or filter criteria to find what you're looking for</p>
            </div>
          )}
        </div>
      </section>

      {/* View More Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50/30 to-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50">
            <Sparkles className="w-4 h-4 mr-2" />
            Explore More
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-6">
            More Memories Await
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Discover more moments from our vibrant community events and technical excellence initiatives
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group"
          >
            <Camera className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            View Full Gallery
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;