import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
