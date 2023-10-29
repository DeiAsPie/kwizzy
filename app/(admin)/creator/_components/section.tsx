import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BsPatchQuestion } from "react-icons/bs";
export function Section() {
  return (
    <div className="p-2 w-full">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-semibold gap-2 flex items-center text-neutral-500">
          <BsPatchQuestion size={28} />
          Section
        </h2>
        <div>
          <Link href="/">
            <Chip endContent={<ArrowRightIcon size={18} />} variant="flat">
              More
            </Chip>
          </Link>
        </div>
      </div>
    </div>
  );
}
