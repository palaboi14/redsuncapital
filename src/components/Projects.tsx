
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";

const projectImages = [
  {
    src: "/lovable-uploads/d972a9a0-8e5b-483f-8857-00f0cd11a869.png",
    alt: "Fix and Flip Project - Victorian Style Home",
    description: "A comprehensive renovation of a classic Victorian-style property in San Francisco, showcasing our expertise in historical property restoration."
  },
  {
    src: "/lovable-uploads/cdf5608a-7bc6-46d2-a61e-4f6e84662069.png",
    alt: "Multi-family Renovation - Historic Building",
    description: "Complete rehabilitation of a historic multi-family building, preserving its architectural character while modernizing interior spaces."
  },
  {
    src: "/lovable-uploads/5908bbbf-774f-4133-9426-6b1291901296.png",
    alt: "Luxury Residence - Hillside Property",
    description: "Modern hillside residence transformation featuring expansive views, custom railings, and high-end finishes throughout."
  },
  {
    src: "/lovable-uploads/e5c5b4d3-19eb-46c2-a5ba-2a095f8c8172.png",
    alt: "Single Family Renovation - Ranch Style",
    description: "Complete renovation of a ranch-style home, featuring updated exterior and modernized living spaces."
  },
  {
    src: "/lovable-uploads/ad1c909e-7326-4cc9-a0df-8594f9d8f61d.png",
    alt: "Investment Property - Residential Rehab",
    description: "Strategic renovation of a residential property, focusing on value-add improvements and curb appeal enhancement."
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Projects We Made Happen
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A showcase of successful property investments we've funded and helped bring to life.
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projectImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <HoverCard openDelay={0} closeDelay={100}>
                      <HoverCardTrigger asChild>
                        <div className="overflow-hidden rounded-xl shadow-md cursor-pointer">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="h-60 w-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent side="top" align="center" className="w-80 p-4 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-md z-[100]">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-heritage-600">{image.alt.split(' - ')[0]}</h4>
                          <p className="text-sm text-gray-700">{image.description}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2 relative static left-auto translate-y-0" />
              <CarouselNext className="ml-2 relative static right-auto translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
