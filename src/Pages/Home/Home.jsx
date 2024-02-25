import About from "../../components/About";
import Banner from "../../components/Banner";
import Organize from "../../components/Organize";
import Segments from "../../components/Segments";
import Sponsors from "../../components/Sponsors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Segments></Segments>
      <Sponsors></Sponsors>
      <Organize></Organize>
    </div>
  );
};

export default Home;
