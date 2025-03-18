
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "Fix and Flip project - White concrete building renovation"
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    alt: "Multi-family renovation project - White building during daytime"
  },
  {
    src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    alt: "Commercial property construction - Modern glass building"
  },
  {
    src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    alt: "New construction project - Contemporary multi-story building"
  },
  {
    src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    alt: "Row houses rental portfolio - Urban residential properties"
  },
  {
    src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    alt: "Residential rehab project - White concrete building"
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
                    <div className="overflow-hidden rounded-xl shadow-md">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="h-60 w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
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
