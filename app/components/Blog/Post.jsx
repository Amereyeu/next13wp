import Link from "next/link";

function Post({ data }) {
  return (
    <>
      <div className="container" id="top">
        {data.posts.nodes.map((post) => (
          <div className="item" key={post.id}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;

