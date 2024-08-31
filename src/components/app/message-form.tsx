import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import "./message-form.css"
import { Textarea } from "../ui/textarea"
import { Send } from "lucide-react"

const formSchema = z.object({
    message: z.string().min(1),
})

export default function MessageForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 py-6">
            <div className="bg-white shadow-md rounded-md flex w-full items-center form-group px-3 py-3">
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="flex-grow">
                            <FormControl>
                                <Textarea className="border-0 shadow-none focus-visible:ring-0 !min-h-6 placeholder:text-normal placeholder:text-gray-300" placeholder="Tape a message" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="text-white">Send<Send className="ml-2" size={16}/></Button>
            </div>
        </form>
    </Form>
    )
}