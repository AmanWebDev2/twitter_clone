import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IoLeafOutline } from "react-icons/io5"
import PostWrite from "./PostWrite"

export function PostDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild >
        <div>
         <Button className=" hidden xl:inline-flex w-full capitalize rounded-full bg-blue-500 hover:bg-blue-600 py-6 font-semibold text-lg">Post</Button>
        <Button className=" xl:hidden px-5 mx-1 w-full rounded-full bg-blue-500 hover:bg-blue-600 py-6 font-semibold text-lg">
        <IoLeafOutline />
        </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl px-1 py-6">
        <PostWrite  css="border-0" />
      </DialogContent>
    </Dialog>
  )
}
