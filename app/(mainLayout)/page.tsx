import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/data/projects";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-24 mx-8 gap-8">
                {projects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`}>
                        <ProjectCard title={project.title} members={project.members}
                                     color={project.color} lastUpdate={project.lastUpdated}/>
                    </Link>
                ))}
            </div>
        </>
    );
}
