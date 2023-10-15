"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_TAGS } from "@/gql/queries";
import Link from "next/link";

export default function TagList() {
  const { data } = useSuspenseQuery(GET_ALL_TAGS);

  // console.log("All tags:", data);

  return (
    <div className="container" id="top">
      {data.tags.edges.map((tag) => (
        <div className="item" key={tag.node.tagId}>
          <h2>
            <Link href={`/blog/tag/${tag.node.slug}`}>{tag.node.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

