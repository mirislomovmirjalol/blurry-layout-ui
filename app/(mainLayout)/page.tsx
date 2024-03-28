import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/data/projects";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "lucide-react";

export default function Home() {
    return (
        <>
            <div className="flex flex-row justify-end items-center mt-12">
                <Link href={"/projects/new"}>
                    <Button>
                        <PlusIcon className="h-4 w-4 mr-2"/>
                        Add Project
                    </Button>
                </Link>
            </div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-4 gap-8">
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
