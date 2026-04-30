import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.DATABASE_URL);
const db = client.db("Skillsphere");

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    socialProviders: {
        google: {
            prompt: "select_account",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        },
    },
});