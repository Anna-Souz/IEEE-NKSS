import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "nkss@ieee.org",
      link: "mailto:nkss@ieee.org",
      color: "from-blue-100 to-blue-200"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210",
      link: "tel:+919876543210",
      color: "from-green-100 to-green-200"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Engineering College Campus, Hubli, Karnataka 580031",
      link: "#",
      color: "from-purple-100 to-purple-200"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM",
      link: "#",
      color: "from-orange-100 to-orange-200"
    }
  ];

  const officeLocations = [
    {
      name: "Main Office",
      address: "Room 101, ECE Block, Engineering College",
      city: "Hubli, Karnataka",
      phone: "+91 9876543210",
      email: "nkss@ieee.org"
    },
    {
      name: "Student Activity Center",
      address: "Ground Floor, Student Center",
      city: "Hubli, Karnataka", 
      phone: "+91 9876543211",
      email: "activities@ieee-nkss.org"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - matching modern aesthetic */}
      <Header />
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50 animate-fade-in">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch • IEEE NKSS
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 animate-fade-in-1">
              Contact Us
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-2">
              Connect with IEEE North Karnataka Sub-Section for collaborations, inquiries, and opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50">
              <Phone className="w-4 h-4 mr-2" />
              Contact Information
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-slate-800 bg-clip-text text-transparent mb-6">
              Reach Out to Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <CardContent className="relative p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{info.details}</p>
                  {info.link !== "#" && (
                    <a
                      href={info.link}
                      className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
                    >
                      Contact →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-16 bg-gradient-to-r from-blue-50/30 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/90 to-blue-50/70 backdrop-blur-sm animate-fade-in">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                      Send us a Message
                    </CardTitle>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Have a question or want to get involved? We'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border-purple-200/50">
                  <MapPin className="w-4 h-4 mr-2" />
                  Our Locations
                </Badge>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-slate-800 bg-clip-text text-transparent">
                  Office Locations
                </h2>
              </div>
              
              {officeLocations.map((office, index) => (
                <Card 
                  key={index}
                  className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                      {office.name}
                    </h3>
                    <div className="space-y-3 text-slate-600">
                      <p className="flex items-start">
                        <MapPin size={16} className="mr-3 mt-1 text-purple-600 flex-shrink-0" />
                        <span>{office.address}<br />{office.city}</span>
                      </p>
                      <p className="flex items-center">
                        <Phone size={16} className="mr-3 text-blue-600" />
                        <a href={`tel:${office.phone}`} className="hover:text-blue-600 transition-colors duration-300">
                          {office.phone}
                        </a>
                      </p>
                      <p className="flex items-center">
                        <Mail size={16} className="mr-3 text-green-600" />
                        <a href={`mailto:${office.email}`} className="hover:text-green-600 transition-colors duration-300">
                          {office.email}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-blue-100 rounded-lg flex items-center justify-center group">
                    <div className="text-center text-slate-500 group-hover:text-slate-700 transition-colors duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={32} className="text-blue-600" />
                      </div>
                      <p className="font-semibold text-lg">Interactive Map</p>
                      <p className="text-sm">Campus Location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
};

export default Contact;