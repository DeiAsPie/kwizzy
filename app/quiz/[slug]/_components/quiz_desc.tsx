"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { PublisherCard } from "../_components/publisher";
import { Divider } from "@nextui-org/divider";
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  CopyCheckIcon,
  CopyPlusIcon,
  HeartIcon,
} from "lucide-react";

export function QuizDescCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full"
      shadow="sm"
    >
      <CardBody>
        <div className="flex">
          <Image
            isBlurred
            isZoomed
            width={100}
            height={100}
            alt="NextUI hero Image with delay"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          />
          <div className="p-1.5 pl-4 flex flex-grow flex-col justify-between">
            <div className="flex justify-between items-center">
              <Chip size="sm">Private</Chip>
              <div className="flex">
                <Button
                  className="hover:text-red-500"
                  variant="light"
                  size="sm"
                  aria-label="Like"
                >
                  <HeartIcon size={17} />
                  22K
                </Button>
                <Button variant="light" size="sm" aria-label="copy and edit">
                  <CopyPlusIcon size={17} />
                  Copy and Edit
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  aria-label="report"
                >
                  <AlertTriangleIcon size={14} />
                </Button>
              </div>
            </div>
            <div className="text-xl font-semibold">
              Title with the long text green bholiut zxdsa harry
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500">
              <CheckCircleIcon size={13} /> Attempted 20 mins ago
            </div>
          </div>
        </div>

        <PublisherCard />
      </CardBody>
    </Card>
  );
}
