import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CirclePercent, LayoutDashboard, ListTodo, Settings} from "lucide-react";

export default function Page() {
    return (
        <Tabs defaultValue="overview">
            <TabsList>
                <TabsTrigger value="overview">
                    <LayoutDashboard className="h-4 w-4 sm:mr-2"/>
                    <span className="hidden sm:block">
                        Overview
                    </span>
                </TabsTrigger>
                <TabsTrigger value="marketing">
                    <CirclePercent className="h-4 w-4 sm:mr-2"/>
                    <span className="hidden sm:block">
                        Marketing
                    </span>
                </TabsTrigger>
                <TabsTrigger value="tasks">
                    <ListTodo className="h-4 w-4 sm:mr-2"/>
                    <span className="hidden sm:block">
                        Tasks
                    </span>
                </TabsTrigger>
                <TabsTrigger value="settings">
                    <Settings className="h-4 w-4 sm:mr-2"/>
                    <span className="hidden sm:block">
                        Settings
                    </span>
                </TabsTrigger>
            </TabsList>
            <TabsContent className="my-8" value="overview">
                <h1>Overview</h1>
                <p>overview desc</p>
            </TabsContent>
        </Tabs>
    )
}