import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AboutPage from "../Pages/About/AboutPage";
import ErrorPage from "../Pages/ErrorPage";
import Guest from "../Pages/Guest/Guest";
import Home from "../Pages/Home/Home";
import NoticeBoard from "../Pages/NoticeBoard/NoticeBoard";
import Register from "../Pages/Register/Register";
import EndRegister from "../components/EndRegister";
import RegisterForm from "../components/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/noticeBoard",
        element: <NoticeBoard></NoticeBoard>,
      },
      {
        path: "/guest",
        element: <Guest></Guest>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "form",
        element: <RegisterForm></RegisterForm>,
      },
      {
        path: "endRegister",
        element: <EndRegister></EndRegister>,
      },
    ],
  },
]);
