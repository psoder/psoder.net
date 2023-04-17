import { Link } from "../Link";

export const Header = () => {
    return (
        <header className="flex gap-4 bg-neutral-900 p-4 text-2xl font-black">
            <Link className="no-underline" href={"/"} textColor="text-white">
                psoder.net
            </Link>

            <Link href={"/#about"} textColor="text-white">
                About
            </Link>

            <Link href={"/#projects"} textColor="text-white">
                Projects
            </Link>
        </header>
    );
};
