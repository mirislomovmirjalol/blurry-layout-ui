"use client"
import React from "react";
import BackButton from "@/components/BackButton";
import {motion} from "framer-motion";

export default function BackButtonLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <motion.div
                animate={{y: [-30, 5, 0]}}
                transition={{duration: 0.3}}
                className="py-4 px-8 border-b flex flex-row justify-between items-center bg-background/50 backdrop-blur-3xl">
                <BackButton/>
            </motion.div>
            <div
                className="mx-8 my-4">
                {children}
            </div>
        </>
    )
}
