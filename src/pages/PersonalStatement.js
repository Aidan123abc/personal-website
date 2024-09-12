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
      <div className="flex flex-col justify-center items-center py-12">
        {/* Education Section */}
        <div className="text-center mb-12 lg:mb-0 lg:mr-12">
          <div className="font-bold text-black text-3xl lg:text-4xl mb-4">
            Education
          </div>
          <div className="text-lg lg:text-2xl leading-8 text-gray-600">
            <p className="mb-4">
              <strong>High School Degree</strong> - Georgetown Day School (3.87
              GPA)
              <br />
              <span className="italic">September 2017 - May 2021</span>
            </p>
            <p>
              <strong>Bachelor's Degree</strong> - Tufts University (3.7 GPA)
              <br />
              <span className="italic">September 2021 - May 2025</span>
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <div className="font-bold text-black text-3xl lg:text-4xl mb-4 pt-12 text-center">
            Skills
          </div>
          <div className="text-lg lg:text-xl leading-8 text-gray-600">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 list-disc pl-5">
              <li>C++</li>
              <li>Python</li>
              <li>ArcGIS</li>
              <li>Jupyter Notebook</li>
              <li>HTML</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>FastAPI</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Prisma</li>
              <li>Amazon Web Services</li>
              <li>MATLAB</li>
              <li>Microsoft 365</li>
              <li>LaTex</li>
              <li>Github</li>
              <li>Agile Practices and Scrum Cycle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
