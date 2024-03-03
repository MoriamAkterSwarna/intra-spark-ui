import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/home/Tran_Logo_IntraSpark1.0-01.png";

import { MyContext } from "../Layout/MainLayout";
import Button from "./Button";
// import image from "../assets/home/istockphoto-1339294539-612x612-removebg-preview.png";
const About = () => {
  const { isDeadlineOpen } = useContext(MyContext);
  console.log(isDeadlineOpen);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className="text-gray-300 ">
        <div className="text-center">
          {isDeadlineOpen ? (
            <span className="text-2xl font-bold text-center mt-6">
              Registration is Ongoing...
            </span>
          ) : (
            <span className="text-2xl font-bold text-center">
              Registration has ended!!
            </span>
          )}
        </div>
        <div className="flex justify-center items-center mt-6">
          {/* <div className="w-[30vw]"><img src={image} alt="" /></div> */}
          <div className="w-11/12 mx-auto text-justify">
            <div className="">
              <h2 className="font-bold text-orange-400 mr-2 text-center mb-6 text-2xl">
                About this competition:
              </h2>
              <p>
                {" "}
                As our world moves towards automation, where robotics will play
                a significant role in advancing technology, IntraSpark 1.0
                emerges as a hallmark event meticulously organized by the
                Robotics Lab and Robotics Club of Daffodil International
                University. It epitomizes a premier platform for nurturing and
                showcasing the inventive prowess of aspiring technologists.
                Through its carefully curated event structure, the competition
                offers a diverse experience, inviting participants to unveil
                pioneering projects across a broad spectrum of technological
                domains. Our segments are:
              </p>
            </div>
            {isExpanded && (
              <div>
                <div>
                  <br />
                  <br />
                  (i) &quot;Project Showcase &quot; segment beckons pioneers in
                  fields including Big Data & IoT, Robotics & Automation,
                  Artificial Intelligence, and beyond. Additionally, specialized
                  arenas such as the
                  <br />
                  (ii) Line Follower Robot,
                  <br /> (iii) Soccer Bot, <br />
                  {/* (iv) Arduino Programming Hackathon, and <br />  */}
                  (v) Truss Challenge provide platforms for participants to
                  showcase expertise and creativity. <br /> Together, IntraSpark
                  1.0 fosters a culture of collaboration, innovation, and
                  technological exploration, empowering participants to push
                  boundaries and pioneer solutions that shape the future of
                  technology.
                </div>
                <div className="mt-6">
                  <p>
                    <span className="font-bold text-orange-400 mr-2">
                      Outcome:{" "}
                    </span>
                    At its core, IntraSpark 1.0 is a platform for students to
                    transcend boundaries and showcase their ingenuity. By
                    unleashing their innovative projects and ideas, participants
                    elevate themselves as pioneers of tomorrow&apos;s
                    technology. The competition serves as a crucible for honing
                    skills, fostering creativity, and nurturing leadership
                    qualities. As students vie for top honors, they not only
                    gain recognition but also arm themselves with a competitive
                    edge in the workforce. IntraSpark 1.0 propels participants
                    towards a future where they lead the charge in shaping the
                    Fourth Industrial Revolution.
                  </p>
                </div>

                <div className="mt-6">
                  <span className="font-bold text-orange-400 mr-2">
                    Who can join in this Competition?
                  </span>
                  <p>
                    This competition beckons to the bright minds of Daffodil
                    International University, inviting students from every
                    department to embark on a journey of innovation. Whether
                    you&apos;re studying Engineering, Computer Science,
                    Business, or any other discipline, if you harbor a passion
                    for technology and a drive to innovate, IntraSpark 1.0
                    welcomes you with open arms. This is a rallying cry for
                    students to break free from the confines of their classrooms
                    and seize the opportunity to leave an indelible mark on the
                    world of robotics and automation.
                  </p>
                </div>
              </div>
            )}
            <div className="flex justify-center items-center">
              <button
                className="bg-orange-500 px-3 py-2 rounded-xl text-black mx-auto my-4"
                onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        </div>

        <img className="h-36 mx-auto" src={logo} alt="IntraSpark Logo" />
        <div className="flex justify-center items-center">
          <Link to="/register">
            <Button></Button>
          </Link>
        </div>
      </div>
      <hr className="mx-20 bg-slate-400 mt-10" />
    </>
  );
};

export default About;
