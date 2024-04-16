import { LogoApp } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  const menu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Pricing",
      link: "/",
    },
    {
      label: "Features",
      link: "/",
    },
    {
      label: "Story",
      link: "/",
    },
  ];

  return (
    <div className="flex w-full justify-between items-center my-2">
      <Image src={LogoApp} height={55} width={40} alt="Logo" />
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="gap-10 items-center hidden md:flex">
        {menu.map((el, i) => (
          <span className="cursor-pointer hover:text-secondary" key={i}>
            {el.label}
          </span>
        ))}
        <Button variant="secondary">Daftar</Button>
      </div>
    </div>
  );
}
