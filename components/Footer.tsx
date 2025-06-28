import Image from "next/image";
import React from "react";
import PageContainer from "./PageContainer";
import { ChevronRight, House, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-18 flex justify-center items-center">
      <PageContainer className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-0 lg:gap-0 gap-6">
        <div className="flex flex-col gap-8">
          <Image
            src={"/assets/logowhite.png"}
            alt="Logo"
            width={200}
            height={200}
          />
          <div className="flex flex-col gap-6">
            <Link href={"/"} className="flex gap-3">
              <House color="#ffc925" />{" "}
              <span className="text-[#777] text-[14px]">
                Chişinau / MOLDOVA
              </span>
            </Link>
            <Link
              href={"mailto:euromosconstruct@gmail.com"}
              className="flex gap-3"
            >
              <Mail color="#ffc925" />{" "}
              <span className="text-[#777] text-[14px]">
                euromosconstruct@gmail.com
              </span>
            </Link>
            <div className="flex gap-3">
              <Phone color="#ffc925" />{" "}
              <Link
                href={"tel:+37368055880"}
                className="text-[#777] text-[14px]"
              >
                +37368055880
              </Link>
              <span className="text-[#777]">|</span>
              <Link
                href={"tel:+37376645688"}
                className="text-[#777] text-[14px]"
              >
                +37376645688
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <span className="text-[18px] text-white">Meniu</span>
          <div className="flex flex-col gap-6">
            <Link
              className="flex gap-3 text-[#777] text-[14px] items-center"
              href={"#homepage"}
            >
              <ChevronRight size={14} color="#777" />
              Pagina principală
            </Link>
            <Link
              className="flex gap-3 text-[#777] text-[14px] items-center"
              href={"#about"}
            >
              <ChevronRight size={14} color="#777" />
              Despre noi
            </Link>
            <Link
              className="flex gap-3 text-[#777] text-[14px] items-center"
              href={"#products"}
            >
              <ChevronRight size={14} color="#777" />
              Produse
            </Link>
            <Link
              className="flex gap-3 text-[#777] text-[14px] items-center"
              href={"#terapol"}
            >
              <ChevronRight size={14} color="#777" />
              De ce noi?
            </Link>
          </div>
        </div>
        <Image
          className="!w-[500px] !h-[250px]"
          src={"/assets/about/3.png"}
          alt="Footer Image"
          width={500}
          height={250}
        />
      </PageContainer>
    </footer>
  );
}
