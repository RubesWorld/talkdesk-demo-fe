import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("Bearer");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: " https://api.talkdeskapp.com/",
  });
};
