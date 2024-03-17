"use client";

import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import Token from "@/assets/token.jpg";
import Logo from "@/assets/logo.png";
import ArrowLine from "@/assets/arrowline.svg";
import Clipboard from "./svgs/Clipboard";
import { useState } from "react";
import ClipboardCopied from "./svgs/ClipboardCopied";
import { useTranslation } from "next-export-i18n";

const TokenDetails = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const info = [
    {
      title: t("Token.token.name"),
      value: "Teddy Bear INU",
    },
    {
      title: t("Token.token.symbol"),
      value: "$TBI",
    },
    { title: t("Token.token.max_supply"), value: "9,000,000,210" },
    { title: t("Token.token.pair"), value: "TBI\\WPLS" },
    { title: t("Token.token.decimals"), value: "18" },
    { title: t("Token.token.type"), value: "PRC-20 Standard" },
    { title: t("Token.token.blockchain"), value: "Pulsechain" },
    { title: t("Token.token.tax"), value: "0% - 0%" },
  ];
  const onCopy = () => {
    navigator.clipboard.writeText("0xee9082DaEA925Be8F79f1b2c457fC9470A104414");
    setCopied(true);

    setTimeout(() => setCopied(() => false), 3000);
  };

  return (
    <div id="token" className="mt-20 lg:mt-28 max-md:px-5">
      <div className="relative container flex max-md:flex-col items-center">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="absolute w-[560px] opacity-5 top-0 left-[100px] -translate-y-1/2 -z-[1]"
        />
        <Image
          src={ArrowLine.src}
          width={ArrowLine.width}
          height={ArrowLine.height}
          alt="arrowline"
          className="absolute -rotate-90 right-[80px] top-[120px] -translate-y-full -z-[1] max-w-[70%]"
        />
        <Image
          src={Token.src}
          width={Token.width}
          height={Token.height}
          alt="token"
          className="rounded-se-[50px] rounded-ee-[50px] w-[33.3%] min-w-[33.3%] lg:w-[41.7%] lg:min-w-[41.7%] aspect-[0.86] lg:aspect-auto object-cover drag-none select-none max-md:rounded-[50px] max-md:min-w-[200px]"
        />
        <div className="mt-4 md:-mt-[56px] lg:-mt-[80px]">
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold ml-[25px] max-md:text-center">
            {t("Token.title")}
          </h2>
          <div className="text-xs sm:text-base lg:text-2xl font-semibold text-[#00186C]/50 ml-[25px] max-md:text-center">
            {t("Token.subtitle")}
          </div>
          <div className="relative flex max-md:flex-col-reverse items-center md:border border-r-0 border-black md:bg-white rounded-ss-[50px] rounded-es-[50px] py-[14px] lg:py-[22px] md:-ml-16 lg:-ml-[150px] mt-3 lg:mt-7">
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
              className="absolute top-0 left-12 lg:left-0 w-[60px] lg:w-[120px] -translate-y-1/2 -translate-x-1/3 max-md:hidden"
            />
            <div className="relative max-md:bg-white max-md:border max-md:pt-14 max-md:px-8 max-md:pb-12 max-md:max-w-[560px] max-md:w-full max-md:rounded-[50px] max-md:mt-11 border-r border-black space-y-2.5 lg:space-y-7 pr-2.5 lg:pr-8 pl-5 lg:pl-[90px]">
              <Image
                src={Logo.src}
                width={Logo.width}
                height={Logo.height}
                alt="logo"
                className="absolute top-2 left-1/2 w-[64px] -translate-x-1/2 -translate-y-1/2 md:hidden"
              />
              {info.map((item) => (
                <div
                  key={item.title}
                  className="text-xs sm:text-base lg:text-2xl font-semibold whitespace-nowrap max-md:text-center"
                >
                  {item.title}:{" "}
                  <span className="font-extrabold">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="max-md:bg-white max-md:py-[30px] max-md:px-6 max-md:rounded-[50px] max-md:border max-md:border-black max-md:max-w-[560px] md:ml-2.5 lg:ml-8">
              <h3 className="sm:text-xl lg:text-4xl font-extrabold max-md:text-center">
                {t("Token.overview.title")}
              </h3>
              <p className="text-xs sm:text-base lg:text-2xl font-semibold mt-1 lg:mt-6 leading-[1.2]">
                {parse(
                  t("Token.overview.desc", {
                    name: "Teddy Bear INU",
                    symbol: "$TBI",
                  })
                    .replaceAll("<bold>", '<span className="font-extrabold">')
                    .replaceAll("</bold>", "</span>")
                )}
              </p>
              <h3 className="sm:text-xl lg:text-4xl font-extrabold mt-3 lg:mt-6 max-md:text-center">
                {t("Token.feature.title")}
              </h3>
              <ul className="text-xs sm:text-base lg:text-2xl font-semibold list-disc mt-1 lg:mt-6 ml-4 leading-[1.2]">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i}>
                      {parse(
                        t(`Token.feature.item${i + 1}`)
                          .replaceAll(
                            "<highlight>",
                            '<span className="font-extrabold text-[#287803]">'
                          )
                          .replaceAll("</highlight>", "</span>")
                          .replaceAll(
                            "<gradient>",
                            '<span className="font-extrabold bg-[linear-gradient(90.37deg,#00F0FF_0%,#000AFF_46%,#EA00FE_90%)] bg-clip-text text-transparent">'
                          )
                          .replaceAll("</gradient>", "</span>")
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-white mx-auto flex items-center max-w-full w-fit bg-[linear-gradient(101.95deg,#000000_4.57%,#454545_104.53%)] rounded-full p-1 lg:p-1.5 pr-4 lg:pr-16 mt-7 md:mt-3">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
          className="w-[36px] lg:w-[78px] drag-none select-none"
        />
        <span className="text-xs md:text-base lg:text-[32px] font-bold ml-2.5 lg:ml-[30px] overflow-hidden">
          {t("Token.address")} :{" "}
          <Link
            href={
              "https://scan.mypinata.cloud/ipfs/bafybeidn64pd2u525lmoipjl4nh3ooa2imd7huionjsdepdsphl5slfowy/#/token/0xee9082DaEA925Be8F79f1b2c457fC9470A104414"
            }
            target="_blank"
            rel="noreferrer"
            className="underline hover:brightness-75 active:brightness-95 transition-all"
          >
            0xee9082DaEA925Be8F79f1b2c457fC9470A104414
          </Link>
        </span>
        <button
          className="ml-4 hover:brightness-90 active:brightness-95 transition-all"
          onClick={onCopy}
        >
          {copied ? (
            <ClipboardCopied className="md:w-4 md:h-4 lg:w-7 lg:h-7" />
          ) : (
            <Clipboard className="md:w-4 md:h-4 lg:w-7 lg:h-7" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TokenDetails;
