import Hero from "@/components/Hero";
import Description from "@/components/Description";
import { MyProjects } from "@/components/MyProjects";
import { TechStack } from "@/components/TechStack";
import { ContactMe } from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto  ">
      <div className="max-w-7xl w-full">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Description />
        </section>
      </div>
      <section id="tech">
        <TechStack />
      </section>
      <section id="projects">
        <MyProjects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </main>
  );
}
