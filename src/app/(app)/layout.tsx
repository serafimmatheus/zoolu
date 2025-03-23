import { AppProvider } from "../_context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <main>{children}</main>
    </AppProvider>
  );
}
