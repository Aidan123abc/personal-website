"use client";

import Layout from "../components/Layout";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import BackgroundScroll from "../components/InternshipScroll";
import Resume from "./Resume";
import Personal from "./PersonalStatement";
import ProjectGrid from "../components/ProjectGrid";

export default function Homepage() {
  return (
    <Layout>
      <section id="home" className="min-h-screen">
        <div className="w-full h-screen relative">
          {/* Image as background */}
          <img
            src={"/mountain.png"}
            alt={"Mountain"}
            className="w-full h-full object-cover"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-white text-4xl md:text-8xl font-bold drop-shadow-xl">
              Aidan Banerjee
            </div>
            <div className="text-white text-center text-3xl md:text-4xl font-bold drop-shadow-xl py-4">
              Computer Science | Environmental Science | Mathematics
            </div>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:gap-x-12 text-white">
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
            </div> */}
          </div>
        </div>
      </section>

      <section id="personal" className="min-h-screen">
        <Personal />
      </section>
      <div className="py-8">
        <hr></hr>
      </div>
      <section id="background" className="min-h-screen pb-8">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl pl-[5%] rounded-xl pt-8">
          Background / CV
        </div>
        <BackgroundScroll />
      </section>
      <div className="py-8">
        <hr></hr>
      </div>
      <section id="projects" className="min-h-screen w-[90%]">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl pl-[5%] rounded-xl pt-8">
          Projects & Papers
        </div>
        <div className="pl-[5%]">
          <ProjectGrid />
        </div>
      </section>
      <div className="py-8">
        <hr></hr>
      </div>
      <section id="resume" className="min-h-screen">
        <Resume />
      </section>
    </Layout>
  );
}
