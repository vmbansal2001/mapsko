import React from "react";
import Logo from "@/assets/icons/mapsko-logo-with-name.svg";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      label: "About Us",
      href: "/",
    },
    {
      label: "Projects",
      href: "/about",
    },
    {
      label: "Gallery",
      href: "/contact",
    },
    {
      label: "Ready to move in",
      href: "/ready-to-move-in",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Career",
      href: "/career",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full mt-10 common-frame-box">
      <Logo className="w-[200px]" />
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="uppercase">
            {link.label}
          </Link>
        ))}
      </div>
      <button className="border border-[#8AC028] py-2 px-8 text-[#8AC028] font-bold">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
