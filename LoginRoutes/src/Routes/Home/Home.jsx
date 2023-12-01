import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/authSlice";
// import store from "../../Redux/store";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleHome = (e) => {
    navigate("/home");
  };
  const handleDashboard = (e) => {
    navigate("/dashboard");
  };

  const handleLoguot = (e) => {
    dispatch(logout());
    navigate("/Login");
  };

  return (
    <div>
      <button onClick={handleHome}>Home</button>
      <button onClick={handleDashboard}>Dashboard</button>
      <button onClick={handleLoguot}>Logout</button>
      {user && console.log("User", user.name)}
      {user && <h2>{`Hello ${user.name}`}</h2>}
      <h1>Home</h1>
    </div>
  );
};

export default Home;
