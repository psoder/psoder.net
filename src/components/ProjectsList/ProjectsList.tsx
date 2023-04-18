import { projects } from "./mocksProjects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = () => {
    return (
        <div className="flex flex-col gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};
