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
            className={`${props.textColor ?? "text-blue-500"}
                ${props.hoverColor ?? "hover:text-white"}
                ${props.className}
                underline`}
            href={props.href}
        >
            {props.children}
        </NextLink>
    );
}
