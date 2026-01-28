import { MONGODB_URI } from "@/app/constants/env";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const client = new MongoClient(MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: { enabled: true },
});

export async function getSession() {
  const response = await auth.api.getSession({
    headers: await headers(),
  });

  return response;
}
export async function signOut() {
  const response = await auth.api.signOut({
    headers: await headers(),
  });

  if (response.success) {
    redirect("/sign-in");
  }
}
