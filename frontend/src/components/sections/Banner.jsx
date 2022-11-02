import "../../styles/banner.css";

const Banner = () => {
  const scrollToSection = (element) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="radial text-white flex items-center px-16 desktop:px-36 pb-28">
      <div className="w-full sm:w-2/3">
        <div className="welcome border text-lg font-semibold text-center w-max px-4 py-2">
          Welcome to my Portfolio
        </div>
        <div className="my-3 text-3xl desktop:text-5xl font-bold">
          Hello! I'm John Honeyman, an aspiring Web Developer.
        </div>
        <div className="text-gray-300 leading-7">
          I am a fresh graduate of the University of the Philippines - Visayas. I aim to take
          businesses to the next level with a website that meets the expectations of their customers
          and even more. I aim to make businesses reach more potential customers with ease.
        </div>
        <div className="flex mt-9 font-semibold text-xl tracking-wide connect-parent w-max">
          <div
            className="w-max relative connect-link cursor-pointer"
            onClick={() => scrollToSection("connect")}
          >
            Let's Connect
          </div>
          <div className="ml-3 text-sm cursor-pointer" onClick={() => scrollToSection("connect")}>
            <i className="fa-solid fa-right-long border rounded-full p-2 transition ease-in-out duration-300"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
