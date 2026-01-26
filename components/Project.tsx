import Image from "next/image";
import type { ReactNode } from "react";
import quack from "../public/images/quack.jpeg";
import type { Project } from "../types/types";
import { Link } from "./Link";

export const ProjectCard = (props: { project: Project }): ReactNode => (
  <div className="flex">
    <div className="bg-ctp-mantle p-6 grid gap-3">
      <h1 className="text-ctp-text font-bold text-3xl">{props.project.title}</h1>
      <h2>
        <Link href={props.project.url}>{props.project.url}</Link>
      </h2>
      <p>{props.project.description}</p>
    </div>
    <Image src={quack} alt="" width={300} height={300} />
  </div>
);
