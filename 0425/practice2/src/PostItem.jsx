import React from "react";

const PostItem = ({ posts }) => {
  console.log(posts.data);
  return (
    <>
      {posts.map((post, i) => (
        <article key={post.id}>
          <h2>
            <span>
              No.{i}
              &nbsp; - &nbsp;
            </span>
            {post.title}
          </h2>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
};

export default PostItem;
