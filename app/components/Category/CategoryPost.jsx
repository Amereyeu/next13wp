import Link from "next/link";

export default function CategoryPost({ data }) {
  return (
    <>
      {data.category.posts.nodes.length > 0 ? (
        <div className="container" >
          {data.category.posts.nodes.map((post) => (
            <div className="item" key={post.id}>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <div id="top">
          <div className="noposts">
            <h2>No posts</h2>
          </div>
        </div>
      )}
    </>
  );
}

