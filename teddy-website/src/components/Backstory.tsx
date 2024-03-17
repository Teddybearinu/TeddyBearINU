"use client";

import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import BackstoryImg from "@/assets/backstory.jpg";
import Carousel1 from "@/assets/carousel/1.jpg";
import Carousel2 from "@/assets/carousel/2.jpg";
import Carousel3 from "@/assets/carousel/3.jpg";
import Carousel4 from "@/assets/carousel/4.jpg";
import Carousel5 from "@/assets/carousel/5.jpg";
import Carousel6 from "@/assets/carousel/6.jpg";
import ArrowLine from "@/assets/arrowline.svg";
import Logo from "@/assets/logo.png";

import "swiper/css";
import ArrowLeft from "./svgs/ArrowLeft";
import Ring from "./svgs/Ring";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-export-i18n";

const Backstory = () => {
  const slides = [
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    Carousel6,
  ];
  const ref = useRef<SwiperRef>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [bgOffset, setBGOffset] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    setBGOffset(
      (descRef.current?.getBoundingClientRect()?.height ?? 0) / 2 -
        (titleRef.current?.getBoundingClientRect()?.height ?? 0)
    );
  }, [descRef, titleRef]);

  return (
    <div id="about">
      <div className="relative">
        <div className="relative container flex max-sm:flex-col sm:items-center sm:space-x-6 mt-8 md:mt-16 lg:mt-44 md:pr-10 lg:pr-[66px]">
          <Image
            src={BackstoryImg.src}
            width={BackstoryImg.width}
            height={BackstoryImg.height}
            alt="backstory"
            className="rounded-se-[50px] rounded-ee-[50px] w-full sm:w-[53.7%] aspect-[1.777] object-cover object-[center_31%] drag-none select-none max-sm:pr-9"
          />
          <Image
            src={ArrowLine.src}
            width={ArrowLine.width}
            height={ArrowLine.height}
            alt="arrowline"
            className="absolute top-0 left-0 -translate-y-[80%] translate-x-[10%] -z-[1] max-w-[70%]"
          />
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            alt="logo"
            className="absolute top-0 left-1/2 -translate-y-1/2 opacity-5 w-[700px] -z-[1]"
          />
          <Image
            src={Logo.src}
            width={Logo.width}
            height={Logo.height}
            alt="logo"
            className="absolute bottom-0 right-[150px] translate-y-1/2 opacity-5 w-[240px] -z-[1]"
          />
          <div ref={descRef} className="max-sm:mt-3 max-sm:px-5">
            <h2
              className="text-xl sm:text-2xl lg:text-4xl font-bold leading-none"
              ref={titleRef}
            >
              {t("Backstory.title")}
            </h2>
            <span className="text-xs sm:text-base lg:text-2xl font-semibold text-[#00186C]/50 mt-0.5 leading-none">
              {t("Backstory.subtitle")}
            </span>
            <p className="text-xs sm:text-base lg:text-2xl font-semibold mt-2.5 sm:mt-4 lg:mt-6">
              {t("Backstory.desc")}
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 bg-white w-full -z-[2] max-sm:hidden"
          style={{
            height: `calc(50% + ${bgOffset}px`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 bg-white w-full -z-[2] sm:hidden"
          style={{
            height: `${
              (descRef.current?.getBoundingClientRect()?.height ?? 0) -
              (titleRef.current?.getBoundingClientRect()?.height ?? 0)
            }px`,
          }}
        />
      </div>
      <div className="pt-[60px] lg:pt-20 pb-12 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white -z-[2]" />
        <div className="container">
          <Swiper
            ref={ref}
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 5000 }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              728: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 70,
              },
            }}
            className="[&_.swiper-slide-active]:!w-[calc((100%-60px)/3*1.5)] sm:[&_.swiper-slide-active]:!w-[calc((100%-60px)/5*1.5)] lg:[&_.swiper-slide-active]:!w-[calc((100%-140px)/5*1.5)] [&>.swiper-wrapper]:-ml-[calc((100%-60px)/3*0.25)] sm:[&>.swiper-wrapper]:-ml-[calc((100%-60px)/5*0.25)] lg:[&>.swiper-wrapper]:-ml-[calc((100%-140px)/5*0.25)] [&_.swiper-slide]:!h-[calc((100vw-60px)/3*1.5)] sm:[&_.swiper-slide]:!h-[calc((100vw-60px)/5*1.5)] lg:[&_.swiper-slide]:!h-[calc((min(100vw,1920px)-140px)/5*1.5)] [&_.swiper-slide]:transition-all [&_.swiper-slide]:flex"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i} className="">
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt="carousel"
                  className="rounded-full my-auto drag-none select-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center space-x-1.5 lg:space-x-3 mt-7 lg:mt-12">
            <button
              className="hover:scale-105 transition-all"
              onClick={() => ref.current?.swiper?.slidePrev()}
            >
              <ArrowLeft className="max-lg:w-[20px]" />
            </button>
            <Ring className="max-lg:w-[20px]" />
            <button
              className="hover:scale-105 transition-all"
              onClick={() => ref.current?.swiper?.slideNext()}
            >
              <ArrowLeft className="rotate-180 max-lg:w-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backstory;
