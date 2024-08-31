import { Avatar, AvatarFallback } from "../ui/avatar";

export default function MessageListItem() {
    return (
        <li className="flex items-center gap-3 w-full px-3 py-3 cursor-pointer hover:bg-slate-50/50 transition-all">
            <Avatar className="">
                <AvatarFallback>TD</AvatarFallback>
            </Avatar>
            <div className="grid grid-flow-col-dense grid-rows-2 flex-grow">
                <p className="col-span-1 place-self-stretch text-sm font-normal">Teddy D</p>
                <p className="place-self-stretch text-sm text-gray-400 font-thin line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 👍</p>
                <p className="row-span-2 text-sm font-normal text-gray-400 place-self-strech text-end">Aug 30</p>
            </div>
        </li>
    )
}