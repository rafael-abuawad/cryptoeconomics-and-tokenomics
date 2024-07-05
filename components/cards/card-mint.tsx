"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FactoryABI } from "@/abi/factory.abi";
import Link from "next/link";
import { TokenABI } from "@/abi/token.abi";

const formSchema = z.object({
    address: z
        .string()
        .min(42, { message: "Must be a wallet address" })
        .max(42, { message: "Must be a wallet address" }),
    amount: z.coerce.number(),
});

const FACTORY_ADDRESS = (process.env.FACTORY_ADDRESS as `0x${string}`) || "0xF2167F862eF67411b6Eb3BD7cD64a288abf89831";
export function CardMint() {
    const { isConnected, address } = useAccount();
    const { data: id } = useReadContract({
        address: FACTORY_ADDRESS,
        abi: FactoryABI,
        functionName: 'token_count',
        args: [address!],
    })
    const { data: token_adress } = useReadContract({
        address: FACTORY_ADDRESS,
        abi: FactoryABI,
        functionName: 'tokens',
        args: [address!, BigInt(id ? id - 1 : 0)],
    })
    const { data: symbol } = useReadContract({
        address: token_adress as `0x${string}`,
        abi: TokenABI,
        functionName: 'symbol'
    })

    const { data: hash, error, isPending, writeContract } = useWriteContract();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            address: "",
            amount: 0
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        writeContract({
            address: token_adress as `0x${string}`,
            abi: TokenABI,
            functionName: "mint",
            args: [values.address as `0x${string}`, BigInt(values.amount * 10 ** 18)],
        });
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });

    if (!isConnected || address === undefined) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Connecta tu billetera para ver este slide.</AlertDescription>
            </Alert>
        )
    }

    return (
        <Card className="w-96 text-xl dark:border-slate-800">
            <CardHeader>
                <CardTitle>Acuñar tokens (${symbol})</CardTitle>
                <CardDescription>Acuñas mas tokens a una persona.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pb-4">
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dirección</FormLabel>
                                    <FormControl>
                                        <Input placeholder="0xF2167F862eF67411b6Eb3BD7cD64a288abf89831" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cantidad</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="150" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        {(isPending || isConfirming) && (
                            <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Por favor espere
                            </Button>
                        )}
                        {!isPending && !isConfirming && (
                            <Button disabled={!isConnected} type="submit">
                                Acuñar
                            </Button>
                        )}
                    </form>
                </Form>

                {isConfirmed && (
                    <Alert className="border-slate-800">
                        <AlertTitle className="font-semibold">Tokens acuñados! 💸</AlertTitle>
                        <AlertDescription>
                            Acabas de crear un acuñar mas tokens!{" "}
                            <Button asChild className="px-0" variant="link">
                                <Link href={`https://testnet.ftmscan.com/tx/${hash}`} target="_blank">
                                    Ver
                                </Link>
                            </Button>
                        </AlertDescription>
                    </Alert>
                )}

                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error.message}</AlertDescription>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
}
