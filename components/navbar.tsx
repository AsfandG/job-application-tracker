"use client";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import SignOutButton from "./sign-out-btn";

import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useSession } from "@/lib/auth/auth-client";

export default function Navbar() {
  const data = useSession;

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>

        <div className="flex items-center gap-4">
          {data ? (
            <>
              <Link href="/dashboard">
                <Button
                  className="text-gray-700 hover:text-black cursor-pointer"
                  variant="ghost"
                >
                  Dashboard
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" className="cursor-pointer">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {/* {session.user.name[0].toUpperCase()} */}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <div>
                      {/* <p>{session.user.name}</p>
                      <p>{session.user.email}</p> */}
                    </div>
                  </DropdownMenuLabel>

                  <SignOutButton />
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  className="text-gray-700 hover:text-black cursor-pointer"
                  variant={"ghost"}
                >
                  {" "}
                  Log In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-primary hover:bg-primary/90 cursor-pointer">
                  Start for free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
