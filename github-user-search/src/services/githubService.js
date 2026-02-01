import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchAdvancedUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : "",
      },
    },
  );

  return response.data; // contains items[] and total_count
};
