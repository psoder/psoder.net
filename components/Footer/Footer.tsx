import styles from './Footer.module.css'

export default function Footer() {
    return (
      <footer
        className={styles.footer}
        style={{ backgroundColor: "var(--secondary)" }}
      >
        This is a footer
      </footer>
    );
}