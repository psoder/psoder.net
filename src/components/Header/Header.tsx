import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex gap-4 bg-neutral-900 p-4 text-2xl font-black text-white w-full">
            <Link className="no-underline" href={"/"}>
                psoder.net
            </Link>

            <Link href={"/#about"}>About</Link>

            <Link href={"/#projects"}>Projects</Link>
        </header>
    );
};
