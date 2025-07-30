import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  BookOpen,
  Globe,
  Calendar,
  MapPin,
  Building
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Active Members",
      description: "Engineering professionals and students"
    },
    {
      icon: Award,
      number: "25+",
      label: "Technical Events",
      description: "Organized annually across the region"
    },
    {
      icon: BookOpen,
      number: "30+",
      label: "Student Branches",
      description: "Across North Karnataka institutions"
    },
    {
      icon: Globe,
      number: "9",
      label: "Districts Covered",
      description:
        "Bidar, Kalburgi, Yadgiri, Raichur, Vijayapura, Bagalkot, Belagavi, Dharwad and Gadag"
    }
  ];

  const keyInstitutions = [
    "IIT Dharwad",
    "IIIT Dharwad",
    "Visvesvaraya Technological University Belagavi",
    "Central University Karnataka Kalaburagi",
    "Sharanabasava University Kalburgi",
    "KBN University Kalburgi",
    "KLE Tech University Hubballi"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 uppercase tracking-wide mb-8 text-center">
            About Us
          </h2>
          <div className="bg-blue-50 rounded-3xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/images/nkss.png"
                alt="IEEE NKSS Logo"
                className="w-48 h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                The IEEE North Karnataka Sub-Section (IEEE-NKSS), established in July 2020 (R0011902),
                aims to connect professionals and promote technological advancements through IEEE
                membership. Covering nine districts, the region includes 35 engineering colleges and major
                institutions like IIT Dharwad, IIIT Dharwad, VTU Belagavi, and KLE Tech Hubballi, along with
                several state universities.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center gap-2 transition">
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;