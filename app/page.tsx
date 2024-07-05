import { Slides } from "@/components/slides";
import { Web3Provider } from "@/components/web3-provider";

export default function Home() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <Web3Provider>
        <Slides />
      </Web3Provider>
    </div>
  );
}
