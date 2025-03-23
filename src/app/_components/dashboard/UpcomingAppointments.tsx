import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Chip } from "@/app/_components/ui/Chip";
import { Calendar, Clock } from "lucide-react";

// Mock data for upcoming appointments
const appointments = [
  {
    id: 1,
    petName: "Nina",
    ownerName: "Carlos Mendes",
    service: "Banho",
    date: "02/06/2023",
    time: "13:00",
    status: "Confirmado",
    amount: "R$ 55,00",
  },
  {
    id: 2,
    petName: "Rex",
    ownerName: "Fernanda Lima",
    service: "Tosa Higiênica",
    date: "03/06/2023",
    time: "10:30",
    status: "Pendente",
    amount: "R$ 45,00",
  },
  {
    id: 3,
    petName: "Mia",
    ownerName: "Roberto Alves",
    service: "Banho + Tosa",
    date: "04/06/2023",
    time: "15:45",
    status: "Confirmado",
    amount: "R$ 120,00",
  },
  {
    id: 4,
    petName: "Bob",
    ownerName: "Juliana Costa",
    service: "Hidratação",
    date: "06/06/2023",
    time: "11:15",
    status: "Pendente",
    amount: "R$ 75,00",
  },
];

export const UpcomingAppointments: React.FC = () => {
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
                    appointment.status === "Confirmado" ? "primary" : "outline"
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
