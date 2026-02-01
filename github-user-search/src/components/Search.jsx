import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";
import UserCard from "./UserCard";

function Search() {
  const [form, setForm] = useState({
    username: "",
    location: "",
    minRepos: "",
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const urlfile = "html_url";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e, newPage = 1) => {
    e?.preventDefault();

    if (!form.username && !form.location && !form.minRepos) {
      setError(true);
      return;
    }

    if (newPage === 1) setUsers([]);

    setLoading(true);
    setError(false);

    try {
      const data = await fetchAdvancedUsers({ ...form, page: newPage });

      if (!data.items || data.items.length === 0) {
        setError(true);
        setHasMore(false);
      } else {
        if (newPage === 1) {
          setUsers(data.items);
        } else {
          setUsers((prev) => [...prev, ...data.items]);
        }
        setHasMore(data.items.length === 10);
        setPage(newPage);
      }
    } catch {
      setError(true);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      {/* 🔍 Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Advanced GitHub User Search
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Ethiopia)"
          value={form.location}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="minRepos"
          placeholder="Minimum repositories"
          value={form.minRepos}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* ⏳ Loading */}
      {loading && (
        <p className="mt-4 text-center text-gray-700 dark:text-gray-200">
          Loading...
        </p>
      )}

      {/* ❌ Error */}
      {error && (
        <p className="mt-4 text-center text-red-500">
          Looks like we cant find the user
        </p>
      )}

      {/* 👤 Results */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} username={user.login} />
        ))}
      </div>

      {/* ➕ Load More */}
      {hasMore && !loading && (
        <button
          onClick={(e) => handleSearch(e, page + 1)}
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
