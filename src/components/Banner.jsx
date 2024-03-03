// import rotateImg from "../assets/home/output-onlinegiftools (1).gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Layout/MainLayout";
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
  const { isDeadlineOpen, deadline } = useContext(MyContext);
  console.log(isDeadlineOpen);

  const [countDown, setCountDown] = useState("");

  const deadlines = deadline;
  useEffect(() => {
    const interval = setInterval(() => {
      const year = new Date().getFullYear(); // get the current year

      // Extract the end date from the string and convert it to a Date object
      const endDateString = deadlines.split("-")[1].trim() + " " + year;
      const endDate = new Date(endDateString);

      const currentDate = new Date();

      // Calculate the time remaining in milliseconds
      const timeRemaining = endDate.getTime() - currentDate.getTime();
      let formattedCountdown;
      if (isDeadlineOpen && timeRemaining > 0) {
        // Convert milliseconds to days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown in the desired format (adjust as needed)
        formattedCountdown = `${days} : ${hours
          .toString()
          .padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
        console.log("Countdown:", formattedCountdown);
        setCountDown(formattedCountdown);
      } else {
        clearInterval(interval);
        console.log("Deadline has passed.");
        setCountDown("00 : 00 : 00 : 00");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [deadlines, isDeadlineOpen]); // Only re-run the effect if deadlines or isDeadlineOpen changes

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
    //         className="text-center bg-wrap p-10 z-20 hover:transition-colors hover:delay-200 hover:duration-1000 hover:bg-emerald-900">
    //         <img className="w-96 " src={logoImg} alt="" />
    //         <h4 className="text-2xl font-bold">Deadline: </h4>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <MyContext.Provider value={{ isDeadlineOpen, deadLines, setDeadLines }}>
    <div className="banner-section h-[90vh] md:h-[100vh] lg:h-[90vh] w-full md:mb-10 pt-[10%] md:pt-[7%] lg:pt-5">
      <div className="relative">
        {/* <img
          className="absolute md:top-0 lg:top-8 left-[10%] md:left-[15%] lg:-left-6 w-96 md:w-auto object-cover"
          src={rotateImg}
          alt=""
        /> */}
        <div className=" flex justify-center items-center pt-36 md:pt-[10%] lg:pt-[10%] ">
          <div
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-center bg-wrap p-7 md:p-10 z-20 hover:transition-colors hover:delay-200 hover:duration-1000 hover:bg-emerald-700 w-[90%] mx-8 lg:mx-auto md:w-9/12 lg:w-1/3">
            <img className="w-96 md:w-auto" src={logoImg} alt="" />
            <h4 className="text-xs md:text-2xl  font-bold">
              Deadline: <span>{deadline} </span>{" "}
            </h4>
            <h4 className="text-xs md:text-3xl mt-3 font-bold">{countDown}</h4>
            {/* <h4 className="text-xs md:text-2xl">DD : HH : mm : ss</h4> */}
          </div>
        </div>
      </div>
    </div>
    // </MyContext.Provider>
  );
};

export default Banner;
