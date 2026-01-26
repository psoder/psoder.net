import type { ReactNode } from "react";
import { Link } from "../Link";

export const Footer = (): ReactNode => (
  <footer className="flex flex-col gap-2 text-center p-6 bg-ctp-crust font-black">
    <div className="flex gap-4 justify-center text-xl">
      <Link href="https://github.com/psoder">GitHub</Link>
      <Link href="">LinkedIn</Link>
      <Link href="">Email</Link>
    </div>
  </footer>
);
