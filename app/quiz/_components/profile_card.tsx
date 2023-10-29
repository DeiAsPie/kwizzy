"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { CrownIcon, FileEdit } from "lucide-react";
import { Card, CardBody } from "@nextui-org/card";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import {
  LogOutIcon,
  LibrarySquareIcon,
  BarChartIcon,
  UserCircleIcon,
} from "lucide-react";

export function ProfileCard() {
  const [extendNav, setExtendNav] = useState(false);

  const selectedNav = "dashboard";

  const handleMouseEnter = () => {
    setExtendNav(true);
  };
  const handleMouseLeave = () => {
    setExtendNav(false);
  };

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full"
      shadow="sm"
    >
      <CardBody className="w-56 p-2">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image
            isBlurred
            width={100}
            height={100}
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
          />
          <div className="font-mono text-sm">Ayush K</div>
          <Button size="sm" color="warning" variant="shadow">
            <CrownIcon size={15} />
            Upgrade to Pro
          </Button>
        </div>
        <div>
          <Listbox
            variant="faded"
            className="mt-2"
            aria-label="Listbox menu with icons"
          >
            <ListboxItem
              key="new"
              startContent={<LibrarySquareIcon size={15} />}
            >
              My Quizzes
            </ListboxItem>
            <ListboxItem key="copy" startContent={<BarChartIcon size={15} />}>
              Results
            </ListboxItem>
            <ListboxItem key="edit" startContent={<UserCircleIcon size={15} />}>
              Settings
            </ListboxItem>
            <ListboxItem
              key="delete"
              className="text-danger"
              color="danger"
              startContent={<LogOutIcon size={15} />}
            >
              Logout
            </ListboxItem>
          </Listbox>
        </div>
      </CardBody>
    </Card>
  );
}
