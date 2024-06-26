import { Home as HomeIcon, Library, Search } from "lucide-react";
import React from "react";

function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-600 "></div>
        <div className="w-3 h-3 rounded-full bg-yellow-600 "></div>
        <div className="w-3 h-3 rounded-full bg-green-600 "></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Aniver Funk
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          The Water
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Daily Mix 4
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Froid
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Sofrências antigas
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
