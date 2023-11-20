import Sidebar from "../../_components/sidebar";
import OrgControl from "./_components/org-control";

const OrganizationLayout = ({
  children,
  params: { organizationId },
}: {
  children: React.ReactNode;
  params: { organizationId: string };
}) => {
  return (
    <>
      <OrgControl id={organizationId} />
      <div className="pt-20 flex max-w-6xl 2xl:max-w-screen-xl mx-auto gap-x-7">
        <div className="hidden md:block w-64 shrink-0">
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default OrganizationLayout;
