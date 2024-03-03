import { useContext } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { MyContext } from "../../Layout/MainLayout";
import segment3 from "../../assets/segments/2ea2431e-b3fd-4669-967c-d8d8e4f830d5.png";
import segment5 from "../../assets/segments/b758c326-a5cd-41d9-9b6b-d0a3c12e600f.png";
import segment2 from "../../assets/segments/boy-line-following-robot-flat-260nw-1979495918.png";
// import segment4 from "../../assets/segments/download.png";
import segment1 from "../../assets/segments/robot-with-laptop-words-control-it_825081-77.png";

const Register = () => {
  const { isDeadlineOpen, deadline } = useContext(MyContext);
  console.log(deadline);
  return (
    <div className="my-10 pt-[27%] md:pt-[18%] lg:pt-[10%] ">
      <ScrollRestoration />
      <div className="w-9/12 mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-500">
          Register Here
        </h1>
        <p>
          Unlock your potential by registering now and securing your spot in one
          of our exciting segments, including the Project Showcase, Line
          Following Robot (LFR), Soccer Bot, Arduino Programming Hackathon, or
          Truss Challenge. Don&apos;t miss out on the opportunity to be part of
          a vibrant community of like-minded individuals pushing the boundaries
          of technology and engineering.
        </p>
        <p className="my-6">
          <span className="text-xl font-bold ">Registration Fee Details:</span>{" "}
        </p>
      </div>

      <div className="w-9/12 mx-auto segment">
        <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=" border-2 border-emerald-700 my-6 p-6 bg-wrap text-center">
          <img
            className="w-full lg:w-[150px] h-[150px] object-cover bg-cover mx-auto mb-3"
            src={segment1}
            alt="Project Showcase"
          />
          <h3 className="text-xl my-4 text-orange-500">Project Showcase</h3>
          <p className="text-gray-400 ">
            Embark on a journey of innovation in our &quot;Project
            Showcase&quot; segment, spanning a diverse array of domains
            including Big Data & IoT, Robotics & Automation, Artificial
            Intelligence (ML & DL), Web & Mobile App Development, Cybersecurity,
            Game Development, Blockchain, Idea Speech, Biotechnology, Cloud
            Computing, Deep Fake Detection, Agriculture, Environmental
            Sustainability, Civil & Architecture Projects, and Healthcare
            Solutions. This is your chance to unleash your creativity, showcase
            your ideas, and contribute to the advancement of technology. Join us
            at IntraSpark 1.0 as we explore the limitless possibilities and turn
            visions into reality!
          </p>
          <div className="mt-8 ">
            <Link to={isDeadlineOpen ? "/form" : "/endRegister"}>
              <button className="btn bg-emerald-800 border-none rounded-full text-white hover:bg-emerald-800 mr-10">
                Register
              </button>
            </Link>

            <a href="" target="_blank">
              <button className="btn bg-orange-500 hover:bg-orange-700 border-none rounded-full hover:text-white">
                RuleBook
              </button>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=" border-2 border-emerald-700 my-6 p-6 bg-wrap text-center">
          <img
            className="w-full lg:w-[150px] h-[150px] object-cover bg-cover mx-auto mb-3"
            src={segment2}
            alt="Line Following Robot (LFR )"
          />
          <h3 className="text-xl my-4 text-orange-500">
            Line Following Robot (LFR )
          </h3>

          <p className="text-gray-400 ">
            Prepare for an adrenaline-fueled adventure in our Line Following
            Robot (LFR) segment! This isn&apos;t just about robots—it&apos;s a
            thrilling display of innovation and precision. Design and program
            your robots to navigate the course with speed and accuracy. Get
            ready to witness the future of robotics unfold before your eyes. The
            LFR Race is more than just a competition; it&apos;s a gateway to the
            exciting possibilities of tomorrow. Let the excitement begin!
          </p>
          <div className="mt-8 ">
            <Link to={isDeadlineOpen ? "/form" : "/endRegister"}>
              <button className="btn bg-emerald-800 border-none rounded-full text-white hover:bg-emerald-800 mr-10">
                Register
              </button>
            </Link>
            <a href="" target="_blank">
              <button className="btn bg-orange-500 hover:bg-orange-700 border-none rounded-full hover:text-white">
                RuleBook
              </button>
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=" border-2 border-emerald-700 my-6 p-6 bg-wrap text-center">
          <img
            className="w-full lg:w-[150px] h-[150px] object-cover bg-cover mx-auto mb-3"
            src={segment3}
            alt="Soccer Boot"
          />
          <h3 className="text-xl my-4 text-orange-500">Soccer Boot</h3>
          <p className="text-gray-400 ">
            Get set for an electrifying clash of technology and athleticism with
            Soccer Boot! These dynamic bots are geared up for remote-controlled
            soccer matches like never before. Design, program, and watch as your
            bots showcase their agility and tactical prowess on the field.
            It&apos;s not just a game—it&apos;s a thrilling showdown of
            innovation and strategy. Get ready to kick off and make your mark in
            the world of Soccer Boot!
          </p>
          <div className="mt-8 ">
            <Link to={isDeadlineOpen ? "/form" : "/endRegister"}>
              <button className="btn bg-emerald-800 border-none rounded-full text-white hover:bg-emerald-800 mr-10">
                Register
              </button>
            </Link>
            <a href="" target="_blank">
              <button className="btn bg-orange-500 hover:bg-orange-700 border-none rounded-full hover:text-white">
                RuleBook
              </button>
            </a>
          </div>
        </div>
        {/* <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=" border-2 border-emerald-700 my-6 p-6 bg-wrap text-center">
          <img
            className="w-full lg:w-[150px] h-[150px] object-cover bg-cover mx-auto mb-3"
            src={segment4}
            alt="Arduino Programming Hackathon"
          />
          <h3 className="text-xl my-4 text-orange-500">
            Arduino Programming Hackathon
          </h3>
          <p className="text-gray-400 ">
            Prepare to dive deep into the realm of coding creativity with our
            Arduino Programming Hackathon! This isn&apos;t your ordinary coding
            competition—it&apos;s a high-stakes battle of wits and ingenuity.
            Roll up your sleeves, write your lines of code, and watch as your
            Arduino projects come to life. It&apos;s not just about programming;
            it&apos;s about pushing the boundaries of innovation and
            problem-solving. Get ready to code your way to victory in the
            Arduino Programming Hackathon!
          </p>
          <div className="mt-8 ">
            <Link to={isDeadlineOpen ? "/form" : "/endRegister"}>
              <button className="btn bg-emerald-800 border-none rounded-full text-white hover:bg-emerald-800 mr-10">
                Register
              </button>
            </Link>
            <a href="" target="_blank">
              <button className="btn bg-orange-500 hover:bg-orange-700 border-none rounded-full hover:text-white">
                RuleBook
              </button>
            </a>
          </div>
        </div> */}
        <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="segment border-2 border-emerald-700 my-6 p-6 bg-wrap text-center">
          <img
            className="w-full lg:w-[150px] h-[150px] object-cover bg-cover mx-auto mb-3"
            src={segment5}
            alt="Truss Challenge"
          />
          <h3 className="text-xl my-4 text-orange-500">Truss Challenge</h3>
          <p className="text-gray-400 ">
            Gear up for a structural showdown like no other in the Truss
            Challenge! It&apos;s time to put your engineering skills to the test
            as you design and construct sturdy truss structures. From
            load-bearing capabilities to innovative designs, every detail counts
            in this ultimate engineering battle. Get ready to showcase your
            creativity, precision, and ingenuity as you compete to build the
            strongest truss. The Truss Challenge isn&apos;t just about
            building—it&apos;s about pushing the limits of structural
            engineering and leaving your mark in the world of architecture. Are
            you ready to rise to the challenge?
          </p>
          <div className="mt-8 ">
            <Link to={isDeadlineOpen ? "/form" : "/endRegister"}>
              <button className="btn bg-emerald-800 border-none rounded-full text-white hover:bg-emerald-800 mr-10">
                Register
              </button>
            </Link>
            <a href="" target="_blank">
              <button className="btn bg-orange-500 hover:bg-orange-700 border-none rounded-full hover:text-white">
                RuleBook
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
