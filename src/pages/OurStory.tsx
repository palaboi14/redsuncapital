
import MainLayout from '@/layouts/MainLayout';
import OurStoryHero from '@/components/OurStoryHero';
import OurStoryContent from '@/components/OurStoryContent';
import OurStoryTestimonial from '@/components/OurStoryTestimonial';
import Contact from '@/components/Contact';

const OurStory = () => {
  return (
    <MainLayout>
      <OurStoryHero />
      <OurStoryContent />
      <OurStoryTestimonial />
      <Contact />
    </MainLayout>
  );
};

export default OurStory;
