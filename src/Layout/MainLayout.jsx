import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

/* eslint-disable react/jsx-no-undef */
const MainLayout = () => {
  return (
    <div className="bg-gray-900 text-white">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
