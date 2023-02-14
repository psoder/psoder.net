import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header} style={{ backgroundColor: "var(--secondary)" }}>
            <b className="highlight">
                <Link href={"/"}>psoder.net</Link>
            </b>

            <Link href={"/#about"}>About</Link>
            <Link href={"/#projects"}>Projects</Link>
        </header>
    );
}
