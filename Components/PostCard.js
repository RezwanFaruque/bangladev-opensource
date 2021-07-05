import pstcard from "../styles/PostCard.module.scss";
import cardimage from "../public/assets/cardimage.png";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={pstcard.postcard}>
      <div className={pstcard.header}>
        <div className={pstcard.left}>
          <div className={pstcard.image}>
            <Image
              className={pstcard.imgresponsive}
              src={cardimage}
              alt="Author Image"
            />
          </div>
        </div>
        <div className={pstcard.right}>
          <div className={pstcard.name}>Rezwanul Ehsan</div>

          <div className={pstcard.date}>July 20 2021</div>
        </div>
      </div>
      <div className={pstcard.body}>
        <div className={pstcard.title}>
          <Link href="">
            <a>Modern Full-Stack Developer Tech Stack 2021</a>
          </Link>
        </div>
        <div className={pstcard.tags}>
          <span>
            <Link href="">
              <a>Youtube</a>
            </Link>
          </span>
          <span>
            <Link href="">
              <a>Full Stack</a>
            </Link>
          </span>
          <span>
            <Link href="">
              <a>Web Development</a>
            </Link>
          </span>
          <span>
            <Link href="">
              <a>Web Design</a>
            </Link>
          </span>
        </div>

        <div className={pstcard.like_comment}>
          <div className={pstcard.likes}>
            <span>
              <i class="far fa-heart"></i>
            </span>
            234 Likes
          </div>
          <div className={pstcard.comments}>
            <span>
            <i class="fas fa-comments"></i>
            </span>
            234 comments
          </div>
        </div>
      </div>
      <div className={pstcard.footer}>6 minutes of Read</div>
    </div>
  );
};

export default PostCard;
