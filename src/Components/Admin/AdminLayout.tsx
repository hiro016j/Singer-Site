import { Link, Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();
  const active = location.pathname.split("/").pop();

  return (
    <div className="flex h-screen bg-gray-950 text-white">
      <aside className="w-64 bg-gray-900 p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 text-blue-400">Admin Panel</h1>
        <nav className="flex flex-col gap-2">
          <Link to="clips" className={`px-4 py-2 rounded ${active === "clips" ? "bg-blue-400 text-gray-900" : "hover:bg-gray-800"}`}>Kliplar</Link>
          <Link to="songs" className={`px-4 py-2 rounded ${active === "songs" ? "bg-blue-400 text-gray-900" : "hover:bg-gray-800"}`}>Qo'shiqlar</Link>
          <Link to="reels" className={`px-4 py-2 rounded ${active === "reels" ? "bg-blue-400 text-gray-900" : "hover:bg-gray-800"}`}>Lavhalar</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
