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
import { Button } from "@/app/_components/ui/button";
import { Edit, Trash2 } from "lucide-react";

// Mock data for services
const services = [
  {
    id: 1,
    name: "Banho",
    description: "Banho completo com shampoo e condicionador",
    duration: "1h",
    price: "R$ 55,00",
    status: "Ativo",
  },
  {
    id: 2,
    name: "Tosa Higiênica",
    description: "Tosa das áreas sensíveis",
    duration: "45min",
    price: "R$ 45,00",
    status: "Ativo",
  },
  {
    id: 3,
    name: "Banho + Tosa",
    description: "Banho completo e tosa geral",
    duration: "2h",
    price: "R$ 120,00",
    status: "Ativo",
  },
  {
    id: 4,
    name: "Hidratação",
    description: "Tratamento de hidratação para pelos",
    duration: "1h30min",
    price: "R$ 75,00",
    status: "Inativo",
  },
  {
    id: 5,
    name: "Consulta Veterinária",
    description: "Avaliação geral de saúde do pet",
    duration: "1h",
    price: "R$ 150,00",
    status: "Ativo",
  },
];

export const RecentServices: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Serviço</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.duration}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell>
                <Chip
                  variant={service.status === "Ativo" ? "primary" : "outline"}
                  size="sm"
                >
                  {service.status}
                </Chip>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
