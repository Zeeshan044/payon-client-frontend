import Link from "next/link";
import React from "react";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";
import { BrandLogoFull } from "@/components/SvgIcon";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { useLoginMutation } from "@/services/data/auth.data";
import { toast } from "react-toastify";

function LoginPage() {
  const router = useRouter();
  const { mutate, isLoading } = useLoginMutation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess(data, variables, context) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("user_id", data.user.id);
          toast.success("Login success");
          router.push(ROUTES.dashboard);
        },
      }
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary flex-col gap-y-2 px-8">
      <BrandLogoFull className="w-40" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full md:w-80 mt-4"
      >
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="w-full !bg-white !text-primary"
          // @ts-ignore
          onClick={handleSubmit}
        >
          {isLoading ? "Loading..." : "Login"}
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
