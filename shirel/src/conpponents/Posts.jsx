import React, { useState, useEffect } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [showPost, setShowPost] = useState(0);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = currentUser ? currentUser.id : null;

  const handleClick = (id) => {
    setShowPost(id);
  };

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3000/posts?userId=${userId}`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching posts:", error));
    }
  }, [userId]);

  console.log("showPost: ", showPost);
  return (
    <>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => (
            <li key={post.id}>
              {/* <h3>{post.title}</h3> */}
              <button onClick={() => handleClick(post.id)}>{post.title}</button>
              {showPost === post.id && <Post post={post.body} />}
            </li>
          ))}
        </ol>
      ) : (
        <p>No posts found.</p>
      )}
    </>
  );
}

export default Posts;
