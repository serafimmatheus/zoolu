import React from "react";
import { Button } from "@/app/_components/ui/button";
import { Clock, ChevronRight } from "lucide-react";
import { Badge } from "@/app/_components/ui/badge";

interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  popular?: boolean;
}

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onBook,
}) => {
  return (
    <div className="rounded-lg border p-4 transition-colors hover:border-primary">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{service.name}</h3>
            {service.popular && (
              <Badge className="bg-amber-500 hover:bg-amber-600">Popular</Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {service.description}
          </p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{service.duration}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">{service.price}</div>
          <Button size="sm" className="mt-2" onClick={onBook}>
            Reservar
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
