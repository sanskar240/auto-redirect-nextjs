import next from "next";
import Link from "next/link";
import styles from '../styles/Home.module.css';



const HomePage = ()=>{
  return (
    <div className={styles.container}>
      
      <h1 className={styles.title} >This is the Home Page</h1>
      <p className={styles.text}>Ut commodo leo nec neque ullamcorper maximus. Integer metus nulla, congue finibus quam non, malesuada tempor augue. Pellentesque sagittis nunc in nisi pretium pulvinar. Vestibulum finibus risus nec lectus viverra placerat. Proin ultricies lacus purus, non posuere magna feugiat non.</p>
      <Link href='/about'>
      <a className={styles.btn}>See Listing</a>
      </Link>
    </div>
  );
}
export default HomePage;