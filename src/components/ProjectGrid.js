import ProjectBox from "./ProjectBox";

export default function ProjectGrid() {
  return (
    <div>
      <div className="text-3xl text-white text-center font-bold tracking-tight sm:text-5xl pl-[5%] rounded-xl pt-8">
          Projects
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectBox
          imageName="greenRoots.png"
          title="Green Roots - Environmental Justice Initiative"
          description="React Native App"
          link={`https://github.com/Aidan123abc/GreenRoots`}
        />
        <ProjectBox
          imageName="UFPdata.png"
          title="MYWRA Ultra Fine Particle Dashboard"
          description="Data Analytics Project"
          link={`https://github.com/madelynsilveira/DA297_Air_Pollution_UFP`}
        />
        <ProjectBox
          imageName="SpeakOUT.jpg"
          title="Jumbocode - SpeakOUT Boston"
          description="Webapp Project (Project Manager)"
          link={
            "https://www.figma.com/proto/KBD51666mlFe3dCjD1s9I2/SpeakOUT?node-id=655-51&t=gb90LzEaSALSVg3V-1"
          }
        />
        <ProjectBox
          imageName="25degrees.png"
          title="Game Design Project - 2.5 Degrees"
          description="Unity Game"
          link={"https://www.2point5degree.com/"}
        />
        <ProjectBox
          imageName="connect4.png"
          title="Connect 4 AI Algorithm"
          description="Personal C++ Project"
          link={`https://github.com/Aidan123abc/Connect-Four`}
        />
        <ProjectBox
          imageName="G-Code.png"
          title="Jumbocode - G-Code"
          description="Webapp Project (Developer)"
          link={
            "https://github.com/JumboCode/G-Code"
          }
        />
      </div>
      <div className="text-3xl text-white text-center font-bold tracking-tight sm:text-5xl pl-[5%] rounded-xl pt-8">
          Papers
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectBox
          imageName="DISC_paper.png"
          title="A Safety-Aware Framework for Offshore Wind Turbine Maintenance"
          description="Research Paper"
          link={`${process.env.PUBLIC_URL}/Multi_Factor_Decision_Framework_Final_Draft.pdf`}
        />
        <ProjectBox
          imageName="RecyclingML.png"
          title="Recycltron - Waste Classifier"
          description="Advanced Machine Learning Project"
          link={`${process.env.PUBLIC_URL}/CS152___L3D_Final_Report.pdf`}
        />
        <ProjectBox
          imageName="HydroPowerGIS.png"
          title="Potential of Hydro-Pump Electric Storage - SIT"
          description="GIS Analysis - Policy Research Paper"
          link={`${process.env.PUBLIC_URL}/The Potential of Pumped Hydroelectric Energy Storage (2).pdf`}
        />
      </div>
    </div>
  );
}
