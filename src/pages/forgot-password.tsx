import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

interface Props {}

type FormInputs = {
  email: string;
};

function ForgotPassword({}: Props) {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmitHandler = () => {
    console.log("forgot");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary flex-col">
      <h1 className="mb-8 text-2xl  font-bold h-auto text-white">
        Reset Password
      </h1>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-2 w-full md:w-80"
      >
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          className=" !my-0.5"
        />
        <Button className="w-full !bg-white !text-primary">
          Reset Password
        </Button>
      </form>
      <Link
        className="text-white cursor-pointer mt-2 underline"
        href={ROUTES.login}
      >
        Back to login
      </Link>
    </div>
  );
}

export default ForgotPassword;
