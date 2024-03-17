"use client";

import TeamImg from "@/assets/team.jpg";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import parse from "html-react-parser";

const Team = () => {
  const { t } = useTranslation();

  return (
    <div id="team" className="relative mt-10 md:mt-20 lg:mt-[150px]">
      <div className="bg-white absolute top-0 left-0 bottom-0 right-0 -z-[2]" />
      <div className="container flex max-md:flex-col-reverse items-center px-5 md:pr-0 md:pl-10 lg:pl-[66px] pt-5 md:pt-10 lg:pt-24">
        <div className="flex flex-col md:mr-8 lg:mr-[90px] mt-3 md:-mt-[40px] lg:-mt-[80px]">
          <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold text-center md:text-right leading-none">
            {t("Team.title")}
          </h2>
          <span className="text-xs sm:text-base lg:text-2xl font-semibold text-[#00186C]/50 text-center md:text-right leading-none">
            {t("Team.subtitle")}
          </span>
          <p className="text-xs sm:text-base lg:text-2xl font-semibold mt-5 md:mt-6 lg:mt-[68px] leading-[1.2]">
            {parse(
              t("Team.para1")
                .replaceAll("<bold>", '<span className="font-extrabold">')
                .replaceAll("</bold>", "</span>")
            )}
            <br />
            <br />
            {parse(
              t("Team.para2")
                .replaceAll("<bold>", '<span className="font-extrabold">')
                .replaceAll("</bold>", "</span>")
            )}
          </p>
        </div>
        <Image
          src={TeamImg.src}
          width={TeamImg.width}
          height={TeamImg.height}
          alt="team"
          className="max-md:min-w-[200px] min-w-[43%] w-[43%] aspect-[1.146] rounded-ss-[50px] rounded-es-[50px] max-md:rounded-[50px] object-cover object-[center_19%] drag-none select-none"
        />
      </div>
    </div>
  );
};

export default Team;
