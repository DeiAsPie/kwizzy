import { Button } from "@nextui-org/button";
import { PlayIcon, ShareIcon } from "lucide-react";

export function QuizActions() {
  return (
    <div className="py-2 flex flex-col gap-1.5">
      <Button color="primary" className="w-full" variant="flat" size="lg">
        <PlayIcon size={20} />
        Start Quiz
      </Button>
      <Button className="w-full" variant="flat" size="lg">
        <ShareIcon size={20} />
        Share Quiz
      </Button>
    </div>
  );
}
