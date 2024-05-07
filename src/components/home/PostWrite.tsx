import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { FiImage } from "react-icons/fi"
import { BsEmojiSmile } from "react-icons/bs"
import { RiCalendarScheduleLine, RiFileGifLine } from "react-icons/ri"

const PostWrite = ({ css } : {css?:string}) => {
  return (
    <div>
        <Card className={`px-6 py-2 flex items-start justify-center border-gray-500 transition-all  rounded-none cursor-pointer ${css}`}>
        <CardHeader className="p-0 pr-2">
          <Avatar className="mr-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="p-0 flex-1">
          <div className="flex items-center justify-between">
             <Textarea placeholder="What's happening?" className="w-full bg-transparent text-white border-0 focus-visible:ring-offset-0 resize-none placeholder:text-lg" rows={1} />
          </div>
          <div className="post-footer flex items-center justify-between ">
          <div className="attachments-container flex items-center gap-4">
            <div className="icon">
                <FiImage className="text-blue-500 text-xl" />
            </div>
            <div className="icon">
                <RiFileGifLine className="text-blue-500 text-xl"/>
            </div>
            <div className="icon">
                <BsEmojiSmile className="text-blue-500 text-xl"/>
            </div>
            <div className="icon">
                <RiCalendarScheduleLine className="text-blue-500 text-xl" />
            </div>
          </div>
          <Button className="capitalize rounded-full bg-blue-500 hover:bg-blue-600 py-3 px-5 font-bold text-sm">Post</Button>

          </div>
          
        </CardContent>
      </Card>
    </div>
  )
}

export default PostWrite