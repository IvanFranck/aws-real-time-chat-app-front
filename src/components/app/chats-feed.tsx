import MessageList from "./message-list";
import Message from "./message";
import { ScrollBar, ScrollArea } from "../ui/scroll-area";

export default function ChatsFeed() {
    return (
        <ScrollArea className="max-h-full flex-grow px-6 pt-6 overflow-scroll">
            <ScrollBar />
            <div>
                <MessageList>
                    <Message />
                </MessageList>
            </div>
        </ScrollArea>
    )
}