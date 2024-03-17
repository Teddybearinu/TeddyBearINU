"use client";

import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import EN from "@/assets/flags/en.svg";
import FR from "@/assets/flags/fr.svg";
import ES from "@/assets/flags/es.svg";
import DE from "@/assets/flags/de.svg";
import IT from "@/assets/flags/it.svg";
import EL from "@/assets/flags/gr.svg";
import CH from "@/assets/flags/ch.svg";
import JP from "@/assets/flags/jp.svg";
import AR from "@/assets/flags/ar.svg";
import KO from "@/assets/flags/ko.svg";
import { LanguageSwitcher, useSelectedLanguage } from "next-export-i18n";

interface LangMenuProps {
  grid?: boolean;
  className?: string;
}

const LangMenu: React.FC<LangMenuProps> = ({ grid, className }) => {
  const { lang: locale } = useSelectedLanguage();

  const langs = [
    {
      code: "en",
      image: EN,
    },
    {
      code: "fr",
      image: FR,
    },
    {
      code: "es",
      image: ES,
    },
    { code: "de", image: DE },
    { code: "it", image: IT },
    { code: "el", image: EL },
    { code: "ch", image: CH },
    { code: "jp", image: JP },
  ];

  const active = langs.find((item) => item.code === locale) ?? langs[0];

  return (
    <Menu
      as="div"
      className={`relative inline-block text-left z-10 min-w-[80px] ${
        className ?? ""
      }`}
    >
      <Menu.Button as={Fragment}>
        {({ open }) => (
          <button
            data-grid={grid}
            data-open={open}
            className="bg-white border-2 lg:border-[3px] border-black rounded-[21px] py-1 data-[grid=true]:py-[7px] data-[grid=true]:border-none px-6 data-[open=true]:border-b-0 data-[open=true]:rounded-es-none data-[open=true]:rounded-ee-none transition-all"
          >
            <Image
              data-grid={grid}
              src={active.image.src}
              width={active.image.width}
              height={active.image.height}
              alt={active.code}
              className="w-7 h-7 data-[grid=true]:w-5 data-[grid=true]:h-5"
            />
          </button>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          data-grid={grid}
          className={`absolute left-0 right-0 w-full -mt-1 flex flex-col data-[grid=true]:flex-row data-[grid=true]:right-auto data-[grid=true]:flex-wrap bg-white border-2 lg:border-[3px] data-[grid=true]:border-none data-[grid=true]:rounded-[20px] !border-t-0 border-black rounded-es-[21px] rounded-ee-[21px] data-[grid=true]:p-2.5 data-[grid=true]:w-[150px] ${
            grid ? "top-1" : ""
          }`}
        >
          {langs
            .filter((item) => grid || item.code !== locale)
            .map((item) => (
              <Menu.Item
                as={"button"}
                data-grid={grid}
                key={item.code}
                className="py-1 data-[grid=true]:py-[5px] data-[grid=true]:px-1.5 hover:scale-110 transition-all"
              >
                <LanguageSwitcher lang={item.code}>
                  <Image
                    data-grid={grid}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.code}
                    className="w-7 h-7 data-[grid=true]:w-5 data-[grid=true]:h-5 data-[grid=true]:min-w-5 mx-auto"
                  />
                </LanguageSwitcher>
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangMenu;
