"use client";

import { useLenis } from "@studio-freight/react-lenis";
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
      content="Biểu tượng Festival Huế"
      showArrow={true}
    >
      <a href="https://huefestival.com/">
        <Image
          src="/Logo.png"
          alt="Festival Hue 2025 Logo"
          width={65}
          height={65}
          className="hover:opacity-75 cursor-pointer"
        ></Image>
      </a>
    </Tooltip>
  );
};

export default function NavigationBar() {
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Trang Chủ", sectionId: "#HeroSection" },
    { label: "Giới Thiệu", sectionId: "#Description" },
    { label: "Làng Nghề", sectionId: "#Village" },
    { label: "Ẩm Thực", sectionId: "#Cuisine" },
    { label: "Nghệ Thuật", sectionId: "#Art" },
  ];

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
      isBlurred={true}
      maxWidth="2xl"
      classNames={{
        item: "px-3 font-literata transition-all duration-300 font-bold text-md hover:scale-101",
        content: isScrolled
          ? ""
          : "transition-all duration-300 sm:p-[20px] sm:border-solid sm:border-white sm:bg-background sm:rounded-[40px] sm:shadow-[0px_0px_3rem_rgba(127,137,161,0.604)]",
        menu: `py-6 ${isScrolled ? "mt-6" : "mt-4"}`,
        menuItem:
          "cursor-pointer font-literata transition-all duration-300 font-bold hover:scale-101",
        toggleIcon: isScrolled ? "" : "text-white",
      }}
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-all duration-600 ${
        isScrolled
          ? "bg-background/80 py-1"
          : "bg-transparent backdrop-blur-none py-2"
      }`}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            className="cursor-pointer"
            aria-current="page"
            onPress={() => {
              lenis?.scrollTo("#HeroSection");
            }}
          >
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="font-medium cursor-pointer"
            onPress={() => {
              lenis?.scrollTo("#Description");
            }}
          >
            Giới thiệu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="font-medium cursor-pointer"
            onPress={() => {
              lenis?.scrollTo("#Village");
            }}
          >
            Làng Nghề
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="font-medium cursor-pointer"
            onPress={() => {
              lenis?.scrollTo("#Cuisine");
            }}
          >
            Ẩm Thực
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="font-medium cursor-pointer"
            onPress={() => {
              lenis?.scrollTo("#Art");
            }}
          >
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
          <NavbarMenuItem key={index}>
            <Link
              className="w-full py-2 cursor-pointer"
              color={"foreground"}
              onClick={() => {
                lenis?.scrollTo(item.sectionId);
              }}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
