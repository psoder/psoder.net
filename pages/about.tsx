import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      
      <Header />
      <h1>About</h1>
      <Footer />
    </div>
  );
}
