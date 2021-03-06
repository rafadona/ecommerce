import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeedProdutos from "../components/FeedProdutos";
import Footer from "../components/Footer";
import { getSession } from "next-auth/client";


export default function Home({ produtos }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Rafael Ecommerce</title>

      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto ">
        <Banner />

        <FeedProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
}


export async function getStaticProps(context) {

  const session = await getSession(context);

  const res = await fetch("https://fakestoreapi.com/products");
  const produtos = await res.json();

  return {
    props: {
      produtos,
    }
  };

}

