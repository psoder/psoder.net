import Image from "next/image";
import Link from "next/link";
import { Url } from "url";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props: {
  title: String;
  description: String;
  moreInfoLink: String;
  githubLink: String;
}) {
  return (
    <div className={styles.projectCard}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        <Link href={`${props.moreInfoLink}`}>More information</Link>
        <Link href={`${props.githubLink}`}>
          <Image
            src={"/icons/github-logo.png"}
            width={128}
            height={128}
            alt="github logo"
            layout="intrinsic"
          />
        </Link>
      </div>
    </div>
  );
}
