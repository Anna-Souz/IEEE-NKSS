import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Users,
  Award,
  BookOpen,
  Globe,
  Calendar,
  MapPin,
  Building,
  Sparkles,
  GraduationCap,
  History,
  Target,
  Clock,
  ArrowRight
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Active Members",
      description: "Engineering professionals and students",
      color: "from-blue-100 to-blue-200"
    },
    {
      icon: Award,
      number: "15+",
      label: "Technical Events",
      description: "Organized annually across the region",
      color: "from-purple-100 to-purple-200"
    },
    {
      icon: BookOpen,
      number: "10+",
      label: "Student Branches",
      description: "Across North Karnataka institutions",
      color: "from-green-100 to-green-200"
    },
    {
      icon: Globe,
      number: "9",
      label: "Districts Covered",
      description: "Bidar, Kalburgi, Yadgiri, Raichur, Vijayapura, Bagalkot, Belagavi, Dharwad and Gadag",
      color: "from-orange-100 to-orange-200"
    }
  ];

  const keyInstitutions = [
    "IIT Dharwad",
    "IIIT Dharwad", 
    "Visvesvaraya Technological University Belagavi",
    "Central University Karnataka Kalaburagi",
    "Sharanabasava University Kalburgi",
    "KBN University Kalburgi",
    "KLE Tech University Hubballi",
    "Karnataka University Dharwad",
    "Rani Channamma University Belagavi",
    "University of Horticulture Sciences, Bagalkot",
    "Raichur University, Raichur"
  ];

  const milestones = [
    {
      year: "2020",
      title: "Formation & Approval",
      description: "IEEE NKSS officially approved in July 2020 (R0011902)"
    },
    {
      year: "Sept 2020",
      title: "Official Inauguration",
      description: "Virtual inauguration on 14.09.2020 by IEEE R10 Director Prof. Akinori Nishihara"
    },
    {
      year: "2020-2022",
      title: "Rapid Expansion",
      description: "Started new student branches in IIIT Dharwad, VNIT Shorapur, SLNCE Raichur"
    },
    {
      year: "2022",
      title: "First AGM",
      description: "First Annual General Meeting held online with new leadership under Dr. B. S. Anami"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section - matching Executive Committee design */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              About IEEE NKSS • Region 10 | India Council
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 animate-fade-in-1">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-2">
              Connecting professionals and advancing technological excellence through IEEE membership across North Karnataka's vibrant engineering ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 border border-blue-100/50 animate-fade-in">
            {/* Logo */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/images/nkss.jpg"
                  alt="IEEE NKSS Logo"
                  className="relative w-48 h-auto object-contain pt-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                  Formation of IEEE NKSS
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  IEEE North Karnataka Sub-Section (IEEE-NKSS) was formed in July 2020 – R0011902. The key objective was to network professionals through IEEE membership in this region and to share the developments in technological front. North Karnataka has 35 Engineering Colleges, IIT Dharwad, IIIT Dharwad, Visvesvaraya Technological University Belagavi, Central University Karnataka Kalaburagi, Sharanabasava University Kalburgi, KBN University Kalburgi, and KLE Tech University Hubballi, spread in nine districts.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg group">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <CardContent className="relative p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-base font-semibold text-slate-800 mb-2">{stat.label}</p>
                  <p className="text-sm text-slate-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50/50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 border-orange-200/50">
              <History className="w-4 h-4 mr-2" />
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-orange-700 bg-clip-text text-transparent mb-6">
              History & Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">The Beginning</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      The thought of starting IEEE North Karnataka Sub Section (IEEE-NKSS) was initiated by Dr. Suresh H. Jangamshetti, Senior Member IEEE during the period when Ravi Kiran was chair of Bangalore Section. Later on, during the Chairmanship of Puneet Mishra and Bindu Madhavan, Bangalore section, the petition to start IEEE NKSS was filed.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Approval was received in July 2020 and Dr. Suresh Jangamshetti took charge as the Founder Chair of IEEE NKSS along with Dr. D. B. Kulkarni as Vice Chairman; Dr. Kiran Belavalad as Secretary and Mr. Abhishek Deshmukh as Treasurer.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card 
                key={index}
                className="group p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl font-bold text-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{milestone.title}</h3>
                  <p className="text-sm text-slate-600">{milestone.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50">
              <Target className="w-4 h-4 mr-2" />
              Recent Achievements
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-slate-800 bg-clip-text text-transparent mb-6">
              Active Growth & Impact
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-8 border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  IEEE NKSS has been actively functional in rejuvenating dormant IEEE student branches as well as starting new IEEE student branches. In the last 2 year period, NKSS has achieved remarkable growth:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-green-700 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      New Student Branches
                    </h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>IIIT Dharwad</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>VNIT Shorapur</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>SLNCE Raichur</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>SharanaBasava University Kalburgi</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>KBN University Kalburgi</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-blue-700 flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Student Chapter Initiatives
                    </h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>IEEE PES Student Chapters</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>IEEE AESS Student Chapter</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>IEEE ITS Student Chapter</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>IEEE MTS Student Chapter</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>IEEE Computer Society Chapter</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                  <p className="text-slate-700 leading-relaxed">
                    The first AGM of IEEE NKSS was held online in January 2022. The new office bearers of NKSS took charge under the chairmanship of Dr. B. S. Anami in January 2022. The beginning has been highly encouraging with enthusiasm and vigor in the hearts of North Karnataka IEEE members organizing conferences, events, symposiums, workshops and seminars for teaching fraternity, students as well as industry personnel.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50/30 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200/50">
              <Building className="w-4 h-4 mr-2" />
              Our Network
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-slate-800 bg-clip-text text-transparent mb-6">
              Key Institutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyInstitutions.map((institution, index) => (
              <Card 
                key={index}
                className="group p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors duration-300">
                  {institution}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
    
  );
};

export default AboutSection;
