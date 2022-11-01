import { useState, useEffect } from "react";

const Modal = ({ closeModal, photos }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [active, setActive] = useState(false);

  var img = new Image();
  img.src = photos[0];

  const changePhotoIndex = (e) => {
    if (e.target.className.includes("left")) {
      setPhotoIndex(photoIndex <= 0 ? photos.length - 1 : photoIndex - 1);
    }
    if (e.target.className.includes("right")) {
      setPhotoIndex(photoIndex >= photos.length - 1 ? 0 : photoIndex + 1);
    }
  };

  const delayClose = () => {
    setActive(false);
    setTimeout(() => {
      closeModal(false);
    }, 400);
  };

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 10);
  }, []);

  return (
    <div
      className={`fixed p-0 m-0 top-0 left-0 w-screen h-screen bg-transparent-black-06 z-50 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={delayClose}
        className="flex items-center cursor-pointer absolute right-10 top-5 rounded-full p-1 px-2 hover:bg-transparent-white-05 "
      >
        <i className="fa-solid fa-x font-bold text-xl  "></i>
      </div>
      <div className="fixed flex items-center justify-between w-[95%]">
        <div
          onClick={changePhotoIndex}
          className="bg-transparent cursor-pointer transition-colors hover:bg-transparent-white-05 hover:text-transparent-black-09"
        >
          <i className="fa-solid fa-angle-left p-6"></i>
        </div>
        <div
          onClick={changePhotoIndex}
          className="bg-transparent cursor-pointer transition-colors hover:bg-transparent-white-05 hover:text-transparent-black-09"
        >
          <i className="fa-solid fa-angle-right p-6"></i>
        </div>
      </div>
      <div>
        <img src={photos[photoIndex]} alt="" width={img.height > img.width ? "300" : "1000"} />
      </div>
    </div>
  );
};

export default Modal;
