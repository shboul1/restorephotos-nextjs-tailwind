import Image from "next/image";
export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between mb-10 py-4 border-b-2">
      <h1 className="md:text-3xl text-xl font-bold cursor-pointer text-black">
        Photo.io
      </h1>
      <Image src="/vercelLogo.png" alt="logo" width={30} height={30} />
    </header>
  );
}
