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
            className={`${props.textColor ?? "text-black"}
                hover:${props.hoverColor ?? "text-black"}
                ${props.className}
                hover:underline`}
            href={props.href}
        >
            {props.children}
        </NextLink>
    );
}
