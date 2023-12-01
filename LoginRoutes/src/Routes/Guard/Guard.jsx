import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Guard = ({ children }) => {
  const userInfo = useSelector((state) => state.auth.user);

  return userInfo ? <Outlet /> : <Navigate to={"/Login"} />;
};

export default Guard;
