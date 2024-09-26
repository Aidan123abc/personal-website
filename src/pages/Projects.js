import Layout from "../components/Layout";
import ProjectGrid from "../components/ProjectGrid";

export default function Projects() {
  return (
    <Layout>
      <div className="bg-indigo-900 py-16">
        <div className="text-3xl text-white text-center font-bold tracking-tight sm:text-5xl pl-[5%] rounded-xl pt-8">
          Projects & Papers
        </div>
        <div className="pl-[5%]">
          <ProjectGrid />
        </div>
      </div>
    </Layout>
  );
}
