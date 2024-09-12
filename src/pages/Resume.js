import Layout from "../components/Layout";
import { useEffect, useState } from "react";

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the screen width is less than 768px (mobile size)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout>
      <div className="py-2 sm:py-4 lg:pt-24 bg-gray-900">
        <div className="text-3xl lg:text-6xl font-bold tracking-tight text-white flex justify-center pb-4">
          Take a resume for the road
        </div>

        <div className="flex justify-center py-4">
          <a
            href="/resume.pdf"
            download="AidanBanerjeeResume.pdf"
            className="w-auto h-auto rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Download Resume
          </a>
        </div>

        {isMobile ? (
          // Fallback for mobile users
          <div className="flex justify-center items-center w-full py-4">
            <a
              href="/AidanBanerjeeResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline text-lg"
            >
              Click Here if Resume Doesn't Appear
            </a>
          </div>
        ) : (
          // Iframe for desktop and tablet users
          <div className="flex justify-center items-center">
            <div className="w-full lg:w-[60%] py-4 h-[800px] sm:h-[1000px]">
              <iframe
                src="/AidanBanerjeeResume.pdf"
                width="100%"
                height="100%"
                title="Resume PDF"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
