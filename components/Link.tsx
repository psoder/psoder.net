import { default as NextLink } from "next/link";

export default function Link(props: {
    href: string;
    className?: string;
    textColor?: string;
    hoverColor?: string;
    children: React.ReactNode;
}) {
    return (
        <NextLink
            className={`${props.textColor ?? "text-white"}
                ${props.hoverColor ?? "hover:text-blue-500"}
                ${props.className}`}
            href={props.href}
        >
            {props.children}
        </NextLink>
    );
}
