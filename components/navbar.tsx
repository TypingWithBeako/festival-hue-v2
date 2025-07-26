"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
    <Tooltip color="secondary" content="Logo Festival Huế" showArrow={true}>
      <Image
        src="/Logo.png"
        alt="Festival Hue 2025 Logo"
        width={45}
        height={45}
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
      if (window.scrollY > 50) {
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
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-all duration-600 py-2 ${
        isScrolled ? "bg-secondary/70 -translate-y-1 py-1" : "bg-background/70"
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

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
      <NavbarContent justify="end">
        <Button
          as={Link}
          className="bg-secondary text-white hover:bg-secondary/80 hover:shadow-lg transition-all"
          href="#"
          variant="flat"
        >
          Đặt vé
          <FontAwesomeIcon icon={faChevronRight} className=" text-xs" />
        </Button>
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
