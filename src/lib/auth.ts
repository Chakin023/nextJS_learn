import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import conn from "@/db"; // your drizzle instance
import { account, session, user, verification } from "@/db/schema";

const db = await conn;
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql", // or "pg", mysql", "sqlite"
        schema: {
            user,
            account,
            session,
            verification
        },
        usePlural: false
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: false, //เมื่อ register เสร็จ login อัตโนมัติ
        requireEmailVerification: false, //ยืนยัน e-mail
        minPasswordLength: 4
    }
});