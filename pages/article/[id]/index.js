import { useRouter } from 'next/router';
import Link from 'next/link';

// const article = () => {
//   const router = useRouter();
//   const { id } = router.query;
const article = ({ article }) => {
  return (
    <>
      {/* <h1>This is article {id}</h1> */}
      <h1>This is article {article.id}</h1>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <hr />
      <Link href="/">Go Back</Link>
    </>
  );
};

// Option 1 - Serverside props
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// Option 2 with getStaticProps and getStaticPaths
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default article;
