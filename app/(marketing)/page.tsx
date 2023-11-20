import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center">
      <div className="flex border shadow-sm bg-amber-100 text-amber-700 p-4 mb-4 rounded-full uppercase">
        <Medal className="h-6 w-6 mr-2" />
        No 1 task management
      </div>
      <h1 className="text-3xl md:text-6xl text-foreground mb-6">
        Taskify to get things done
      </h1>
      <div className="autumn text-3xl md:text-6xl text-white p-4 rounded-md w-fit mb-4">
        make progress.
      </div>

      <div className="text-sm md:text-xl text-stone-500 text-center max-w-xs md:max-w-2xl">
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify
      </div>
      <Button className="mt-6 bg-stone-800" size="lg">
        <Link href="/sign-up">Get started with Taskify</Link>
      </Button>
    </div>
  );
}
