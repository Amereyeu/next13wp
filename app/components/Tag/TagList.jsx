"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_TAGS } from "@/gql/queries";
import Link from "next/link";

export default function TagList() {
  const { data } = useSuspenseQuery(GET_ALL_TAGS);

  console.log("All tags:", data);

  return (
    <div className="taglist-wrap">
      <ul className="taglist">
        {data.tags.edges.map((tag) => (
          <li className="taglist__item" key={tag.node.tagId}>
            <Link
              className="taglist__item__link"
              href={`/blog/tag/${tag.node.slug}`}>
              {tag.node.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

