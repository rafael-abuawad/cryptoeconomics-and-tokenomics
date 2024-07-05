"use client"
import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"
import { MasonryCard } from "./masonry-card"
import { ConnectKitButton } from "connectkit"


const NameLink = () => <>
    <Button variant="link" asChild className="px-0">
        <Link href="https://twitter.com/rabuawad_" target="_blank">
            <span className="text-white text-xl">Rafael Abuawad</span>
        </Link>
    </Button>
</>

const FaucetLink = () => <>
    <Button variant="link" asChild className="px-0">
        <Link href="https://faucet.fantom.network/" target="_blank">
            <span className="text-white font-extrabold text-xl">faucet gratuito the la red de prueba.</span>
        </Link>
    </Button>
</>

const MetamaskLink = () => <>
    <Button variant="link" asChild className="px-0">
        <Link href="https://metamask.io/" target="_blank">
            <span className="text-white font-extrabold text-xl">Metamask 🦊</span>
        </Link>
    </Button>
</>

export function Slides() {
    return (
        <Carousel className="w-full max-w-lg xl:max-w-[96rem]">
            <CarouselContent>
                {/* <CarouselItem>
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
                                        La cripto-economía es el estudio de los sistemas y mecanismos económicos que gobiernan el comportamiento de los participantes en una red descentralizada. En otras palabras, se trata de entender cómo funcionan las economías basadas en blockchain y criptomonedas.
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
                                        <MasonryCard className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3" badge="Finanzas Decentralizadas" image="/images/velodrome.png" imageAltText="Velodrome Screenshot" />
                                        <MasonryCard className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3" badge="Aplicaciones Decentralizadas" image="/images/dapp.png" imageAltText="Uniswap Screenshot" />
                                        <MasonryCard className="col-span-12 md:col-span-4" badge="Mundos Digitales" image="/images/axies.png" imageAltText="Axie Infinity Screenshot" />
                                        <MasonryCard className="col-span-12 md:col-span-4" badge="Coleccionables" image="/images/blur.png" imageAltText="BLUR NFT Marketplace Screenshot" />
                                        <MasonryCard className="col-span-12 md:col-span-4" badge="Real World Assets" image="/images/rwa.png" imageAltText="RWA Screenshot" />
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
                                        La red descentralizada de Bitcoin es un ejemplo perfecto de cómo la economía criptográfica funciona en la práctica.
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
                                        Un token es un activo digital emitido en una blockchain, que representa un activo o utilidad particular. Los tokens pueden ser utilizados para representar una amplia variedad de activos, desde monedas digitales hasta derechos de voto.
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
                                        Los tokens ERC-20 de Ethereum y cómo se utilizan para incentivar a los desarrolladores a construir aplicaciones descentralizadas (dApps).
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
                                <MasonryCard className="col-span-12 md:col-span-4" badge="Tokens" image="/images/coingecko.png" imageAltText="Tokens Screenshot" />
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
                                        La tokenómica es el estudio de los sistemas y mecanismos económicos que gobiernan el comportamiento de los participantes en una economía basada en tokens. Se trata de entender cómo los tokens son diseñados, distribuidos y utilizados para crear valor en una economía descentralizada.
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
                                        A continuación, crearemos nuestra propia criptomoneda, para lo cual utilizaremos una blockchain de prueba, también conocida como testnet. para crear tu propio token, solo necesitas tener instalado <MetamaskLink /> en tu navegador y obtener algunos tokens del <FaucetLink /> (los tokens del faucet no tienen ningún valor).
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
                                        El siguiente slide contiene un botón para que conectes tu billetera web3 y podamos empezar. No te olvides de que debes tener fondos para poder interactuar con la aplicación; puedes obtener algunos tokens del <FaucetLink />.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem> */}

                <CarouselItem>
                    <div className="p-1">
                        <Card className="border-none">
                            <CardContent className="flex aspect-auto xl:aspect-video items-center justify-center p-6">
                                <div className="text-center max-w-[750px] grid place-items-center mx-auto">
                                    <ConnectKitButton />
                                    <p className=" text-center text-md pt-4 font-light text-foreground">
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
                                        Ahora necesitamos alguna información básica para nuestro token, lo más importante es un nombre y un símbolo (o ticker). El símbolo es la abreviación que comúnmente vemos en mercados financieros.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
