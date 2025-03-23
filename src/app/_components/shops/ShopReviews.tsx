import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Star } from "lucide-react";

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: "João Silva",
    avatar: null,
    date: "15 de maio de 2023",
    rating: 5,
    comment:
      "Ótimo atendimento! Meu cachorro ficou muito bem cuidado e voltou feliz para casa. Recomendo!",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    avatar: null,
    date: "3 de maio de 2023",
    rating: 4,
    comment:
      "Serviço de qualidade, mas demorou um pouco mais do que o previsto. De qualquer forma, o resultado foi excelente.",
  },
  {
    id: 3,
    name: "Pedro Santos",
    avatar: null,
    date: "27 de abril de 2023",
    rating: 5,
    comment:
      "Profissionais muito atenciosos e gentis. Minha gata é medrosa, mas eles souberam lidar muito bem com ela.",
  },
  {
    id: 4,
    name: "Ana Ferreira",
    avatar: null,
    date: "15 de abril de 2023",
    rating: 3,
    comment:
      "O serviço é bom, mas acho o preço um pouco alto comparado a outros lugares da região.",
  },
];

export const ShopReviews = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Avaliações dos Clientes</h2>
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
          <span className="text-lg font-medium">4.8</span>
          <span className="text-muted-foreground">({reviews.length})</span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-0">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={review.avatar || undefined} />
                  <AvatarFallback>
                    {review.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {review.date}
                  </div>
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
