"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProtectedClient() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in?callbackUrl=/protected/client");
    },
  });
  return (
    <div className="flex w-fullh-screen max-w-4xl container mx-auto px-6 flex-col">
      ProtectedClient
    </div>
  );
}
