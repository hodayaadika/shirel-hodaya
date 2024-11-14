import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import EditButton from "../acts/EditButton";

function Post({ postId, postBody }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [editedPostBody, setEditedPostBody] = useState(postBody);

  const fetchComments = () => {
    fetch(`http://localhost:3000/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data); 
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments, postId]); 

  const savePostChanges = (newBody) => {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: newBody }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEditedPostBody(newBody);
        console.log("Post updated:", data);
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  return (
    <>
      <p>{editedPostBody}</p>
      <EditButton initialValue={editedPostBody} onSave={savePostChanges} />

      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <Comments comments={comments} />}
    </>
  );
}

export default Post;
