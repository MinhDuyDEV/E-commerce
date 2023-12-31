import { UserButton, auth } from "@clerk/nextjs";
import React from "react";
import MainNav from "@/components/MainNav";
import StoreSwitcher from "@/components/StoreSwitcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher items={stores}></StoreSwitcher>
        <MainNav className="mx-6"></MainNav>
        <div className="flex items-center ml-auto space-x-4">
          <UserButton afterSignOutUrl="/"></UserButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
