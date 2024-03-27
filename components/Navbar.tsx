import Link from "next/link";
import {FolderKanban, Home, Settings} from "lucide-react";
import {AvatarIcon} from "@radix-ui/react-icons";

const Navbar = () => {
    return (
        <nav className="md:top-4 md:bottom-full fixed bottom-4 w-full mx-auto z-10">
            <ul className="flex flex-row space-x-1 justify-between items-center rounded-full p-1 text-muted-foreground border backdrop-blur-md bg-background/50 max-w-[350px] mx-auto">
                <Link href="/" className="py-4 w-full flex justify-center hover:bg-accent rounded-full transition-all duration-300 bg-accent text-accent-foreground">
                    <li>
                        <Home className="h-4 w-4"/>
                    </li>
                </Link>
                <Link href="/about" className="py-4 w-full flex justify-center hover:bg-accent rounded-full transition-all duration-300">
                    <li>
                        <FolderKanban className="h-4 w-4"/>
                    </li>
                </Link>
                <Link href="/contact" className="py-4 w-full flex justify-center hover:bg-accent rounded-full transition-all duration-300">
                    <li>
                        <Settings className="h-4 w-4"/>
                    </li>
                </Link>
                <Link href="/auth" className="py-4 w-full flex justify-center hover:bg-accent rounded-full transition-all duration-300">
                    <li>
                        <AvatarIcon className="h-4 w-4"/>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;