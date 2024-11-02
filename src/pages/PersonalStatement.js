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
        <div className="mb-12 lg:mb-0 lg:mr-[20%]">
          <div className="font-bold text-black text-xl lg:text-2xl mb-6">
            Education
          </div>
          <div className="text-gray-600 text-base lg:text-lg leading-8">
            <p className="mb-4">
              <strong>Bachelor's Degree</strong> - Tufts University (3.7 GPA)
              <br />
              <span className="italic">September 2021 - May 2025</span>
            </p>
            <p>
              <strong>High School Degree</strong> - Georgetown Day School (3.87
              GPA)
              <br />
              <span className="italic">September 2017 - May 2021</span>
            </p>
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
