"use client";

import { useEffect, useState } from "react";

const usePrice = () => {
  const [price, setPrice] = useState("0");

  const fetchPrice = async () => {
    try {
      const res = await fetch(
        "https://api.geckoterminal.com/api/v2/networks/pulsechain/tokens/0xee9082DaEA925Be8F79f1b2c457fC9470A104414"
      ).then((res) => res.json());
      console.log(res);
      setPrice(res?.data?.attributes?.price_usd ?? "0");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPrice();
  }, []);

  return price;
};

export default usePrice;
