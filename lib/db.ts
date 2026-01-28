import { MONGODB_URI } from "@/app/constants/env";
import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("database connected");
  } catch (error) {
    console.log("could not connect to DB", error);
    process.exit(1);
  }
}

export default connectToDatabase;
