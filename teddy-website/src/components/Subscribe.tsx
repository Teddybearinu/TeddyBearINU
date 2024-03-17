"use client";

import SubscribeImg from "@/assets/subscribe.jpg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "next-export-i18n";

const Subscribe = () => {
  const { t } = useTranslation();
  const [mail, setMail] = useState("");

  useEffect(() => {
    emailjs.init("aQnmUW45kP-E_wR0f");
  }, []);

  const onSubscribe = async () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        mail
      )
    ) {
      toast.error("Invalid mail");
      return;
    }
    try {
      await emailjs.send("service_azcappj", "template_4qtd2kr", {
        email: mail,
      });
      toast.success("Sent subscription successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send subscription");
    }
  };

  return (
    <div className="bg-white mt-20 lg:mt-60">
      <div className="container flex max-sm:flex-col">
        <div className="w-full">
          <Image
            src={SubscribeImg.src}
            width={SubscribeImg.width}
            height={SubscribeImg.height}
            alt="subscribe"
            className="w-full drag-none select-none min-h-[270px] lg:min-h-[450px] object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-between px-5 sm:px-7 pt-3.5 sm:pt-3 lg:pt-6 pb-10 lg:pb-[60px]">
          <div className="flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold leading-none">
              {t("Subscribe.title")}
            </h2>
            <span className="text-[#00186C]/50 text-xs sm:text-base lg:text-2xl font-semibold leading-none">
              {t("Subscribe.subtitle")}
            </span>
          </div>
          <p className="text-xs sm:text-[15px] lg:text-2xl font-extrabold text-center max-lg:max-w-[460px] leading-none max-sm:mt-8">
            {t("Subscribe.desc")}
          </p>
          <div className="flex items-center border-b border-black w-full max-sm:mt-12">
            <input
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder={t("Subscribe.email")}
              className="placeholder:text-[#00186C]/50 placeholder:font-semibold font-semibold px-3 text-sm sm:text-base lg:text-2xl py-1 sm:py-2 lg:py-2.5 outline-none w-full bg-transparent"
            />
            <button
              className="text-[#FE0000] text-sm sm:text-base lg:text-[32px] font-bold py-1.5 sm:py-2 lg:py-3.5 px-8 lg:px-[60px] border border-b-0 border-black hover:brightness-90 active:brightness-95 transition-all"
              onClick={onSubscribe}
            >
              {t("Subscribe.subscribe")}
            </button>
          </div>
          <p className="text-[#00186C]/50 text-xs sm:text-base lg:text-2xl font-semibold text-center max-w-[250px] sm:max-w-[317px] lg:max-w-[464px] !leading-none max-sm:mt-12">
            {t("Subscribe.info")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
