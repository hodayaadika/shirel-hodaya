import comments from "./Comments";

function Post(props) {
  return (
    <>
      {/* <p>{post.body}</p> */}
      <p>{props.post}</p>
    </>
  );
}

export default Post;
