import { MessageCirclePlus, Search } from "lucide-react"
import { Avatar, AvatarFallback } from "./components/ui/avatar"
import { Input } from "./components/ui/input"
import { ScrollArea } from "./components/ui/scroll-area"
import { Button } from "./components/ui/button"
import MessageListItem from "./components/app/message-list-item"
import MessageList from "./components/app/message-list"
import ChatsFeed from "./components/app/chats-feed"
import MessageForm from "./components/app/message-form"

function App() {

  return (
    <main className="w-screen h-screen max-h-screen overflow-hidden px-12 py-16">
      <div className="shadow-2xl h-full flex">
        <aside className="h-full w-1/3 border-r-2 border-gray-100 flex flex-col">
          {/* header */}
          <div className="border-b-2 border-gray-100">
            <div className="px-6 py-4 flex items-center gap-3">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex border rounded-sm items-center px-2 flex-grow">
                <Search size={16}/>
                <Input className="border-0 focus-visible:border-0 focus-visible:ring-0" type="search" placeholder="Search ..." />
              </div>
            </div>
          </div>
          {/* chat list  */}
          <div className="flex-grow">
            <ScrollArea >
              <div className="flex items-center justify-between px-6 mt-4">
                <h3 className="text-lg text-primary">Chats</h3>
                <Button variant={'ghost'} className="hover:bg-inherit text-primary hover:text-primary-bold transition-all">
                  <MessageCirclePlus/>
                </Button>
              </div>
              <MessageList className="mt-5">
                <MessageListItem/>
              </MessageList>
            </ScrollArea>
          </div>
        </aside>

        {/* messages feed */}
        <div className="flex-grow flex flex-col bg-[#F3F2F5]">
          {/* messages */}
          <ChatsFeed/>
          {/* message form */}
          <MessageForm/>
        </div>
      </div>
    </main>
  )
}

export default App
