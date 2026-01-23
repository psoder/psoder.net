import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  id: string;
  children: ReactNode;
}

export const Section = (props: SectionProps): ReactNode => (
  <section id={props.id} className="flex flex-col gap-6 text-xl max-w-[80ch]">
    <h1 className="text-5xl mt-10 font-black text-blue-500">{props.title}</h1>
    {props.children}
  </section>
);
