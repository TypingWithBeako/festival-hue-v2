"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Tooltip,
} from "@heroui/react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Tooltip
      color="secondary"
      placement="right"
      content="Logo Festival Huế"
      showArrow={true}
    >
      <Image
        src="/Logo.png"
        alt="Festival Hue 2025 Logo"
        width={65}
        height={65}
        className="hover:opacity-75 cursor-pointer"
      ></Image>
    </Tooltip>
  );
};

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = ["Trang Chủ", "Làng Nghề", "Ẩm Thực", "Nghệ Thuật"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      height={"5rem"}
      isBlurred={isScrolled ? true : false}
      maxWidth="xl"
      classNames={{
        item: "px-3 font-literata transition-all duration-300 font-bold text-md hover:scale-101",
        content: isScrolled
          ? ""
          : "transition-all duration-300 sm:p-[20px] sm:border-solid sm:border-white sm:bg-background sm:rounded-[40px] sm:shadow-[0px_0px_3rem_rgba(127,137,161,0.604)]",
        menu: "mt-2 py-6",
        menuItem:
          "font-literata transition-all duration-300 font-bold hover:scale-101",
      }}
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-all duration-600 py-2 ${
        isScrolled ? "bg-background/70" : "bg-transparent"
      }`}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-medium" href="#">
            Làng Nghề
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-medium" href="#">
            Ẩm Thực
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-medium" href="#">
            Nghệ Thuật
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="overflow-hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full py-2"
              color={"foreground"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
