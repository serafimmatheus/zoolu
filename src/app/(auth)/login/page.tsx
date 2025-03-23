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
import { Checkbox } from "@/app/_components/ui/checkbox";
import { BlurContainer } from "@/app/_components/ui/BlurContainer";
import { useRouter } from "next/navigation";

const Login = () => {
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
              Bem-vindo de volta
            </CardTitle>
            <CardDescription className="text-center">
              Entre com suas credenciais para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <a href="#" className="text-xs text-primary hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lembrar de mim
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Ou</span>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <a href="/register" className="text-primary hover:underline">
                Registre-se
              </a>
            </div>
          </CardFooter>
        </Card>
      </BlurContainer>
    </div>
  );
};

export default Login;
