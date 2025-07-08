import Hero from '@/components/sections/Hero';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import SkillsGrid from '@/components/sections/SkillsGrid';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsShowcase />
      <SkillsGrid />
      <ContactForm />
    </main>
  );
}
