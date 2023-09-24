import Dashboard from "../components/Dashboard/Dashboard";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dashboard />
      <main>{children}</main>
      {/* Navigation bar */}
      <footer></footer>
    </>
  );
}
