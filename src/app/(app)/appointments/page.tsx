"use client";

import React from "react";
import { DashboardSidebar } from "@/app/_components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/app/_components/ui/sidebar";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { BlurContainer } from "@/app/_components/ui/BlurContainer";

const Appointments: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1 p-6">
              <h1 className="mb-6 text-2xl font-bold">Agendamentos</h1>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <BlurContainer>
                  <Card>
                    <CardHeader>
                      <CardTitle>Calendário</CardTitle>
                      <CardDescription>
                        Selecione uma data para ver os agendamentos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                </BlurContainer>

                <BlurContainer>
                  <Card>
                    <CardHeader>
                      <CardTitle>Agendamentos do Dia</CardTitle>
                      <CardDescription>
                        {date?.toLocaleDateString("pt-BR", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="py-8 text-center text-muted-foreground">
                        Nenhum agendamento para esta data
                      </div>
                    </CardContent>
                  </Card>
                </BlurContainer>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Appointments;
