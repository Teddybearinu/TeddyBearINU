"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

import Logo from "@/assets/logo.png";
import LangMenu from "./LangMenu";
import Hambuger from "./Hambuger";
import { useState } from "react";
import MobileNav from "./MobileNav";
import usePrice from "@/hooks/usePrice";
import { useTranslation } from "next-export-i18n";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const price = usePrice();
  const { t } = useTranslation();

  return (
    <>
      <header className="container flex items-center justify-between max-md:sticky max-md:top-0 max-md:left-0 z-20 bg-[#FFE294] py-3 md:py-1.5 px-4 lg:pl-[26px] lg:pr-[30px]">
        <div className="flex items-center">
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            alt="logo"
            className="min-w-[50px] w-[50px] md:min-w-16 md:w-[64px] 2xl:w-[80px] drag-none select-none"
          />
          <span className="uppercase text-[20px] md:text-[30px] 2xl:text-[40px] font-black ml-2 md:ml-3 whitespace-nowrap max-xs:hidden">
            Teddy Bear INU
          </span>
        </div>
        <div className="flex items-center md:w-[700px] lg:w-auto justify-between ml-4">
          <div className="flex items-center">
            <div className="relative w-2.5 h-2.5 rounded-full bg-green-500 mr-3.5 shadow-[0_0_6px_1px_#0ac90a] animate-pulse" />
            <div className="text-sm sm:text-base lg:text-xl font-bold border-2 lg:border-[3px] py-1.5 lg:py-1 px-5 sm:px-8 rounded-full border-black bg-white mr-3 lg:mr-10">
              ${price}
            </div>
          </div>
          <div className="flex items-center space-x-3 lg:space-x-6 max-md:hidden mr-3 lg:mr-10">
            <Link
              href={
                "https://dexscreener.com/pulsechain/0xdd5202034b56b9ea4d29b56a25e904fc475275f0"
              }
              target="_blank"
              rel="noreferrer"
              className="text-[#000B33]/50 lg:text-lg 2xl:text-xl font-bold hover:text-black transition-all cursor-pointer"
            >
              {t("Header.chart")}
            </Link>
            <Link
              href={
                "https://portalxswap.io/?fromChain=ETH&toChain=PULSECHAIN&from=ETH&to=PLS"
              }
              target="_blank"
              rel="noreferrer"
              className="text-[#000B33]/50 lg:text-lg 2xl:text-xl font-bold hover:text-black transition-all cursor-pointer"
            >
              {t("Header.bridge")}
            </Link>
            <ScrollLink
              to={"dapps"}
              smooth
              offset={-50}
              className="text-[#000B33]/50 lg:text-lg 2xl:text-xl font-bold hover:text-black transition-all cursor-pointer"
            >
              {t("Header.dapps")}
            </ScrollLink>
            <Link
              href={"https://x.com/teddybearinu"}
              target="_blank"
              rel="noreferrer"
              className="text-[#000B33]/50 lg:text-lg 2xl:text-xl font-bold hover:text-black transition-all cursor-pointer"
            >
              {t("Header.faq")}
            </Link>
          </div>
          <LangMenu className="max-sm:hidden mr-2 lg:mr-10" />
          <a
            href="https://changenow.io/?from=usd&to=pls&fiatMode=true"
            target="_blank"
            rel="noreferrer"
            className="text-white lg:text-xl font-extrabold py-2 px-6 rounded-full bg-[linear-gradient(101.95deg,#000000_4.57%,#8E8E8E_104.53%)] hover:scale-110 transition-all max-md:hidden whitespace-nowrap"
          >
            {t("Header.buy_now")}
          </a>
          <Hambuger
            open={mobileNavOpen}
            setOpen={setMobileNavOpen}
            className="md:hidden"
          />
        </div>
      </header>
      <MobileNav open={mobileNavOpen} setOpen={setMobileNavOpen} />
    </>
  );
};

export default Header;
