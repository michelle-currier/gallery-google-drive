"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList({ isVisible }: { isVisible: boolean }) {
  return (
    <ul
      className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 transition-opacity delay-150
    ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a
          href="/about"
          className="flex items-center text-teal-600 hover:text-blue-500 transition-colors"
        >
          about
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a
          href="/gallery"
          className="flex items-center text-teal-600 hover:text-blue-500 transition-colors"
        >
          gallery
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="teal"
        className="p-1 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a
          href="/contact"
          className="flex items-center text-teal-600 hover:text-blue-500 transition-colors"
        >
          contact
        </a>
      </Typography>
    </ul>
  );
}
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) {
      setOpenNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Navbar
      className="mx-auto max-w-screen-xl px-6 py-3"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex items-center justify-between logo">
        <Typography
          as="a"
          href="/"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5 font-bold"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Your name here
        </Typography>
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavList isVisible />
        </div>
        {/* Mobile Menu Toggle */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav((prev) => !prev)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {/* Mobile Navigation */}
      <Collapse open={openNav} className="transition-transform lg:hidden ">
        <NavList isVisible={openNav} />
      </Collapse>
    </Navbar>
  );
}
