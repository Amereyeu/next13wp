"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_CATEGORIES } from "@/gql/queries";
import Link from "next/link";

export default function CategoryList() {
  const { data } = useSuspenseQuery(GET_ALL_CATEGORIES);

  // console.log("All categories:", data);

  return (
    <div className="container" id="top">
      {data.categories.nodes.map((category) => (
        <div className="item" key={category.id}>
          <h2>
            <Link href={`/blog/category/${category.slug}`}>
              {category.name}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

