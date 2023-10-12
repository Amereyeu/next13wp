import Link from "next/link";

function CategoryPost({ data }) {
  return (
    <>
      {data ? (
        <div className="container" id="top">
          {data.category.posts.nodes.map((post) => (
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

export default CategoryPost;

