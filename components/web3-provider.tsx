"use client";

import { WagmiProvider, createConfig } from "wagmi";
import { fantomTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";

const config = createConfig(
  getDefaultConfig({
    chains: [fantomTestnet],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    appName: "Cryptoeconomics & Tokenomics",
    ssr: true,
    appDescription:
      "El mundo de la Tokenomics y la Cryptoeconomics, campos emergentes que se centran en el diseño y análisis de economías digitales sostenibles. La Tokenomics se refiere al estudio de la creación, distribución y gestión de tokens digitales, mientras que la Cryptoeconomics se enfoca en la aplicación de principios económicos a la criptografía y las tecnologías blockchain",
    appUrl: "https://github.com/rafael-abuawad/cryptoeconomics-and-tokenomics", // your app's url
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
