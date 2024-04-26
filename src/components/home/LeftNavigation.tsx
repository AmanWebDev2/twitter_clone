"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { IoMdHome, IoMdNotificationsOutline } from "react-icons/io";
import { IoLeafOutline, IoMailOutline, IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { Button } from "@/components/ui/button";

interface TwitterSideBarLink {
  title: string;
  icon: React.ReactNode;
  route: string;
}

const sideBarLinks: TwitterSideBarLink[] = [
  {
    title: "Home",
    route: "/home",
    icon: <IoMdHome />,
  },
  {
    title: "Explore",
    route: "/explore",
    icon: <IoSearch />,
  },
  {
    title: "Notifications",
    route: "/notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    route: "/messages",
    icon: <IoMailOutline />,
  },
  {
    title: "Profile",
    route: "/profile",
    icon: <AiOutlineUser />,
  },
];

const LeftNavigation = () => {
  const pathName = usePathname();

  return (
    <header className="flex flex-col w-[88px] mr-10 xl:mr-0 ml-auto xl:w-auto">
      <div className="logo mx-5 mt-3">
        <div className="items-start inline-block text-2xl cursor-pointer hover:bg-gray-700 transition-all  p-3 rounded-full">
          <BsTwitterX fill="white" />
        </div>
      </div>
        <nav className="">
          {sideBarLinks.map(({ route, title, icon }) => {
            const isActive =
              pathName === route || pathName.startsWith(`${route}/`);
            return (
              <Link
                href={route}
                key={title}
                className={cn(
                  "flex gap-2 w-fit items-center px-5 py-2 m-4 rounded-full justify-start cursor-pointer transition-all hover:bg-gray-700",
                  {
                    "bg-gray-600": isActive,
                  }
                )}
              >
                <span className="text-2xl">{icon}</span>
                <p className="hidden xl:block text-lg font-semibold max-lg:hidden">{title}</p>
              </Link>
            );
          })}
          <div className="px-5">
          <Button className=" hidden xl:inline-flex w-full capitalize rounded-full bg-blue-500 hover:bg-blue-600 py-6 font-semibold text-lg">Post</Button>
        <Button className=" xl:hidden px-5 mx-1 w-full rounded-full bg-blue-500 hover:bg-blue-600 py-6 font-semibold text-lg">
        <IoLeafOutline />
        </Button>
          </div>
        </nav>
    </header>
  );
};

export default LeftNavigation;
