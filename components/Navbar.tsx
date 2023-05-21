"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { setTheme } = useTheme();
  const { data: session } = useSession();

  return (
    <div className="flex w-fullh-screen max-w-4xl container mx-auto px-6 flex-col">
      <header className="w-full flex items-center justify-between mb-10 py-4 border-b-2">
        <Link
          href="/"
          className="md:text-3xl text-xl font-bold cursor-pointer text-black"
        >
          Photo.io
        </Link>
        <Image src="/vercelLogo.png" alt="logo" width={30} height={30} />
        {/* <p onClick={() => setTheme("dark")}>Dark</p>
        <p onClick={() => setTheme("light")}>Light</p> */}

        <Link href="/protected/server">Protected (server)</Link>
        <Link href="/protected/client">Protected (client)</Link>

        {!session && (
          <p className="cursor-pointer" onClick={() => signIn()}>
            Sign in
          </p>
        )}
        {session && (
          <p className="cursor-pointer" onClick={() => signOut()}>
            Sign out
          </p>
        )}
      </header>
    </div>
  );
}
