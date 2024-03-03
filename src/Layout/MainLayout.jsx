import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

/* eslint-disable react/jsx-no-undef */
export const MyContext = createContext();
const MainLayout = () => {
  // const deadline = "15 Jan - 20 Feb";

  const deadline = "15 Jan - 20 Mar";
  const year = new Date().getFullYear(false); // get the current year

  const endDateString = deadline.split("-")[1].trim() + " " + year;
  const endDate = new Date(endDateString);

  const currentDate = new Date();

  const isDeadlineOpen = currentDate <= endDate;

  console.log(isDeadlineOpen);
  return (
    <MyContext.Provider value={{ isDeadlineOpen, deadline }}>
      <div className="bg-gray-950 text-white">
        <NavBar></NavBar>

        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </MyContext.Provider>
  );
};

export default MainLayout;
