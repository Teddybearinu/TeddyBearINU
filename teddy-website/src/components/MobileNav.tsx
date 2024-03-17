"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import ArrowRight from "./svgs/ArrowRight";
import LangMenu from "./LangMenu";

interface MobileNavProps {
  open: boolean;
  setOpen: any;
  className?: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen, className }) => {
  const t = (a: string) => a;

  return (
    <div
      data-open={open}
      className={`flex flex-col fixed top-[74px] md:top-[76px] right-0 z-30 w-[394px] max-w-full bg-black data-[open=true]:translate-x-0 translate-x-full transition-all ${className}`}
    >
      <Link
        href={
          "https://dexscreener.com/pulsechain/0xdd5202034b56b9ea4d29b56a25e904fc475275f0"
        }
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between text-white py-3 border-b border-white pl-[30px] pr-6 font-medium hover:brightness-90 active:brightness-95 transition-all cursor-pointer"
        onClick={() => setOpen(false)}
      >
        {t("chart")}
        <ArrowRight />
      </Link>
      <Link
        href={
          "https://portalxswap.io/?fromChain=ETH&toChain=PULSECHAIN&from=ETH&to=PLS"
        }
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between text-white py-3 border-b border-white pl-[30px] pr-6 font-medium hover:brightness-90 active:brightness-95 transition-all cursor-pointer"
        onClick={() => setOpen(false)}
      >
        {t("bridge")}
        <ArrowRight />
      </Link>
      <ScrollLink
        to={"dapps"}
        smooth
        offset={-50}
        className="flex items-center justify-between text-white py-3 border-b border-white pl-[30px] pr-6 font-medium hover:brightness-90 active:brightness-95 transition-all cursor-pointer"
        onClick={() => setOpen(false)}
      >
        {t("dapps")}
        <ArrowRight />
      </ScrollLink>
      <Link
        href={"https://x.com/teddybearinu"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between text-white py-3 border-b border-white pl-[30px] pr-6 font-medium hover:brightness-90 active:brightness-95 transition-all cursor-pointer"
        onClick={() => setOpen(false)}
      >
        {t("faq")}
        <ArrowRight />
      </Link>
      <Link
        href={"https://changenow.io/?from=usd&to=pls&fiatMode=true"}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between text-white py-3 border-b border-white pl-[30px] pr-6 font-medium hover:brightness-90 active:brightness-95 transition-all cursor-pointer"
        onClick={() => setOpen(false)}
      >
        {t("buy_now")}
        <ArrowRight />
      </Link>
      <div className="flex justify-between items-center mt-[22px] pr-[22px] pl-[30px] pb-[86px] sm:hidden">
        <LangMenu grid />
      </div>
    </div>
  );
};

export default MobileNav;
