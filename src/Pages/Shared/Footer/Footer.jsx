import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="flex justify-center mb-8 text-xl">
        <a href="" target="_blank" className="mr-4">
          {" "}
          <FaFacebook />
        </a>
        <a href="" target="_blank" className="mr-4">
          {" "}
          <FaPhoneAlt />
        </a>
        <a href="" target="_blank" className="mr-4">
          {" "}
          <MdOutlineMail className="text-2xl font-bold" />
        </a>
      </div>
      <p className="text-xl">
        <Link to="/" className="text-orange-600">
          Intraspark
        </Link>{" "}
        &copy; 2024. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
