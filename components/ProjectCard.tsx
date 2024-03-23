import {File} from "lucide-react";
import {Button} from "@/components/ui/button";
import {DotsHorizontalIcon} from "@radix-ui/react-icons";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";

type ProjectCardProps = {
    members?: number;
    lastUpdate?: string;
    title?: string;
    color?: string;
}

const ProjectCard = ({members, lastUpdate, color, title}: ProjectCardProps) => {

    const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-indigo-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-gray-500",
        "bg-black",
    ];

    const animationDelays = [
        "animation-delay-0",
        "animation-delay-75",
        "animation-delay-100",
        "animation-delay-150",
        "animation-delay-200",
        "animation-delay-300",
    ];

    const randomColor = color ? color : colors[Math.floor(Math.random() * colors.length)];
    const randomDelay = animationDelays[Math.floor(Math.random() * animationDelays.length)];

    return (
        <div className="relative overflow-hidden border rounded-md hover:border-primary/30 transition-all duration-300">
            <div className="bg-card/60 backdrop-blur-3xl p-4 cursor-pointer">
                <div className="flex flex-row justify-start space-x-2 items-center mb-4">
                    <div className={"p-2 border rounded-md " + randomColor}>
                        <File className="h-4 w-4 text-white"/>
                    </div>
                    <h2 className="flex-1">{title ? title : "No project title"}</h2>
                    <Button variant="blur">
                        <DotsHorizontalIcon className="h-4 w-4"/>
                    </Button>
                </div>
                <div>
                    <div className="flex -space-x-4 overflow-hidden my-4">
                        {
                            Array.from({length: members ? members : 1}, (_, i) => (
                                <Avatar key={i}>
                                    <AvatarFallback>{
                                        `M${i + 1}`
                                    }</AvatarFallback>
                                </Avatar>
                            ))
                        }
                    </div>
                </div>
                <p className="text-muted-foreground text-sm">
                    {lastUpdate ? `Last updated ${lastUpdate}` : "No updates yet"}
                </p>
            </div>
            <div
                className={"absolute bottom-2 right-12 rounded-full h-32 w-32 -z-20 blur-xl animate-blob " + randomColor + " " + randomDelay}>
            </div>
        </div>
    );
}

export default ProjectCard;