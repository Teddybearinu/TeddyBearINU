"use client";

import Link from "next/link";
import Image from "next/image";

import PulseX from "@/assets/pulsex.svg";
import Ninemm from "@/assets/9mm.png";
import PulseBridge from "@/assets/pulsebridge.svg";
import PortalX from "@/assets/portalx.svg";
import Dextools from "@/assets/dextools.svg";
import Dexscreener from "@/assets/dexscreener.png";
import Logo from "@/assets/logo.png";
import ArrowLine from "@/assets/arrowline.svg";
import { useTranslation } from "next-export-i18n";

const Dapps = () => {
  const { t } = useTranslation();

  return (
    <div id="dapps" className="pt-10 md:pt-20 relative">
      <div className="bg-white absolute top-0 left-0 right-0 bottom-0 -z-[2]" />
      <div className="relative container px-5 md:pr-0 md:pl-10 lg:pl-[66px]">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="absolute top-0 w-[800px] opacity-5 left-[240px] -translate-y-1/2 -z-[1]"
        />
        <Image
          src={ArrowLine.src}
          width={ArrowLine.width}
          height={ArrowLine.height}
          alt="arrowline"
          className="absolute rotate-90 right-[40px] top-0 -translate-y-[44.5%] -z-[1] max-w-[70%]"
        />
        <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold leading-none max-md:text-center">
          {t("Dapps.title")}
        </h2>
        <div className="text-sm sm:text-base lg:text-2xl font-semibold text-[#00186C]/50 leading-none max-md:text-center">
          {t("Dapps.subtitle")}
        </div>
      </div>
      <div className="bg-black pt-7 pb-16 md:pb-7 lg:py-[60px] mt-4 lg:mt-9">
        <div className="container flex max-md:flex-col justify-between">
          <div className="flex flex-col items-center w-full lg:mx-12">
            <span className="text-xl sm:text-2xl lg:text-5xl font-bold text-white underline">
              {t("Dapps.dex")}
            </span>
            <Link
              href={
                "https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0xee9082DaEA925Be8F79f1b2c457fC9470A104414"
              }
              target="_blank"
              rel="noreferrer"
              className="mt-9 lg:mt-20 hover:scale-105 transition-all max-md:border-2 max-md:border-white max-md:rounded-full max-md:w-[254px] max-md:h-[90px] max-md:flex max-md:py-6"
            >
              <Image
                src={PulseX.src}
                width={PulseX.width}
                height={PulseX.height}
                alt="pulsex"
                className="max-md:h-full md:max-w-[156px] lg:max-w-[336px] m-auto w-full"
              />
            </Link>
            <Link
              href={
                "https://v3.9mm.pro/swap?outputCurrency=0xee9082DaEA925Be8F79f1b2c457fC9470A104414"
              }
              target="_blank"
              rel="noreferrer"
              className="mt-10 lg:mt-20 hover:scale-105 transition-all max-md:border-2 max-md:border-white max-md:rounded-full max-md:w-[254px] max-md:h-[90px] max-md:flex max-md:items-center max-md:justify-center max-md:py-5"
            >
              <Image
                src={Ninemm.src}
                width={Ninemm.width}
                height={Ninemm.height}
                alt="9mm"
                className="max-md:h-full w-auto md:max-w-[92px] lg:max-w-[200px] md:w-full"
              />
              <span className="text-white font-bold ml-2 md:hidden">9mm</span>
            </Link>
          </div>
          <div className="w-px bg-white shadow-[0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF] max-md:hidden" />
          <div className="flex flex-col items-center w-full lg:mx-12 md:pb-8 lg:pb-10 max-md:mt-10">
            <span className="text-xl sm:text-2xl lg:text-5xl font-bold text-white underline">
              {t("Dapps.bridge")}
            </span>
            <Link
              href={"https://bridge.pulsechain.com/"}
              target="_blank"
              rel="noreferrer"
              className="mt-9 md:mt-12 lg:mt-28 hover:scale-105 transition-all max-md:border-2 max-md:border-white max-md:rounded-full max-md:w-[254px] max-md:h-[90px] max-md:flex max-md:px-12"
            >
              <Image
                src={PulseBridge.src}
                width={PulseBridge.width}
                height={PulseBridge.height}
                alt="pulse-bridge"
                className="max-md:w-full max-w-[252px] lg:max-w-[560px] m-auto w-full"
              />
            </Link>
            <Link
              href={
                "https://portalxswap.io/?fromChain=ETH&toChain=PULSECHAIN&from=ETH&to=PLS"
              }
              target="_blank"
              rel="noreferrer"
              className="mt-10 md:mt-16 lg:mt-[120px] hover:scale-105 transition-all max-md:border-2 max-md:border-white max-md:rounded-full max-md:w-[254px] max-md:h-[90px] max-md:flex max-md:py-4"
            >
              <Image
                src={PortalX.src}
                width={PortalX.width}
                height={PortalX.height}
                alt="portal-x"
                className="max-md:h-full max-w-[160px] lg:max-w-[345px] m-auto w-full"
              />
            </Link>
          </div>
          <div className="w-px bg-white shadow-[0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF,0_0_8.5px_#FFF] max-md:hidden" />
          <div className="flex flex-col items-center w-full lg:mx-12 max-md:mt-10">
            <span className="text-xl sm:text-2xl lg:text-5xl font-bold text-white underline">
              {t("Dapps.charts")}
            </span>
            <Link
              href={
                "https://www.dextools.io/app/en/pulse/pair-explorer/0xdd5202034b56b9ea4d29b56a25e904fc475275f0"
              }
              target="_blank"
              rel="noreferrer"
              className="mt-9 lg:mt-[86px] hover:scale-105 transition-all max-md:border-2 max-md:border-white max-md:rounded-full max-md:w-[254px] max-md:h-[90px] max-md:flex max-md:items-center max-md:justify-center max-md:py-5"
            >
              <Image
                src={Dextools.src}
                width={Dextools.width}
                height={Dextools.height}
                alt="dextools"
                className="max-w-[160px] lg:max-w-[350px] w-full"
              />
            </Link>
            <Link
              href={
                "https://dexscreener.com/pulsechain/0xdd5202034b56b9ea4d29b56a25e904fc475275f0"
              }
              target="_blank"
              rel="noreferrer"
              className="mt-10 md:mt-[70px] lg:mt-[120px] hover:scale-105 transition-all max-md:border-2 max-md:border-white max-md:rounded-full max-md:w-[254px] max-md:h-[90px] max-md:flex max-md:items-center max-md:justify-center max-md:py-5"
            >
              <Image
                src={Dexscreener.src}
                width={Dexscreener.width}
                height={Dexscreener.height}
                alt="dexscreener"
                className="max-w-[200px] lg:max-w-[430px] w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dapps;
