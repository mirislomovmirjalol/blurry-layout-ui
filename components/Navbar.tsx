"use client"
import Link from "next/link";
import {navlinks} from "@/constants/navlinks";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className="md:top-4 md:bottom-full fixed bottom-4 w-full mx-auto z-10">
            <ul className="flex flex-row space-x-1 justify-between items-center rounded-full p-1 text-muted-foreground border backdrop-blur-md bg-background/50 max-w-[350px] mx-auto">
                {navlinks.map((link) => (
                    <Link key={link.href} href={link.href}
                          className={cn("py-4 w-full flex justify-center hover:bg-accent rounded-full transition-all duration-300", pathname === link.href ? "bg-accent text-accent-foreground" : "")}>
                        <li>
                            {link.icon}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;