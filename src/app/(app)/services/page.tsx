import { DashboardSidebar } from "@/app/_components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/app/_components/ui/sidebar";
import { BlurContainer } from "@/app/_components/ui/BlurContainer";
import { RecentServices } from "@/app/_components/dashboard/RecentServices";
import { Button } from "@/app/_components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1 p-6">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Serviços</h1>
                <Button asChild>
                  <Link href="/services/create">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo Serviço
                  </Link>
                </Button>
              </div>

              <BlurContainer>
                <RecentServices />
              </BlurContainer>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Services;
