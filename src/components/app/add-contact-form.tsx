import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useState } from "react"
import { findContact } from "@/api"
import { useToast } from "@/hooks/use-toast"
import { User, UserConnection } from "@/API"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { getNameInitials } from "../utils"

const addContactSchema = z.object({
    email: z.string().email()
})

export default function AddContactForm() {
    const [loading, toggleLoading] = useState(false)
    const [contacts, setContacts] = useState<UserConnection | null>(null)

    const { toast } = useToast()

    const form = useForm<z.infer<typeof addContactSchema>>({
        resolver: zodResolver(addContactSchema),
        defaultValues: {
            email: ''
        }
    })
    async function onSubmit(values: z.infer<typeof addContactSchema>) {
        toggleLoading(true)
        await findContact(values.email)
            .then((result) => {
                console.log(result)
                setContacts(result.data.getUser)
            })
            .catch((error) => {
                toast(error)
            })
            .finally(() => {
                toggleLoading(false)
            })
    }
    return (
        loading ? (
            <div className="w-full grid place-items-center">
                <span className="loader"></span>
            </div>
        ) :
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">

                    {
                        contacts && contacts.items.length > 0 ?
                            contacts.items.map((contact) => (
                                <Contact contact={contact} key={contact.id} />
                            ))
                            : (
                                <p className="w-full text-center text-gray-400">
                                    No user found!
                                </p>
                            )
                    }

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-grow">
                                <FormControl>
                                    <Input className=" placeholder:text-normal placeholder:text-gray-300" placeholder="Tape a message" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="text-white w-max hover:bg-primary-bold">
                        Find contact
                    </Button>
                </form>
            </Form>
    )
}

type ContactProps = {
    contact: User
}


const Contact = ({ contact }: ContactProps) => {
    return (
        <div className="flex items-center gap-3 w-full px-3 py-3 cursor-pointer rounded-sm hover:bg-slate-200/50 transition-all">
            <Avatar className="">
                <AvatarFallback className="bg-gray-300">{getNameInitials(contact.userName)}</AvatarFallback>
            </Avatar>
            <div className="grid grid-flow-col-dense grid-rows-2 flex-grow">
                <p className="col-span-1 place-self-stretch text-sm font-normal">{contact.userName}</p>
                <p className="place-self-stretch text-sm text-gray-400 font-thin line-clamp-1">
                    {contact.email}
                </p>
            </div>
        </div>
    )
}