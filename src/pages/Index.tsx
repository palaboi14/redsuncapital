
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import LoanProducts from '@/components/LoanProducts';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import AnimatedGradient from '@/components/AnimatedGradient';

const Index = () => {
  return (
    <MainLayout>
      <AnimatedGradient 
        size="xl" 
        animation="sunray" 
        intensity="medium" 
        className="top-0 left-0 -translate-x-1/3 -translate-y-1/3" 
      />
      <Hero />
      <Stats />
      <Projects />
      <LoanProducts />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
};

export default Index;
