"use client";
import { ArrowUpFromDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState<boolean>();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Sayfa yüklendiğinde mevcut scroll konumunu al

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // animasyonlu geçiş için
    });
  };

  useEffect(() => {
    if (scrollY >= 400) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [scrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-8 sticky z-[999] bg-white top-0 left-0 w-full px-3 relative">
      <div
        onClick={handleClick}
        className={`cursor-pointer fixed right-5 bg-[#312783] py-3 px-3 rounded-[3px] transition-all ${
          active ? "bottom-5 opacity-100" : "bottom-0 opacity-0"
        }`}
      >
        <ArrowUpFromDot color="white" />
      </div>
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/assets/logo.png" alt="Logo" width={200} height={200} />
        </Link>
        <div className="lg:flex hidden pe-16 gap-16">
          <Link className="font-bold" href={"#homepage"}>
            Pagina principală
          </Link>
          <Link className="font-bold" href={"#about"}>
            Despre noi
          </Link>
          <Link className="font-bold" href={"#products"}>
            Produse
          </Link>
          <Link className="font-bold" href={"#terapol"}>
            De ce noi?
          </Link>
        </div>
        {/* MOBİLE MENÜ BUTTON */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black p-2 relative z-50 transition-all duration-300 ease-in-out cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
      {/* mobile menü */}
      <div
        className={`lg:hidden left-0 top-[100%] absolute bg-white w-full transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "h-auto opacity-100"
            : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mt-4 py-4 transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col text-black space-y-4">
            <div className="flex flex-col justify-center gap-3 px-6">
              <Link
                className="text-black text-[16px] font-bold hover:text-[#333]"
                href={"#homepage"}
              >
                Pagina principală
              </Link>
              <Link
                className="text-black text-[16px] font-bold hover:text-[#333]"
                href={"#about"}
              >
               Despre noi
              </Link>
              <Link
                className="text-black text-[16px] font-bold hover:text-[#333]"
                href={"#products"}
              >
                Produse
              </Link>
              <Link
                className="text-black text-[16px] font-bold hover:text-[#333]"
                href={"#terapol"}
              >
                De ce noi?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
