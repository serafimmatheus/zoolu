import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/app/_components/ui/drawer";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import { ptBR } from "date-fns/locale";
import { Label } from "@/app/_components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { X } from "lucide-react";

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service: any;
  shopName: string;
}

// Mock available time slots
const availableSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  service,
  shopName,
}) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");

  if (!service) return null;

  const handleBooking = () => {
    if (!date || !timeSlot) {
      // TODO: show error toast
      // toast({
      //   title: "Dados incompletos",
      //   description:
      //     "Por favor, selecione uma data e horário para o agendamento.",
      //   variant: "destructive",
      // });
      return;
    }

    // toast({
    //   title: "Agendamento realizado",
    //   description: `Seu agendamento para ${service.name} foi realizado com sucesso para ${format(date, "PPP", { locale: ptBR })} às ${timeSlot}.`,
    // });

    // Reset the form
    setDate(undefined);
    setTimeSlot("");
    onClose();
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh]">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader className="text-left">
            <div className="flex items-center justify-between">
              <DrawerTitle>Agendar Serviço</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
            <DrawerDescription>
              {shopName} - {service.name}
            </DrawerDescription>
          </DrawerHeader>

          <div className="max-h-[60vh] space-y-4 overflow-y-auto p-4 pt-0">
            <div className="space-y-2">
              <Label>Selecione a data</Label>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}
                  disabled={(date) =>
                    date < new Date() ||
                    date >
                      new Date(new Date().setMonth(new Date().getMonth() + 2))
                  }
                  className="rounded-md border"
                />
              </div>
            </div>

            {date && (
              <div className="space-y-2">
                <Label>Selecione o horário</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Horários disponíveis" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="mt-4 border-t pt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-muted-foreground">Serviço:</span>
                <span>{service.name}</span>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-muted-foreground">Duração:</span>
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center justify-between font-medium">
                <span>Valor total:</span>
                <span>{service.price}</span>
              </div>
            </div>
          </div>

          <DrawerFooter>
            <Button onClick={handleBooking} className="w-full">
              Confirmar Agendamento
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
