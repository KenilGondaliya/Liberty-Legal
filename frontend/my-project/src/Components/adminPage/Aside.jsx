import React from "react";
import { Link, Outlet } from "react-router-dom";

function Aside() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-lg font-semibold text-center border-b">
          Admin Dashboard
        </div>
        <nav className="mt-4">
          <ul>
            <li className="hover:bg-gray-200 p-4">
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li className="hover:bg-gray-200 p-4">
              <Link to="users">User Management</Link> 
            </li>
            <li className="hover:bg-gray-200 p-4">
              <Link to="consultants">Consultant Management</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Aside;
