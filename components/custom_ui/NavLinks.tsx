"use client";

import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

const links = [
  { name: "Home", href: "/feed", icon: Home },
  {
    name: "Search",
    href: "/feed/search",
    icon: Search,
    hideOnMobile: true,
  },
  { name: "Explore", href: "/feed/explore", icon: Compass },
  {
    name: "Reels",
    href: "/feed/reels",
    icon: Clapperboard,
  },
  {
    name: "Messages",
    href: "/feed/messages",
    icon: MessageCircle,
  },
  {
    name: "Notifications",
    href: "/feed/notifications",
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: "Create",
    href: "#",
    icon: PlusSquare,
  },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <React.Fragment key={link.name}>
            {link?.name !== "Create" ? (
              <Link
                href={link.href}
                className={buttonVariants({
                  variant: isActive ? "secondary" : "ghost",
                  className: cn(
                    "md:mx-auto lg:gap-3 lg:w-full lg:!justify-start ",
                    {
                      "hidden md:flex": link.hideOnMobile,
                    }
                  ),
                  size: "lg",
                })}
              >
                <LinkIcon className="w-6" />
                <p
                  className={`${cn("hidden lg:block", {
                    "font-extrabold": isActive,
                  })}`}
                >
                  {link.name}
                </p>
              </Link>
            ) : (
              <label
                htmlFor="upload"
                className="mx-auto flex gap-3 w-full justify-center hover:bg-neutral-800 p-2 rounded-md"
              >
                <LinkIcon className="w-6" />
                <input type="file" id="upload" className="hidden" />

                <p
                  className={`${cn("hidden lg:block", {
                    "font-extrabold": isActive,
                  })}`}
                >
                  {link.name}
                </p>
              </label>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default NavLinks;
