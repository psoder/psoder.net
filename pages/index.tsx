import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectDisplay from "../components/ProjectCard/ProjectDisplay";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div onScroll={() => console.log("hello")}>
      <Head>
        <title>psoder.net</title>
      </Head>

      {/* <Header /> */}
      <div className={styles.container}>
        <section id="intro" className={styles.intro}>
          <h1>Lorem fucking ipsum, something something</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Id
            diam maecenas ultricies mi eget mauris pharetra.
          </p>
          <Image
            src="/icons/arrow-down.png"
            width={64}
            height={64}
            alt="down arrow"
            className="downArrow"
          />
        </section>

        <section id="about" className={styles.about}>
          <h1>1. About</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
            dictum varius duis at consectetur. Morbi non arcu risus quis. In
            fermentum et sollicitudin ac orci phasellus egestas tellus. Euismod
            elementum nisi quis eleifend quam adipiscing. Lacus vel facilisis
            volutpat est velit egestas dui id ornare. Pellentesque dignissim
            enim sit amet venenatis urna cursus. Congue nisi vitae suscipit
            tellus mauris. Egestas fringilla phasellus faucibus scelerisque
            eleifend donec pretium. Et egestas quis ipsum suspendisse ultrices
            gravida dictum fusce. Quis eleifend quam adipiscing vitae proin
            sagittis nisl rhoncus mattis. Urna porttitor rhoncus dolor purus non
            enim. Lorem donec massa sapien faucibus et molestie. Viverra tellus
            in hac habitasse platea dictumst vestibulum rhoncus est.
          </p> */}
          <div style={{ marginTop: "30px" }}>
            <ProjectDisplay
              title="A Title"
              description="Amet justo donec enim diam vulputate. Quis commodo odio aenean sed."
              githubLink=""
              moreInfoLink=""
              imageSrc="/images/stary-sky.jpg"
            />
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <h1>2. Projects</h1>
          {/* <p>
            Eleifend mi in nulla posuere sollicitudin aliquam. Mattis vulputate
            enim nulla aliquet porttitor lacus luctus. Est ultricies integer
            quis auctor elit sed. Amet justo donec enim diam. Tellus at urna
            condimentum mattis pellentesque id nibh tortor id. Vel pharetra vel
            turpis nunc eget lorem. 
          </p> */}
          <div>
            <ProjectCard
              title="Something Very Interesting"
              description="Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum."
              githubLink=""
              moreInfoLink=""
            />

            <ProjectCard
              title="Another Interesting project"
              description="Luctus accumsan tortor posuere ac ut. Ultrices in iaculis nunc sed augue lacus. Pharetra convallis posuere morbi leo urna molestie at elementum."
              githubLink=""
              moreInfoLink=""
            />

            <ProjectCard
              title="A Title"
              description="Amet justo donec enim diam vulputate. Quis commodo odio aenean sed."
              githubLink=""
              moreInfoLink=""
            />
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h1>3. Contact</h1>
          <p>
            Enim nulla aliquet porttitor lacus. Sagittis orci a scelerisque
            purus. Ultricies tristique nulla aliquet enim tortor at auctor. In
            mollis nunc sed id semper risus in. Aliquam etiam erat velit
            scelerisque in dictum non. Id eu nisl nunc mi ipsum. Sem viverra
            aliquet eget sit amet tellus. Facilisis leo vel fringilla est
            ullamcorper eget nulla. Molestie at elementum eu facilisis sed odio
            morbi quis. Quis imperdiet massa tincidunt nunc pulvinar.
            Ullamcorper dignissim cras tincidunt lobortis. Consectetur
            adipiscing elit pellentesque habitant morbi tristique senectus.
          </p>
        </section>
      </div>

      <nav className={styles.sidenav}>
        <Link href="/#intro">0. Start</Link>
        <Link href="/#about">1. About</Link>
        <Link href="/#projects">2. Projects</Link>
        <Link href="/#contact">3. Contact</Link>
      </nav>

      <Footer />
    </div>
  );
};

export default Home;
