"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { CheckIcon, LockIcon, MailIcon, User2Icon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import * as z from "zod";
import { useSearchParams } from "next/navigation";

const SignUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8).max(50),
}); // extracting the type

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting, isSubmitSuccessful },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/home";

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    console.log(data);

    const x = await signIn("credentials", {
      ...data,
      method: "signup",
      callbackUrl: callbackUrl,
    });
    console.log(x);
  };
  // const [isVisible, setIsVisible] = React.useState(false);

  // const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="w-full grow flex justify-center items-center p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-background/60 dark:bg-default-100/50 border border-black/20 dark:border-white/20 rounded-xl flex flex-col gap-2 w-full md:max-w-sm"
      >
        <h1 className="text-xl text-start font-semibold">Join ProQuiz</h1>
        <Button variant="bordered" radius="sm" size="lg">
          <FcGoogle size={20} />
          Continue with Google
        </Button>
        {/* // Todo: Add auth via otp */}
        {/* <Button variant="bordered" radius="sm" size="lg">
          <SmartphoneIcon size={20} />
          Continue with OTP
        </Button> */}
        <div className=" flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center text-neutral-300 text-sm dark:text-white">
            or
          </p>
        </div>
        <Input
          type="input"
          color={errors.name ? "danger" : "default"}
          label="Name"
          placeholder="Elon Tusk"
          {...register("name")}
          labelPlacement="outside"
          startContent={
            <User2Icon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        {errors.name && (
          <span className="text-xs text-danger">{errors.name.message}</span>
        )}
        <Input
          type="email"
          label="Email"
          color={errors.email ? "danger" : "default"}
          placeholder="you@example.com"
          {...register("email")}
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        {errors.email && (
          <span className="text-xs text-danger">{errors.email.message}</span>
        )}
        <Input
          type="password"
          color={errors.password ? "danger" : "default"}
          label="Password"
          placeholder="Pas*****"
          {...register("password")}
          labelPlacement="outside"
          startContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        {errors.password && (
          <span className="text-xs text-danger">{errors.password.message}</span>
        )}
        <Button
          variant="solid"
          color={isSubmitSuccessful ? "success" : "primary"}
          radius="sm"
          isLoading={isLoading || isSubmitting}
          size="md"
          type="submit"
          className="font-semibold text-xl"
        >
          {isSubmitSuccessful ? (
            <>
              <CheckIcon />
              Success
            </>
          ) : (
            "Sign up"
          )}
        </Button>
        <div className="p-2">
          {"Already have an account? "}
          <Link className="text-blue-500 p-1" href="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
