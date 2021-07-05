import styles from "../styles/RightSidebar.module.scss";
import Link from "next/link";

const RightSidebar = () => {
  return (
    <div className={styles.rightsidebar}>
      <div className={styles.title}>
            #Discussions
      </div>
      <Link href="">
        <a>
          <div className={styles.discussions}>
            <div className={styles.title}>How to fix Npm errors</div>
            <div className={styles.comments}>122 comments</div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className={styles.discussions}>
            <div className={styles.title}>How to fix Npm errors</div>
            <div className={styles.comments}>122 comments</div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className={styles.discussions}>
            <div className={styles.title}>How to fix Npm errors</div>
            <div className={styles.comments}>122 comments</div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className={styles.discussions}>
            <div className={styles.title}>How to fix Npm errors</div>
            <div className={styles.comments}>122 comments</div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className={styles.discussions}>
            <div className={styles.title}>How to fix Npm errors</div>
            <div className={styles.comments}>122 comments</div>
          </div>
        </a>
      </Link>

      <Link href="">
        <a>
          <div className={styles.discussions}>
            <div className={styles.title}>How to fix Npm errors</div>
            <div className={styles.comments}>122 comments</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RightSidebar;
