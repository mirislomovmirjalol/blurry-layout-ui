"use client"
import Link from "next/link";
import {navlinks} from "@/constants/navlinks";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="md:top-4 md:bottom-full fixed bottom-4 w-full mx-auto z-10">
            <ul className="flex flex-row space-x-1 justify-between items-center rounded-full p-1 text-muted-foreground border backdrop-blur-md bg-background/50 max-w-[350px] mx-auto">
                {navlinks.map((link) => (
                    <TooltipProvider key={link.href} delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={link.href}
                                      className={cn("py-4 w-full flex justify-center hover:bg-accent rounded-full transition-all duration-300", pathname === link.href ? "bg-accent text-accent-foreground" : "")}>
                                    <li>
                                        {link.icon}
                                    </li>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{link.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;