import { cva } from "class-variance-authority"

const messageVariant = cva(
    "shadow-md rounded-lg p-2",
    {
        variants: {
            variant: {
                friend: "text-blue-600 bg-white !rounded-tl-none",
                default: "bg-blue-500 text-white !rounded-tr-none"
            }
        },
        defaultVariants: {
            variant: "default",
        },
    }
)
export default function Message() {
    return (
        <li className="w-full mb-6">
            <div className="flex flex-col items-end gap-2">
                <p className="bg-blue-500 shadow-md text-white rounded-lg !rounded-tr-none p-2">
                    Hello my friend
                </p>
                <span className="text-gray-400 text-sm">08:56</span>
            </div>
        </li>
    )
}
