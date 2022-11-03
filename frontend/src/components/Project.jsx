import { useState } from "react";
import { Modal } from ".";

import "../styles/project.css";

const Project = ({ content }) => {
  const [showCaption, setShowCaption] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const bgImg = {
    backgroundImage: "url(" + content.thumb + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div
        className={`bg-dark-gray w-full sm:w-2/3 md:w-1/3 desktop:w-1/4 h-60 rounded-2xl mx-2 mb-3 flex-grow flex flex-col justify-center items-center cursor-pointer hover-transition`}
        style={bgImg}
        onMouseOver={() => setShowCaption(true)}
        onMouseLeave={() => !modalActive && setShowCaption(false)}
        onClick={() => setModalActive(true)}
      >
        <div
          className={`w-max h-max text-center transition-opacity ease-in-out duration-500 ${
            showCaption ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="font-bold text-xl">{content.projectName}</div>
          <div className="flex flex-wrap w-auto">
            {content.techUsed.map((item, index) => (
              <div key={index} id={index} className="mx-1 flex-grow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalActive && <Modal closeModal={setModalActive} photos={content.src} />}
    </>
  );
};

export default Project;
