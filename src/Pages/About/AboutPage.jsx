import { ScrollRestoration } from "react-router-dom";
import About from "../../components/About";
import Faq from "../../components/Faq";

const AboutPage = () => {
  return (
    <div className="pt-[27%] md:pt-[20%] lg:pt-[12%] ">
      <ScrollRestoration />
      <About></About>
      <Faq></Faq>
    </div>
  );
};

export default AboutPage;
