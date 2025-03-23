"use client";

import React from "react";
import { DashboardSidebar } from "@/app/_components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/app/_components/ui/sidebar";
import { BlurContainer } from "@/app/_components/ui/BlurContainer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Search, UserPlus } from "lucide-react";

// Mock data para clientes
const customers = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@example.com",
    phone: "(11) 98765-4321",
    pets: 2,
    lastVisit: "10/03/2023",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    email: "maria@example.com",
    phone: "(11) 91234-5678",
    pets: 1,
    lastVisit: "15/03/2023",
  },
  {
    id: 3,
    name: "Pedro Santos",
    email: "pedro@example.com",
    phone: "(11) 99876-5432",
    pets: 3,
    lastVisit: "20/03/2023",
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana@example.com",
    phone: "(11) 95555-4444",
    pets: 1,
    lastVisit: "25/03/2023",
  },
  {
    id: 5,
    name: "Carlos Ferreira",
    email: "carlos@example.com",
    phone: "(11) 93333-2222",
    pets: 2,
    lastVisit: "01/04/2023",
  },
];

const Customers: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Clientes</h1>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Novo Cliente
                </Button>
              </div>

              <div className="mb-4 flex">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar clientes..."
                    className="w-full pl-8"
                  />
                </div>
              </div>

              <BlurContainer>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>Pets</TableHead>
                        <TableHead>Última Visita</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customers.map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell className="font-medium">
                            {customer.name}
                          </TableCell>
                          <TableCell>{customer.email}</TableCell>
                          <TableCell>{customer.phone}</TableCell>
                          <TableCell>{customer.pets}</TableCell>
                          <TableCell>{customer.lastVisit}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              Ver Detalhes
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </BlurContainer>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Customers;
