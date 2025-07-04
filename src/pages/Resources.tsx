
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, Award, Download, ExternalLink, FileText, Video, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResourcesSection = () => {
  const [showAllConferences, setShowAllConferences] = useState(false);

  const resourceCategories = [
    {
      title: "IEEE Standards & Publications",
      icon: BookOpen,
      description: "Access IEEE standards, papers, and technical publications",
      items: [
        {
          name: "IEEE Xplore Digital Library",
          description: "World's largest technical literature database",
          link: "https://ieeexplore.ieee.org/",
          type: "external"
        },
        {
          name: "IEEE Standards",
          description: "Industry-leading technical standards",
          link: "https://standards.ieee.org/",
          type: "external"
        },
        {
          name: "IEEE Computer Society",
          description: "Computing and IT resources",
          link: "https://www.computer.org/",
          type: "external"
        }
      ]
    },
    {
      title: "Professional Development",
      icon: Award,
      description: "Enhance your career with IEEE learning resources",
      items: [
        {
          name: "IEEE Learning Network",
          description: "Online courses and certifications",
          link: "https://iln.ieee.org/",
          type: "external"
        },
        {
          name: "Career Resources",
          description: "Job opportunities and career guidance",
          link: "https://careers.ieee.org/",
          type: "external"
        },
        {
          name: "Professional Certification",
          description: "IEEE professional certification programs",
          link: "https://www.ieee.org/education/professional-development.html",
          type: "external"
        }
      ]
    },
    {
      title: "Student Resources",
      icon: Users,
      description: "Resources specifically for IEEE student members",
      items: [
        {
          name: "Student Branch Guidelines",
          description: "How to start and manage an IEEE student branch",
          link: "https://www.ieee.org/membership/students/student-branches.html",
          type: "external"
        },
        {
          name: "Competition Guidelines",
          description: "IEEE student competitions and contests",
          link: "https://www.ieee.org/membership/students/competitions.html",
          type: "external"
        },
        {
          name: "Scholarship Programs",
          description: "IEEE scholarships and funding opportunities",
          link: "https://www.ieee.org/membership/students/scholarships.html",
          type: "external"
        }
      ]
    }
  ];

  const approvedConferences = [
    {
      name: "ICSSE 2023 - Smart Systems for Electrical Sciences",
      description: "SIT Tumkur • July 7-8, 2023",
      link: "http://icsses.sit.ac.in/",
      organizer: "SIT Tumkur"
    },
    {
      name: "EASCT 2023 - Evolutionary Algorithms & Soft Computing",
      description: "RVITM Bangalore • October 20-21, 2023",
      link: "https://easct.in/index.php",
      organizer: "RVITM Bangalore"
    },
    {
      name: "ICAECC 2023 - Electronics, Computers & Communications",
      description: "REVA University Bangalore • September 7-8, 2023",
      link: "https://www1.reva.edu.in/icaecc-2023/",
      organizer: "REVA University"
    },
    {
      name: "MRTM 2023 - Multidisciplinary Research",
      description: "NHCE Bangalore • September 22, 2023",
      link: "https://newhorizonindia.edu/ieeenhceconferencemrtm23/",
      organizer: "NHCE Bangalore"
    },
    {
      name: "GCAT 2023 - Global Conference for Technology",
      description: "NCET Bangalore • October 6, 2023",
      link: "http://globeconf.org/",
      organizer: "NCET Bangalore"
    },
    {
      name: "ICRAIS 2023 - Information Technology & Development",
      description: "MIT Manipal • November 6-7, 2023",
      link: "https://conference.manipal.edu/ICRAIS2023/",
      organizer: "MIT Manipal"
    },
    {
      name: "IC3AMS 2023 - Communication & Security",
      description: "Presidency University • October 27-28, 2023",
      link: "https://ic3ams.netlify.app",
      organizer: "Presidency University"
    },
    {
      name: "IIHC 2023 - Humanitarian Conference",
      description: "SVCE Bangalore • September 22-23, 2023",
      link: "https://iihc.svcengg.com/",
      organizer: "SVCE Bangalore"
    },
    {
      name: "IC-RVITM 2023 - Interdisciplinary Technologies",
      description: "RVITM Bangalore • November 29-30, 2023",
      link: "https://ic-rvitm.rvitm.edu.in",
      organizer: "RVITM Bangalore"
    },
    {
      name: "C2I6 2023 - Communication & Industry 6.0",
      description: "CMRIT Bangalore • December 15-16, 2023",
      link: "https://sites.google.com/view/c2i6-2023/about-conference?authuser=0",
      organizer: "CMRIT Bangalore"
    },
    {
      name: "ICIICS 2023 - Intelligence & Communication",
      description: "Sharnbasva University Kalaburagi • November 24-25, 2023",
      link: "https://iciics.in/index.php",
      organizer: "Sharnbasva University"
    },
    {
      name: "CSITSS 2023 - Computational Systems",
      description: "RVCE Bangalore • November 2-4, 2023",
      link: "https://csitss.ieee-rvce.org/",
      organizer: "RVCE Bangalore"
    },
    {
      name: "AIKIIE 2023 - Ambient Intelligence",
      description: "Rao Bahadur Ballari • November 2-3, 2023",
      link: "https://aikiie.in/",
      organizer: "Rao Bahadur"
    },
    {
      name: "ICRASET 2023 - Science & Engineering",
      description: "BGSIT • November 23-24, 2023",
      link: "http://www.bgsiticraset23.com",
      organizer: "BGSIT"
    },
    {
      name: "ICOICI 2024 - Data Communication Technologies",
      description: "REVA University Bangalore • January 4-6, 2024",
      link: "http://icoici.org/2024/",
      organizer: "REVA University"
    },
    {
      name: "ICIITCEE 2024 - Computing & Electronics",
      description: "BNMIT Bangalore • January 24-25, 2024",
      link: "http://iciitcee.in/",
      organizer: "BNMIT Bangalore"
    },
    {
      name: "IDCIOT 2023 - Data Communication & IoT",
      description: "REVA University Bangalore • January 5-7, 2023",
      link: "#",
      organizer: "REVA University"
    },
    {
      name: "ICICCS 2023 - Circuits & Communication",
      description: "SLNCE Raichur • February 24-25, 2023",
      link: "#",
      organizer: "SLNCE Raichur"
    },
    {
      name: "ICAIA 2023 - Artificial Intelligence",
      description: "Alliance University Bangalore • April 21-22, 2023",
      link: "#",
      organizer: "Alliance University"
    },
    {
      name: "IITCEE 2023 - Computing & Electronics",
      description: "BNMIT Bangalore • January 27-28, 2023",
      link: "#",
      organizer: "BNMIT Bangalore"
    },
    {
      name: "ICDCECE 2023 - Distributed Computing",
      description: "BIT Ballari • April 29-30, 2023",
      link: "#",
      organizer: "BIT Ballari"
    },
    {
      name: "ICAECIS 2023 - Electronics & Information",
      description: "BIT Bangalore • April 19-21, 2023",
      link: "#",
      organizer: "BIT Bangalore"
    },
    {
      name: "NMITCON 2023 - Networks & Multimedia",
      description: "NMIT Bangalore • September 1, 2023",
      link: "#",
      organizer: "NMIT Bangalore"
    },
    {
      name: "ICIFIT 2023 - Innovation in Technology",
      description: "Sai Vidya Institute • May 3-5, 2023",
      link: "#",
      organizer: "Sai Vidya Institute"
    }
  ];

  const quickLinks = [
    
    {
      title: "IEEE North Karnataka Official",
      link: "https://r10.ieee.org/north-karnataka/",
      description: "Official IEEE NK Sub-Section website"
    },
    {
      title: "IEEE Region 10 (Asia Pacific)",
      link: "https://r10.ieee.org/",
      description: "IEEE Region 10 official website"
    },
    {
      title: "IEEE India Council",
      link: "https://www.ieeeindiacouncil.org/",
      description: "IEEE India Council portal"
    },
    {
      title: "IEEE Bangalore Section",
      link: "https://ieeebangalore.org/",
      description: "Parent section website"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'external':
        return <ExternalLink className="h-4 w-4" />;
      case 'download':
        return <Download className="h-4 w-4" />;
      case 'video':
        return <Video className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const displayedConferences = showAllConferences ? approvedConferences : approvedConferences.slice(0, 10);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
              <BookOpen className="w-4 h-4 mr-2" />
              Resources • IEEE North Karnataka
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 animate-fade-in-1">
              Resources
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-2">
              Access valuable IEEE resources, standards, publications, and professional development materials
            </p>
          </div>
        </div>
      </section>

      {/* Main Resources Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50">
              <Award className="w-4 h-4 mr-2" />
              Knowledge Hub
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-green-700 bg-clip-text text-transparent mb-6">
              Resource Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of IEEE resources across different domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                        {category.title}
                      </CardTitle>
                      <p className="text-slate-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group/item">
                        <a
                          href={item.link}
                          target={item.type === 'external' ? '_blank' : '_self'}
                          rel={item.type === 'external' ? 'noopener noreferrer' : ''}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group-hover/item:shadow-md border border-slate-200/50"
                        >
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-sm text-slate-600">{item.description}</p>
                          </div>
                          <div className="ml-4 text-slate-400 group-hover/item:text-blue-600 transition-colors">
                            {getIcon(item.type)}
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approved Conferences Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200/50">
              <Calendar className="w-4 h-4 mr-2" />
              Conferences
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent mb-6">
              Approved Conferences 2023-2024
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore IEEE approved conferences and their proceedings from 2023-2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedConferences.map((conference, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200/50 text-xs">
                      IEEE Approved
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors leading-tight">
                    {conference.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    {conference.description}
                  </p>
                  
                  <p className="text-slate-500 text-xs mb-4">
                    Organized by: {conference.organizer}
                  </p>

                  {conference.link !== "#" && (
                    <a
                      href={conference.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors font-medium text-sm"
                    >
                      View Conference
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {approvedConferences.length > 10 && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAllConferences(!showAllConferences)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {showAllConferences ? (
                  <>
                    Show Less
                    <ChevronUp className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  <>
                    Show More Conferences ({approvedConferences.length - 10} more)
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200/50">
              <Globe className="w-4 h-4 mr-2" />
              Quick Access
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent mb-6">
              Important Links
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Direct access to essential IEEE websites and portals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {link.description}
                  </p>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors font-medium"
                  >
                    Visit Site
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Resources */}
      <section className="py-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
            <CardContent className="p-12 text-center">
              <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50">
                <Users className="w-4 h-4 mr-2" />
                Need Help?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-6">
                Need Additional Resources?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Can't find what you're looking for? Our team is here to help you access the resources you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <a
                    href="mailto:punit.ntotad@gmail.com"
                    className="flex items-center"
                  >
                    Contact Webmaster
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  <a
                    href="/contact"
                    className="flex items-center"
                  >
                    General Contact
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResourcesSection;
