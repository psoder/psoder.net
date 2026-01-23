import Link from "../Link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 text-center p-6 bg-neutral-900 font-black">
      <h3 className="text-2xl text-blue-500">Get in touch</h3>

      <div className="flex gap-4 justify-center text-xl">
        <Link href="https://github.com/psoder">GitHub</Link>
        <Link href="">LinkedIn</Link>
        <Link href="">Email</Link>
      </div>
    </footer>
  );
}
