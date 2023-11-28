import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import Dashboard from "./Routes/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Login" element={<h1>Welcome Stranger</h1>}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
