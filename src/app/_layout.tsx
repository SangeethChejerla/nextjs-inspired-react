import { Outlet } from '@tanstack/react-router';
import Nav from './components/Nav';

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <main className="container mx-auto py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
