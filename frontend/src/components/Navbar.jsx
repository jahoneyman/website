import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);

  const scrollToSection = (element) => {
    setOpen(false);
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = [
    {
      to: "/",
      content: (
        <span className={`${homeActive && "text-white"}`} onClick={() => scrollToSection("home")}>
          Home
        </span>
      ),
    },
    {
      to: "/",
      content: (
        <span className={`${aboutActive && "text-white"}`} onClick={() => scrollToSection("about")}>
          About
        </span>
      ),
    },
    {
      to: "/",
      content: (
        <span
          className={`${projectsActive && "text-white"}`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </span>
      ),
    },
    {
      to: "/",
      content: (
        <i
          className="fa-brands fa-github border rounded-full p-2 bg-dark-gray transition ease-in-out duration-300 hover:bg-gray-700 text-white"
          onClick={() => {
            window.open("https://github.com/jahoneyman");
          }}
        ></i>
      ),
    },
    {
      to: "/",
      content: (
        <a href="https://www.linkedin.com/in/john-honeyman/" target="_blank" rel="noreferrer">
          <i
            className="fa-brands fa-linkedin-in border rounded-full p-2 bg-dark-gray transition ease-in-out duration-300 hover:bg-gray-700 text-white"
            onClick={() => {
              window.open("https://www.linkedin.com/in/john-honeyman/");
            }}
          ></i>
        </a>
      ),
    },
    {
      to: "/",
      content: (
        <div
          className="border px-6 py-3 whitespace-nowrap w-max text-white md:ml-3 desktop:ml-6 desktop:my-0 transition ease-in-out duration-300 hover:bg-white hover:text-black"
          onClick={() => scrollToSection("connect")}
        >
          Let's Connect
        </div>
      ),
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setStickyNav(window.scrollY > 200 ? true : false);
      setHideNav(window.scrollY > 800 ? true : false);
      setHomeActive(window.scrollY < 400 ? true : false);
      setAboutActive(window.scrollY > 400 ? true : false);
      setProjectsActive(window.scrollY > 1740 ? true : false);
    });
  }, []);

  return (
    <nav
      className={`fixed z-50 justify-between items-center px-16 w-full text-white text-xl xs:text-2xl desktop:text-4xl desktop:px-36 transition-all ease-in duration-300 ${
        open ? "bg-black" : "flex"
      } ${stickyNav ? "py-4 bg-dark-gray" : "py-6"} ${hideNav && "py-0 opacity-0 cursor-default"} `}
    >
      <div className="flex justify-between w-full">
        <Link to="/" className="font-extrabold">
          JH
        </Link>
        <div onClick={() => setOpen(!open)} className="cursor-pointer md:hidden desktop:text-3xl ">
          <i className={open ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
        </div>
      </div>

      <ul
        className={`md:flex md:items-center text-lg ${
          open ? "flex flex-col h-screen mt-5 items-center" : "hidden"
        }`}
      >
        {NavLinks.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`flex items-center my-3 ml-0 hover:text-white text-transparent-white-07`}
          >
            <span className="md:ml-3 desktop:ml-6 desktop:my-0 transition ease-in-out duration-300">
              {item.content}
            </span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
