import Link from "next/link";

export default function TagPost({ data }) {
  return (
    <div>
      {data.tag.posts.nodes.length > 0 ? (
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
        <div id="top">
          <div className="noposts">
            <h2>No posts</h2>
          </div>
        </div>
      )}
    </div>
  );
}

