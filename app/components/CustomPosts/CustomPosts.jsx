"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_CUSTOM_POSTS } from "@/gql/queries";
import CustomPost from "./CustomPost";

function CustomPosts() {
  const { data } = useSuspenseQuery(GET_ALL_CUSTOM_POSTS);

  console.log("customPosts:", data);

  return <CustomPost data={data} />;
}

export default CustomPosts;

