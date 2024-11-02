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
              {/* Tufts University */}
              <div className="lg:flex lg:space-x-4 lg:items-start">
                <p className="font-semibold text-xl">Tufts University</p>
                <p className="italic lg:mt-0 mt-1">Class of 2025</p>
              </div>
              <p>
                Bachelor of Science in <b>Computer Science</b>
              </p>
              <p className="pl-8">GPA: 3.7 | Dean's List</p>
              <div className="pl-8 flex space-x-1">
                <p className="lg:w-[100px]">Minor in</p>
                <p className="font-semibold italic">
                  Environmental Science and Policy
                </p>
              </div>
              <div className="pl-8 flex items-center space-x-1">
                <p>Minor in</p>
                <p className="font-semibold italic">Mathematics</p>
              </div>

              {/* School of International Training */}
              <div className="lg:flex lg:space-x-4 lg:items-start">
                <p className="font-semibold text-xl">
                  School of International Training
                </p>
                <p className="italic lg:mt-0 mt-1">Class of 2024</p>
              </div>
              <p>Iceland - Renewable Energy, Technology & Resource Economics</p>
              <p className="pl-8">GPA: 4.0</p>

              {/* Georgetown Day School */}
              <div className="lg:flex lg:space-x-4 lg:items-start">
                <p className="font-semibold text-xl">Georgetown Day School</p>
                <p className="italic lg:mt-0 mt-1">Class of 2021</p>
              </div>
              <p className="pl-8">GPA: 3.87</p>
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
              C/C++ (90%), Python(80%), JavaScript(80%), HTML(65%), CSS(65%),
              LaTeX(90%), SQL(40%), R(40%)
            </div>
          </div>

          {/* Tools/Software */}
          <div className="mb-6">
            <div className="font-semibold text-black text-lg lg:text-xl mb-2">
              Tools/Software
            </div>
            <div className="text-gray-600 text-base lg:text-lg">
              Amazon Web Services (AWS), ArcGIS, Jupyter Notebook, MATLAB,
              Microsoft 365, GitHub, MongoDB, PostgreSQL, TailwindCSS
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <div className="font-semibold text-black text-lg lg:text-xl mb-2">
              Frameworks
            </div>
            <div className="text-gray-600 text-base lg:text-lg">
              Pytorch, React, Next.js, Node.js, FastAPI, Prisma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
