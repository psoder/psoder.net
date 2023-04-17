import { default as NextLink } from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export const Link = (props: {
    href: string;
    children: ReactNode;
    className?: string;
    textColor?: string;
    hoverColor?: string;
    target?: HTMLAttributeAnchorTarget;
}) => {
    return (
        <NextLink
            className={`${props.textColor ?? "text-black"}
                hover:${props.hoverColor ?? "text-black"}
                ${props.className}
                hover:underline`}
            href={props.href}
            target={props.target}
        >
            {props.children}
        </NextLink>
    );
};
