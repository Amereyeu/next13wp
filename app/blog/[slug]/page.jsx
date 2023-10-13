"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { GET_POST_BY_SLUG } from "@/gql/queries";
import PostDetail from "@/app/components/Blog/PostDetail";

export default function PostBySlug({ params }) {
  const { data } = useSuspenseQuery(GET_POST_BY_SLUG, {
    variables: {
      id: params.slug,
    },
  });

  return <PostDetail data={data} />;
}

