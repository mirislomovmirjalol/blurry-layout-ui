import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function AuthPage() {
    return (
        <div className="flex justify-center mt-64">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>Currently sign in supports only with google.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Button className="w-full" variant="default">
                        Sign in with Google
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}