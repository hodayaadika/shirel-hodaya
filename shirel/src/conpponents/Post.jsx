import React, { useState, useEffect } from "react";
import Comments from "./Comments";

function Post({ postId, postBody }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const fetchComments = () => {
    fetch(`http://localhost:3000/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  };

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments]);

  return (
    <>
      <p>{postBody}</p>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <Comments comments={comments} />}
    </>
  );
}

export default Post;
