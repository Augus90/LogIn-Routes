import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import Dashboard from "./Routes/Dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Guard from "./Routes/Guard/Guard";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={"/Home"} />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route element={<Guard />}>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
