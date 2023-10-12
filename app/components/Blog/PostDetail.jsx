import Link from "next/link";
// import Comments from "./Comments";
import defaultImage from "@/public/img/hero.png";
import { FaRegComments, FaRegClock, FaRegUser } from "react-icons/fa";
import { format } from "date-fns";

function PostDetail({ data }) {
  return (
    <div className="detail" id="top">
      <div className="detail__header">
        <h1 className="detail__header__title">{data.post.title}</h1>
      </div>

      <article
        className="detail__content"
        dangerouslySetInnerHTML={{
          __html: data.post.content,
        }}></article>

      <div className="detail__categories">
        <h2 className="detail__categories__header">Published in:</h2>

        <div className="detail__categories__content">
          {data.post.categories.edges.length !== 0 && (
            <ul>
              {data.post.categories.edges.map((cat) => (
                <li key={cat.node.id}>
                  <Link
                    className="detail__categories__content__link"
                    href={`/category/${cat.node.slug}`}>
                    {cat.node.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <span className="detail__categories__content__date">
            {format(new Date(data.post.date), "dd.MM.yyyy")}
          </span>
        </div>
      </div>

      <button
        className="detail__button"
        // onClick={() => navigate(-1)}
        aria-label="Back to articles">
        <Link href="/blog">Back to articles</Link>
      </button>

      {/* <div className="detail__info__left__comments">
            <FaRegComments /> <span>Comments: </span>
            <span>{data.post.comments.edges.length}</span>
          </div>
       */}

      {/* <Comments comments={data?.post.comments.edges} /> */}
    </div>
  );
}
export default PostDetail;

