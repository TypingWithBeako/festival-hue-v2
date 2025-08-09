"use client";

import { useLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import { fontLiterata } from "@/config/fonts"; // adjust import path as needed
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Tooltip,
} from "@heroui/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBrush,
  faUtensils,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export const Logo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip
        color="secondary"
        placement="right"
        content="Biểu tượng Festival Huế"
        showArrow={true}
      >
        <a onClick={onOpen} className="cursor-pointer">
          <Image
            src="/Logo.png"
            alt="Festival Hue 2025 Logo"
            width={65}
            height={65}
            className="hover:opacity-75 cursor-pointer"
          />
        </a>
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-primary text-xl">
                Festival Huế 2025
              </ModalHeader>
              <ModalBody>
                <p>
                  Festival Huế 2025 là sự kiện văn hóa lớn nhất của xứ Huế, nơi
                  hội tụ tinh hoa nghệ thuật truyền thống và hiện đại.
                </p>
                <p>
                  Tham gia cùng chúng tôi để khám phá vẻ đẹp của cố đô Huế qua
                  những hoạt động nghệ thuật, ẩm thực và làng nghề truyền thống.
                </p>
                <p className="italic">
                  Nhấn nút{" "}
                  <span className="font-bold text-secondary">"Tiếp tục"</span>{" "}
                  để ghé thăm trang chủ chính thức của Festival Huế{" "}
                  <span className="font-bold">(huefestival.com)</span>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button
                  color="secondary"
                  onPress={() => {
                    window.open("https://huefestival.com/", "_blank");
                    onClose();
                  }}
                >
                  Tiếp tục
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default function NavigationBar() {
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#HeroSection");

  const menuItems = [
    {
      label: "Trang chủ",
      sectionId: "#HeroSection",
      icon: faHome,
    },
    {
      label: "Giới thiệu",
      sectionId: "#Description",
      icon: faInfoCircle,
    },
    {
      label: "Làng nghề",
      sectionId: "#Village",
      icon: faBrush,
    },
    {
      label: "Ẩm thực",
      sectionId: "#Cuisine",
      icon: faUtensils,
    },
    {
      label: "Nghệ thuật",
      sectionId: "#Art",
      icon: faPalette,
    },
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
          // console.log(entry.target.id);
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
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
        menuItem: `cursor-pointer transition-all duration-300 font-bold hover:scale-101`,
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
              <div className="hidden lg:block">
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 pr-2" />
              </div>
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
              className={`${fontLiterata.variable} font-literata w-full py-2 cursor-pointer flex items-center gap-3 ${
                activeSection === item.sectionId ? "text-primary" : ""
              }`}
              color={"foreground"}
              onClick={() => {
                lenis?.scrollTo(item.sectionId);
                setIsMenuOpen(false);
              }}
              size="lg"
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
