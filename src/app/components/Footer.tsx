import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import albumPhoto from "../../../public/album.png";

function Footer() :React.JSX.Element {
  return (
    <footer className="group bg-zinc-800 border-t border-zinc-700 p-5 px-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={albumPhoto}
          width={72}
          height={72}
          alt="album pior disco do ano"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Cortina de Fumaça</strong>
          <span className="text-xs text-zinc-400">Froid</span>
        </div>
      </div>
      <div className="flex gap-2 flex-col items-center">
        <div className=" flex items-center gap-6">
          <Shuffle size={22} />
          <SkipBack size={22} />
          <button className="w-10 h-10 flex justify-center items-center pl-0.5 rounded-full bg-white text-black transition-all">
            <Play fill="bg-black" size={22} />
          </button>
          <SkipForward size={22} />
          <Repeat size={22} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full bg-zinc-200 w-20"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full bg-zinc-200 w-10"></div>
          </div>
        </div>
        <Maximize2 size={18} />
      </div>
    </footer>
  );
}

export default Footer;
