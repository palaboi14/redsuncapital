
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "Real estate project completion 1"
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    alt: "Real estate project completion 2"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "Real estate project completion 3"
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    alt: "Real estate project completion 4"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "Real estate project completion 5"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Real estate project completion 6"
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
