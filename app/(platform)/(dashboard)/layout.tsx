import Navbar from "./_components/navbar";
import { Toaster } from "sonner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <Toaster />
      {children}
    </div>
  );
};

export default DashboardLayout;
