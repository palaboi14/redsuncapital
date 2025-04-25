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
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Fix and Flip project - Stunning mountain property",
    description: "A complete property renovation with stunning mountain views. This project achieved exceptional returns through strategic improvements."
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Multi-family renovation project - Woodland retreat",
    description: "This serene woodland property was transformed into luxury vacation rentals, providing steady income streams."
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Commercial property development - Mountain vista",
    description: "A spectacular mountain-view development that combines commercial and residential spaces in harmony with nature."
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Waterfront development - River property",
    description: "This riverside development project showcases our ability to work with unique waterfront properties."
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
