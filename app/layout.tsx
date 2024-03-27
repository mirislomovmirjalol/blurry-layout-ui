import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/Theme-provider";
import {ThemeChanger} from "@/app/ThemeChanger";
import {TabsDemo} from "@/components/Tabs";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className + " min-h-screen"}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="relative mx-8 flex flex-row justify-between items-center my-4">
                <h3>
                    Logo
                </h3>
                <ThemeChanger/>
            </div>
            <Navbar/>
            {children}
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
        </ThemeProvider>
        </body>
        </html>
    );
}
