import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/data/projects";

export default function Home() {
    return (
        <>
            <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-24 mx-8 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.title} title={project.title} members={project.members}
                                 color={project.color} lastUpdate={project.lastUpdated}/>
                ))}
            </div>
        </>
    );
}
