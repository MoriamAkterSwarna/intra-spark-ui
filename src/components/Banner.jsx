import rotateImg from "../assets/home/output-onlinegiftools.gif";

import logoImg from "../assets/home/Logo_IntraSpark1.0-01.png";
const Banner = () => {
  return (
    <div className="banner-section h-[70vh] md:h-[90vh] w-[98.5vw]">
      <div className="flex justify-center items-center z-10 relative">
        <img className=" relative mt-10" src={rotateImg} alt="" />

        <div className="absolute top-[30%] font-merri text-center">
          <img className="w-96" src={logoImg} alt="" />
          <h4 className="text-2xl font-bold">Deadline: </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
