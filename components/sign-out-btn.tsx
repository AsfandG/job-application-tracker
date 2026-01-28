"use client";

import { signOut } from "@/lib/auth/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function signOutButton() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        const response = await signOut();
        if (response.data) {
          router.push("/sign-in");
        } else {
          alert("Error signing out");
        }
      }}
    >
      Logout
    </DropdownMenuItem>
  );
}
