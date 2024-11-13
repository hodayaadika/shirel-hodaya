import React, { useState } from "react";

function posts() {
  const [post , setPost] = useState()
  const [id , setId] = useState()
  const [title , setTitle] = useState()


  fetch(`http://localhost:3000/posts?userId=`)
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log('id: ', id);
  console.log('title: ', title);
  console.log('post: ', post);
  
  // fetch(`http://localhost:3000/posts?id=${id}&&title=${title}&&body=${post}`)
  // .then((response) => response.json())
  // .then((data) => console.log(data));
  // console.log('id: ', id);
  // console.log('title: ', title);
  // console.log('post: ', post);
  // // .then()
  return (
    <>
      <h1>posts</h1>
    </>
  );
}

export default posts;