"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { Label } from "@/app/_components/ui/label";
import { BlurContainer } from "@/app/_components/ui/BlurContainer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { useRouter } from "next/navigation";

const Register = () => {
  const navigate = useRouter().push;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <BlurContainer className="w-full max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <div className="mb-4 flex justify-center">
              <div className="text-2xl font-bold">PetBooking</div>
            </div>
            <CardTitle className="text-center text-2xl">
              Crie sua conta
            </CardTitle>
            <CardDescription className="text-center">
              Escolha o tipo de conta que você deseja criar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="petshop" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="petshop">Pet Shop</TabsTrigger>
                <TabsTrigger value="customer">Cliente</TabsTrigger>
              </TabsList>

              <TabsContent value="petshop">
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="shop-name">Nome do Pet Shop</Label>
                    <Input
                      id="shop-name"
                      placeholder="Nome do seu pet shop"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shop-email">Email</Label>
                    <Input
                      id="shop-email"
                      type="email"
                      placeholder="email@seudominio.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shop-phone">Telefone</Label>
                    <Input
                      id="shop-phone"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shop-password">Senha</Label>
                    <Input id="shop-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shop-confirm-password">
                      Confirmar Senha
                    </Label>
                    <Input
                      id="shop-confirm-password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Criar Conta de Pet Shop
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="customer">
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-name">Nome Completo</Label>
                    <Input
                      id="customer-name"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-email">Email</Label>
                    <Input
                      id="customer-email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-phone">Telefone</Label>
                    <Input
                      id="customer-phone"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-password">Senha</Label>
                    <Input id="customer-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-confirm-password">
                      Confirmar Senha
                    </Label>
                    <Input
                      id="customer-confirm-password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Criar Conta de Cliente
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <div className="w-full text-center text-sm text-muted-foreground">
              Já possui uma conta?{" "}
              <a href="/login" className="text-primary hover:underline">
                Faça login
              </a>
            </div>
          </CardFooter>
        </Card>
      </BlurContainer>
    </div>
  );
};

export default Register;
