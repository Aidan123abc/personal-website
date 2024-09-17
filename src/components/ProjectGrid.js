import ProjectBox from "./ProjectBox";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectBox
        imageName="SpeakOUT.jpg"
        title="Jumbocode - SpeakOUT Boston"
        description="Webapp Project"
        link={"https://www.figma.com/proto/KBD51666mlFe3dCjD1s9I2/SpeakOUT?node-id=655-51&t=gb90LzEaSALSVg3V-1"}
      />
      <ProjectBox
        imageName="WindPaper.png"
        title="A Safety-Aware Framework for Offshore Wind Turbine Maintenance"
        description="Research Paper"
        link={`${process.env.PUBLIC_URL}/Multi_Factor_Decision_Framework_Final_Draft.pdf`}
      />
      <ProjectBox
        imageName="25degrees.png"
        title="Game Design Project - 2.5 Degrees"
        description="Unity Game"
        link={"https://www.2point5degree.com/"}
      />
    </div>
  );
}
