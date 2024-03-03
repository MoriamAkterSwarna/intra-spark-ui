import roboLogo from "../assets/home/DIURC LOGO Spread.png";

const Organize = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="my-10 flex justify-center items-center flex-col ">
        <h1 className=" text-4xl font-bold">Organized By</h1>
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-80 "
          src={roboLogo}
          alt="DIU Robotics Club Logo"
        />

        <h2 className="text-xl mt-0 ml-2"> DIU Robotics Club</h2>
        <h2 className="text-xl  ml-2 mt-4">
          <span className="text-orange-500"> Supported By:</span> DIU Robotics
          Lab{" "}
        </h2>
      </div>
      <hr className="mx-20 bg-slate-400" />
    </>
  );
};

export default Organize;
