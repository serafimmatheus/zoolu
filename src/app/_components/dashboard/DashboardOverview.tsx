"use client";

import React from "react";
import { MonthlyStats } from "@/app/_components/dashboard/MonthlyStats";
import { RecentAppointments } from "@/app/_components/dashboard/RecentAppointments";
import { UpcomingAppointments } from "@/app/_components/dashboard/UpcomingAppointments";
import { BlurContainer } from "../ui/BlurContainer";

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <BlurContainer>
        <MonthlyStats />
      </BlurContainer>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BlurContainer>
          <h2 className="mb-4 text-xl font-semibold">Agendamentos Recentes</h2>
          <RecentAppointments />
        </BlurContainer>

        <BlurContainer>
          <h2 className="mb-4 text-xl font-semibold">Próximos Agendamentos</h2>
          <UpcomingAppointments />
        </BlurContainer>
      </div>
    </div>
  );
};
