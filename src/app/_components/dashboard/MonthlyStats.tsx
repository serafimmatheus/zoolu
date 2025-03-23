import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { ChartContainer } from "@/app/_components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Users, Calendar, DollarSign } from "lucide-react";

const data = [
  { name: "Jan", value: 2400 },
  { name: "Fev", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Abr", value: 3908 },
  { name: "Mai", value: 4800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 4300 },
];

export const MonthlyStats: React.FC = () => {
  return (
    <div className="mt-12 space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Clientes
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">
              +14% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reservas do Mês
            </CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Faturamento Mensal
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 4.850,00</div>
            <p className="text-xs text-muted-foreground">
              +11% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Faturamento Mensal</CardTitle>
          <CardDescription>
            Visualização do faturamento nos últimos 7 meses
          </CardDescription>
        </CardHeader>
        <CardContent className="h-72">
          <ChartContainer
            style={{ height: "100%", width: "100%" }}
            config={{
              revenue: { label: "Faturamento", color: "#8B5CF6" },
            }}
          >
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                name="Valor (R$)"
                fill="var(--color-revenue, #8B5CF6)"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
