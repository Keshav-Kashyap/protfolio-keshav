import { SplineSceneBasic, AboutSection } from "./_components/HeroSection";
import { ProjectsSection } from "./_components/ProjectsSection";
import { TechStackSection } from "./_components/TechStackSection";

export default function Page() {
  return (
    <>
      <SplineSceneBasic />
      <TechStackSection/>
      <ProjectsSection />
      <AboutSection />
    </>
  )
}