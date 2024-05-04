import {
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import albumPhoto from "../../public/album.png";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className=" flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40 hover:bg-black/70 ">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40 hover:bg-black/70 ">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4  mt-4">
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 hover:bg-white/10 overflow-hidden transition-colors"
            >
              <Image
                src={albumPhoto}
                width={90}
                height={90}
                alt="album pior disco do ano"
              />
              <strong>Pior disco do ano</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-all">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 hover:bg-white/10 overflow-hidden transition-colors"
            >
              <Image
                src={albumPhoto}
                width={90}
                height={90}
                alt="album pior disco do ano"
              />
              <strong>Pior disco do ano</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-all">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 hover:bg-white/10 overflow-hidden transition-colors"
            >
              <Image
                src={albumPhoto}
                width={90}
                height={90}
                alt="album pior disco do ano"
              />
              <strong>Pior disco do ano</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-all">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 hover:bg-white/10 overflow-hidden transition-colors"
            >
              <Image
                src={albumPhoto}
                width={90}
                height={90}
                alt="album pior disco do ano"
              />
              <strong>Pior disco do ano</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-all">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 hover:bg-white/10 overflow-hidden transition-colors"
            >
              <Image
                src={albumPhoto}
                width={90}
                height={90}
                alt="album pior disco do ano"
              />
              <strong>Pior disco do ano</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-all">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="group bg-white/5 rounded flex items-center gap-4 hover:bg-white/10 overflow-hidden transition-colors"
            >
              <Image
                src={albumPhoto}
                width={90}
                height={90}
                alt="album pior disco do ano"
              />
              <strong>Pior disco do ano</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-0.5 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-all">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Froid</h2>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
            >
              <Image
                src={albumPhoto}
                className="w-full"
                width={100}
                height={100}
                alt="album pior disco do ano"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Froid, Santzu, Djonga and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
            >
              <Image
                src={albumPhoto}
                className="w-full"
                width={100}
                height={100}
                alt="album pior disco do ano"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Froid, Santzu, Djonga and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
            >
              <Image
                src={albumPhoto}
                className="w-full"
                width={100}
                height={100}
                alt="album pior disco do ano"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Froid, Santzu, Djonga and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
            >
              <Image
                src={albumPhoto}
                className="w-full"
                width={100}
                height={100}
                alt="album pior disco do ano"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Froid, Santzu, Djonga and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
            >
              <Image
                src={albumPhoto}
                className="w-full"
                width={100}
                height={100}
                alt="album pior disco do ano"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Froid, Santzu, Djonga and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
