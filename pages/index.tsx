import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/Section";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>psoder.net</title>
            </Head>

            <div>
                <Section id="intro" title="Introduction">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed
                        ullamcorper morbi tincidunt ornare massa. Id diam maecenas ultricies mi eget
                        mauris pharetra.
                    </p>
                </Section>

                <Section id="about" title="About">
                    Lorem ipsum
                </Section>

                <Section id="projects" title="Projects">
                    Lorem ipsum
                </Section>

                <Section id="contact" title="Contact">
                    Lorem ipsum
                </Section>
            </div>

        </div>
    );
};

export default Home;
