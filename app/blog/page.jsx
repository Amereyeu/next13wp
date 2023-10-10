import Posts from "./Posts";

export const dynamic = "force-dynamic";

// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

// const GET_POSTS = gql`
//   query AllPostsQuery {
//     customPosts {
//       nodes {
//         title
//         id
//         content
//       }
//     }
//   }
// `;

export default async function Blog() {
  return <Posts />;
  // const { data } = useSuspenseQuery(GET_POSTS);
  //   return (
  //     <div>
  //       <h3>Blog posts</h3>
  //       <div className="grid">
  //         {data.map((post) => {
  //           return <div key={post.id}>+++</div>;
  //         })}
  //       </div>
  //     </div>
  //   );
}

