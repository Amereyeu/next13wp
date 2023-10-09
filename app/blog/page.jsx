// import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../gql/queries";

function Blog() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) {
    return (
      <div className="posts__placeholder">
        <div className="circle"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="posts__placeholder">
        <div>
          <p>Error loading posts!</p>
        </div>
      </div>
    );
  }

  const postsFound = Boolean(data?.posts.nodes.length);

  if (!postsFound) {
    return (
      <div className="posts__placeholder">
        <div>
          <p>No posts found!</p>
        </div>
      </div>
    );
  }

  return <div>Blog</div>;
}

export default Blog;

