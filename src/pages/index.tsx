import { ProjectsList } from "@/components/ProjectsList";
import { Section } from "@/components/Section";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="grid gap-8">
            <Section id="intro" title="Introduction">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper
                    morbi tincidunt ornare massa. Id diam maecenas ultricies mi eget mauris
                    pharetra.
                </p>
            </Section>

            <hr />

            <Section id="about" title="About">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere saepe error
                    consequuntur earum? Quis ex repudiandae quaerat? Voluptatum, adipisci aliquam
                    totam quisquam repellendus eligendi in iusto, repellat est enim recusandae.
                </p>
            </Section>

            <hr />

            <Section id="projects" title="Projects">
                <ProjectsList />
            </Section>

            <hr />

            <Section id="contact" title="Contact">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim
                    repellendus repellat perspiciatis aut minus! Minus voluptate aspernatur ratione
                    sapiente, dolore, architecto vero quo, quam aliquid tempora adipisci laudantium
                    in.
                </p>
            </Section>
        </div>
    );
};

export default Home;
