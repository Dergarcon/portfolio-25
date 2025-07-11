import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import WhatImLookingFor from '@/components/sections/WhatImLookingFor';
import TeamworkSection from '@/components/sections/TeamworkSection';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsShowcase />
      <WhatImLookingFor />
      <TeamworkSection />
      <ContactForm />
    </main>
  );
}
