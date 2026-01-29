import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { initializeUserBoard } from "../init-user-board";
import connectToDatabase from "../db";

const mongooseInstance = await connectToDatabase();
const client = mongooseInstance.connection.getClient();
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: { enabled: true },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          if (user) await initializeUserBoard(user.id);
        },
      },
    },
  },
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
