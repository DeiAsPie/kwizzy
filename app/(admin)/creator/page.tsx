import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { SearchIcon } from "lucide-react";
import { FcSearch } from "react-icons/fc";
import { Section } from "./_components/section";

export default function CreatorPage() {
  return (
    <div>
      {/* bg-gradient-to-br from-primary-50 via-white dark:via-black to-secondary-50 */}
      <div className="py-4 px-4 flex items-center justify-center w-full">
        <div className="max-w-md w-full">
          <Input
            size="lg"
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-50 border border-primary w-full",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search Quizzes..."
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
        </div>
      </div>
      <Section />
      <Section />
    </div>
  );
}
