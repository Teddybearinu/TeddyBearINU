"use client";

import Logo from "@/assets/logo.png";
import Telegram from "@/assets/socials/telegram.svg";
import X from "@/assets/socials/x.svg";
import Github from "@/assets/socials/github.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";

const Footer = () => {
  const socials = [
    {
      image: Github,
      link: "https://github.com/Teddybearinu/TeddyBearINU.git",
    },
    {
      image: X,
      link: "https://x.com/teddybearinu",
    },
    {
      image: Telegram,
      link: "https://t.me/TeddyBearINU",
    },
  ];

  const { t } = useTranslation();

  return (
    <footer className="flex justify-center relative overflow-hidden bg-white border-t-4 border-[#C0C1C6] pt-10">
      <div className="container max-md:px-5">
        <div className="flex max-md:flex-wrap justify-between md:space-x-6 lg:space-x-16 md:w-[810px] lg:w-[1440px] mx-auto">
          <div className="w-full">
            <div className="flex items-center max-md:justify-center">
              <Image
                src={Logo.src}
                width={Logo.width}
                height={Logo.height}
                alt="logo"
                className="w-10 lg:w-[90px]"
              />
              <span className="text-xl lg:text-[40px] font-black ml-2 lg:ml-3">
                TEDDY BEAR INU
              </span>
            </div>
            <p className="text-[#000B33] text-xs sm:text-base lg:text-xl font-medium mt-2 lg:mt-3 max-md:text-center">
              {t("Footer.desc")}
            </p>
          </div>
          <div className="flex flex-col min-w-[90px] sm:min-w-[130px] xl:min-w-[170px] pt-6 md:pt-2 xl:pt-9">
            <h4 className="font-bold text-sm sm:text-xl lg:text-2xl text-[#000B33]">
              {t("Footer.dapps.title")}
            </h4>
            <Link
              href="https://pulsex.mypinata.cloud/ipfs/bafybeidea3ibq4lu5t6vk6ihp4iuznjb3ltsdm5y2shv4atxgyd3d33aim/#/?outputCurrency=0xee9082DaEA925Be8F79f1b2c457fC9470A104414"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-10"
            >
              {t("Footer.dapps.swap")}
            </Link>
            <Link
              href="https://bridge.pulsechain.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-1 lg:mt-6"
            >
              {t("Footer.dapps.bridge")}
            </Link>
            <Link
              href="https://portalxswap.io/?fromChain=PULSECHAIN&toChain=ETH&from=TBI"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-1 lg:mt-6"
            >
              {t("Footer.dapps.portalx")}
            </Link>
          </div>
          <div className="flex flex-col min-w-[100px] sm:min-w-[150px] xl:min-w-[170px] pt-6 md:pt-2 xl:pt-9">
            <h4 className="font-bold text-sm sm:text-xl lg:text-2xl text-[#000B33]">
              {t("Footer.developer.title")}
            </h4>
            <Link
              href="https://github.com/Teddybearinu/TeddyBearINU.git"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-10"
            >
              {t("Footer.developer.doc")}
            </Link>
            <Link
              href={"https://github.com/Teddybearinu/TeddyBearINU.git"}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-1 lg:mt-6"
            >
              {t("Footer.developer.github")}
            </Link>
            <Link
              href={"https://x.com/teddybearinu"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-1 lg:mt-6"
            >
              {t("Footer.developer.faq")}
            </Link>
          </div>
          <div className="flex flex-col max-md:w-[70px] lg:min-w-fit pt-6 md:pt-2 xl:pt-9">
            <h4 className="font-bold text-sm sm:text-xl lg:text-2xl text-[#000B33]">
              {t("Footer.socials.title")}
            </h4>
            <Link
              href={"https://x.com/teddybearinu"}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-10 whitespace-nowrap"
            >
              {t("Footer.socials.x")}
            </Link>
            <Link
              href={"https://t.me/TeddyBearINU"}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-1 lg:mt-6"
            >
              {t("Footer.socials.telegram")}
            </Link>
            <Link
              href={"https://github.com/Teddybearinu/TeddyBearINU.git"}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-xs sm:text-base lg:text-lg text-[#000B33] hover:brightness-75 active:brightness-95 transition-all mt-1 lg:mt-6"
            >
              {t("Footer.socials.media")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 lg:mt-14 w-full">
          <Link
            href={"mailto:admin@teddybearinu.com"}
            target="_blank"
            rel="noreferrer"
            className="text-xs sm:text-base lg:text-lg hover:brightness-75 active:brightness-95 transition-all text-[#0085FF]"
          >
            admin@teddybearinu.com
          </Link>
          <div className="flex items-center space-x-2.5 w-full justify-center mt-3 md:mt-5">
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-5 lg:w-10 h-5 lg:h-10 hover:brightness-75 active:brightness-95 transition-all"
              >
                <Image
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt="social"
                  className="w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-[#000B33] text-center text-xs lg:text-lg pt-2 lg:pt-4 pb-4 lg:pb-9 mt-2 mx-auto md:w-[890px] lg:w-[1440px] xl:w-[1667px]">
          {t("Footer.copy_right")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
