import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Trophy,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventsSection = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 animate-fade-in">
              <Calendar className="w-4 h-4 mr-2" />
              Events & Conferences • North Karnataka
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 animate-fade-in-1">
              Events & Activities
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-2">
              Discover cutting-edge conferences, workshops, and technical events that drive
              innovation and professional growth across North Karnataka
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border-orange-200/50">
              <Trophy className="w-4 h-4 mr-2" />
              Featured Event
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-orange-700 bg-clip-text text-transparent mb-4">
              UPCOMING EVENT
            </h2>
          </div>

          <Card className="overflow-hidden shadow-2xl max-w-5xl mx-auto bg-white/80 backdrop-blur-sm border-0">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Event Poster */}
                <div className="lg:w-1/3 flex-shrink-0 h-64 lg:h-auto">
                  <img
                    src="/images/nkss_ang.jpg"
                    alt="IEEE NKSS Execom Meet 2025"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-6">
                    IEEE NKSS EXECOM MEET 2025
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-slate-600">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium">13th June, 2025</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium">
                        Angadi Institute of Technology and Management
                      </span>
                    </div>
                  </div>

                  <div className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8">
                    <p>
                      The event is a key gathering of IEEE professionals and executive committee members,
                      aimed at discussing the roadmap, initiatives, and collaborative goals for the coming
                      year. The poster includes official logos, venue information, and event details in a
                      professional and visually appealing format.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50">
              <Clock className="w-4 h-4 mr-2" />
              Have a look
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-blue-800 bg-clip-text text-transparent mb-6">
              Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NKCON 2022",
                location: "Vijayapur",
                type: "Conference",
                color: "from-blue-100 to-purple-100",
                image: "/images/nkcon1.jpg",
              },
              {
                title: "NKCON 2024",
                location: "Belagavi",
                type: "Conference",
                color: "from-green-100 to-blue-100",
                image: "/images/agm7.jpg",
              },
              {
                title: "NKCON 2023",
                location: "Bagalkot",
                type: "Conference",
                color: "from-purple-100 to-pink-100",
                image: "/images/nkcon8.jpg",
              },
              {
                title: "AGM 2025",
                location: "Belagavi",
                type: "AGM MEET",
                color: "from-purple-100 to-pink-100",
                image: "/images/agm1.jpg",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 border-0">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-sm line-clamp-2">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
            <CardContent className="p-12 text-center">
              <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50">
                <ExternalLink className="w-4 h-4 mr-2" />
                Stay Connected
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-6">
                Stay Updated with Our Events
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our mailing list to receive notifications about upcoming conferences,
                workshops, and technical events in North Karnataka region.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventsSection;