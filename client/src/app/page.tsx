import Hero from '@/components/home/Hero';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { StatsSection } from '@/components/home/StatsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { TestimonialsModern } from '@/components/home/TestimonialsModern';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsSection />
      <AboutSection />
      <TestimonialsModern />
      <ContactCTA />
    </>
  );
}