import {FolderKanban, Home} from "lucide-react";
import {ReactNode} from "react";
import {AvatarIcon} from "@radix-ui/react-icons";

type Navlink = {
    href: string;
    label: string;
    icon: ReactNode;
}

export const navlinks: Navlink[] = [
    {
        href: "/",
        label: "Home",
        icon: <Home className="h-4 w-4"/>,
    },
    {
        href: "/projects",
        label: "Projects",
        icon: <FolderKanban className="h-4 w-4"/>
    },
    {
        href: "/settings",
        label: "Settings",
        icon: <FolderKanban className="h-4 w-4"/>
    },
    {
        href: "/auth",
        label: "Auth",
        icon: <AvatarIcon className="h-4 w-4"/>,
    },
] as const;