import Dashboard from "@/app/components/Dashboard/Dashboard";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dashboard />
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
