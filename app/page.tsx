import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Certifications } from '@/components/certifications'
import { Projects } from '@/components/projects'
import { GithubSection } from '@/components/github-section'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Certifications />
      <Projects />
      <GithubSection />
      <Contact />
      <Footer />
    </main>
  )
}
