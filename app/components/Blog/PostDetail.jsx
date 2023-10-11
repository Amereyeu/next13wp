import Link from "next/link";
// import Comments from "./Comments";
import defaultImage from "@/public/img/hero.png";
import { FaRegComments, FaRegClock, FaRegUser } from "react-icons/fa";
import { format } from "date-fns";


function PostDetail({ data }) {
  return (
    <div className="detail">
      <div
        className="detail__featured-image"
        style={{
          backgroundImage:
            data.post.featuredImage === null
              ? `url(${defaultImage})`
              : `url(${data.post.featuredImage.node.sourceUrl})`,
        }}>
        <h3 className="detail__featured-image__title">{data.post.title}</h3>
      </div>

      <div className="detail__info">
        <div className="detail__info__left">
          {/* <img
                className="detail__info__left__image"
                src={data.post.author.node.avatar.url}
                alt={data.post.author.node.name}
              /> */}

          <div className="detail__info__left__author">
            <FaRegUser />
            <span>{data.post.author.node.name}</span>
          </div>

          <div className="detail__info__left__date">
            <FaRegClock />
            <span>{format(new Date(data.post.date), "dd.MM.yyyy")}</span>
          </div>

          <div className="detail__info__left__comments">
            <FaRegComments /> <span>Comments: </span>
            <span>{data.post.comments.edges.length}</span>
          </div>
        </div>

        {/* <div className="detail__info__right">
          {data.post.categories.edges.length !== 0 && (
            <div className="detail__info__right__category">
              <ul>
                {data.post.categories.edges.map((cat) => (
                  <li key={cat.node.id}>
                    <Link
                      className="detail__info__right__category__pill"
                      href={`/category/${cat.node.slug}`}>
                      {cat.node.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div> */}
      </div>

      <div
        className="detail__content"
        dangerouslySetInnerHTML={{
          __html: data.post.content,
        }}></div>

      <button
        className="detail__button"
        // onClick={() => navigate(-1)}
        aria-label="Back to articles">
        <Link href="/blog">Back to articles</Link>
      </button>

      {/* <Comments comments={data?.post.comments.edges} /> */}
    </div>
  );
}
export default PostDetail;

