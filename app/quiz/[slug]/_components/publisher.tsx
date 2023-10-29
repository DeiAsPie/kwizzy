import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import React from "react";

export function PublisherCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="mt-4 shadow-none bg-transparent">
      <div className="flex justify-between">
        <div>
          <CardHeader className="justify-between">
            <div className="flex gap-4 items-center">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="/avatars/avatar-1.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small flex items-center gap-1 font-semibold leading-none text-default-600">
                  <div className="text-xs bg-neutral-500 text-white px-2 pb-0.5 rounded-full">
                    Author
                  </div>
                  Zoey Lang
                </h4>
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                      4
                    </p>
                    <p className=" text-default-400 text-small">Quizzes</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                      97.1K
                    </p>
                    <p className="text-default-400 text-small">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </div>
        <div className="flex items-center text-neutral-500 justify-center text-center gap-1 text-sm">
          <div className="w-20">
            <div className="font-bold text-base my-1 text-foreground">10</div>
            <div>Questions</div>
          </div>
          <Divider className="h-10" orientation="vertical" />
          <div className="w-20">
            <div className="font-bold text-base my-1 text-foreground">20</div>
            <div>Attempted</div>
          </div>
          <Divider className="h-10" orientation="vertical" />
          <div className="w-20">
            <div className="font-bold text-base my-1 text-foreground">16</div>
            <div>Favorites</div>
          </div>
          <Divider className="h-10" orientation="vertical" />
          <div className="w-20">
            <div className="font-bold text-base my-1 text-foreground">8</div>
            <div>Shared</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
