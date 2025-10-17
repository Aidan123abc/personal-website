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
            <div
              className="text-white text-4xl md:text-8xl font-bold"
              style={{
                textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)", // Enhanced shadow for the main title
              }}
            >
              Aidan Banerjee
            </div>
            
            <div className="py-8 flex items-center justify-center gap-x-6 lg:gap-x-12 text-white">

              <a
                href="https://www.linkedin.com/in/aidan-banerjee/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7))", // Drop shadow for icons
                }}
              >
                <FaLinkedin size={40} />
              </a>

              <a
                href="mailto:aidan.banerjee@tufts.edu"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7))", // Drop shadow for icons
                }}
              >
                <MdOutlineEmail size={40} />
              </a>

              <a
                href="https://github.com/aidan123abc"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7))", // Drop shadow for icons
                }}
              >
                <FaGithub size={40} />
              </a>
              
              <a
                href="https://instagram.com/aidan.banerjee"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 ease-in-out hover:text-blue-400"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7))", // Drop shadow for icons
                }}
              >
                <FaInstagram size={40} />
              </a>
            </div>
            <div
              className="text-white text-center text-3xl md:text-4xl font-bold py-4"
              style={{
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)", // Similar shadow effect for subtext
              }}
            >
              202-290-8029 | aidan.banerjee@gmail.com
            </div>
          </div>
        </div>
      </section>

      <section id="personal" className="min-h-screen">
        <Personal />
      </section>

      <section id="background" className="min-h-screen pb-8 bg-gray-200">
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
