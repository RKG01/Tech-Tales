import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load the .env.local file manually
dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON!,
  },
});
