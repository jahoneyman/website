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
          Hey there! I am John Honeyman, a fresh graduate in the University of the Philippines,
          Visayas. My interest in web development started in 2018 when I entered college. I aim to
          become an aspiring full stack web developer where I can help small businesses reach their
          dreams of becoming bigger in the future.
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
