"use client";

import { useLenis } from "lenis/react";
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
      <a href="https://huefestival.com/" target="_blank">
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
  const [activeSection, setActiveSection] = useState("#HeroSection");

  const menuItems = [
    { label: "Trang chủ", sectionId: "#HeroSection" },
    { label: "Giới thiệu", sectionId: "#Description" },
    { label: "Làng nghề", sectionId: "#Village" },
    { label: "Ẩm thực", sectionId: "#Cuisine" },
    { label: "Nghệ thuật", sectionId: "#Art" },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    // Observe all sections
    menuItems.forEach((item) => {
      const section = document.querySelector(item.sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, [menuItems]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      isBlurred={true}
      maxWidth="2xl"
      classNames={{
        item: "px-3 font-literata text-md hover:scale-102 transition-all duration-300",
        content: isScrolled
          ? ""
          : "transition-all duration-300 sm:p-[20px] sm:border-solid sm:border-white sm:bg-background sm:rounded-[40px] sm:shadow-[0px_0px_3rem_rgba(127,137,161,0.604)]",
        menu: `py-6 ${isScrolled ? "mt-2" : "mt-4"}`,
        menuItem:
          "cursor-pointer font-literata transition-all duration-300 font-bold hover:scale-101",
        toggleIcon: isScrolled ? "" : "text-white",
      }}
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-all duration-600 ${
        isScrolled
          ? "bg-background/80 py-1 backdrop-blur-sm"
          : "bg-transparent backdrop-blur-none py-2"
      }`}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={`hover:text-primary after:transition-all after:duration-400 transition-colors font-medium duration-600 cursor-pointer ${
                activeSection === item.sectionId
                  ? "text-primary font-bold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
                  : "text-[#333333] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary"
              }`}
              onClick={() => {
                lenis?.scrollTo(item.sectionId);
              }}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
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
              className={`w-full py-2 cursor-pointer ${activeSection === item.sectionId ? "text-primary" : ""}`}
              color={"foreground"}
              onClick={() => {
                lenis?.scrollTo(item.sectionId);
                setIsMenuOpen(false);
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
