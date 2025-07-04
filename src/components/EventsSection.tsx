import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 uppercase tracking-wide mb-8 text-center">
            UPCOMING EVENT
          </h2>
        </div>

        <Card className="overflow-hidden shadow-lg max-w-5xl mx-auto bg-white">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Event Poster */}
<div className="lg:w-1/3 pl-4 flex-shrink-0 flex items-center justify-center">
  <img
    src="/images/nkss_ang.jpg"
    alt="IEEE Faculty Conclave 2025"
    className="max-w-full max-h-full object-contain rounded-xl"
  />
</div>



              {/* Event Details */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  IEEE NKSS EXECOM MEET
                </h3>
                
                <div className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
                  <p>
                    The event is a key gathering of IEEE professionals and executive committee members, aimed at discussing the roadmap, initiatives, and collaborative goals for the coming year. The poster includes official logos, venue information, and event details in a professional and visually appealing format.
                  </p>
                </div>

                {/* <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg"
                >
                  Register Now →
                </Button> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;
