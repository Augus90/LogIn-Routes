import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../Redux/store";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.arranca);

  const handleHome = (e) => {
    navigate("/home");
  };
  const handleDashboard = (e) => {
    navigate("/dashboard");
  };
  // const  = (second) => { third }

  return (
    <div>
      <button onClick={handleHome}>Home</button>
      <button onClick={handleDashboard}>Dashboard</button>
      <button>Logout</button>
      {userName && console.log("User", userName)}
      {userName && <h2>{`Hello ${userName}`}</h2>}
      <h1>Home</h1>
    </div>
  );
};

export default Home;
