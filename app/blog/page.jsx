import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";

export default function Blog({ posts }) {
  return (
    <div>
      <h3>Blog posts</h3>

      <div className="grid">
        {posts.map((post) => {
          return <div key={post.id}>+++</div>;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query AllPostsQuery {
      customPosts {
        nodes {
          title
          id
          content
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
  });

  const posts = response?.data?.posts?.nodes;

  return {
    props: {
      posts,
    },
  };
}

