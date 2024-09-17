import ImgCarousel from "../components/imgCarousel";

export default function Personal() {
  return (
    <div className="mx-auto max-w-[80%]">
      <div className="py-8">
        <hr />
      </div>

      {/* Welcome Section */}
      <div className="text-center">
        <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl p-8 rounded-xl">
          Hi There Welcome to my Website!
        </div>
        <ImgCarousel deviceType="desktop" />
        <div className="mt-6 text-lg lg:text-2xl leading-8 text-gray-600">
          As an undergraduate student at Tufts University studying computer
          science with a minor in environmental policy and mathematics, I am
          passionate about software engineering, environmental technology, and
          public policy. I have developed a range of skills in high and
          low-level programming languages through my classes and
          extracurriculars, and I am looking for an opportunity to continue to
          grow in these areas and apply my work meaningfully to solving problems
          I care about.
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
              C/C++ (70%), Python(80%), HTML(65%), CSS(), JavaScript, LaTeX, SQL, R
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-6">
            <div className="font-semibold text-black text-lg lg:text-xl mb-2">
              Frameworks
            </div>
            <div className="text-gray-600 text-base lg:text-lg">
              React, Next.js, Node.js, FastAPI, Prisma
            </div>
          </div>

          {/* Tools/Software */}
          <div>
            <div className="font-semibold text-black text-lg lg:text-xl mb-2">
              Tools/Software
            </div>
            <div className="text-gray-600 text-base lg:text-lg">
              Amazon Web Services (AWS), ArcGIS, Jupyter Notebook, MATLAB,
              Microsoft 365, GitHub, MongoDB, TailwindCSS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}