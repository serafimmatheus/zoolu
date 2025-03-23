import { DashboardOverview } from "@/app/_components/dashboard/DashboardOverview";
import { DashboardSidebar } from "@/app/_components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/app/_components/ui/sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-gray-50">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DashboardSidebar />
            <div className="flex-1">
              <DashboardOverview />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Dashboard;
