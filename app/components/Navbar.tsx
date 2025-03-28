"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
        className="text-neutral-100"
      />
    </svg>
  );
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  interface NavItem {
    name: string;
    href: string;
  }

  const navbarItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Music", href: "/" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      maxWidth="2xl"
      isBlurred={false}
      className="bg-neutral-950"
    >
      {/* LeftSide */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-neutral-100 "
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold  text-neutral-100">Melolife</p>
        </NavbarBrand>
      </NavbarContent>

      {/* MIDDLE */}
      <NavbarContent justify="center" className="hidden sm:flex gap-8">
        {navbarItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href} className="text-neutral-100 hover:underline">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* RightSide */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-neutral-100 hover:underline">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navbarItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
