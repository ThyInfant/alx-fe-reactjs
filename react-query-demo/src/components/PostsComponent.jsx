import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <h2>Loading posts...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h1>React Query Posts (TanStack)</h1>

      <button onClick={() => refetch()}>Refetch Posts</button>

      {isFetching && <p>Updating...</p>}

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
