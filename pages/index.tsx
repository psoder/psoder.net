import type { NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "../components/Project";
import { Section } from "../components/Section";
import { projects } from "../types/mocks";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>psoder.net</title>
            </Head>

            <div className="grid gap-16">
                <Section id="intro" title="Introduction">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed
                        ullamcorper morbi tincidunt ornare massa. Id diam maecenas ultricies mi eget
                        mauris pharetra.
                    </p>
                </Section>

                <Section id="about" title="About">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere saepe error
                        consequuntur earum? Quis ex repudiandae quaerat? Voluptatum, adipisci
                        aliquam totam quisquam repellendus eligendi in iusto, repellat est enim
                        recusandae.
                    </p>
                </Section>

                <Section id="projects" title="Projects">
                    <div className="flex flex-col gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </Section>

                <Section id="contact" title="Contact">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim
                        repellendus repellat perspiciatis aut minus! Minus voluptate aspernatur
                        ratione sapiente, dolore, architecto vero quo, quam aliquid tempora adipisci
                        laudantium in.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default Home;
