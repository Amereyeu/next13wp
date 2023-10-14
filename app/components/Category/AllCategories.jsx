"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_CATEGORIES } from "@/gql/queries";
import Link from "next/link";

export default function AllCategories() {
  const { data } = useSuspenseQuery(GET_ALL_CATEGORIES);

  console.log("All categories:", data);

  return (
    <div className="allcategories" >
      <ul>
        {data.categories.nodes.map((category) => (
          <li key={category.id}>
            <Link
              href={`/blog/category/${category.slug}`}
              className="allcategories__link">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

