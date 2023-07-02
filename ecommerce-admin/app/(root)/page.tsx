import { UserButton } from "@clerk/nextjs";
import React from "react";

const SetupPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default SetupPage;
