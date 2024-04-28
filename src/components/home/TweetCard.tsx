import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  FaHeart,
  FaComment,
  FaRegComment,
  FaRegHeart,
  FaRegBookmark,
  FaRetweet,
} from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiBarChart2Line } from "react-icons/ri";
import { IoBookmark } from "react-icons/io5";
import { FiShare } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

const TweetCard = () => {
  return (
    <div className="">
      <Card className="px-6 py-2 flex items-start justify-center border-gray-500 hover:bg-[#0c0c0c] transition-all  rounded-none cursor-pointer">
        <CardHeader className="p-0 pr-2">
          <Avatar className="mr-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="p-0 flex-1">
          <div className="flex items-center justify-between">
            <p>
              Aman <span>@aman</span> <span>19m</span>
            </p>
            <div className="more">
              <IoIosMore />
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
            possimus!
          </p>
          <TweetCardFooter />
        </CardContent>
      </Card>
    </div>
  );
};

const TweetCardFooter = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="reply text-xl hover:rounded-ful hover:text-blue-500">
        <div className="flex items-center gap-1">
          <FaRegComment className="text-xl" />
          <span className="text-sm">101</span>
        </div>
        {/* <FaComment/> */}
      </div>
      <div className="repost text-xl hover:text-green-500">
        <div className="flex items-center gap-1">
          <FaRetweet />
          <span className="text-sm">1</span>
        </div>
      </div>
      <div className="like text-xl hover:text-red-500">
        <div className="flex items-center gap-1">
          <FaRegHeart />
          <span className="text-sm">122</span>
        </div>
        {/* <FaHeart/> */}
      </div>
      <div className="view text-xl hover:text-blue-800">
      <div className="flex items-center gap-1">
        <RiBarChart2Line />
        <span className="text-sm">122</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bookmark text-xl hover:text-blue-500">
          <FaRegBookmark />
          {/* <IoBookmark /> */}
        </div>
        <div className="share text-xl hover:text-blue-500">
          <FiShare />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
