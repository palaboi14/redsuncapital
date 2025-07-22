
import MainLayout from '@/layouts/MainLayout';
import OurStoryHero from '@/components/OurStoryHero';
import OurStoryContent from '@/components/OurStoryContent';
import OurStoryTestimonial from '@/components/OurStoryTestimonial';
import TeamSection from '@/components/TeamSection';

const OurStory = () => {
  return (
    <MainLayout>
      <OurStoryHero />
      <OurStoryContent />
      <OurStoryTestimonial />
      {/* <TeamSection /> */}
    </MainLayout>
  );
};

export default OurStory;
