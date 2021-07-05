import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from '../Components/PageHeader.js';
import PostCard from '../Components/PostCard.js';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <PageHeader />
       <div className={styles.post}>
        <PostCard />
       </div>
       <div className={styles.post}>
        <PostCard />
       </div>
       <div className={styles.post}>
        <PostCard />
       </div>
       <div className={styles.post}>
        <PostCard />
       </div>
       <div className={styles.post}>
        <PostCard />
       </div>
       <div className={styles.post}>
        <PostCard />
       </div>
       
    </div>
  )
}
