import "../styles/project.css";

const Project = ({ content }) => {
  return (
    <div className="bg-dark-gray w-full sm:w-2/3 md:w-1/3 desktop:w-1/4 h-60 rounded-2xl mx-2 mb-3 flex-grow cursor-pointer flex flex-col justify-center items-center hover-transition">
      <div className="w-max h-max text-center">
        <div className="">{content.projectname}</div>
        <div className="flex flex-wrap w-auto">
          {content.technologiesUsed.map((item, index) => (
            <div key={index} className="mx-1 flex-grow">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
