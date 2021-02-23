import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      {/* Head import above allows for this */}
      <Head>
        <title>WebDev Junk</title>
        <meta name="keywords" content="some descriptive stuff, and, things" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6';
  const res = await fetch(URL);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
