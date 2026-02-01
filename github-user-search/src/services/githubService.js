import githubApi from "./githubApi";
import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};
