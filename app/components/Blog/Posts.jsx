"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_POSTS } from "@/gql/queries";
import Post from "./Post";

export default function Posts() {
  const { data } = useSuspenseQuery(GET_ALL_POSTS);

  console.log("data", data);

  return <Post data={data} />;
}

