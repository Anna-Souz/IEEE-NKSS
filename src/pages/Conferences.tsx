import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ExternalLink, Trophy, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConferencesSection = () => {
  const upcomingConferences = [
    {
      title: "IEEE International Flagship Conference",
      date: "September 27, 2025",
      location: "KLEIT Hubbali, India",
      description: `International conference focusing on emerging technologies in electronics, computing, and communication systems.
Paper submission last date - 30th June, 2025
Acceptance Notification - 28th July, 2025
Registration Deadline - 30th August, 2025`,

      status: "Registration Open",
      website: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FNKCON2025",
      type: "International",
      image: "images/nkcon2025.jpg"
    }
  ];

  const pastConferences = [
    {
      title: "IEEE NKCON 2022 Conference",
      date: "2022",
      location: "Vijayapur, Karnataka, India",
      description: "International conference focusing on emerging technologies.",
      type: "International"
    },
    {
      title: "IEEE NKCON 2023 Conference",
      date: "2023",
      location: "Belagavi, Karnataka, India",
      description: "International conference focusing on emerging technologies.",
      type: "International"
    },
    {
      title: "IEEE NKCON 2024 Conference",
      date: "2024",
      location: "BEC Bagalkot, Karnataka, India",
      description: "International conference focusing on emerging technologies.",
      type: "International"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
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
              <Trophy className="w-4 h-4 mr-2" />
              IEEE Conferences • North Karnataka
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 animate-fade-in-1">
              IEEE Conferences
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-2">
              Discover cutting-edge research and networking opportunities at IEEE conferences 
              across Karnataka and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-green-700 bg-clip-text text-transparent mb-6">
              Upcoming Conferences
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join the next generation of IEEE conferences and be part of groundbreaking discussions
            </p>
          </div>

          <div className="space-y-10">
            {upcomingConferences.map((conference, index) => (
              <Card
                key={index}
                className="group flex flex-col lg:flex-row overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Small Image Left */}
                {conference.image && (
                  <div className="lg:w-1/3 w-full h-45">
                    <img
                      src={conference.image}
                      alt={conference.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content Right */}
                <div className="lg:w-2/3 w-full p-6 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-0">
                      {conference.type}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-0">
                      {conference.status}
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 mb-4">
                    {conference.title}
                  </CardTitle>

                  <div className="space-y-3 mb-4 text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-medium">{conference.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-medium">{conference.location}</span>
                    </div>
                  </div>

                  <p
  className="text-slate-600 mb-6 leading-relaxed"
  dangerouslySetInnerHTML={{
    __html: conference.description
      .replace(/\n/g, "<br/>")
      .replace(
        /(\d{1,2}(st|nd|rd|th)?\s+\w+,\s*\d{4})/g,
        "<strong>$1</strong>"
      )
  }}
></p>


                  <Button className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                    <a
                      href={conference.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Conferences */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 border-slate-200/50">
              <Clock className="w-4 h-4 mr-2" />
              Archive
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Past Conferences
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore proceedings and outcomes from recent IEEE conferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastConferences.map((conference, index) => (
              <Card
                key={index}
                className="group p-6 shadow-lg bg-white/90 backdrop-blur-md"
              >
                <Badge className="mb-2 bg-purple-100 text-purple-800 border-0">{conference.type}</Badge>
                <CardTitle className="text-xl font-semibold mb-2">{conference.title}</CardTitle>
                <div className="text-slate-600 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1 text-blue-500" />
                  {conference.date}
                </div>
                <div className="text-slate-600 mb-4">
                  <MapPin className="inline w-4 h-4 mr-1 text-blue-500" />
                  {conference.location}
                </div>
                <p className="text-sm text-slate-700">{conference.description}</p>
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
                <Users className="w-4 h-4 mr-2" />
                Join Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-6">
                Be Part of the Future
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our community of researchers, academicians, and industry professionals. 
                Stay updated with the latest conference announcements and opportunities.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Stay Connected
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConferencesSection;
