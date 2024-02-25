import logo from "../assets/home/Tran_Logo_IntraSpark1.0-01.png";
import image from "../assets/home/istockphoto-1339294539-612x612-removebg-preview.png";
const About = () => {
  return (
    <>
      <div className="text-gray-300">
        <img className="h-44 mx-auto" src={logo} alt="IntraSpark Logo" />

        <div className="flex justify-between ">
          <div className="w-[30vw]">
            <img src={image} alt="" />
          </div>
          <div>
            <div>
              <p>
                {" "}
                <span className="font-bold text-orange-400 mr-2">
                  About this competition:
                </span>
                As our world moves towards automation, where robotics will play
                a significant role in advancing technology, IntraSpark 1.0
                emerges as a hallmark event meticulously organized by the
                Robotics Lab and Robotics Club of Daffodil International
                University. It epitomizes a premier platform for nurturing and
                showcasing the inventive prowess of aspiring technologists.
                Through its carefully curated event structure, the competition
                offers a diverse experience, inviting participants to unveil
                pioneering projects across a broad spectrum of technological
                domains. The
                <br />
                <br />
                (i) &quot;Project Showcase &quot; segment beckons pioneers in
                fields including Big Data & IoT, Robotics & Automation,
                Artificial Intelligence, and beyond. Additionally, specialized
                arenas such as the
                <br />
                (ii) Line Follower Robot,
                <br /> (iii) Soccer Bot, <br />
                (iv) Arduino Programming Hackathon, and <br /> (v) Truss
                Challenge provide platforms for participants to showcase
                expertise and creativity. <br /> Together, IntraSpark 1.0
                fosters a culture of collaboration, innovation, and
                technological exploration, empowering participants to push
                boundaries and pioneer solutions that shape the future of
                technology.
              </p>
            </div>
            <div className="mt-6">
              <p>
                <span className="font-bold text-orange-400 mr-2">
                  Outcome:{" "}
                </span>
                At its core, IntraSpark 1.0 is a platform for students to
                transcend boundaries and showcase their ingenuity. By unleashing
                their innovative projects and ideas, participants elevate
                themselves as pioneers of tomorrow&apos;s technology. The
                competition serves as a crucible for honing skills, fostering
                creativity, and nurturing leadership qualities. As students vie
                for top honors, they not only gain recognition but also arm
                themselves with a competitive edge in the workforce. IntraSpark
                1.0 propels participants towards a future where they lead the
                charge in shaping the Fourth Industrial Revolution.
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
                you&apos;re studying Engineering, Computer Science, Business, or
                any other discipline, if you harbor a passion for technology and
                a drive to innovate, IntraSpark 1.0 welcomes you with open arms.
                This is a rallying cry for students to break free from the
                confines of their classrooms and seize the opportunity to leave
                an indelible mark on the world of robotics and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-20 bg-slate-400 mt-10" />
    </>
  );
};

export default About;
