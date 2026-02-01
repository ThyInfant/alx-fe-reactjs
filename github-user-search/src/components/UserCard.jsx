import { useEffect, useState } from "react";
import axios from "axios";

function UserCard({ username }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
            ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
            : "",
        },
      });
      setDetails(res.data);
    };

    fetchDetails();
  }, [username]);

  if (!details) return null;

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
      <img
        src={details.avatar_url}
        alt={details.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold">
          {details.name || details.login}
        </h3>
        <p className="text-sm text-gray-600">
          📍 {details.location || "Location not available"}
        </p>
        <p className="text-sm text-gray-600">
          📦 Public repos: {details.public_repos}
        </p>
        <a
          href={details.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserCard;
