"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  const handleSignUp = async () => {
    await authClient.signUp.email(
      {
        //ลอง hard-code จริงๆต้องเอามาจาก form
        email: "user1@gmail.com",
        password: "1234abc",
        name: "User1 Doe",
      },
      {
        onRequest: (ctx) => {
          //show loading
          console.log("loading...", ctx.body);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log("success:", ctx.data);
          router.replace("/login");
        },
        onError: (ctx) => {
          // display the error message
          alert(ctx.error.message);
        },
      }
    );
  };
  return (
    <div>
      <Button onClick={handleSignUp}>สมัครสมาชิก</Button>
    </div>
  );
};

export default SignUpForm;
