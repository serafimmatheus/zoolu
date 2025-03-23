"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/app/_components/ui/sidebar";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Scissors,
  FileText,
  Settings,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const DashboardSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Visão Geral",
      icon: LayoutDashboard,
      url: "/dashboard",
    },
    {
      title: "Agendamentos",
      icon: Calendar,
      url: "/appointments",
    },
    {
      title: "Clientes",
      icon: Users,
      url: "/customers",
    },
    {
      title: "Serviços",
      icon: Scissors,
      url: "/services",
    },
    {
      title: "Relatórios",
      icon: FileText,
      url: "/reports",
    },
    {
      title: "Finanças",
      icon: DollarSign,
      url: "/finances",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <div className="text-lg font-bold">PetBooking</div>
          <div className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary">
            Lojista
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Configurações"
                  isActive={pathname === "/settings"}
                >
                  <Link href="/settings">
                    <Settings className="h-4 w-4" />
                    <span>Configurações</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="text-center">
            <UserButton showName />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
