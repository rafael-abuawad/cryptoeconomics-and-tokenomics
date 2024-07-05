"use client"

import { WagmiProvider, createConfig, http } from "wagmi";
import { fantomTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";

const config = createConfig(
  getDefaultConfig({
    chains: [fantomTestnet],
    walletConnectProjectId: "",
    appName: "Cryptoeconomics & Tokenomics",
    ssr: true,
    appDescription: "",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider options={{ language: "es-ES" }}>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};