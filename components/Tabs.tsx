import {Tabs, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import {FolderKanban, Home, Settings} from "lucide-react";
import {AvatarIcon} from "@radix-ui/react-icons";

export function TabsDemo() {
    return (
        <div className="md:top-4 md:bottom-full fixed bottom-4 w-full mx-auto z-10">
            <Tabs defaultValue="home" className="w-full">
                <div className="max-w-[350px] mx-auto">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="home"><Home className="h-4 w-4"/></TabsTrigger>
                        <TabsTrigger value="projects"><FolderKanban className="h-4 w-4"/></TabsTrigger>
                        <TabsTrigger value="settings"><Settings className="h-4 w-4"/></TabsTrigger>
                        <TabsTrigger value="account"><AvatarIcon className="h-4 w-4"/></TabsTrigger>
                    </TabsList>
                </div>
            </Tabs>
        </div>
    )
}
