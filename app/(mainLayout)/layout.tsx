import Navbar from "@/components/Navbar";
import React from "react";
import {ThemeChanger} from "@/app/(mainLayout)/ThemeChanger";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "lucide-react";


export default function MainLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <div className="relative mx-8 flex flex-row justify-between items-center my-4">
                <h3>
                    Logo
                </h3>
                <div className="flex flex-row justify-between items-center space-x-2">
                    <Button variant="ghost" size="icon">
                        <PlusIcon className="h-6 w-6"/>
                    </Button>
                    <h5 className="text-sm font-semibold border p-1.5 rounded-md">Credits: 4</h5>
                    <ThemeChanger/>
                </div>
            </div>
            <Navbar/>
            <div className="mx-8">
                {children}
            </div>
            {/*<div*/}
            {/*    className="absolute top-1/4 left-8 rounded-full h-32 w-32 -z-20 blur-3xl bg-primary/30 animate-blob"/>*/}
            {/*<div*/}
            {/*    className="absolute top-2/3 right-80 rounded-full h-32 w-32 -z-20 blur-3xl bg-violet-500/50 animate-blob"/>*/}
            {/*<div*/}
            {/*    className="absolute bottom-2/3 right-80 rounded-full h-32 w-32 -z-20 blur-3xl bg-sky-500/50 animate-blob"/>*/}
            {/*<div*/}
            {/*    className="absolute top-2/3 left-1/4 rounded-full h-32 w-32 -z-20 blur-3xl bg-lime-500/50 animate-blob"/>*/}
            {/*<div*/}
            {/*    className="absolute bottom-2 right-80 rounded-full h-32 w-32 -z-20 blur-3xl bg-blue-500/50 animate-blob"/>*/}
        </>
    );
}
