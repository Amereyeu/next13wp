"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_POSTS } from "../../gql/queries";

export default function Posts() {
  const { data } = useSuspenseQuery(GET_ALL_POSTS);

  console.log("data", data);

  return (
    <div>
      <h3>Blog posts</h3>

      {data.posts.nodes.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

