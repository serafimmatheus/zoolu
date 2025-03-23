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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { BarChart, LineChart } from "lucide-react";

const Reports = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1 p-6">
              <h1 className="mb-6 text-2xl font-bold">Relatórios</h1>

              <Tabs defaultValue="appointments">
                <TabsList className="mb-6 grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="appointments">Agendamentos</TabsTrigger>
                  <TabsTrigger value="revenue">Receita</TabsTrigger>
                  <TabsTrigger value="clients">Clientes</TabsTrigger>
                </TabsList>

                <TabsContent value="appointments">
                  <BlurContainer>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Agendamentos por Período</CardTitle>
                            <CardDescription>
                              Resumo de agendamentos dos últimos 30 dias
                            </CardDescription>
                          </div>
                          <LineChart className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-80 items-center justify-center rounded-md border-2 border-dashed">
                          <p className="text-muted-foreground">
                            Dados não disponíveis
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurContainer>
                </TabsContent>

                <TabsContent value="revenue">
                  <BlurContainer>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Receita Mensal</CardTitle>
                            <CardDescription>
                              Resumo financeiro dos últimos 12 meses
                            </CardDescription>
                          </div>
                          <BarChart className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-80 items-center justify-center rounded-md border-2 border-dashed">
                          <p className="text-muted-foreground">
                            Dados não disponíveis
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurContainer>
                </TabsContent>

                <TabsContent value="clients">
                  <BlurContainer>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Novos Clientes</CardTitle>
                            <CardDescription>
                              Taxa de aquisição de clientes por mês
                            </CardDescription>
                          </div>
                          <LineChart className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-80 items-center justify-center rounded-md border-2 border-dashed">
                          <p className="text-muted-foreground">
                            Dados não disponíveis
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurContainer>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Reports;
