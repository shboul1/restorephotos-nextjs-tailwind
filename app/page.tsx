import Navbar from "@/components/Navbar";
import Line from "@/components/Line";
import Image from "next/image";
import PeopleSaid from "@components/PeopleSaid";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="flex w-fullh-screen max-w-4xl container mx-auto px-6 flex-col">
      <Navbar />
      <main className="flex w-full justify-center items-center flex-col">
        <a className="mb-8 border rounded-2xl p-1 text-xs text-center cursor-pointer text-slate-500 px-2 hover:scale-105 transition duration-300 ease-in-out">
          Used Over <span className="font-semibold">300,000</span> Happy Users
        </a>
        <h1 className="sm:text-6xl text-4xl text-center font-bold max-w-2xl">
          Restoring old photos{" "}
          <span className="relative text-[#3290EE] whitespace-nowrap">
            using AI
            <Line />
          </span>{" "}
          for everyone.
        </h1>
        <p className="mt-12 text-center text-sm text-gray-500 max-w-md">
          Have old and blurry face photos? Let our AI restore them so those
          memories can live on. 100% free – restore your photos today.
        </p>
        <div className="mt-10 flex justify-between items-center">
          <button className="border rounded-lg py-2.5 px-2 mx-1 text-sm hover:bg-gray-100">
            Learn how its build
          </button>
          <button className="border rounded-lg py-2.5 px-2 mx-1 bg-black text-white text-sm hover:bg-black/80">
            Restore Your photos
          </button>
        </div>
        <div className="flex sm:flex-row gap-2 my-16 flex-col">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-3 font-semibold text-md">Original Photo</h2>
            <Image
              className="rounded-xl"
              alt="test"
              src="/michael.jpg"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-3 font-semibold text-md">Restored Photo</h2>
            <Image
              className="rounded-xl"
              alt="test"
              src="/michael-new.jpg"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="my-2">
          <p className="font-semibold text-3xl sm:text-5xl text-center">
            Loved by many worldwide.
          </p>
          <p className="text-center text-sm mt-4 text-gray-500">
            See what our 300,000+ users are saying about the product.
          </p>
        </div>
        <div className="flex py-10 flex-wrap gap-10 justify-center">
          {new Array(3).fill("*").map((_) => (
            <PeopleSaid />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
