import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Rafael Ecommerce</title>
      </Head>

      <Header />

      <main className="max-w-screen-xl mx-auto">
        <Banner />


        <FeedProdutos />
      </main>
    </div>
  );
}