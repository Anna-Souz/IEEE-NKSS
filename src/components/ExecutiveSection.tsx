import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

// Type definition that supports all member types
type Member = {
  name: string;
  position?: string;
  affiliation: string;
  email?: string;
  image?: string;
};

const members: {
  advisory: Member[];
  executive: Member[];
  esteemed: Member[];
} = {
  advisory: [
    {
      name: "Prof. S. H. Jangamshetti",
      position: "Vice Chancellor",
      affiliation: "Haveri University, Haveri-581110",
      image: "jangamshetti.jpg"  // all entries like this
,
    },
    {
      name: "Dr. Basavaraj S. Anami",
      position: "Registrar",
      affiliation: "KLE Technological University - Hubballi",
      image: "anami.jpg",
    },
    {
      name: "Dr. Krupa Rasane",
      position: "Professor",
      affiliation: "Jain College of Engineering, Belagavi",
      image: "Dr.Krupa.jpg",
    },
  ],
  executive: [
    {
      name: "Prof. Abhishek Deshmukh",
      position: "Chair",
      affiliation: "KLS Gogte Institute of Technology, Belagavi",
      email: "abhishekd@git.edu",
      image: "Abhishek-Deshmukh.jpg",
    },
    {
      name: "Dr. Virupaxi Dalal",
      position: "Chair Elect",
      affiliation: "Jain College of Engg. & Research, Belagavi",
      email: "virupaxi.dalal@ieee.org",
      image: "Dr_Virupaxi_Dalal.jpg",
    },
    {
      name: "Prof. Ravi Hosamani",
      position: "Immediate Past Chair 2024",
      affiliation: "KLE Institute of Technology, Hubballi",
      email: "ravishosamani@ieee.org",
      image: "Ravi-Hosamani.jpg",
    },
    {
      name: "Dr. Rudresh Magadum",
      position: "Secretary",
      affiliation: "KLS Gogte Institute of Technology, Belagavi",
      email: "rrudreshmagadum@gmail.com",
      image: "rudres.jpg",
    },
    {
      name: "Dr. Puneeth N. Thotad",
      position: "Joint Secretary",
      affiliation: "KLE Institute of Technology, Hubballi",
      email: "punit.ntotad@gmail.com",
      image: "punneth.jpg",
    },
    {
      name: "Dr. Basanagouda Ronad",
      position: "Treasurer",
      affiliation: "Basaveshwar Engg. College, Bagalkote",
      email: "basugouda.ronad@gmail.com",
      image: "Basavaraj.jpg",
    },
    {
      name: "Prof. Prashant Chinamalli",
      position: "Joint Treasurer",
      affiliation: "Sharnbasva University, Kalaburagi",
      email: "prashantvnec@gmail.com",
      image: "Prashant.jpg",
    },
  ],
  esteemed: [
    {
      name: "Dr. Rakhee Kallimani",
      affiliation: "KLE Technological University, Belagavi",
      email: "rakhee.kallimani@klescet.ac.in",
      image: "Rakhee.jpg",
    },
    {
      name: "Dr. Vijaylakshmi Jigajinni",
      affiliation: "Basaveshwar Engg. College, Bagalkote",
      email: "talk2vijusj@gmail.com",
      image: "Dr_Vijaylaxmin.jpg",
    },
    {
      name: "Prof. Mahantesh Chikkadesai",
      affiliation: "Basaveshwar Engg. College, Bagalkote",
      email: "mahantesh.chikkadesai@ieee.org",
      image: "Mahantesh.jpg",
    },
    {
      name: "Dr. Nalini Karchi",
      affiliation: "KLE Technological University, Belagavi",
      email: "nalinikarchi@gmail.com",
      image: "Nalani.jpg",
    },
    {
      name: "Dr. Asharani Patil",
      affiliation: "Sharnbasva University, Kalaburagi",
      email: "asharanispatil@ieee.org",
      image: "Asharani.jpg",
    },
    {
      name: "Dr. Veeresh Gonal",
      affiliation: "BLDEA's Dr.PGH CET, Vijayapur",
      email: "vsg5269@gmail.com",
      image: "Veeresh.jpg",
    },
    {
      name: "Ms. Aishwarya K. Nesari",
      affiliation: "Visvesvaraya Tech. University Belagavi",
      email: "0901aishwarya@gmail.com",
      image: "Aishwarya.jpg",
    },
    {
      name: "Dr. Shivappa Sobarad",
      affiliation: "O&M Div., GESCOM Munirabad, Koppal",
      email: "shivappa.kptcl@gmail.com",
      image: "Shivappa.jpg",
    },
    {
      name: "Dr. Rajashekarappa",
      affiliation: "SDM College of Engg. & Tech., Dharwad",
      email: "rajashekarmb@gmail.com",
      image: "Rajashekarappa.jpg",
    },
  ],
};

// Section component with generalized typing
const Section = ({ title, data, sectionIndex }: { title: string; data: Member[]; sectionIndex: number }) => (
  <section className="mb-16">
    <h2 className={`text-3xl font-bold text-ieee mb-8 text-center opacity-0 animate-fade-in`} 
        style={{ animationDelay: `${sectionIndex * 0.2}s`, animationFillMode: 'forwards' }}>
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((person, index) => (
        <Card
          key={index}
          className={`text-center border border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl hover:scale-[1.02] bg-gradient-to-br from-white to-blue-50/50 opacity-0 animate-fade-in hover:from-blue-50/70 hover:to-blue-100/50`}
          style={{ 
            animationDelay: `${sectionIndex * 0.2 + (index * 0.1) + 0.3}s`, 
            animationFillMode: 'forwards' 
          }}
        >
          <CardContent className="p-6 flex flex-col items-center">
            {person.image ? (
              <img
                src={`/images/committee/${person.image}`}
                alt={person.name}
                className="w-24 h-24 rounded-full object-cover shadow-lg mb-4 transition-transform duration-300 hover:scale-110 border-4 border-blue-100"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4 transition-transform duration-300 hover:scale-110 shadow-lg">
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700">
              {person.name}
            </h3>
            {person.position && (
              <p className="text-sm text-blue-600 font-medium transition-colors duration-200 bg-blue-50 px-3 py-1 rounded-full mt-2">
                {person.position}
              </p>
            )}
            <p className="text-sm text-gray-600 mb-2 text-center transition-colors duration-200 mt-2">
              {person.affiliation}
            </p>
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="text-blue-500 hover:text-blue-700 transition-all duration-200 hover:scale-125 bg-blue-50 p-2 rounded-full hover:bg-blue-100"
              >
                <Mail size={18} />
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const CommitteeSection = () => {
  return (
    <div className="-mt-32 bg-gradient-to-b from-blue-50/30 to-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 uppercase tracking-wide mb-8 text-center opacity-0 animate-fade-in" 
          style={{ animationFillMode: 'forwards' }}>
        IEEE NKSS 2025 Committee Members
      </h1>
      <Section title="Advisory Committee" data={members.advisory} sectionIndex={0} />
      <Section title="Executive Committee" data={members.executive} sectionIndex={1} />
      <Section title="Esteemed Members" data={members.esteemed} sectionIndex={2} />
    </div>
  );
};

export default CommitteeSection;
