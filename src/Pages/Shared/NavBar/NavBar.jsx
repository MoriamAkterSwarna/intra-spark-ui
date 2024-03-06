import { useState } from "react";
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/home/Tran_Logo_IntraSpark1.0-01.png";
import Button from "../../../components/Button";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // <div className="navbar px-18 md:px-20 flex flex-col md:flex-row items-center lg:justify-between">
    //   <div className="mb-4">
    //     <Link to="/">
    //       <img className="w-96 lg:w-48" src={logo} alt="IntraSpark Logo" />
    //     </Link>
    //   </div>

    //   <div className="mb-4 md:mb-1">
    //     <Link to="/register" className="w-full">
    //       <Button></Button>
    //     </Link>
    //   </div>
    // </div>

    <>
      <div className="flex fixed-nav flex-col md:flex-row fixed top-0 left-0 w-full z-50 mr-0 justify-between items-center mt-0 rounded   md:px-24 lg:px-6 lg:py-2 border-b-4 border-b-emerald-600">
        <div className="flex w-full justify-around">
          {" "}
          <div className="mb-4 navbar-start hidden md:flex">
            {" "}
            <Link to="/">
              <img className="lg:w-52" src={logo} alt="IntraSpark Logo" />{" "}
            </Link>{" "}
          </div>
          {/* nav item */}
          <ul className="lg:flex space-x-8 items-center font-bold hidden navbar-center">
            <li>
              <NavLink
                to="/"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/noticeBoard"
                title="Notice Board"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Notice Board
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/guest"
                title="Guest"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Guest
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                title="About"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-end font-bold  items-center hidden md:flex">
            <div className="mb-4 md:mb-1">
              {" "}
              <Link to="/register" className="w-full">
                <Button></Button>{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* Mobile nav menu  */}
        <div className="lg:hidden ">
          <div className="flex  justify-between items-center mx-6">
            <button
              className=""
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}>
              <HiBars3CenterLeft className="w-8 h-8 font-bold text-white" />
            </button>

            <div>
              <div className="mb-4 pt-3 flex">
                {" "}
                <Link to="/">
                  <img className="w-96" src={logo} alt="IntraSpark Logo" />{" "}
                </Link>{" "}
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <div className="p-5 bg-gray-900 border border-b-4 border-b-emerald-600 border-x-0 border-t-0 rounded-b-xl shadow-sm mx-auto">
                {/* Logo & Button section */}
                <div className="flex  justify-between mb-3">
                  {" "}
                  <div className="">
                    {" "}
                    <Link to="/">
                      {" "}
                      <img
                        className="w-96 lg:w-48"
                        src={logo}
                        alt="IntraSpark Logo"
                      />{" "}
                    </Link>{" "}
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}>
                      <HiOutlineXMark className="w-8 h-8 font-bold text-white " />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-2 mx-auto flex flex-col justify-center items-center">
                    <li>
                      <NavLink
                        to="/"
                        title="Home"
                        className={({ isActive }) =>
                          isActive ? "active" : "default text-black"
                        }>
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/noticeBoard"
                        title="Notice Board"
                        className={({ isActive }) =>
                          isActive ? "active" : "default text-black"
                        }>
                        Notice Board
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/guest"
                        title="Guest"
                        className={({ isActive }) =>
                          isActive ? "active" : "default text-black"
                        }>
                        Guest
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        title="About"
                        className={({ isActive }) =>
                          isActive ? "active" : "default text-black"
                        }>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <div className="my-4 md:mb-1">
                        {" "}
                        <Link to="/register" className="w-full">
                          <Button></Button>{" "}
                        </Link>{" "}
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
