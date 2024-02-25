import roboLogo from "../assets/home/DIURC LOGO Spread.png";

const Organize = () => {
  return (
    <>
      <div className="my-10 flex justify-center items-center flex-col">
        <h1 className=" text-4xl font-bold">Organized By</h1>
        <img className="w-80 " src={roboLogo} alt="DIU Robotics Club Logo" />

        <h2 className="text-xl mt-0">Robotics Lab & Robotics Club</h2>
      </div>
      <hr className="mx-20 bg-slate-400" />
    </>
  );
};

export default Organize;
