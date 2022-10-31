import { About, Banner, Connect, Projects } from "../components";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="connect">
        <Connect />
      </div>
    </div>
  );
};

export default Home;
