"use client";

import Image from "next/image";

import LinkRight from "./svgs/LinkRight";
import Rocket from "./svgs/Rocket";
import Arrow from "@/assets/arrow.svg";
import Logo from "@/assets/logo.png";
import { useTranslation } from "next-export-i18n";

interface PhaseCardProps {
  id: number;
  title: string;
  items: string[];
  className?: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({
  id,
  title,
  items,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <h4 className="lg:text-xl font-bold text-center h-[74px]">
        Phase {id}: {title}
      </h4>
      <ul
        className="pl-9 lg:pl-12 pt-10 pb-7 lg:py-20 pr-6 bg-white border-4 border-black rounded-[50px] h-full"
        style={{ listStyleImage: `url(${Arrow.src})` }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[15px] lg:text-xl font-medium pt-5 first:pt-0 leading-none"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Roadmap = () => {
  const { t } = useTranslation();

  const phases = [
    {
      title: t("Roadmap.phase1.title"),
      items: Array(8)
        .fill(0)
        .map((_, i) => t(`Roadmap.phase1.item${i + 1}`)),
    },
    {
      title: t("Roadmap.phase2.title"),
      items: Array(7)
        .fill(0)
        .map((_, i) => t(`Roadmap.phase2.item${i + 1}`)),
    },
    {
      title: t("Roadmap.phase3.title"),
      items: Array(8)
        .fill(0)
        .map((_, i) => t(`Roadmap.phase3.item${i + 1}`)),
    },
    {
      title: t("Roadmap.phase4.title"),
      items: Array(7)
        .fill(0)
        .map((_, i) => t(`Roadmap.phase4.item${i + 1}`)),
    },
  ];

  return (
    <div
      id="roadmap"
      className="relative container px-5 md:px-[66px] mt-14 lg:mt-16"
    >
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="absolute -top-[60px] right-0 w-[450px] opacity-5 translate-x-1/3 -z-[1]"
      />
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold leading-none">
            {t("Roadmap.title")}
          </h2>
          <span className="text-xs sm:text-base lg:text-2xl font-semibold text-[#00186C]/50 leading-none">
            {t("Roadmap.subtitle")}
          </span>
        </div>
        <Rocket className="ml-4 lg:ml-10 max-sm:w-10 max-lg:w-[54px]" />
      </div>
      <div className="flex items-stretch max-lg:flex-wrap justify-center max-lg:-ml-[140px]">
        <PhaseCard
          id={1}
          items={phases[0].items}
          title={phases[0].title}
          className="w-full max-md:max-w-[360px] md:w-[280px] md:min-[1250px]:w-[360px] lg:w-full max-lg:ml-[140px] mt-9"
        />
        <LinkRight className="mx-[30px] min-w-fit my-auto translate-y-[37px] max-lg:hidden" />
        <PhaseCard
          id={2}
          items={phases[1].items}
          title={phases[1].title}
          className="w-full max-md:max-w-[360px] md:w-[280px] min-[1250px]:w-[360px] lg:w-full max-lg:ml-[140px] mt-9"
        />
        <LinkRight className="mx-[30px] min-w-fit my-auto translate-y-[37px] max-lg:hidden" />
        <PhaseCard
          id={3}
          items={phases[2].items}
          title={phases[2].title}
          className="w-full max-md:max-w-[360px] md:w-[280px] min-[1250px]:w-[360px] lg:w-full max-lg:ml-[140px] mt-9"
        />
        <LinkRight className="mx-[30px] min-w-fit my-auto translate-y-[37px] max-lg:hidden" />
        <PhaseCard
          id={4}
          items={phases[3].items}
          title={phases[3].title}
          className="w-full max-md:max-w-[360px] md:w-[280px] min-[1250px]:w-[360px] lg:w-full max-lg:ml-[140px] mt-9"
        />
      </div>
    </div>
  );
};

export default Roadmap;
