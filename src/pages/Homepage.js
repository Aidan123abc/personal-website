"use client";

import Layout from "../components/Layout";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import BackgroundScroll from "../components/InternshipScroll";
import Resume from "./Resume";
import Personal from "./PersonalStatement";
import Projects from "./Projects";

export default function Homepage() {
  return (
    <Layout>
      <section id="home" className="min-h-screen">
        <div className="w-full h-screen relative bg-black opacity-30%]">
          {/* Image as background */}
          <img
            src={`${process.env.PUBLIC_URL}/WebPhotoClimb.jpg`}
            alt={"Mountain"}
            className="w-full h-full object-cover"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 z-10 flex items-center justify-center flex-col">
            <div className="text-white text-4xl md:text-8xl font-bold drop-shadow-xl">
              Aidan Banerjee
            </div>
            <div className="text-white text-center text-3xl md:text-4xl font-bold drop-shadow-xl py-4">
              Computer Science | Environmental Science | Mathematics
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:gap-x-12 text-white">
              <a
                href="https://github.com/aidan123abc"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
              >
                <FaGithub size={40} />
              </a>

              <a
                href="https://instagram.com/aidan.banerjee"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
              >
                <FaInstagram size={40} />
              </a>

              <a
                href="https://www.linkedin.com/in/aidan-banerjee/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
              >
                <FaLinkedin size={40} />
              </a>

              <a
                href="mailto:aidan.banerjee@tufts.edu"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
              >
                <MdOutlineEmail size={40} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="personal" className="min-h-screen">
        <Personal />
      </section>
      
      <section id="background" className="min-h-screen pb-8">
      <div className="pb-16">
        <hr></hr>
      </div>
        <div className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl pl-[5%] rounded-xl py-6 pt-10">
          Experience
        </div>
        <BackgroundScroll />
      </section>
      <section id="projects" className="min-h-screen bg-indigo-900">
        <Projects />
      </section>
      <section id="resume" className="min-h-screen">
        <Resume />
      </section>
    </Layout>
  );
}
