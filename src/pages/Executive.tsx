
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, Users, Award, BookOpen, Globe, Target, Eye, Heart, ArrowRight, Sparkles, Building2, GraduationCap, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Executive = () => {
  // ... keep existing code (all the data arrays like advisoryCommittee, executiveCommittee2025, etc.)
  const advisoryCommittee = [
    // {
    //   name: "Prof. S. H. Jangamshetti",
    //   position: "Vice Chancellor",
    //   organization: "Haveri University Haveri-581110",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    // },
    // {
    //   name: "Dr. Basavaraj S. Anami",
    //   position: "Registrar",
    //   organization: "KLE Technological University - Hubballi",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    // },
    // {
    //   name: "Dr. Krupa Rasane",
    //   position: "Professor",
    //   organization: "Jain College of Engineering, Belagavi",
    //   image: "https://images.unsplash.com/photo-1494790108755-2616b332c913?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    // }
  ];

  const executiveCommittee2025 = [
    {
      position: "Chairman",
      name: "Prof. Abhishek Deshmukh",
      affiliation: "KLS Gogte Institute of Technology, Belagavi",
      ieeeNumber: "90780176",
      mobile: "9164503748",
      email: "abhishekd@git.edu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Chair-Elect 2025",
      name: "Dr. Virupaxi Dalal",
      affiliation: "Jain College of Engineering and Research, Belagavi",
      ieeeNumber: "96522744",
      mobile: "8147205707",
      email: "virupaxi.dalal@ieee.org",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Vice-Chairman (Professional Activities)",
      name: "Dr. Jayashree Rudagi",
      affiliation: "S.G.Balekundri Inst. of Technology, Belagavi",
      ieeeNumber: "92997861",
      mobile: "9902747781",
      email: "talk2vijusj@ieee.org",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c913?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Vice-Chairman (Technical Activities)",
      name: "Dr. Vinoda S.",
      affiliation: "KLE Institute of Technology, Hubballi",
      ieeeNumber: "92892615",
      mobile: "9538900604",
      email: "vinoda_shivanand@yahoo.co.in",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Secretary",
      name: "Dr. Rudresh Magdum",
      affiliation: "Gogte Institute of Technology, Belagavi",
      ieeeNumber: "92525752",
      mobile: "8722433115",
      email: "rrudreshmagadum@gmail.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Joint Secretary & Web Master",
      name: "Dr. Puneeth N. Thotad",
      affiliation: "KLE Institute of Technology, Hubballi",
      ieeeNumber: "98582806",
      mobile: "9480092730",
      email: "punit.ntotad@gmail.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Treasurer",
      name: "Dr. Basanagouda Ronad",
      affiliation: "Basaveshwar Engineering College, Bagalkote",
      ieeeNumber: "90807968",
      mobile: "9449760427",
      email: "basugouda.ronad@gmail.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Immediate Past Chair (2024)",
      name: "Prof. Ravi Hosamani",
      affiliation: "KLE Institute of Technology, Hubballi",
      ieeeNumber: "92325379",
      mobile: "9945443844",
      email: "ravishosamani@ieee.org",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Past chair 2023",
      name: "Dr. Krupa Rasane",
      affiliation: "Jain College of Engineering, Belagavi-590014",
      ieeeNumber: "90475369",
      mobile: "9341107810",
      email: "kru_ran@yahoo.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c913?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    },
    {
      position: "Past chair 2022",
      name: "Dr. Basavaraj S. Anami",
      affiliation: "KLE Institute of Technology,Hubballi-580030",
      ieeeNumber: "4100814",
      mobile: "9880802647",
      email: "anami_basu@ieee.org",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face"
    }
  ];

  const members2025 = [
    {
      name: "Dr. Rakhee Kallimani",
      affiliation: "KLE Technological University, Belagavi",
      ieeeNumber: "96994876",
      mobile: "9916557961",
      email: "rakhee.kallimani@klescet.ac.in"
    },
    {
      name: "Dr. Vijaylakshmi Jigajinni",
      affiliation: "Basaveshwar Engg. College, Bagalkote",
      ieeeNumber: "92997861",
      mobile: "9880500028",
      email: "talk2vijusj@gmail.com"
    },
    {
      name: "Mr. Mahantesh Chikkadesai",
      affiliation: "Basaveshwar Engineering College, Bagalkote",
      ieeeNumber: "92554397",
      mobile: "9480780580",
      email: "mahantesh.chikkadesai@ieee.org"
    },
    {
      name: "Dr. Shivappa Sobarad",
      affiliation: "O&M Div., GESCOM Munirabad, Koppal",
      ieeeNumber: "94254365",
      mobile: "9886229457",
      email: "shivappa.kptcl@gmail.com"
    },
    {
      name: "Dr. Rajashekarappa",
      affiliation: "SDM College of Engg. & Tech., Dharwad",
      ieeeNumber: "94998004",
      mobile: "9008291634",
      email: "rajashekarmb@gmail.com"
    },
    {
      name: "Dr. Ambresh Ambalgi",
      affiliation: "Gulbarga University, Kalaburagi",
      ieeeNumber: "96831587",
      mobile: "9902383714",
      email: "ambreshpa@gmail.com"
    },
    {
      name: "Dr. Vishwanath P",
      affiliation: "SLNCE,Raichur",
      ieeeNumber: "97654565",
      mobile: "8971510404",
      email: "vishalpetli73@gmail.com"
    },
    {
      name: "Dr. Nalini Karchi",
      affiliation: "KLE Technological University, Belagavi",
      ieeeNumber: "95559877",
      mobile: "9449021170",
      email: "nalinikarchi@gmail.com"
    },
    {
      name: "Dr. Asharani Patil",
      affiliation: "Sharnbasva University, Kalaburagi",
      ieeeNumber: "96972530",
      mobile: "9620256615",
      email: "asharanispatil@ieee.org"
    },
    {
      name: "Dr. Veeresh Gonal",
      affiliation: "BLDEA's Dr.PGH CET, Vijayapur",
      ieeeNumber: "98456303",
      mobile: "9342916025",
      email: "vsg5269@gmail.com"
    }
  ];

  const studentBranches = [
    { name: "B V B College of Eng & Tech-Vldyanagar", id: "STB62711", website: "" },
    { name: "Basavakalyan Engineering College", id: "STB62061", website: "" },
    { name: "Basaveshwar Engineering College", id: "STB35261", website: "www.becieee.org" },
    { name: "Central University of Karnataka", id: "STB14017", website: "" },
    { name: "Gogte Inst Of Tech", id: "STB28191", website: "" },
    { name: "Guru Nanak Dev Engineering College-Bidar", id: "STB96281", website: "" },
    { name: "Hirasugar Institute of Technology-Nidasoshi", id: "STB64281", website: "" },
    { name: "HKE Societys SLN Col of Engin-Raichur", id: "STB99080", website: "" },
    { name: "Indian Institute of Information Technology-Cha", id: "STB20229", website: "" },
    { name: "Jain College of Engineering - Belagavi", id: "STB17291", website: "" },
    { name: "KCT Engineering College", id: "STB99098", website: "" },
    { name: "Khaja Bandanawaz University", id: "STB30541", website: "" },
    { name: "KLE Dr.M.S. Sheshgiri College of Engg & Tech", id: "STBS0295", website: "" },
    { name: "KLE Society's College of Engrg", id: "STB36281", website: "" },
    { name: "KLE Society's Institute of Tech", id: "STB15221", website: "" },
    { name: "KNS Institute of Technology", id: "STB03041", website: "" },
    { name: "PDA College Of Engineering, Kalaburgi", id: "STB35841", website: "" },
    { name: "Rural Engineering College,Bhalki", id: "STB305S1", website: "" },
    { name: "S.G. Balekundri Institute of Technology", id: "STB10219", website: "" },
    { name: "SDM College of Engg & Tech-Dharwad", id: "STB35740", website: "" },
    { name: "Sharnbasva University-Kalaburagi", id: "STB35739", website: "" },
    { name: "V.P.Dr PG HallakattiCollege of Eng & Tech", id: "STB30721", website: "" },
    { name: "Veerappa Nisty Engineering College Shorapur", id: "STB99371", website: "" }
  ];

  const conferences = [
    {
      title: "NKCON 2024 @ Belagavi",
      image: "https://r10.ieee.org/north-karnataka/wp-content/uploads/sites/154/WhatsApp-Image-2024-07-10-at-12.30.23_5c1274b8.jpg",
      description: "Latest conference proceedings and technical sessions"
    },
    {
      title: "NKCON Track Details",
      image: "https://r10.ieee.org/north-karnataka/wp-content/uploads/sites/154/NKCON-track-details.jpeg",
      description: "Conference track information and guidelines"
    },
    {
      title: "NKCON 2022 @ Vijaypur",
      image: "https://r10.ieee.org/north-karnataka/wp-content/uploads/sites/154/WhatsApp-Image-2022-09-01-at-9.21.47-PM.jpeg",
      description: "Historical conference documentation"
    }
  ];

  const pastExecutiveMembers2024 = [
    {
      position: "Chairman",
      name: "Mr. Ravi Hosamani",
      affiliation: "KLE Institute of Technology, Hubballi",
      ieeeNumber: "92325379",
      mobile: "9945443844",
      email: "ravishosamani@ieee.org"
    },
    {
      position: "Chair-Elect 2024",
      name: "Mr. Abhishek Deshmukh",
      affiliation: "Gogte Institute of Technology, Belagavi-590006",
      ieeeNumber: "90780176",
      mobile: "9164503748",
      email: "abhishekd@git.edu"
    },
    {
      position: "Vice-Chairman",
      name: "Dr. Vijayalakshmi S. Jigajinni",
      affiliation: "Basaveshwar Engineering College, Bagalkote",
      ieeeNumber: "92997861",
      mobile: "",
      email: "talk2vijusj@ieee.org"
    },
    {
      position: "Secretary",
      name: "Dr. Basanagouda Ronad",
      affiliation: "Basaveshwar Engineering College, Bagalkote",
      ieeeNumber: "90807968",
      mobile: "",
      email: "basugouda.ronad@gmail.com"
    },
    {
      position: "Jt. Secretary",
      name: "Dr. Rudresh Magdum",
      affiliation: "Gogte Institute of Technology, Belagavi",
      ieeeNumber: "92525752",
      mobile: "",
      email: "rrudreshmagadum@gmail.com"
    },
    {
      position: "Treasurer",
      name: "Dr. Virupaxi B. Dalal",
      affiliation: "Jain College of Engineering and Research, Belagavi",
      ieeeNumber: "96522744",
      mobile: "8147205707",
      email: "virupaxi.dalal@gmail.com"
    },
    {
      position: "Past chair 2023",
      name: "Dr. Krupa Rasane",
      affiliation: "Jain College of Engineering, Belagavi-590014",
      ieeeNumber: "90475369",
      mobile: "9341107810",
      email: "kru_ran@yahoo.com"
    },
    {
      position: "Past chair 2022",
      name: "Dr. Basavaraj S. Anami",
      affiliation: "KLE Institute of Technology,Hubballi-580030",
      ieeeNumber: "4100814",
      mobile: "9880802647",
      email: "anami_basu@ieee.org"
    },
    {
      position: "Past chair 2021",
      name: "Dr. S. H. Jangamshetti",
      affiliation: "BEC (A) Bagalkot-587102",
      ieeeNumber: "8985442",
      mobile: "8310346902",
      email: "suresh.j@ieee.org"
    }
  ];

  const pastMembers2024 = [
    {
      name: "Dr. Jayashri Rudagi",
      affiliation: "SGBIT, Belagavi",
      ieeeNumber: "96556154",
      mobile: "9902747781",
      email: "jayashrirudagi@sgbit.edu.in"
    },
    {
      name: "Dr. Basanti Ghanti",
      affiliation: "Sharnbasva University Kalaburagi",
      ieeeNumber: "96972441",
      mobile: "9986187999",
      email: "asantighanti@gmail.com"
    },
    {
      name: "Dr.Ambresh P. Ambalgi",
      affiliation: "Gulbarga University, Kalaburagi",
      ieeeNumber: "96831587",
      mobile: "",
      email: "ambreshpa91@ieee.org"
    },
    {
      name: "Dr.Vinoda S",
      affiliation: "KLE Institute of Technology, Hubballi",
      ieeeNumber: "92892614",
      mobile: "",
      email: "vinoda_shivanand@yahoo.co.in"
    },
    {
      name: "Dr . Arun Tigadi",
      affiliation: "K L E Tech Dr M S S CET Belagavi Campus",
      ieeeNumber: "97654565",
      mobile: "",
      email: "arun.tigadi@klescet.ac.in"
    },
    {
      name: "Dr. Vishwanath P",
      affiliation: "SLNCE,Raichur",
      ieeeNumber: "97654565",
      mobile: "8971510404",
      email: "vishalpetli73@gmail.com"
    },
    {
      name: "Dr. Puneeth N. Thotad",
      affiliation: "KLEIT, Hubballi",
      ieeeNumber: "98582806",
      mobile: "9480092730",
      email: "punit.ntotad@kleit.ac.in"
    },
    {
      name: "Dr. PratyasaBhui",
      affiliation: "Indian Institute of Technology, Dharwad",
      ieeeNumber: "92958009",
      mobile: "",
      email: "pbhui@iitdh.ac.in"
    },
    {
      name: "Dr. Jagadeesha R Bhat",
      affiliation: "Indian Institute of Information Technology, Dharwad",
      ieeeNumber: "94195088",
      mobile: "",
      email: "jagadeesha@iiitdwd.ac.in"
    },
    {
      name: "Mr. Prashantkumar S Chinamalli",
      affiliation: "Sharnbasva University , Kalaburagi",
      ieeeNumber: "91098087",
      mobile: "",
      email: "prashantvnec@gmail.com"
    }
  ];

  const pastExecutiveMembers2023 = [
    {
      position: "Chairman",
      name: "Dr. Krupa Rasane",
      affiliation: "Jain College of Engineering, Belagavi-590014",
      ieeeNumber: "90475369",
      mobile: "9341107810",
      email: "kru_ran@yahoo.com"
    },
    {
      position: "Chair elect",
      name: "Mr.Ravi Hosamani",
      affiliation: "KLE Institute of Technology,Hubballi-580030",
      ieeeNumber: "92325379",
      mobile: "9945443844",
      email: "ravishosamani@ieee.org"
    },
    {
      position: "Vice-Chairman",
      name: "Dr. Jagadeesha R Bhat",
      affiliation: "IIIT Dharwad",
      ieeeNumber: "94195088",
      mobile: "9606421327",
      email: "jagadeesha@iiitdwd.ac.in"
    },
    {
      position: "Secretary",
      name: "Dr. Virupaxi B.Dalal",
      affiliation: "JCER,Belagavi",
      ieeeNumber: "96522744",
      mobile: "8147205707",
      email: "virupaxi.dalal@gmail.com"
    },
    {
      position: "Joint Secretory",
      name: "Dr. Vijaylakshmi J",
      affiliation: "BEC (A) Bagalkot-587102",
      ieeeNumber: "",
      mobile: "",
      email: ""
    },
    {
      position: "Treasurer",
      name: "Mr. Abhishek Deshmukh",
      affiliation: "Gogte Institute of Technology, Belagavi-590006",
      ieeeNumber: "90780176",
      mobile: "9164503748",
      email: "abhishekd@git.edu"
    },
    {
      position: "Past chair 2022",
      name: "Dr. Basavaraj S. Anami",
      affiliation: "KLE Institute of Technology,Hubballi-580030",
      ieeeNumber: "4100814",
      mobile: "9880802647",
      email: "anami_basu@ieee.org"
    },
    {
      position: "Past chair 2021",
      name: "Dr. S. H. Jangamshetti",
      affiliation: "BEC (A) Bagalkot-587102",
      ieeeNumber: "8985442",
      mobile: "8310346902",
      email: "suresh.j@ieee.org"
    }
  ];

  const pastMembers2023 = [
    {
      name: "Dr. Vishwanath P",
      affiliation: "SLNCE,Raichur",
      ieeeNumber: "97654565",
      mobile: "8971510404",
      email: "vishalpetli73@gmail.com"
    },
    {
      name: "Dr. Jayashri Rudagi",
      affiliation: "SGBIT, Belagavi",
      ieeeNumber: "96556154",
      mobile: "9902747781",
      email: "jayashrirudagi@sgbit.edu.in"
    },
    {
      name: "Dr. Yerriswamy T.",
      affiliation: "KLEIT, Hubballi",
      ieeeNumber: "93230040",
      mobile: "9986187999",
      email: "swamy1976ty@gmail.com"
    },
    {
      name: "Dr.Satish Bhairannawar",
      affiliation: "SDM, Dharwad",
      ieeeNumber: "",
      mobile: "9986008419",
      email: "satishbhairannawar@gmail.com"
    },
    {
      name: "Dr.Kumarwamy V.",
      affiliation: "KLEIT, Hubballi",
      ieeeNumber: "95198611",
      mobile: "9964049409",
      email: "kumarswamy.vadla@kleit.ac.in"
    },
    {
      name: "Dr. Veerendra Dakulagi",
      affiliation: "GNDEC,Bidar",
      ieeeNumber: "96766977",
      mobile: "8296721601",
      email: "veerendra@ieee.org"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Navigation */}
      <Header />
      

      {/* Hero Section */}
<section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100/70 to-blue-200/50">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 via-blue-200/10 to-blue-100/10"></div>
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-float"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-4xl mx-auto">
      <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-200/50 animate-fade-in">
        <Sparkles className="w-4 h-4 mr-2" />
        Leadership Excellence • Region 10
      </Badge>
      
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-8 animate-fade-in-1">
        Executive Committee
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-fade-in-2">
        Meet the distinguished leaders driving IEEE North Karnataka Section's mission 
        of advancing technology for humanity across the region
      </p>
    </div>
  </div>
</section>

      {/* Main Content with Tabs */}
       <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Tabs defaultValue="current" className="w-full">
      
        
<TabsList className="grid w-full grid-cols-5 mb-12 bg-white/70 backdrop-blur-sm p-2 rounded-xl shadow-lg items-center overflow-hidden">
  <TabsTrigger
    value="current"
    className="px-4 py-2 rounded-lg font-semibold transition-all duration-300
      hover:bg-gray-100
      data-[state=active]:bg-gradient-to-r
      data-[state=active]:from-blue-200 data-[state=active]:to-purple-200
      data-[state=active]:text-blue-900
      data-[state=active]:shadow-sm
      data-[state=active]:rounded-lg overflow-hidden"
  >
    EXECOM 2025
  </TabsTrigger>

  <TabsTrigger
    value="student-branches"
    className="px-4 py-2 rounded-lg font-semibold transition-all duration-300
      hover:bg-gray-100
      data-[state=active]:bg-gradient-to-r
      data-[state=active]:from-blue-200 data-[state=active]:to-purple-200
      data-[state=active]:text-blue-900
      data-[state=active]:shadow-sm
      data-[state=active]:rounded-lg overflow-hidden"
  >
    Student Branches
  </TabsTrigger>

  <TabsTrigger
    value="conferences"
    className="px-4 py-2 rounded-lg font-semibold transition-all duration-300
      hover:bg-gray-100
      data-[state=active]:bg-gradient-to-r
      data-[state=active]:from-blue-200 data-[state=active]:to-purple-200
      data-[state=active]:text-blue-900
      data-[state=active]:shadow-sm
      data-[state=active]:rounded-lg overflow-hidden"
  >
    Conferences
  </TabsTrigger>

  <TabsTrigger
    value="past-2024"
    className="px-4 py-2 rounded-lg font-semibold transition-all duration-300
      hover:bg-gray-100
      data-[state=active]:bg-gradient-to-r
      data-[state=active]:from-blue-200 data-[state=active]:to-purple-200
      data-[state=active]:text-blue-900
      data-[state=active]:shadow-sm
      data-[state=active]:rounded-lg overflow-hidden"
  >
    Past 2024
  </TabsTrigger>

  <TabsTrigger
    value="past-2023"
    className="px-4 py-2 rounded-lg font-semibold transition-all duration-300
      hover:bg-gray-100
      data-[state=active]:bg-gradient-to-r
      data-[state=active]:from-blue-200 data-[state=active]:to-purple-200
      data-[state=active]:text-blue-900
      data-[state=active]:shadow-sm
      data-[state=active]:rounded-lg overflow-hidden"
  >
    Past 2023
  </TabsTrigger>
</TabsList>

            <TabsContent value="current" >
              {/* Executive Committee Table */}
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200/50">
                    <Users className="w-4 h-4 mr-2" />
                    Current Leadership
                  </Badge>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-6">EXECOM 2025</h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Our executive committee comprises distinguished professionals dedicated to advancing IEEE's mission in North Karnataka
                  </p>
                </div>
                
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-blue-100">
                          <TableHead className="font-bold text-blue-800 py-4">Position</TableHead>
                          <TableHead className="font-bold text-blue-800">Name</TableHead>
                          <TableHead className="font-bold text-blue-800">Affiliation</TableHead>
                          <TableHead className="font-bold text-blue-800">IEEE Number</TableHead>
                          <TableHead className="font-bold text-blue-800">Contact</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {executiveCommittee2025.map((member, index) => (
                          <TableRow key={index} className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 border-b border-gray-100">
                            <TableCell className="font-medium text-blue-600 py-4">{member.position}</TableCell>
                            <TableCell className="font-semibold text-slate-800">{member.name}</TableCell>
                            <TableCell className="text-slate-600">{member.affiliation}</TableCell>
                            <TableCell className="text-blue-500 font-mono">{member.ieeeNumber}</TableCell>
                            <TableCell>
                              <div className="flex space-x-3">
                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50">
                                  <Mail size={16} />
                                </a>
                                <a href={`tel:${member.mobile}`} className="text-green-600 hover:text-green-800 transition-colors p-1 rounded-full hover:bg-green-50">
                                  <Phone size={16} />
                                </a>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>

              {/* Members Table */}
              <div className="animate-fade-in-1">
                <div className="text-center mb-12">
                  <Badge className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200/50">
                    <Building2 className="w-4 h-4 mr-2" />
                    Committee Members
                  </Badge>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-green-700 bg-clip-text text-transparent mb-6">Executive Members 2025</h3>
                </div>
                
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-green-50 to-blue-50 border-b-2 border-green-100">
                          <TableHead className="font-bold text-green-800 py-4">Sl.No</TableHead>
                          <TableHead className="font-bold text-green-800">Name</TableHead>
                          <TableHead className="font-bold text-green-800">Affiliation</TableHead>
                          <TableHead className="font-bold text-green-800">IEEE Number</TableHead>
                          <TableHead className="font-bold text-green-800">Contact</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {members2025.map((member, index) => (
                          <TableRow key={index} className="hover:bg-gradient-to-r hover:from-green-50/50 hover:to-blue-50/50 transition-all duration-300 border-b border-gray-100">
                            <TableCell className="font-medium text-green-600 py-4">{index + 1}</TableCell>
                            <TableCell className="font-semibold text-slate-800">{member.name}</TableCell>
                            <TableCell className="text-slate-600">{member.affiliation}</TableCell>
                            <TableCell className="text-blue-500 font-mono">{member.ieeeNumber}</TableCell>
                            <TableCell>
                              <div className="flex space-x-3">
                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50">
                                  <Mail size={16} />
                                </a>
                                <a href={`tel:${member.mobile}`} className="text-green-600 hover:text-green-800 transition-colors p-1 rounded-full hover:bg-green-50">
                                  <Phone size={16} />
                                </a>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advisory">
              <div className="animate-fade-in">
                <div className="text-center mb-16">
                  <Badge className="mb-6 bg-gradient-to-r from-orange-50 to-yellow-50 text-orange-700 border-orange-200/50">
                    <Award className="w-4 h-4 mr-2" />
                    Distinguished Leadership
                  </Badge>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-orange-700 bg-clip-text text-transparent mb-6">Advisory Committee 2025</h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Experienced leaders providing strategic guidance and wisdom to our organization
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {advisoryCommittee.map((member, index) => (
                    <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in-2" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="relative">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-xl font-bold mb-2 text-shadow-lg">{member.name}</h3>
                          <p className="text-blue-200 font-semibold text-shadow">{member.position}</p>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <p className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">{member.organization}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="student-branches">
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <Badge className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-purple-200/50">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Student Network
                  </Badge>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-purple-700 bg-clip-text text-transparent mb-6">IEEE Student Branches</h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Our vibrant network of student branches across North Karnataka's premier institutions
                  </p>
                </div>
                
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-purple-50 to-pink-50 border-b-2 border-purple-100">
                          <TableHead className="font-bold text-purple-800 py-4">Student Branch</TableHead>
                          <TableHead className="font-bold text-purple-800">SPO ID</TableHead>
                          <TableHead className="font-bold text-purple-800">Website</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {studentBranches.map((branch, index) => (
                          <TableRow key={index} className="hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 transition-all duration-300 border-b border-gray-100">
                            <TableCell className="font-medium text-slate-800 py-4">{branch.name}</TableCell>
                            <TableCell className="text-purple-600 font-mono bg-purple-50 px-3 py-1 rounded-lg inline-block">{branch.id}</TableCell>
                            <TableCell>
                              {branch.website ? (
                                <a href={`http://${branch.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                  {branch.website}
                                </a>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="conferences">
              <div className="animate-fade-in">
                <div className="text-center mb-16">
                  <Badge className="mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 border-indigo-200/50">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Technical Excellence
                  </Badge>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-6">IEEE Conferences</h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Showcasing our commitment to advancing technology through world-class conferences and symposiums
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {conferences.map((conference, index) => (
                    <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in-3" style={{animationDelay: `${index * 0.15}s`}}>
                      <div className="relative">
                        <img 
                          src={conference.image} 
                          alt={conference.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-xl font-bold mb-3 text-shadow-lg">{conference.title}</h3>
                          <p className="text-sm text-gray-200 text-shadow">{conference.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past-2024">
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <Badge className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200/50">
                    <Award className="w-4 h-4 mr-2" />
                    Legacy Leadership
                  </Badge>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent mb-6">EXECOM 2024</h2>
                </div>
                
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm mb-12">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-amber-50 to-orange-50 border-b-2 border-amber-100">
                          <TableHead className="font-bold text-amber-800 py-4">Position</TableHead>
                          <TableHead className="font-bold text-amber-800">Name</TableHead>
                          <TableHead className="font-bold text-amber-800">Affiliation</TableHead>
                          <TableHead className="font-bold text-amber-800">IEEE Number</TableHead>
                          <TableHead className="font-bold text-amber-800">Contact</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pastExecutiveMembers2024.map((member, index) => (
                          <TableRow key={index} className="hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-orange-50/50 transition-all duration-300 border-b border-gray-100">
                            <TableCell className="font-medium text-amber-600 py-4">{member.position}</TableCell>
                            <TableCell className="font-semibold text-slate-800">{member.name}</TableCell>
                            <TableCell className="text-slate-600">{member.affiliation}</TableCell>
                            <TableCell className="text-blue-500 font-mono">{member.ieeeNumber}</TableCell>
                            <TableCell>
                              <div className="flex space-x-3">
                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50">
                                  <Mail size={16} />
                                </a>
                                {member.mobile && (
                                  <a href={`tel:${member.mobile}`} className="text-green-600 hover:text-green-800 transition-colors p-1 rounded-full hover:bg-green-50">
                                    <Phone size={16} />
                                  </a>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-green-700 bg-clip-text text-transparent">Members 2024</h3>
                </div>
                
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-green-50 to-blue-50 border-b-2 border-green-100">
                          <TableHead className="font-bold text-green-800 py-4">Sl.No</TableHead>
                          <TableHead className="font-bold text-green-800">Name</TableHead>
                          <TableHead className="font-bold text-green-800">Affiliation</TableHead>
                          <TableHead className="font-bold text-green-800">IEEE Number</TableHead>
                          <TableHead className="font-bold text-green-800">Contact</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pastMembers2024.map((member, index) => (
                          <TableRow key={index} className="hover:bg-gradient-to-r hover:from-green-50/50 hover:to-blue-50/50 transition-all duration-300 border-b border-gray-100">
                            <TableCell className="font-medium text-green-600 py-4">{index + 1}</TableCell>
                            <TableCell className="font-semibold text-slate-800">{member.name}</TableCell>
                            <TableCell className="text-slate-600">{member.affiliation}</TableCell>
                            <TableCell className="text-blue-500 font-mono">{member.ieeeNumber}</TableCell>
                            <TableCell>
                              <div className="flex space-x-3">
                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50">
                                  <Mail size={16} />
                                </a>
                                {member.mobile && (
                                  <a href={`tel:${member.mobile}`} className="text-green-600 hover:text-green-800 transition-colors p-1 rounded-full hover:bg-green-50">
                                    <Phone size={16} />
                                  </a>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="past-2023">
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <Badge className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border-teal-200/50">
                    <Award className="w-4 h-4 mr-2" />
                    Historical Leadership
                  </Badge>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-teal-700 bg-clip-text text-transparent mb-6">EXECOM 2023</h2>
                </div>
                
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm mb-12">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b-2 border-teal-100">
                          <TableHead className="font-bold text-teal-800 py-4">Position</TableHead>
                          <TableHead className="font-bold text-teal-800">Name</TableHead>
                          <TableHead className="font-bold text-teal-800">Affiliation</TableHead>
                          <TableHead className="font-bold text-teal-800">IEEE Number</TableHead>
                          <TableHead className="font-bold text-teal-800">Contact</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pastExecutiveMembers2023.map((member, index) => (
                          <TableRow key={index} className="hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-cyan-50/50 transition-all duration-300 border-b border-gray-100">
                            <TableCell className="font-medium text-teal-600 py-4">{member.position}</TableCell>
                            <TableCell className="font-semibold text-slate-800">{member.name}</TableCell>
                            <TableCell className="text-slate-600">{member.affiliation}</TableCell>
                            <TableCell className="text-blue-500 font-mono">{member.ieeeNumber}</TableCell>
                            <TableCell>
                              <div className="flex space-x-3">
                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50">
                                  <Mail size={16} />
                                </a>
                                {member.mobile && (
                                  <a href={`tel:${member.mobile}`} className="text-green-600 hover:text-green-800 transition-colors p-1 rounded-full hover:bg-green-50">
                                    <Phone size={16} />
                                  </a>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-green-700 bg-clip-text text-transparent">Members 2023</h3>
                </div>
                
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gradient-to-r from-green-50 to-blue-50 border-b-2 border-green-100">
                          <TableHead className="font-bold text-green-800 py-4">Sl.No</TableHead>
                          <TableHead className="font-bold text-green-800">Name</TableHead>
                          <TableHead className="font-bold text-green-800">Affiliation</TableHead>
                          <TableHead className="font-bold text-green-800">IEEE Number</TableHead>
                          <TableHead className="font-bold text-green-800">Contact</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pastMembers2023.map((member, index) => (
                          <TableRow key={index} className="hover:bg-gradient-to-r hover:from-green-50/50 hover:to-blue-50/50 transition-all duration-300 border-b border-gray-100">
                            <TableCell className="font-medium text-green-600 py-4">{index + 1}</TableCell>
                            <TableCell className="font-semibold text-slate-800">{member.name}</TableCell>
                            <TableCell className="text-slate-600">{member.affiliation}</TableCell>
                            <TableCell className="text-blue-500 font-mono">{member.ieeeNumber}</TableCell>
                            <TableCell>
                              <div className="flex space-x-3">
                                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50">
                                  <Mail size={16} />
                                </a>
                                {member.mobile && (
                                  <a href={`tel:${member.mobile}`} className="text-green-600 hover:text-green-800 transition-colors p-1 rounded-full hover:bg-green-50">
                                    <Phone size={16} />
                                  </a>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-8">
            Join Our Leadership Team
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Be part of North Karnataka's premier engineering community and contribute to 
            technological advancement in our region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl group"
              asChild
            >
              <Link to="/">
                Get Involved 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm"
              asChild
            >
              <Link to="/">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
           
      <Footer />
    </div>
  );
};

export default Executive;
