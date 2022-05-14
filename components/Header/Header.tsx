import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <div>
        <Link href={"/"}>
          <a className="highlight">
            <b>psoder.net</b>
          </a>
        </Link>
      </div>
      <div>
        <Link href={"/about"}>
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href={"/projects"}>
          <a>Projects</a>
        </Link>
      </div>
    </header>
  );
}
