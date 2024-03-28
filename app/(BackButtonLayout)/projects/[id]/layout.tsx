"use client"
import React from "react";
import {projects} from "@/data/projects";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";

export default function layout({children, params}: { children: React.ReactNode, params: { id: number } }) {
    const bubbleColor = projects[params.id - 1].color;

    return (
        <>
            {children}
            <motion.div
                animate={{ opacity: [0, 1]}}
                transition={{ duration: 2}}
                className={cn("absolute -top-52 -left-20 rounded-full h-64 w-64 -z-20 blur-3xl animate-blob opacity-80", bubbleColor)}/>
        </>
    )
}