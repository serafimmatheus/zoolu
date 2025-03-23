import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Chip } from "@/app/_components/ui/Chip";
import { Button } from "@/app/_components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ShopListProps {
  filterType: "all" | "grooming" | "vet" | "shop";
  searchQuery: string;
}

// Mock data for shops
const shops = [
  {
    id: 1,
    name: "Pet Shop Feliz",
    description: "O melhor cuidado para seu pet",
    address: "Av. Paulista, 1000, São Paulo",
    distance: "1.2 km",
    rating: 4.8,
    reviews: 124,
    types: ["grooming", "shop"],
    services: ["Banho", "Tosa", "Veterinário", "Loja de produtos"],
    open: true,
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Clínica Veterinária Pet Care",
    description: "Cuidados veterinários completos",
    address: "Rua Augusta, 500, São Paulo",
    distance: "2.5 km",
    rating: 4.6,
    reviews: 89,
    types: ["vet"],
    services: ["Consultas", "Exames", "Cirurgias", "Vacinas"],
    open: true,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Pet & Cia",
    description: "Banho e tosa com muito carinho",
    address: "Rua Oscar Freire, 300, São Paulo",
    distance: "3.0 km",
    rating: 4.5,
    reviews: 76,
    types: ["grooming", "shop"],
    services: ["Banho", "Tosa", "Perfumaria", "Acessórios"],
    open: false,
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Mundo Pet",
    description: "Tudo para seu amigo de quatro patas",
    address: "Av. Brigadeiro Faria Lima, 1500, São Paulo",
    distance: "4.1 km",
    rating: 4.3,
    reviews: 102,
    types: ["shop"],
    services: ["Loja de produtos", "Acessórios", "Alimentos", "Brinquedos"],
    open: true,
    image:
      "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  },
];

export const ShopList: React.FC<ShopListProps> = ({
  filterType,
  searchQuery,
}) => {
  // Filter shops based on filterType and searchQuery
  const filteredShops = shops.filter((shop) => {
    // Filter by type
    if (filterType !== "all" && !shop.types.includes(filterType)) {
      return false;
    }

    // Filter by search query
    if (
      searchQuery &&
      !shop.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !shop.services.some((service) =>
        service.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredShops.length === 0 ? (
        <div className="col-span-full py-12 text-center">
          <p className="text-muted-foreground">
            Nenhum pet shop encontrado com esses critérios.
          </p>
        </div>
      ) : (
        filteredShops.map((shop) => (
          <Card key={shop.id} className="overflow-hidden">
            <div className="relative h-40">
              <div className="relative h-full w-full">
                <Image
                  src={shop.image}
                  alt={shop.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2">
                <Chip variant={shop.open ? "primary" : "outline"} size="sm">
                  {shop.open ? "Aberto" : "Fechado"}
                </Chip>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-start justify-between">
                <span>{shop.name}</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-500" />
                  <span className="text-sm font-medium">{shop.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({shop.reviews})
                  </span>
                </div>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {shop.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm">{shop.address}</p>
                  <p className="text-xs text-muted-foreground">
                    {shop.distance} de distância
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="text-sm">
                  {shop.open
                    ? "Aberto agora · Fecha às 19:00"
                    : "Abre amanhã às 08:00"}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {shop.services.slice(0, 3).map((service, index) => (
                  <Chip key={index} variant="outline" size="sm">
                    {service}
                  </Chip>
                ))}
                {shop.services.length > 3 && (
                  <Chip variant="outline" size="sm">
                    +{shop.services.length - 3}
                  </Chip>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/shop/${shop.id}`} className="w-full">
                <Button className="w-full">Ver Serviços</Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};
