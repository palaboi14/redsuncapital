
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import LoanProducts from '@/components/LoanProducts';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <MainLayout>
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
