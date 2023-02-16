import Image from "next/image";
import quack from "../public/images/quack.jpeg";
import { Project } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";

export default function ProjectCard(props: { project: Project }) {
    return (
        <div className="flex bg-neutral-400">
            {/* <Image src={quack} alt="" width={300} height={300} /> */}
            <div className="p-6 grid grid-cols-2 gap-3">
                <Link className="col-span-2" href={props.project.url}>
                    <h1 className="font-bold text-3xl">
                        {props.project.title} <FontAwesomeIcon icon={faLink} />
                    </h1>
                </Link>
                <p className="col-span-2">{props.project.summary}</p>
                <span>View it on GitHub</span>
                <span>Read more...</span>
            </div>
        </div>
    );
}
