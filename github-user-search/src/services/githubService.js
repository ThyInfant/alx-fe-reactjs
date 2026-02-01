import axios from "axios";
import githubApi from "./githubApi"; // still allowed, even if not used directly

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
        ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
        : "",
    },
  });

  return response.data;
};
