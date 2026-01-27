import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <b className="highlight">
        <Link href={"/"}>psoder.net</Link>
      </b>

      <Link href={"/#about"}>1. About</Link>
      <Link href={"/#projects"}>2. Projects</Link>
    </header>
  );
}
