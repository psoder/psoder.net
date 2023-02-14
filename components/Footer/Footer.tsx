import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer} style={{ backgroundColor: "var(--secondary)" }}>
            <h3 style={{ color: "var(--highlight)" }}>Get in touch</h3>
            <div>
                <Link href="https://github.com/psoder">Github</Link>
                <Link href="">Linkedin</Link>
                <Link href="">Email</Link>
            </div>
        </footer>
    );
}
