
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
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "Fix and Flip project - White concrete building renovation",
    description: "A complete property renovation in the heart of the city. We funded this fix and flip that achieved a 27% ROI in just 6 months."
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    alt: "Multi-family renovation project - White building during daytime",
    description: "This 8-unit multi-family property was transformed from a neglected building into premium rental units, generating steady monthly income."
  },
  {
    src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    alt: "Commercial property construction - Modern glass building",
    description: "Our financing helped turn an empty lot into this commercial retail space, now fully leased with quality long-term tenants."
  },
  {
    src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    alt: "New construction project - Contemporary multi-story building",
    description: "A ground-up construction project we funded from blueprint to completion, delivering 12 luxury condominiums in an up-and-coming neighborhood."
  },
  {
    src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    alt: "Row houses rental portfolio - Urban residential properties",
    description: "This row of townhomes represents part of an investor's rental portfolio that we helped finance, providing stable passive income."
  },
  {
    src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    alt: "Residential rehab project - White concrete building",
    description: "A beautiful residential rehabilitation project where our bridge loan allowed the investor to acquire and renovate this property without delay."
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
