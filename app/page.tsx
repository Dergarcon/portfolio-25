import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import WhatImLookingFor from '@/components/sections/WhatImLookingFor';
import TeamworkSection from '@/components/sections/TeamworkSection';
import ContactForm from '@/components/sections/ContactForm';
import Navigation from '@/components/common/Navigation';
import BackToTop from '@/components/common/BackToTop';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="projects">
          <ProjectsShowcase />
        </div>
        <div id="work-preferences">
          <WhatImLookingFor />
        </div>
        <div id="teamwork">
          <TeamworkSection />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <BackToTop />
    </>
  );
}
