import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/ListBlogs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <BlogList/>
      <Footer />
    </main>
  );
}
