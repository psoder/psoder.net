import { TbExternalLink } from "react-icons/tb";
import { Project } from "../types/project";
import { Link } from "./Link";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="card grid grid-cols-2 gap-3">
            <Link className="col-span-2" href={project.uri}>
                <h1 className="font-bold text-3xl flex items-center gap-1">
                    {project.title} <TbExternalLink />
                </h1>
            </Link>
            <p className="col-span-2">{project.summary}</p>
            <Link href={project.uri} target="_blank">
                <span>View it on GitHub</span>
            </Link>
            <span>Read more...</span>
        </div>
    );
};
