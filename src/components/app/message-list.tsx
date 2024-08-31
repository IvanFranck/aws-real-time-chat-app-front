import { cn } from "@/lib/utils";

export default function MessageList({children, className}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <ul className={cn("w-full px-3", className)} >
            {children}
        </ul>
    )
}