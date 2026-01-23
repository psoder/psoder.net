import { default as NextLink } from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  className?: string;
  textColor?: string;
  hoverColor?: string;
  children: ReactNode;
}

export const Link = (props: LinkProps): ReactNode => (
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
