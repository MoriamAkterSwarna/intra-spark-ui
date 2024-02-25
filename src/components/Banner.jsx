// import rotateImg from "../assets/home/output-onlinegiftools (1).gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logoImg from "../assets/home/Logo_IntraSpark1.0-01.png";
// import rotateImg from "../assets/home/output-onlinegiftools.gif";
AOS.init({
  duration: 1200,
});
const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // <div className="banner-section  h-[70vh] md:[100vh] md:mb-10 lg:h-[90vh] w-[98.5vw]">
    //   <div className="relative">
    //     <img
    //       className="absolute top-10 left-0  w-96 object-cover"
    //       src={rotateImg}
    //       alt=""
    //     />
    //     <div className="mr-8 flex justify-center items-center pt-[10%]">
    //       {/* <div className="absolute top-[30%] text-center "> */}

    //       <div
    //         data-aos="zoom-in-up"
    //         data-aos-offset="200"
    //         data-aos-delay="50"
    //         data-aos-duration="1000"
    //         data-aos-easing="ease-in-out"
    //         className="text-center bg-wrap p-10 z-20 hover:transition-colors hover:delay-200 hover:duration-1000 hover:bg-violet-900">
    //         <img className="w-96 " src={logoImg} alt="" />
    //         <h4 className="text-2xl font-bold">Deadline: </h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="banner-section h-[70vh] md:h-[100vh] lg:h-[90vh] w-full md:mb-10">
      <div className="relative">
        {/* <img
          className="absolute md:top-0 lg:top-8 left-[10%] md:left-[15%] lg:-left-6 w-96 md:w-auto object-cover"
          src={rotateImg}
          alt=""
        /> */}
        <div className="mr-8 flex justify-center items-center pt-[22%] md:pt-[18%] lg:pt-[10%] ">
          <div
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-center bg-wrap p-5 lg:p-10 z-20 hover:transition-colors hover:delay-200 hover:duration-1000 hover:bg-violet-900 w-[60%] mx-auto lg:w-1/3">
            <img className="w-96 md:w-auto" src={logoImg} alt="" />
            <h4 className="text-2xl  font-bold">Deadline: </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
