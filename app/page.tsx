import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (
        <>
            <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-24 mx-8 gap-8">
                <ProjectCard title="brainstorm" members={4} color="bg-violet-500" lastUpdate="yesterday" />
                <ProjectCard />
                <ProjectCard title="test project" lastUpdate="3 days ago" />
                <ProjectCard members={4} />
                <ProjectCard members={2} />
            </div>
        </>
    );
}
