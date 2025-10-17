import ImgCarousel from "../components/imgCarousel";

export default function Personal() {
  return (
    <div className="mx-auto max-w-[80%]">
      <div className="py-8">
        <hr />
      </div>

      {/* Welcome Section */}
      <div className="text-center">
        <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl p-8 rounded-xl">
          Background
        </div>
        <ImgCarousel deviceType="desktop" />
        <div className="mt-6 text-lg lg:text-xl leading-8 text-gray-600 pt-6">
          Accomplished full-stack developer and machine learning data scientist
          with a foundation in environmental engineering and public policy.
          Proven track record of delivering solutions over the last 4 years,
          across the energy and environmental sectors, including wind, solar,
          and storage modeling and development, and energy grid optimization.
          Background in community engagement, clean water advocacy, air
          pollution tracking, and environmental justice organizing. Actively
          seeking roles in data science, energy development/consulting, and
          data-driven environmental policy to drive impactful, sustainable
          solutions.
        </div>
      </div>

      {/* Skills and Education Grid */}
      <div className="flex lg:flex-row flex-col py-12">
        {/* Education Section */}
        <div className="mb-12 lg:mb-0 lg:mr-[5%] w-[175%]">
          <h2 className="font-bold text-black text-xl lg:text-2xl mb-6">
            Education
          </h2>
          <div className="text-gray-600 text-base lg:text-lg leading-8 space-y-6">
            <div className="lg:space-y-3 space-y-0">
              {/* Johns Hopkins */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mb-4">
                <div className="flex justify-center lg:justify-start lg:w-1/4">
                  <img
                    src={`${process.env.PUBLIC_URL}/JHU_Logo.jpeg`}
                    alt="Johns Hopkins logo"
                    loading="lazy"
                    className="h-auto max-h-32 object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col lg:w-3/4 text-sm">
                  <div>
                    <p className="font-semibold text-lg">Johns Hopkins</p>
                    <p className="italic text-gray-600">Expected: 2026</p>
                  </div>
                  <p className="mt-1">
                    Master of Science in <b>Energy Policy and Climate</b>
                  </p>
                  <p>GPA: TBD</p>
                </div>
              </div>

              {/* Tufts University */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mb-4">
                <div className="flex justify-center lg:justify-start lg:w-1/4">
                  <img
                    src={`${process.env.PUBLIC_URL}/Tufts_SOE_Logo.jpg`}
                    alt="Tufts University logo"
                    loading="lazy"
                    className="h-auto max-h-32 object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col lg:w-3/4 text-sm">
                  <div>
                    <p className="font-semibold text-lg">Tufts University</p>
                    <p className="italic text-gray-600">Class of 2025</p>
                  </div>
                  <p className="mt-1">
                    Bachelor of Science in <b>Computer Science</b>
                  </p>
                  <p>GPA: 3.7 | Dean's List</p>
                  <div className="flex space-x-1">
                    <p>Minor in</p>
                    <p className="font-semibold italic">
                      Environmental Science and Policy
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    <p>Minor in</p>
                    <p className="font-semibold italic">Mathematics</p>
                  </div>
                </div>
              </div>

              {/* School of International Training */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mb-4">
                <div className="flex justify-center lg:justify-start lg:w-1/4">
                  <img
                    src={`${process.env.PUBLIC_URL}/SIT_Logo.jpg`}
                    alt="School of International Training logo"
                    loading="lazy"
                    className="h-auto max-h-32 object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col lg:w-3/4 text-sm">
                  <div>
                    <p className="font-semibold text-lg">
                      School of International Training
                    </p>
                    <p className="italic text-gray-600">Class of 2024</p>
                  </div>
                  <p className="mt-1">
                    Iceland – Renewable Energy, Technology & Resource Economics
                  </p>
                  <p>GPA: 4.0</p>
                </div>
              </div>

              {/* Georgetown Day School */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mb-4">
                <div className="flex justify-center lg:justify-start lg:w-1/4">
                  <img
                    src={`${process.env.PUBLIC_URL}/GDS_Logo.png`}
                    alt="Georgetown Day School logo"
                    loading="lazy"
                    className="h-auto max-h-32 object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col lg:w-3/4 text-sm">
                  <div>
                    <p className="font-semibold text-lg">
                      Georgetown Day School
                    </p>
                    <p className="italic text-gray-600">Class of 2021</p>
                  </div>
                  <p className="mt-1">GPA: 3.87</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="font-bold text-black text-xl lg:text-2xl mb-6">
            Technical Skills
          </div>

          {/* Languages */}
          <div className="mb-6">
            <div className="font-semibold text-black text-lg lg:text-xl mb-2">
              Languages
            </div>
            <div className="text-gray-600 text-base lg:text-lg">
              Proficient in C/C++, Python, Java, and JavaScript, with additional
              experience in web development languages (HTML, CSS), database
              management with SQL, data analysis with R, and technical
              documentation using LaTeX.
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-6">
            <div className="font-semibold text-black text-lg lg:text-xl mb-2">
              Frameworks
            </div>
            <div className="text-gray-600 text-base lg:text-lg">
              Skilled in building dynamic applications with React, Next.js, and
              Node.js for front-end and server-side development, with expertise
              in machine learning and deep learning using PyTorch, and backend
              API development with FastAPI and Prisma.
            </div>
          </div>

          {/* Tools/Software */}
          <div className="mb-6">
            <div className="font-semibold text-black text-lg lg:text-xl mb-2">
              Tools/Software
            </div>
            <div className="text-gray-600 text-base lg:text-lg">
              Experienced with cloud computing and deployment on Amazon Web
              Services (AWS), GIS analysis with ArcGIS, and scientific computing
              in MATLAB and Jupyter Notebook. Proficient in version control with
              GitHub, database management in MongoDB and PostgreSQL, and
              utilizing TailwindCSS for streamlined and responsive UI design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
