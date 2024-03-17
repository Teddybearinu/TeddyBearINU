"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide1 from "@/assets/slides/1.jpg";
import Slide2 from "@/assets/slides/2.jpg";
import Slide3 from "@/assets/slides/3.jpg";
import ArrowDown from "./svgs/ArrowDown";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Autoplay } from "swiper/modules";
import { useTranslation } from "next-export-i18n";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex">
      <div className="relative w-full md:w-[calc(100%-78px)] lg:w-[calc(100%-195px)]">
        <Swiper
          effect={"creative"}
          autoplay={{ delay: 3000 }}
          speed={800}
          loop
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
              scale: 1.2,
            },
          }}
          modules={[EffectCreative, Autoplay]}
        >
          <SwiperSlide>
            <Image
              src={Slide1.src}
              width={Slide1.width}
              height={Slide1.height}
              alt="slide"
              className="w-full min-h-[490px] aspect-[1.79] object-cover object-[center_35%] drag-none select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Slide2.src}
              width={Slide2.width}
              height={Slide2.height}
              alt="slide"
              className="w-full min-h-[490px] aspect-[1.79] object-cover object-[center_35%] drag-none select-none"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={Slide3.src}
              width={Slide3.width}
              height={Slide3.height}
              alt="slide"
              className="w-full min-h-[490px] aspect-[1.79] object-cover object-[center_35%] drag-none select-none"
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-[32px] md:text-[40px] lg:text-[96px] font-black text-white whitespace-nowrap leading-none text-sha drop-shadow-[3px_4px_8px_black]">
            TEDDY BEAR INU
          </h1>
          <span className="text-sm md:text-base lg:text-4xl font-medium text-white leading-none drop-shadow-[2px_2px_4px_black]">
            {t("Landing.desc")}
          </span>
        </div>
      </div>
      <div className="w-[78px] lg:w-[195px] min-w-[78px] lg:min-w-[195px] flex justify-center items-end mb-[26px] max-md:hidden">
        <ArrowDown className="absolute max-lg:w-[30px] h-auto" />
      </div>
    </div>
  );
};

export default Landing;
