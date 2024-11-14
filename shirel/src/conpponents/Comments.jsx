import React from "react";

function Comments({ comments }) {
  return (
    <>
      <h1>Comments</h1>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>
                <strong>{comment.name}</strong>: {comment.body}
              </p>
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
