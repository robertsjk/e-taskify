import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-white w-full h-14 px-4 shadow-sm">
      <div className="flex items-center h-full w-full md:max-w-screen-2xl mx-auto">
        <Logo />
        <div className="ml-auto space-x-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild size="sm" className="bg-stone-800">
            <Link href="/sign-up">Taskify for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
