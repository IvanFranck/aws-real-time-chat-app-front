import { Avatar, AvatarFallback } from "../ui/avatar";

export default function MessageListItem() {
    return (
        <div className="flex items-center gap-3 w-full">
            <Avatar>
                <AvatarFallback>TD</AvatarFallback>
            </Avatar>
            <div className="grid grid-cols-2 grid-rows-2 place-items-stretch">
                <h5>Teddy D</h5>
                <p>I will purchase it for sure. 👍</p>
                <span>Aug 30</span>
            </div>
        </div>
    )
}