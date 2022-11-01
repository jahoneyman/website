import { useState } from "react";

const Skills = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3 text-sm">
      <div onClick={() => setOpen(!open)} className={`flex items-center cursor-pointer`}>
        <div className="flex justify-evenly items-center whitespace-nowrap">
          <i className={`text-xs fa-solid ${open ? "fa-caret-down" : "fa-caret-right"}`}></i>
          <div className="ml-2">{title}</div>
        </div>
        <div className="ml-3 border-t w-full" />
      </div>
      <div
        className={`md:flex mt-2 transition-all duration-300 ease-in-out ${
          !open && "h-0 opacity-0"
        } `}
      >
        {content.map((item) => (
          <div key={item} className="pr-2 whitespace-nowrap ">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
