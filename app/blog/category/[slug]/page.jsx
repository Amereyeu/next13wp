"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_POSTS_FROM_CATEGORY } from "@/gql/queries";
import CategoryPost from "@/app/components/Category/CategoryPost";
import AllCategories from "@/app/components/Category/AllCategories";

export default function CategoryBySlug({ params }) {
  const { data, fetchMore } = useSuspenseQuery(GET_ALL_POSTS_FROM_CATEGORY, {
    variables: {
      id: params.slug,
      after: null,
    },
  });

  console.log("categoryPost:", data);

  return (
    <div>
      <AllCategories />

      <CategoryPost data={data} />

      {/* load more button> */}
      {data.category.posts.pageInfo.hasNextPage === true && (
        <div className="button-container">
          <div
            className="button"
            onClick={() => {
              const { endCursor } = data.category.posts.pageInfo;

              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.category.posts.nodes = [
                    ...prevResult.category.posts.nodes,
                    ...fetchMoreResult.category.posts.nodes,
                  ];
                  return fetchMoreResult;
                },
              });
            }}>
            <h2>
              <a>Load more posts</a>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

