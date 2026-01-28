"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function signOutButton() {
  return (
    <DropdownMenuItem onClick={async () => await signOut()}>
      Logout
    </DropdownMenuItem>
  );
}
