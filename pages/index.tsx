import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>psoder.net</title>
      </Head>

      <Header />
      <div className={styles.container}>
        <div className={styles.introTextContainer}>
          <h1 style={{ color: "var(--highlight)" }}>
            Lorem fucking ipsum, something something
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Id
            diam maecenas ultricies mi eget mauris pharetra.
          </p>
        </div>
        <div className={styles.else}>
          <Image src={"/images/mountains.jpg"}
            height={1000}
            width={1600}
            alt="Placeholder"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
