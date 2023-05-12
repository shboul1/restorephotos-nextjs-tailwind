import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="border-t border-gray-200 w-full flex justify-between items-center">
      <div className="py-4 flex justify-between items-center w-full">
        <p className="text-sm">
          Powerd by{" "}
          <span className="font-bold cursor-pointer hover:text-gray-500 transition ease-in-out">
            Replicat,{" "}
          </span>{" "}
          <span className="font-bold cursor-pointer hover:text-gray-500 transition ease-in-out">
            Upload
          </span>{" "}
          and{" "}
          <span className="font-bold cursor-pointer hover:text-gray-500 transition ease-in-out">
            Vercel.
          </span>
        </p>
        <div className="flex items-center">
          <Link href="https://www.github.com" target="_blank">
            <Image src="/github.png" alt="github" width={25} height={25} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank">
            <Image src="/twitter.jpg" alt="twitter" width={25} height={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
