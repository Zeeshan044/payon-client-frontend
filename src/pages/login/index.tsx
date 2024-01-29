import Link from "next/link";
import React from "react";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";
import { BrandLogoFull } from "@/components/SvgIcon";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

function LoginPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(ROUTES.dashboard);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary flex-col gap-y-2 px-8">
      <BrandLogoFull className="w-40" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full md:w-80 mt-4"
      >
        <Input id="email" name="email" placeholder="Email" type="email" />
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Button className="w-full !bg-white !text-primary" onClick={() => {}}>
          Login
        </Button>
      </form>
      <Link
        className="text-white cursor-pointer underline"
        href={ROUTES.forgotPassword}
      >
        Forgot Password?
      </Link>
    </div>
  );
}

export default LoginPage;
