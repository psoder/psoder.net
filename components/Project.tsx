import Image from "next/image";
import quack from "../public/images/quack.jpeg";
import type { Project } from "../types/types";
import Link from "./Link";

export default function ProjectCard(props: { project: Project }) {
    return (
        <div className="flex">
            <div className="bg-neutral-800 p-6 grid gap-3">
                <h1 className="text-blue-500 font-bold text-3xl">{props.project.title}</h1>
                <h2>
                    <Link href={props.project.url}>{props.project.url}</Link>
                </h2>
                <p>{props.project.description}</p>
            </div>
            <Image src={quack} alt="" width={300} height={300} />
        </div>
    );
}
