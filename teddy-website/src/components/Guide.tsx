"use client";

import Image, { StaticImageData } from "next/image";
import parse from "html-react-parser";

import Metamask from "@/assets/metamask.svg";
import Pulsechain from "@/assets/pulsechain.svg";
import Bridge from "@/assets/bridge.svg";
import ArrowLine from "@/assets/arrowline.svg";
import Logo from "@/assets/logo.png";
import { useConnect, useWalletClient } from "wagmi";
import { pulsechain } from "viem/chains";
import { useTranslation } from "next-export-i18n";

interface GuideCardProps {
  image: StaticImageData;
  id: number;
  children: React.ReactNode;
  metamask?: boolean;
  right?: boolean;
  className?: string;
}

const GuideCard: React.FC<GuideCardProps> = ({
  image,
  id,
  children,
  metamask,
  right,
  className,
}) => {
  const { connectAsync, connectors } = useConnect();
  const { data: walletClient } = useWalletClient();

  const onConnect = async () => {
    if (!metamask) return;
    try {
      if (!walletClient) {
        await connectAsync({
          connector: connectors[0],
          chainId: pulsechain.id,
        });
      }
      walletClient?.addChain({ chain: pulsechain });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`relative text-white text-xs sm:text-base lg:text-2xl font-medium sm:font-extrabold text-center pt-[30px] lg:pt-14 pb-5 lg:pb-12 px-6 sm:px-16 lg:px-28 w-[calc(100%-20px)] sm:w-[80%] md:w-[62.5%] ${
        right
          ? "-mr-1 rounded-ss-[50px] rounded-es-[50px]"
          : "-ml-1 rounded-se-[50px] rounded-ee-[50px]"
      } border-[3px] border-transparent ${className ?? ""}`}
      style={{
        background: right
          ? "linear-gradient(88.82deg,#454545 0.86%,#000000 100%) padding-box,linear-gradient(88.82deg,#00F0FF 0%,#000AFF 24%,#8F00FF 51%,#EA00FE 75%,#FE0000 100%) border-box"
          : "linear-gradient(91.26deg,#000000 2.48%,#454545 100%) padding-box,linear-gradient(88.82deg,#00F0FF 0%,#000AFF 24%,#8F00FF 51%,#EA00FE 75%,#FE0000 100%) border-box",
      }}
    >
      <div
        className={`absolute top-0 ${
          right
            ? "left-8 sm:left-0 -translate-x-1/2"
            : "right-8 sm:right-0 translate-x-1/2"
        } -translate-y-1/2 w-[50px] sm:w-[86px] lg:w-[200px] h-[50px] sm:h-[86px] lg:h-[200px] flex items-center justify-center bg-[#5ec9f5] rounded-full text-2xl sm:text-[64px] lg:text-[128px] text-white font-extrabold`}
      >
        {id}
      </div>
      <div
        className={`absolute flex items-center justify-center top-0 left-1/2 w-[140px] sm:w-[250px] lg:w-[400px] h-[29px] sm:h-[52px] lg:h-[80px] -translate-y-1/2 -translate-x-1/2 border-[3px] border-transparent rounded-[50px] py-0.5 sm:py-2.5 px-5 sm:px-12 lg:py-3 lg:px-[60px] ${
          metamask ? "cursor-pointer" : ""
        } ${right ? "rounded-ee-none" : "rounded-es-none"}`}
        style={{
          background:
            "linear-gradient(-198deg,#fff,#fff) padding-box,linear-gradient(135deg,#00F0FF 0%,#000AFF 24%,#8F00FF 51%,#EA00FE 75%,#FE0000 98%) border-box",
        }}
        onClick={onConnect}
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt="image"
          className="w-full"
        />
      </div>
      {children}
    </div>
  );
};

const Guide = () => {
  const { t } = useTranslation();

  return (
    <div id="guide" className="relative container mt-[60px] lg:mt-16">
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="absolute top-0 w-[260px] opacity-5 left-1/2 -translate-y-1/2 -z-[1]"
      />
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="absolute top-0 w-[560px] opacity-5 right-0 -translate-y-1/2 translate-x-1/2 -z-[1]"
      />
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="absolute -bottom-[80px] w-[500px] opacity-5 right-[40px] -z-[1]"
      />
      <Image
        src={ArrowLine.src}
        width={ArrowLine.width}
        height={ArrowLine.height}
        alt="arrowline"
        className="absolute rotate-90 left-0 top-0 translate-x-[24%] -translate-y-[25%] -z-[1] max-w-[70%]"
      />
      <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold md:ml-6 lg:ml-20 leading-none max-md:text-center">
        {t("Guide.title")}
      </h2>
      <div className="text-xs md:text-base lg:text-2xl font-semibold text-[#00186C]/50 md:ml-6 lg:ml-20 leading-none max-md:text-center">
        {t("Guide.subtitle")}
      </div>
      <GuideCard
        id={1}
        image={Metamask}
        metamask
        className="mt-5 sm:mt-[52px] lg:mt-20"
      >
        {parse(
          t("Guide.item1").replaceAll(
            /<link>[a-zA-Z://?.=&]*<\/link>/g,
            (str: string) => {
              console.log(str);
              const link = str.replaceAll(/<\/*link>/g, "");
              return `<a href="${link}" target="_blank" rel="noreferrer" className="hover:brightness-90 active:brightness-95 transition-all underline text-[#66e5f3]" style={{color: '#66e5f3}}>${
                link.replaceAll("https://", "").split("/")[0]
              }</a>`;
            }
          )
        )}
      </GuideCard>
      <GuideCard
        id={2}
        image={Pulsechain}
        right
        className="mt-7 sm:mt-20 lg:mt-32 ml-auto"
      >
        {parse(
          t("Guide.item2").replaceAll(
            /<link>[a-zA-Z://?.=&]*<\/link>/g,
            (str: string) => {
              console.log(str);
              const link = str.replaceAll(/<\/*link>/g, "");
              return `<a href="${link}" target="_blank" rel="noreferrer" className="hover:brightness-90 active:brightness-95 transition-all underline text-[#66e5f3]" style={{color: '#66e5f3}}>${
                link.replaceAll("https://", "").split("/")[0]
              }</a>`;
            }
          )
        )}
      </GuideCard>
      <GuideCard id={3} image={Bridge} className="mt-7 sm:mt-20 lg:mt-32">
        {parse(
          t("Guide.item3").replaceAll(
            /<link>[a-zA-Z://?.=&]*<\/link>/g,
            (str: string) => {
              console.log(str);
              const link = str.replaceAll(/<\/*link>/g, "");
              return `<a href="${link}" target="_blank" rel="noreferrer" className="hover:brightness-90 active:brightness-95 transition-all underline text-[#66e5f3]" style={{color: '#66e5f3}}>${
                link.replaceAll("https://", "").split("/")[0]
              }</a>`;
            }
          )
        )}
      </GuideCard>
    </div>
  );
};

export default Guide;
