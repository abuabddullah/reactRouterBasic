import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
  const allPosts = useLoaderData();
  return (
    <div>
      <h1>all {allPosts.length} Posts</h1>
      <ol>
        {allPosts.map((post) => (
          <li key={post.id}>
            <hr />
            <Link to={`/postDetails/${post.id}`}>
              Show the PostDetails {post.id}
            </Link>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;
