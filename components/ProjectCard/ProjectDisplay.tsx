import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectDisplay.module.css";

export default function ProjectCard(props: {
  title: String;
  description: String;
  moreInfoLink: String;
  githubLink: String;
  imageSrc: String;
}) {
  return (
    <div className={styles.projectCard}>

        <h2>{props.title}</h2>
      <div className={styles.imageContainer}>
        <Image
          src={`${props.imageSrc}`}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>

      <p>{props.description}</p>
      <div>
        <Link href={`${props.moreInfoLink}`}>More information</Link>
        <Link href={`${props.githubLink}`}>
          <Image
            src={"/icons/github-logo.png"}
            width={16}
            height={16}
            alt="github logo"
            layout="fixed"
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>
    </div>
  );
}
