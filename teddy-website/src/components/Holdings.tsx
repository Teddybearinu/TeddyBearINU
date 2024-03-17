"use client";

import Image, { StaticImageData } from "next/image";

import HoldingsImg from "@/assets/holding.jpg";
import Whale from "@/assets/holdings/whale.jpg";
import Shark from "@/assets/holdings/shark.jpg";
import Dolphin from "@/assets/holdings/dolphin.jpg";
import Squid from "@/assets/holdings/squid.jpg";
import Turtle from "@/assets/holdings/turtle.jpg";
import Crab from "@/assets/holdings/crab.jpg";
import Shrimp from "@/assets/holdings/shrimp.jpg";
import Logo from "@/assets/logo.png";
import ArrowLine from "@/assets/arrowline.svg";
import { useTranslation } from "next-export-i18n";

interface HoldingCardProps {
  image: StaticImageData;
  title: string;
  value: string;
  className?: string;
}

const HoldingCard: React.FC<HoldingCardProps> = ({
  image,
  title,
  value,
  className,
}) => {
  return (
    <div
      className={`flex items-center bg-white p-1 lg:p-2.5 rounded-ss-full rounded-es-full max-md:rounded-full w-full max-md:max-w-[480px] ${
        className ?? ""
      }`}
    >
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={title}
        className="w-16 md:w-20 lg:w-[180px] h-20 lg:h-[180px] min-w-20 lg:min-w-[180px] rounded-full drag-none select-none cursor-pointer hover:scale-150 transition-all"
      />
      <div className="ml-[35px] lg:ml-20 flex flex-col">
        <span className="text-xs sm:text-xl lg:text-[40px] font-semibold leading-none">
          {title}
        </span>
        <span className="text-xl sm:text-[32px] lg:text-[56px] font-black leading-none">
          {value} TBI
        </span>
      </div>
    </div>
  );
};

const Holdings = () => {
  const { t } = useTranslation();

  const info = [
    {
      title: t("Holdings.whale"),
      value: "90,000,000",
      image: Whale,
    },
    {
      title: t("Holdings.shark"),
      value: "9,000,000",
      image: Shark,
    },
    {
      title: t("Holdings.dolphin"),
      value: "900,000",
      image: Dolphin,
    },
    {
      title: t("Holdings.squid"),
      value: "90,000",
      image: Squid,
    },
    {
      title: t("Holdings.turtle"),
      value: "9,000",
      image: Turtle,
    },
    {
      title: t("Holdings.crab"),
      value: "900",
      image: Crab,
    },
    { title: t("Holdings.shrimp"), value: "90", image: Shrimp },
  ];

  return (
    <div className="relative container mt-12 md:mt-20 max-md:px-5">
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="absolute top-0 left-0 w-[800px] opacity-5 -translate-y-1/3 -translate-x-1/3 -z-[1]"
      />
      <Image
        src={ArrowLine.src}
        width={ArrowLine.width}
        height={ArrowLine.height}
        alt="arrowline"
        className="absolute rotate-90 left-0 top-0 translate-x-[9%] -translate-y-[35.6%] -z-[1] max-w-[70%]"
      />
      <Image
        src={ArrowLine.src}
        width={ArrowLine.width}
        height={ArrowLine.height}
        alt="arrowline"
        className="absolute rotate-90 right-[40px] top-1/2 -translate-y-1/2 -z-[1] max-w-[70%]"
      />
      <div className="md:mr-[66px] flex flex-col">
        <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold text-center md:text-right leading-none">
          {t("Holdings.title")}
        </h2>
        <span className="text-xs md:text-base lg:text-2xl font-semibold text-[#00186C]/50 text-center md:text-right leading-none">
          {t("Holdings.subtitle")}
        </span>
      </div>
      <div className="flex max-md:flex-col max-md:items-center items-center mt-6 md:mt-10">
        <Image
          src={HoldingsImg.src}
          width={HoldingsImg.width}
          height={HoldingsImg.height}
          alt="holding"
          className="rounded-se-[50px] rounded-ee-[50px] max-md:rounded-[50px] max-md:min-w-[240px] w-[45%] min-w-[45%] aspect-[0.8] object-cover object-center md:mr-11 lg:mr-16 drag-none select-none"
        />
        <div className="flex flex-col space-y-8 md:space-y-[15px] lg:space-y-9 w-full max-md:mt-7 max-md:items-center">
          {info.map((item) => (
            <HoldingCard
              key={item.title}
              image={item.image}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Holdings;
