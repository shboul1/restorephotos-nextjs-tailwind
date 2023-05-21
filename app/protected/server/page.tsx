import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptitions } from "@config/auth-config";
import { redirect } from "next/navigation";

const ProtectedServer = async () => {
  const session = await getServerSession(authOptitions);
  if (!session) return redirect("/sign-in");
  return (
    <div className="flex w-fullh-screen max-w-4xl container mx-auto px-6 flex-col">
      ProtectedServer
    </div>
  );
};

export default ProtectedServer;
