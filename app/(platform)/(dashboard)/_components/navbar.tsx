import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 w-full px-4 h-14 border-b shadow-sm z-50">
      <div className="flex items-center h-full w-full gap-x-4">
        <MobileSidebar />
        <div className="hidden md:block">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block"
          variant="primary"
        >
          Create
        </Button>
        <Button
          size="sm"
          className="rounded-sm block md:hidden"
          variant="primary"
        >
          <Plus className="h-4 w-4" />
        </Button>

        <div className="ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
