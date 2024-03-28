import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CirclePercent, LayoutDashboard, ListTodo, Settings} from "lucide-react";
import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Checkbox} from "@/components/ui/checkbox";

export default function Page() {
    return (
        <Tabs defaultValue="overview">
            <TabsList className="p-1.5 border">
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
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Overview
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eum illum ipsam laboriosam
                        maxime, modi officia omnis perferendis totam vel!
                    </CardContent>
                </Card>
                <Card className="my-4">
                    <CardHeader>
                        <CardTitle>
                            Target Audience
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at corporis deleniti itaque
                        labore numquam qui. Asperiores autem eos harum magni quisquam? Ab debitis deserunt, explicabo
                        repellat ut vitae voluptatem. A beatae dolorem doloribus ea earum eos facilis iure perferendis
                        porro vel. Aspernatur quas, vero. Sit suscipit vel vero?
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent className="my-8" value="marketing">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Color palette
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="flex flex-row gap-2 flex-wrap">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-red-500 rounded-full mr-2"/>
                                <div className="text-gray-600">
                                    #FF0000
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-green-500 rounded-full mr-2"/>
                                <div className="text-gray-600">
                                    #00FF00
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"/>
                                <div className="text-gray-600">
                                    #0000FF
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="my-4">
                    <CardHeader>
                        <CardTitle>
                            Titles for project
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="flex flex-row flex-wrap gap-4">
                            <h1 className="text-xl font-bold">
                                Title 1
                            </h1>
                            <h1 className="text-xl font-bold">
                                Title 2
                            </h1>
                            <h1 className="text-xl font-bold">
                                Title 3
                            </h1>
                            <h1 className="text-xl font-bold">
                                Title 4
                            </h1>
                            <h1 className="text-xl font-bold">
                                Title 5
                            </h1>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent className="my-8" value="tasks">
                <div className="flex flex-row space-x-4">

                </div>
            </TabsContent>
            <TabsContent className="my-8" value="settings">
                <div className="mx-auto grid w-full max-w-6xl gap-2 my-8">
                    <h1 className="text-3xl font-semibold">Settings</h1>
                </div>
                <div
                    className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <nav className="grid gap-4 text-sm text-muted-foreground">
                        <Link href="#" className="font-semibold text-primary">
                            General
                        </Link>
                        <Link href="#">Security</Link>
                        <Link href="#">Integrations</Link>
                        <Link href="#">Support</Link>
                        <Link href="#">Organizations</Link>
                        <Link href="#">Advanced</Link>
                    </nav>
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Store Name</CardTitle>
                                <CardDescription>
                                    Used to identify your store in the marketplace.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <Input placeholder="Store Name"/>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button>Save</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Plugins Directory</CardTitle>
                                <CardDescription>
                                    The directory within your project, in which your plugins are
                                    located.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="flex flex-col gap-4">
                                    <Input
                                        placeholder="Project Name"
                                        defaultValue="/content/plugins"
                                    />
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="include" defaultChecked/>
                                        <label
                                            htmlFor="include"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Allow administrators to change the directory.
                                        </label>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button>Save</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}