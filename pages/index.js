import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
export default function Home() {
  return (
    <div className="text-white h-screen overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-sky-500/80 ">
      <Header />

      <section id="hero" className="">
        <Hero />
      </section>
{/* 
      <section id="experience" className="">
        <WorkExperience />
      </section>
      
      <section id="projects" className="">
        <Projects />
      </section>

      <section id="skills" className="">
        <Skills />
      </section>

      <section id="about" className="">
        <About />
      </section> */}

      <section id="contact" className="">
        <ContactMe />
      </section>


        <footer className="sticky bottom-5 lg:bottom-10 w-full  ">
          <div className="flex items-center justify-center">
            <Link className="cursor-pointer" href="#hero">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer text-sky-400 filter grayscale hover:grayscale-0 transition duration-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            </Link>
          </div>
        </footer>

    </div>
  );
}
