"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MasonryCard } from "@/components/masonry-card";
import { ConnectKitButton } from "connectkit";
import { TokenForm } from "@/components/token-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardMint } from "./cards/card-mint";
import { CardTransfer } from "./cards/card-transfer";

const NameLink = () => (
  <>
    <Button variant="link" asChild className="px-0">
      <Link href="https://twitter.com/rabuawad_" target="_blank">
        <span className="text-white text-xl">Rafael Abuawad</span>
      </Link>
    </Button>
  </>
);

const FaucetLink = () => (
  <>
    <Button variant="link" asChild className="px-0">
      <Link href="https://faucet.fantom.network/" target="_blank">
        <span className="text-white font-extrabold text-xl">faucet gratuito the la red de prueba.</span>
      </Link>
    </Button>
  </>
);

const MetamaskLink = () => (
  <>
    <Button variant="link" asChild className="px-0">
      <Link href="https://metamask.io/" target="_blank">
        <span className="text-white font-extrabold text-xl">Metamask 🦊</span>
      </Link>
    </Button>
  </>
);

export function Slides() {
  return (
    <Carousel className="w-full max-w-lg xl:max-w-[96rem]">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-emerald-500 to-blue-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Cryptoeconomics & Tokenomics
                  </h1>
                  <h2 className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Por <NameLink />
                  </h2>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    La cripto-economía es el estudio de los sistemas y mecanismos económicos que gobiernan el
                    comportamiento de los participantes en una red descentralizada. En otras palabras, se trata de
                    entender cómo funcionan las economías basadas en blockchain y criptomonedas.
                    <Separator className="my-4" />
                    Que nos permite hacer estos sistemas...?
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
                  <div className="grid sm:grid-cols-12 gap-6">
                    <MasonryCard
                      className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3"
                      badge="Finanzas Decentralizadas"
                      image="/images/velodrome.png"
                      imageAltText="Velodrome Screenshot"
                    />
                    <MasonryCard
                      className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3"
                      badge="Aplicaciones Decentralizadas"
                      image="/images/dapp.png"
                      imageAltText="Uniswap Screenshot"
                    />
                    <MasonryCard
                      className="col-span-12 md:col-span-4"
                      badge="Mundos Digitales"
                      image="/images/axies.png"
                      imageAltText="Axie Infinity Screenshot"
                    />
                    <MasonryCard
                      className="col-span-12 md:col-span-4"
                      badge="Coleccionables"
                      image="/images/blur.png"
                      imageAltText="BLUR NFT Marketplace Screenshot"
                    />
                    <MasonryCard
                      className="col-span-12 md:col-span-4"
                      badge="Real World Assets"
                      image="/images/rwa.png"
                      imageAltText="RWA Screenshot"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    La red descentralizada de Bitcoin es un ejemplo perfecto de cómo la economía criptográfica funciona
                    en la práctica.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Tokens
                  </h1>
                  <h2 className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Un token es un activo digital emitido en una blockchain, que representa un activo o utilidad
                    particular. Los tokens pueden ser utilizados para representar una amplia variedad de activos, desde
                    monedas digitales hasta derechos de voto.
                  </h2>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Los tokens ERC-20 de Ethereum y cómo se utilizan para incentivar a los desarrolladores a construir
                    aplicaciones descentralizadas (dApps).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <MasonryCard
                  className="col-span-12 md:col-span-4"
                  badge="Tokens"
                  image="/images/coingecko.png"
                  imageAltText="Tokens Screenshot"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Tokenomics
                  </h1>
                  <h2 className="max-w-[750px] text-center text-xl font-light text-foreground">
                    La tokenómica es el estudio de los sistemas y mecanismos económicos que gobiernan el comportamiento
                    de los participantes en una economía basada en tokens. Se trata de entender cómo los tokens son
                    diseñados, distribuidos y utilizados para crear valor en una economía descentralizada.
                  </h2>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Los tokens ERC-20 de Ethereum son un ejemplo perfecto de cómo la tokenómica funciona en la práctica.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Nuestro Token
                  </h1>
                  <h2 className="max-w-[550px] text-center text-xl pt-3 font-light text-foreground">
                    A continuación, crearemos nuestra propia criptomoneda, para lo cual utilizaremos una blockchain de
                    prueba, también conocida como testnet. para crear tu propio token, solo necesitas tener instalado{" "}
                    <MetamaskLink /> en tu navegador y obtener algunos tokens del <FaucetLink /> (los tokens del faucet
                    no tienen ningún valor).
                  </h2>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    El siguiente slide contiene un botón para que conectes tu billetera web3 y podamos empezar. No te
                    olvides de que debes tener fondos para poder interactuar con la aplicación; puedes obtener algunos
                    tokens del <FaucetLink />.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center max-w-[750px] grid place-items-center mx-auto">
                  <ConnectKitButton />
                  <p className="dark:text-slate-500 text-center text-md pt-4 font-light text-foreground">
                    *Una vez conectado, pasa al siguiente slide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Ahora necesitamos alguna información básica para nuestro token, lo más importante es un nombre y un
                    símbolo (o ticker). El símbolo es la abreviación que comúnmente vemos en mercados financieros.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="max-w-[750px] grid place-items-center mx-auto">
                  <TokenForm />
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="max-w-96 grid place-items-center mx-auto">
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="mint">Acuñar</TabsTrigger>
                      <TabsTrigger value="transfer">Transferir</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mint">
                      <CardMint />
                    </TabsContent>
                    <TabsContent value="transfer">
                      <CardTransfer />
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Teoría de Juegos
                  </h1>
                  <h2 className="max-w-[750px] text-center text-xl font-light text-foreground">
                    La teoría de juegos en criptografía es el estudio de la toma de decisiones estratégicas en
                    situaciones donde el resultado depende de las acciones de múltiples individuos o partes.
                  </h2>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Se trata de entender cómo los participantes en una economía descentralizada toman decisiones y cómo
                    interactúan entre sí.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Diseño de Token
                  </h1>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    El diseño de token es un proceso que implica la creación de un token que sea seguro, escalable y
                    fácil de utilizar. Los diseñadores de tokens deben considerar una amplia variedad de factores, desde
                    la oferta de tokens hasta la gobernanza.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Estudio de Caso
                  </h1>
                  <h2 className="max-w-[750px] text-center text-xl font-light text-foreground">Chainlink</h2>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Ahora que hemos creado nuestro propio token, es hora de analizar un caso de uso real de tokens en la
                    industria. Chainlink es una plataforma de oráculos descentralizados que utiliza tokens para
                    incentivar a los participantes a proporcionar datos precisos y seguros.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-violet-500 to-fuchsia-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Conclusión
                  </h1>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <div className="text-center mx-auto">
                  <p className="max-w-[750px] text-center text-xl font-light text-foreground">
                    En conclusión, la economía criptográfica, la tokenómica y la teoría de juegos son fundamentales para
                    entender cómo funcionan las economías basadas en tokens. Al diseñar mecanismos de token y tokens, es
                    importante considerar los incentivos y desincentivos para los participantes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="p-1">
            <Card className="border-none bg-gradient-to-r from-emerald-500 to-blue-500">
              <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                <hgroup className="text-center mx-auto">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
                    Gracias!
                  </h1>
                  <h2 className="max-w-[750px] text-center text-xl font-light text-foreground">
                    Por <NameLink />
                  </h2>
                </hgroup>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
