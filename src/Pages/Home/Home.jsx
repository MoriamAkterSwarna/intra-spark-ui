import Marquee, { pauseOnHover, pauseOnClick, speed } from "react-fast-marquee";
import { ScrollRestoration } from "react-router-dom";
import About from "../../components/About";
import Banner from "../../components/Banner";
import Blogs from "../../components/Blogs";
import Faq from "../../components/Faq";
import Organize from "../../components/Organize";
import Segments from "../../components/Segments";
import Sponsors from "../../components/Sponsors";

const Home = () => {
  return (
    <div>
      <ScrollRestoration />
      <Banner></Banner>
      <About></About>
      <Segments></Segments>
      <Sponsors></Sponsors>
      <Organize></Organize>
      <Faq></Faq>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl mb-6 mt-10 text-center">
          Blogs
        </h1>
        <Marquee
          pauseOnHover={true} // Enable pause on hover
          pauseOnClick={true} // Enable pause on click
          speed={50} // Set speed (default is 20)
        >
          <Blogs></Blogs>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
