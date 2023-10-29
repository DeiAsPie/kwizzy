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

export function QuizControls() {
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
      <CardBody className="w-72 p-2"></CardBody>
    </Card>
  );
}
