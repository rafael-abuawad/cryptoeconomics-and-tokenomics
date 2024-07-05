"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { FactoryABI } from "@/abi/factory.abi";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  symbol: z.string().min(3, {
    message: "Symbol must be at least 3 characters.",
  }),
  supply: z.coerce.number(),
});

export function TokenForm() {
  const { isConnected } = useAccount();
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      symbol: "",
      supply: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const FACTORY_ADDRESS =
      (process.env.FACTORY_ADDRESS as `0x${string}`) || "0xF2167F862eF67411b6Eb3BD7cD64a288abf89831";
    writeContract({
      address: FACTORY_ADDRESS,
      abi: FactoryABI,
      functionName: "create",
      args: [values.name, values.symbol, BigInt(values.supply)],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <Card className="w-96 text-xl dark:border-slate-800">
      <CardHeader>
        <CardTitle>Crear un token</CardTitle>
        <CardDescription>Crea tu nuevo token con sólo un click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Ethereum" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="symbol"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Símbolo</FormLabel>
                  <FormControl>
                    <Input placeholder="ETH" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="supply"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suministro inicial</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="100" {...field} />
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
                Crear
              </Button>
            )}
          </form>
        </Form>

        {isConfirmed && (
          <Alert className="border-slate-800">
            <AlertTitle className="font-semibold">Token creado! 🥳</AlertTitle>
            <AlertDescription>
              Acabas de crear un nuevo token!{" "}
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
