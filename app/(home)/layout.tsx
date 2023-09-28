import Dashboard from "@/app/components/Dashboard/Dashboard";
import NavigationBar from "@/app/components/NavigationBar/NavigationBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container h-100'>
      <Dashboard />
      <main>{children}</main>
      <NavigationBar />
    </div>
  );
}
