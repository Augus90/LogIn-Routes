import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginUser from "../../Utils/LoginUser";
import { postLogin } from "../../Utils/API";
import { login } from "../../Redux/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const userState = useSelector((state) => state.auth.user);
  console.log("user state", userState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = await postLogin(userForm);

    console.log("User Info", userInfo);

    dispatch(
      login({
        email: userInfo.email,
        name: userInfo.name,
        id: userInfo.id,
      }),
    );

    navigate("/");
  };

  return (
    <>
      <h1>Welcome Stranger</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 p-4">
        <input
          type="email"
          name="email"
          id="imail"
          placeholder="Email"
          className="p-2"
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="p-2"
          onChange={(e) =>
            setUserForm({ ...userForm, password: e.target.value })
          }
        />
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};

export default Login;
