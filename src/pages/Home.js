import React, { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="custom-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center mt-5">{error}</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Posts</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li
            key={post.id}
            className={`list-group-item ${post.title.length > 30 ? "highlight-title" : ""}`}
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
