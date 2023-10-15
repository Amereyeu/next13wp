"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ALL_POSTS } from "@/gql/queries";
import Post from "./Post";

export default function Posts() {
  const { data, fetchMore } = useSuspenseQuery(GET_ALL_POSTS, {
    variables: {
      after: null,
    },
  });

  // console.log("posts:", data);

  return (
    <>
      <Post data={data} />

      {/* load more button> */}
      {data.posts.pageInfo.hasNextPage === true && (
        <div className="button-container">
          <div
            className="button"
            onClick={() => {
              const { endCursor } = data.posts.pageInfo;

              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.posts.nodes = [
                    ...prevResult.posts.nodes,
                    ...fetchMoreResult.posts.nodes,
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
    </>
  );
}

