import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { TbExternalLink } from "react-icons/tb";
import { Project } from "../../types/project";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="card grid grid-cols-2 gap-3">
            <h1 className="col-span-2 font-bold text-3xl flex items-center gap-1">
                {project.title}
            </h1>
            <p className="col-span-2">{project.summary}</p>
            <Link href={project.repo} target="_blank" className="group/gh">
                <span className="flex items-center gap-1">
                    View it on GitHub <GoMarkGithub className="group-hover/gh:hidden" />
                    <TbExternalLink className="group-hover/gh:block hidden" />
                </span>
            </Link>
        </div>
    );
};
