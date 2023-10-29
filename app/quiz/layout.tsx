import { ProfileCard } from "./_components/profile_card";
import { QuizActions } from "./_components/quiz_actions";
import { QuizControls } from "./_components/quiz_controls";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2">
      <div>
        <ProfileCard />
        <QuizActions />
      </div>
      <div className="flex-grow">{children}</div>
      <div>
        <QuizControls />
      </div>
    </div>
  );
}
