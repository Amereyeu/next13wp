"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { GET_ALL_POSTS_FROM_TAG } from "@/gql/queries";
import TagPost from "@/app/components/Tag/TagPost";

export default function TagBySlug({ params }) {
  const { data, fetchMore } = useSuspenseQuery(GET_ALL_POSTS_FROM_TAG, {
    variables: {
      id: params.slug,
      after: null,
    },
  });

  console.log("tagPost:", data);

  return (
    <>
      <TagPost data={data} />

      {/* load more button */}
      {data.tag.posts.pageInfo.hasNextPage === true && (
        <button
          className="load-more__button"
          onClick={() => {
            const { endCursor } = data.tag.posts.pageInfo;

            fetchMore({
              variables: { after: endCursor },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.tag.posts.nodes = [
                  ...prevResult.tag.posts.nodes,
                  ...fetchMoreResult.tag.posts.nodes,
                ];
                return fetchMoreResult;
              },
            });
          }}>
          <a>Load more posts</a>
        </button>
      )}
    </>
  );
}



