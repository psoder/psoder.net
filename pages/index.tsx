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
                <section id="intro" className={styles.intro}>
                    <h1>Lorem fucking ipsum, something something</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed
                        ullamcorper morbi tincidunt ornare massa. Id diam maecenas ultricies mi eget
                        mauris pharetra.
                    </p>
                </section>

                <section id="about" className={styles.about}>
                    <h1>About</h1>
                </section>

                <section id="projects" className={styles.projects}>
                    <h1>Projects</h1>
                </section>

                <section id="contact" className={styles.contact}>
                    <h1>Contact</h1>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
