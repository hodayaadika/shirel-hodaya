import React, { useState, useEffect } from "react";
import EditButton from "../acts/EditButton";

function Comments({ comments }) {
  const [editedComments, setEditedComments] = useState(comments);

  // הדפסת לוג לבדוק אם יש תגובות בקבלת הקומפוננטה
  useEffect(() => {
    console.log("Received comments:", comments);
    setEditedComments(comments);
  }, [comments]);

  const saveCommentChanges = (commentId, newBody) => {
    fetch(`http://localhost:3000/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: newBody }),
    })
      .then((response) => response.json())
      .then((data) => {
        // עדכון התגובה לאחר שמירה מוצלחת
        setEditedComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === commentId ? { ...comment, body: newBody } : comment
          )
        );
        console.log("Comment updated:", data);
      })
      .catch((error) => console.error("Error updating comment:", error));
  };

  return (
    <>
      <h1>Comments</h1>
      {editedComments.length > 0 ? (
        <ul>
          {editedComments.map((comment) => (
            <li key={comment.id}>
              <p>
                <strong>{comment.name}</strong>: {comment.body}
              </p>
              <EditButton
                initialBody={comment.body}
                onSave={(newBody) => saveCommentChanges(comment.id, newBody)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments found.</p>
      )}
    </>
  );
}

export default Comments;
