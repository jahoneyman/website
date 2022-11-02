import { Project, SectionTitle } from "..";
import data from "../../data";

const Projects = () => {
  console.log(data);
  const projects = data;

  return (
    <div className="h-auto bg-black text-white px-16 py-32 desktop:px-56">
      <SectionTitle title="Projects" color="white" />
      <div className="text-center text-lg text-gray-300 mt-5">
        <p>Here are some projects that I made throughout my life in college.</p>
      </div>
      <div className="flex flex-wrap justify-evenly mt-6 w-[1300]">
        {projects.map((project, index) => (
          <Project key={index} content={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
