"use client"
import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import React from "react";
import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter()
    return (
        <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2"/>
            Go Back
        </Button>
    )
}

export default BackButton;