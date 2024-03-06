import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  return (
    <Navigate to="/adminLogin" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoutes;
