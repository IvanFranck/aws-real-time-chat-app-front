import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const addContactSchema = z.object({
    email: z.string().email()
})

export default function AddContactForm() {
    const form = useForm<z.infer<typeof addContactSchema>>({
        resolver: zodResolver(addContactSchema),
        defaultValues: {
            email: ''
        }
    })
    function onSubmit(values: z.infer<typeof addContactSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="flex-grow">
                            <FormControl>
                                <Input className=" placeholder:text-normal placeholder:text-gray-300" placeholder="Tape a message" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="text-white w-max hover:bg-primary-bold">Start conversation</Button>
            </form>
        </Form>
    )
} 