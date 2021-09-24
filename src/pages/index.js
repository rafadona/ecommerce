import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeedProdutos from "../components/FeedProdutos";
import Footer from "../components/Footer";


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



// export async function getServerSideProps(context) {

//   const produtos = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

//   return {
//     props: {
//       produtos,
//     }
//   };

// }

export async function getStaticProps(context) {


  const res = await fetch("https://fakestoreapi.com/products");
  const produtos = await res.json();

  return {
    props: {
      produtos,
    }
  };

}

