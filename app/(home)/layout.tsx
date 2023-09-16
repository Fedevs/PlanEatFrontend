import Dashboard from '../components/Dashboard/Dashboard';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Dashboard />
      <section>{children}</section>
      {/* Navigation bar */}
      <footer></footer>
    </>
  );
}
