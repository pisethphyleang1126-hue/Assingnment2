import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "../adminSidebar.css";

export default function AdminDashboard() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="admin-layout">
      <AdminSidebar
        active={active}
        onSelect={setActive}
        onLogout={() => alert("Logged out")}
      />
      <main className="admin-content">
        <h1 style={{ textTransform: "capitalize" }}>{active}</h1>
        <p>Content for the "{active}" section goes here.</p>
      </main>
    </div>
  );
}
