"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { LockIcon, MailIcon, SmartphoneIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import React from "react";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="w-full grow flex justify-center items-center p-2">
      <div className="p-4 bg-white dark:bg-black border-white dark:border-black border-2 rounded-xl flex flex-col gap-2 w-full md:max-w-sm">
        <h1 className="text-xl text-start font-semibold">Join ProQuiz</h1>
        <Button variant="bordered" radius="sm" size="lg">
          <FcGoogle size={20} />
          Continue with Google
        </Button>
        <Button variant="bordered" radius="sm" size="lg">
          <SmartphoneIcon size={20} />
          Continue with OTP
        </Button>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center text-neutral-300 text-sm dark:text-white">
            or
          </p>
        </div>
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          type="password"
          label="Password"
          placeholder="Pas*****"
          labelPlacement="outside"
          startContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Link
          className="font-semibold text-blue-500 py-1"
          href="/forget-password"
        >
          Forgot Password?
        </Link>
        <Button
          variant="solid"
          color="primary"
          radius="sm"
          size="md"
          className="font-semibold text-xl"
        >
          Sign up
        </Button>
        <div className="p-2">
          {"Don't have an account? "}
          <Link className="text-blue-500 p-1" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
