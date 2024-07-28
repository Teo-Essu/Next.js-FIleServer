import styles from "./page.module.css";
import Link from "next/link";

export default function Home(){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          <h1>FileServer for storing all types of files</h1>
          <p>Store, share & download files with others</p>
          <div className={styles.cta}>
            <Link href="/files"> Explore Files</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
        <h2>How it works</h2>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </main>
    </>
  );
}