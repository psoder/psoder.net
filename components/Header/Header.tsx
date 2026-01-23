import Link from "../Link";

export default function Header() {
  return (
    <header className="flex gap-4 bg-neutral-900 p-4 text-2xl font-black">
      <Link textColor="text-blue-500" hoverColor="hover:text-white" href="/">
        psoder.net
      </Link>

      <Link href="/#about">About</Link>

      <Link href="/#projects">Projects</Link>
    </header>
  );
}
