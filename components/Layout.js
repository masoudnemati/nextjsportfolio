import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Next.js Portfolio</title>
    </Head>

    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hire me</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        header {
          width: 100%;
          display: flex;
          padding: 1.5rem 0;
          justify-content: space-around;
          font-size: 1.2rem;
          background: indigo;
        }

        header a {
          color: white;
          text-decoration: none;
        }

        header a:hover {
          color: lightgrey;
        }

        footer {
          padding: 20px 0;
        }
      `}
    </style>

    <style global jsx>
      {`
        body {
          box-sizing: border-box;
          font-size: 16px;
          margin: 0;
          padding: 0;
          background: #f0f0f0;
        }
      `}
    </style>
  </div>
);

export default Layout;
