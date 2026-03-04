import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Getarise Blog</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Getarise</h1>
        <section className={styles.hero}>Hero Section</section>
        <h2>Featured Articles</h2>
        {/* BlogCard components go here */}
      </main>
      <Footer />
    </div>
  );
}
