import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="my blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="nextjs-post" title="Next Post" />
      <PostLink slug="express-post" title="Express Post" />
    </ul>
  </Layout>
);

export default Blog;
