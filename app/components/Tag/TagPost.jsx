import Link from "next/link";

export default function TagPost({ data }) {
  return (
    <>
      {data ? (
        <div className="container" id="top">
          {data.tag.posts.nodes.map((post) => (
            <div className="item" key={post.id}>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="container" id="top">
          <h2>No posts</h2>
        </div>
      )}
    </>
  );
}

