"use client";

import Image from "next/image";

import ArrowLine from "@/assets/arrowline.svg";
import Logo from "@/assets/logo.png";
import { useTranslation } from "next-export-i18n";

const Swap = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="absolute bg-white top-0 left-0 right-0 bottom-0 -z-[2]" />
      <div
        id="swap"
        className="relative container px-6 md:px-10 lg:px-[66px] flex flex-col mt-20 pt-6"
      >
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="absolute bottom-0 w-[260px] opacity-5 right-1/3 translate-x-1/2 translate-y-1/2 -z-[1]"
        />
        <Image
          src={ArrowLine.src}
          width={ArrowLine.width}
          height={ArrowLine.height}
          alt="arrowline"
          className="absolute rotate-90 right-0 top-0 -translate-x-[11%] -translate-y-[32%] -z-[1] max-w-[70%]"
        />
        <h2 className="font-bold text-xl sm:text-2xl lg:text-5xl text-center md:text-right leading-none">
          {t("Swap.title")}
        </h2>
        <span className="font-semibold text-xs sm:text-base lg:text-2xl text-[#00186C]/50 text-center md:text-right leading-none">
          {t("Swap.subtitle")}
        </span>
        <iframe
          src="https://widget.piteas.io/#/swap?inputCurrency=PLS&outputCurrency=0xee9082DaEA925Be8F79f1b2c457fC9470A104414&theme=dark&exactField=input&exactAmount=1"
          height="728px"
          className="bg-[#0d111c] rounded-[50px] mt-3 sm:mt-8 lg:mt-9 w-full"
        />
      </div>
    </div>
  );
};

export default Swap;
