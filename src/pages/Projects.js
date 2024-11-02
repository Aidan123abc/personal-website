import Layout from "../components/Layout";
import ProjectGrid from "../components/ProjectGrid";

export default function Projects() {
  return (
    <Layout>
      <div className="bg-indigo-900 py-16">
        <div className="pl-[5%]">
          <ProjectGrid />
        </div>
      </div>
    </Layout>
  );
}
