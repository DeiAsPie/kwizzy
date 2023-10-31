"use client";
import { useSession } from "next-auth/react";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  //   DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { LogOutIcon, UserIcon } from "lucide-react";
import { NavbarMenuItem } from "@nextui-org/navbar";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { HeartFilledIcon } from "./icons";
import { signOut } from "next-auth/react";

export function ProfileDetails() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "unauthenticated") {
    return <Button>Login</Button>;
  }

  return (
    <>
      <Divider />
      <NavbarMenuItem>
        <div className="flex px-2 items-center gap-2">
          <Avatar
            name={session?.user.name?.split(" ")[0]}
            src={session?.user.image as string}
          />
          {session?.user.name}
        </div>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Button
          variant="light"
          color="danger"
          className="flex items-center gap-2"
        >
          <LogOutIcon size={17} />
          Logout
        </Button>
      </NavbarMenuItem>
    </>
  );
}

export function ProfileDropDown() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Spinner color="secondary" />;
  }

  if (status === "unauthenticated") {
    return (
      <Button as={Link} href="/login">
        Login
      </Button>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="lg" variant="light" isIconOnly>
          <Avatar
            name={session?.user.name?.split(" ")[0]}
            src={session?.user.image as string}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="text-foreground">
        <DropdownItem className="p-0 rounded-xl">
          <Button
            isExternal
            as={Link}
            className="text-sm w-full font-normal text-default-600 bg-default-100"
            href="#"
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="light"
          >
            Sponsor
          </Button>
        </DropdownItem>
        <DropdownItem key="new">
          <div className="flex items-center gap-2">
            <UserIcon size={17} />
            Profile
          </div>
        </DropdownItem>
        {/* <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem> */}
        <DropdownItem
          key="logout"
          className="text-danger"
          onClick={() => signOut()}
          color="danger"
        >
          <div className="flex items-center gap-2">
            <LogOutIcon size={17} />
            Logout
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
