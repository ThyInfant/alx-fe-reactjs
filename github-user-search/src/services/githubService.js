import githubApi from "./githubApi";

export const fetchUserData = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};
