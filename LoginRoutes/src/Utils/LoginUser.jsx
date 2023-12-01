import { useDispatch } from "react-redux";
import { postLogin } from "./API";
import { login } from "../Redux/auth/authSlice";

const LoginUser = async (user) => {
  const dispatch = useDispatch();

  const userInfo = await postLogin(user);

  dispatch(login(userInfo));
};

export default LoginUser;
