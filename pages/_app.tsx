import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-zinc-800 text-white w-screen h-screen p-5 overflow-x-hidden">
      <Head>
        <title>Jo-Anne Tan | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Jo-Anne Tan's web development portfolio"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
