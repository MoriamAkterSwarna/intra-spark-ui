import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm.jsx";
const Footer = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="flex flex-col lg:flex-row mx-auto w-11/12">
        <ContactForm></ContactForm>

        <div className="mt-10 w-full lg:w-1/2 ml-4 lg:ml-0">
          <div>
            <h2 className="text-2xl mb-4">Our Address</h2>
            <p className="mb-6">Robotics Lab & Robotics Club</p>
          </div>
          <div className="flex  flex-col gap-6 mb-8 ">
            {" "}
            <p className="flex font-extralight ">
              <FaPhoneAlt className="border w-[40px] h-[40px] p-2 " />{" "}
              <p className=" ml-4">+8801638-567733</p>
            </p>{" "}
            <p className="flex font-extralight ">
              <MdOutlineMail className=" text-2xl border w-[40px] h-[40px] p-2 " />
              <p className=" ml-4">diurc@diu.edu.bd</p>
            </p>
            <p className="flex font-extralight ">
              <IoLocation className="border w-[40px] h-[40px] p-2 " />
              <p className="ml-4">
                Robotics Lab in Knowledge Tower, Room No- 613, <br />
                Daffodil Smart City, Ashulia <br />
              </p>
            </p>
          </div>
          <hr className="my-4 w-11/12 lg:w-2/3" />
          <div className="flex  mb-10">
            <p>Find Us On: </p>
            <div className="ml-4">
              <a
                href="https://www.facebook.com/diuroboticsclub"
                target="_blank">
                {" "}
                <RiFacebookFill className="text-white text-xl border hover:bg-white hover:text-black  w-[40px] h-[40px] rounded-sm p-2" />
              </a>
            </div>
            <div className="ml-4">
              <a
                href="https://www.linkedin.com/company/diuroboticsclub/"
                target="_blank">
                {" "}
                <AiFillLinkedin className="text-white text-xl border hover:bg-white hover:text-black  w-[40px] h-[40px] rounded-sm p-2" />
              </a>
            </div>

            <div className="ml-4">
              <a
                href="https://www.instagram.com/diu_robotics_club?igsh=dHhyaTkwZjl6OTJ3"
                target="_blank">
                {" "}
                <AiFillInstagram className="text-white text-xl border hover:bg-white hover:text-black  w-[40px] h-[40px] rounded-sm p-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xl mt-6 text-center">
        <Link to="/" className="text-orange-600">
          Intraspark 1.0
        </Link>{" "}
        &copy; 2024. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
