import "../../styles/about.css";
import { Skills } from "..";

const About = () => {
  const languages = [
    "HTML & CSS",
    "JavaScript",
    "PHP",
    "SQL (MySQL)",
    "TypeScript",
    "C",
    "C++",
    "Java",
    "Python",
  ];
  const technologies = ["Node.js", "NoSQL (MongoDB)", "GraphQL"];
  const frameworks = ["ExpressJS", "React.js", "Next.js", "Flutter", "TailwindCSS", "Bootstrap 5"];
  const spokenLanguages = ["English", "Hiligaynon", "Filipino"];
  const interests = [
    "Sports (especially Table Tennis)",
    "Video Games",
    "Photography",
    "Videography",
    "Movies and Anime",
  ];
  const otherSkills = [
    "Blender",
    "Microsoft Office",
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Adobe After Effects",
  ];

  return (
    <div className="bg-dark-gray h-auto text-white py-32 px-16 md:px-32">
      <div className="text-2xl w-2/3 font-bold">About Me</div>
      <div className="w-full md:w-4/6 mt-8">
        <div className="py-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae iste cum sapiente
          ex sed doloribus natus sunt eligendi expedita voluptate rerum sit ea autem nisi qui vero
          in fugiat, dignissimos nemo numquam. Dicta adipisci eaque ex dignissimos tempore quidem
          vel eveniet est, corporis natus unde tempora fuga, repellat similique?
        </div>
      </div>
      <div className="w-full md:w-4/6 mt-5">
        <div className="py-1">Here are some technologies I am familiar with:</div>
        <div className="py-1">
          <Skills title="Languages" content={languages} />
          <Skills title="Technologies" content={technologies} />
          <Skills title="Frameworks" content={frameworks} />
        </div>
        <div className="py-1">Here are some other facts about me:</div>
        <div className="py-1">
          <Skills title="What language I speak in" content={spokenLanguages} />
          <Skills title="My interests" content={interests} />
          <Skills title="Other Skills" content={otherSkills} />
        </div>
      </div>
    </div>
  );
};

export default About;
