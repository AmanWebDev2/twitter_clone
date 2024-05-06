import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CopyIcon } from "lucide-react"
import { IoLeafOutline } from "react-icons/io5"

export function PostDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
         <Button className=" hidden xl:inline-flex w-full capitalize rounded-full bg-blue-500 hover:bg-blue-600 py-6 font-semibold text-lg">Post</Button>
        <Button className=" xl:hidden px-5 mx-1 w-full rounded-full bg-blue-500 hover:bg-blue-600 py-6 font-semibold text-lg">
        <IoLeafOutline />
        </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
             POPOPOPOPOPOPOPO
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
