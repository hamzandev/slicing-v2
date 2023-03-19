"use client";
import Image from "next/image";
import { useState } from "react";

import logo from "@/public/assets/logo.svg";
import NavLink from "./NavLink";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const linkMenu = [
    {
      id: 1,
      label: "Home",
      to: "/",
    },
    {
      id: 2,
      label: "About Us",
      to: "/#about",
    },
    {
      id: 3,
      label: "Services",
      to: "/#services",
    },
    {
      id: 4,
      label: "Resources",
      to: "/#resources",
    },
  ];

  return (
    <nav className="flex px-3 py-6 bg-transparent">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="brand-logo w-4/12">
            <Image src={logo} />
          </div>
          <div className="links w-8/12 md:flex hidden gap-x-10 justify-end">
            {linkMenu.map((menu) => (
              <NavLink to={menu.to} key={menu.id}>
                {menu.label}
              </NavLink>
            ))}
          </div>
          <button
            onClick={() => setShow(!show)}
            className={`px-4 py-2 rounded-lg bg-gray-300 md:hidden block`}
          >
            =
          </button>
        </div>
        {/* nav menu only visible on mobile */}
        <div className={`links ${show ? "grid" : "hidden"} gap-5 p-5`}>
          {linkMenu.map((menu) => (
            <NavLink to={menu.to} key={menu.id}>
              {menu.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
