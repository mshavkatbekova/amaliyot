import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  const {user} = useGlobalContext()
  return (
    <header className="bg-neutral-200 py-3 md:py-4 dark:bg-slate-700">
      <div className="max-container flex flex-col md:flex-row items-center md:justify-between ">
        <a
          className="font-medium md:font-bold text-3xl md:text-4xl mb-5 md:mb-0 dark:text-white animation hover: opacity-70 active:opacity-50"
          href="/"
        >
          MyKitchen
        </a>
        <nav className="text-center md:text-left md:flex md:items-center md:gap-4">
          <p className="mb-4 md:mb-0 md:font-medium dark:text-slate-200">
            Welcome, {user.displayName}
          </p>
          <div className="flex gap-4">
            <button className=" btn bg-orange-400 animation hover:bg-orange-300">
              Logout
            </button>
            <a className=" btn bg-emerald-400 animation hover:bg-emerald-300" href="">
              Create
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
