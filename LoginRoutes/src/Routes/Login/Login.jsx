import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    navigate("/home");
  };
  return (
    <>
      <h1>Welcome Stranger</h1>
      <button onClick={handleLogin}>LogIn</button>
    </>
  );
};

export default Login;
