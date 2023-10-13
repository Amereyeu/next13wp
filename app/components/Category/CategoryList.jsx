"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_CATEGORIES } from "@/gql/queries";
import Link from "next/link";

export default function CategoryList() {
  const { data } = useSuspenseQuery(GET_ALL_CATEGORIES);

  console.log("All categories:", data);

  return (
    <div className="categorylist-wrap">
      <ul className="categorylist">
        {data.categories.nodes.map((category) => (
          <li className="categorylist__item" key={category.id}>
            <Link
              className="categorylist__item__link"
              href={`/blog/category/${category.slug}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


