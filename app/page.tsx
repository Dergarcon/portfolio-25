import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import TeamworkSection from '@/components/sections/TeamworkSection';
import SkillsGrid from '@/components/sections/SkillsGrid';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsShowcase />
      <TeamworkSection />
      <SkillsGrid />
      <ContactForm />
    </main>
  );
}
