import React from "react";
import { DashboardSidebar } from "@/app/_components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/app/_components/ui/sidebar";
import { BlurContainer } from "@/app/_components/ui/BlurContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import {
  DollarSign,
  TrendingUp,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

// Mock data para transações
const transactions = [
  {
    id: 1,
    client: "João Silva",
    service: "Banho e Tosa",
    date: "02/04/2023",
    amount: "R$ 120,00",
    status: "Pago",
  },
  {
    id: 2,
    client: "Maria Oliveira",
    service: "Consulta Veterinária",
    date: "03/04/2023",
    amount: "R$ 150,00",
    status: "Pago",
  },
  {
    id: 3,
    client: "Pedro Santos",
    service: "Hidratação",
    date: "05/04/2023",
    amount: "R$ 75,00",
    status: "Pendente",
  },
  {
    id: 4,
    client: "Ana Costa",
    service: "Banho",
    date: "07/04/2023",
    amount: "R$ 55,00",
    status: "Pago",
  },
  {
    id: 5,
    client: "Carlos Ferreira",
    service: "Tosa Higiênica",
    date: "10/04/2023",
    amount: "R$ 45,00",
    status: "Cancelado",
  },
];

const Finances = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1 p-6">
              <h1 className="mb-6 text-2xl font-bold">Finanças</h1>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <BlurContainer>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Receita Total (Mês)
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 4.550,00</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="flex items-center text-green-500">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          +20.1% do mês anterior
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </BlurContainer>

                <BlurContainer>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Transações Pendentes
                      </CardTitle>
                      <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 650,00</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-amber-500">
                          4 pagamentos aguardando
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </BlurContainer>

                <BlurContainer>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Ticket Médio
                      </CardTitle>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 89,00</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="flex items-center text-green-500">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          +5.2% do mês anterior
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </BlurContainer>
              </div>

              <BlurContainer>
                <Card>
                  <CardHeader>
                    <CardTitle>Transações Recentes</CardTitle>
                    <CardDescription>
                      Histórico de pagamentos e transações
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all">
                      <TabsList>
                        <TabsTrigger value="all">Todas</TabsTrigger>
                        <TabsTrigger value="pending">Pendentes</TabsTrigger>
                        <TabsTrigger value="paid">Pagas</TabsTrigger>
                      </TabsList>

                      <TabsContent value="all" className="mt-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Cliente</TableHead>
                              <TableHead>Serviço</TableHead>
                              <TableHead>Data</TableHead>
                              <TableHead>Valor</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {transactions.map((transaction) => (
                              <TableRow key={transaction.id}>
                                <TableCell className="font-medium">
                                  {transaction.client}
                                </TableCell>
                                <TableCell>{transaction.service}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell>{transaction.amount}</TableCell>
                                <TableCell>
                                  <span
                                    className={`rounded-full px-2 py-1 text-xs ${
                                      transaction.status === "Pago"
                                        ? "bg-green-100 text-green-700"
                                        : transaction.status === "Pendente"
                                          ? "bg-amber-100 text-amber-700"
                                          : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {transaction.status}
                                  </span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TabsContent>

                      <TabsContent value="pending" className="mt-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Cliente</TableHead>
                              <TableHead>Serviço</TableHead>
                              <TableHead>Data</TableHead>
                              <TableHead>Valor</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {transactions
                              .filter((t) => t.status === "Pendente")
                              .map((transaction) => (
                                <TableRow key={transaction.id}>
                                  <TableCell className="font-medium">
                                    {transaction.client}
                                  </TableCell>
                                  <TableCell>{transaction.service}</TableCell>
                                  <TableCell>{transaction.date}</TableCell>
                                  <TableCell>{transaction.amount}</TableCell>
                                  <TableCell>
                                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700">
                                      {transaction.status}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </TabsContent>

                      <TabsContent value="paid" className="mt-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Cliente</TableHead>
                              <TableHead>Serviço</TableHead>
                              <TableHead>Data</TableHead>
                              <TableHead>Valor</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {transactions
                              .filter((t) => t.status === "Pago")
                              .map((transaction) => (
                                <TableRow key={transaction.id}>
                                  <TableCell className="font-medium">
                                    {transaction.client}
                                  </TableCell>
                                  <TableCell>{transaction.service}</TableCell>
                                  <TableCell>{transaction.date}</TableCell>
                                  <TableCell>{transaction.amount}</TableCell>
                                  <TableCell>
                                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                                      {transaction.status}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </BlurContainer>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Finances;
