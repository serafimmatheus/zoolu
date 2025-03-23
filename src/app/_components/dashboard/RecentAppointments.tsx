import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Calendar, Clock } from "lucide-react";
import { Chip } from "../ui/Chip";

// Mock data for recent appointments
const appointments = [
  {
    id: 1,
    petName: "Max",
    ownerName: "João Silva",
    service: "Banho",
    date: "27/05/2023",
    time: "14:30",
    status: "Concluído",
    amount: "R$ 55,00",
  },
  {
    id: 2,
    petName: "Luna",
    ownerName: "Maria Oliveira",
    service: "Tosa",
    date: "26/05/2023",
    time: "10:15",
    status: "Concluído",
    amount: "R$ 75,00",
  },
  {
    id: 3,
    petName: "Thor",
    ownerName: "Pedro Santos",
    service: "Banho + Tosa",
    date: "25/05/2023",
    time: "16:00",
    status: "Concluído",
    amount: "R$ 120,00",
  },
  {
    id: 4,
    petName: "Bella",
    ownerName: "Ana Ferreira",
    service: "Consulta Veterinária",
    date: "24/05/2023",
    time: "09:00",
    status: "Cancelado",
    amount: "R$ 150,00",
  },
];

export const RecentAppointments: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pet</TableHead>
            <TableHead>Serviço</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="font-medium">
                <div>
                  <div>{appointment.petName}</div>
                  <div className="text-sm text-muted-foreground">
                    {appointment.ownerName}
                  </div>
                </div>
              </TableCell>
              <TableCell>{appointment.service}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{appointment.time}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Chip
                  variant={
                    appointment.status === "Concluído" ? "primary" : "secondary"
                  }
                  size="sm"
                >
                  {appointment.status}
                </Chip>
              </TableCell>
              <TableCell className="text-right">{appointment.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
