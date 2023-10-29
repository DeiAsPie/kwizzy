import { MailIcon, LockIcon, Link } from "lucide-react";
import { Input } from "@nextui-org/input";

export function EmailLogin() {
  return (
    <>
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
    </>
  );
}
