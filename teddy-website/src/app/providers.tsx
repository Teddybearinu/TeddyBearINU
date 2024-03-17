"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { http, createConfig, WagmiProvider } from "wagmi";
import { pulsechain } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [pulsechain],
  connectors: [metaMask()],
  transports: {
    [pulsechain.id]: http(),
  },
});
const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Suspense>{children}</Suspense>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
