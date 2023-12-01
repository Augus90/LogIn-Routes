import axios from "axios";

const baseUrl = "http://localhost:3001";

export const postLogin = async (user) => {
  const response = await axios
    .post(`${baseUrl}/login`, user)
    .then((response) => response)
    .catch((err) => console.log("Error", err));

  return response.data && response.data;
};
