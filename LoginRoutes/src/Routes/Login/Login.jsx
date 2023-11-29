import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { iniciar } from "../../Redux/reducers";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    dispatch(iniciar({ name: "pepe", id: 1 }));
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
