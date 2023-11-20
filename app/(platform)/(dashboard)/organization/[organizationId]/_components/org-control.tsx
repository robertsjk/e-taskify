"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { useEffect } from "react";

const OrgControl = ({ id }: { id: string }) => {
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: id,
    });
  }, [id, setActive]);

  return null;
};

export default OrgControl;
