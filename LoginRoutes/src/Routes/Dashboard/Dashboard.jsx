import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
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
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
