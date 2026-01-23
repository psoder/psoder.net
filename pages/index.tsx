import type { NextPage } from "next";
import Head from "next/head";
import ProjectCard from "../components/Project";
import Section from "../components/Section";
import { testProject } from "../types/mocks";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>psoder.net</title>
    </Head>

    <div>
      <Section id="intro" title="Introduction">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
          massa. Id diam maecenas ultricies mi eget mauris pharetra.
        </p>
      </Section>

      <Section id="about" title="About">
        Lorem ipsum
      </Section>

      <Section id="projects" title="Projects">
        <ProjectCard project={testProject} />
        <ProjectCard project={testProject} />
        <ProjectCard project={testProject} />
      </Section>

      <Section id="contact" title="Contact">
        Lorem ipsum
      </Section>
    </div>
  </div>
);

export default Home;
