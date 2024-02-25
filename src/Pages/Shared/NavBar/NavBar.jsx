import { Link } from "react-router-dom";
import logo from "../../../assets/home/Tran_Logo_IntraSpark1.0-01.png";
import Button from "../../../components/Button";
const NavBar = () => {
  return (
    <div className="navbar px-20 flex flex-col md:flex-row justify-center lg:justify-between">
      <div className="mb-4">
        <Link to="/">
          <img className="w-full lg:w-48" src={logo} alt="IntraSpark Logo" />
        </Link>
      </div>

      <div className=" mb-4 md:mb-1">
        <Link>
          <Button></Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
