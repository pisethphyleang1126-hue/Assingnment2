import { useEffect, useState } from "react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "🏛️" },
  { id: "tickets", label: "Tickets", icon: "🎟️" },
  { id: "users", label: "Users", icon: "👤" },
  { id: "exhibits", label: "Exhibits", icon: "🖼️" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

export default function AdminSidebar({
  active = "dashboard",
  onSelect,
  onLogout,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id) => {
    onSelect?.(id);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="admin-mobile-bar">
        <button
          className="admin-mobile-toggle"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <span className="admin-mobile-title">Harmony Admin</span>
      </div>

      {mobileOpen && (
        <div
          className="admin-sidebar-backdrop"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`admin-sidebar${collapsed ? " collapsed" : ""}${mobileOpen ? " mobile-open" : ""}`}
      >
        <div className="admin-sidebar-header">
          <img
            src="/images/harmony-round-removebg-preview.png"
            alt=""
            className="admin-sidebar-logo"
          />
          {!collapsed && (
            <div className="admin-sidebar-title">
              <h2>Harmony</h2>
              <p>Admin Panel</p>
            </div>
          )}
          <button
            className="admin-sidebar-toggle"
            onClick={() => setCollapsed((c) => !c)}
            aria-label="Toggle sidebar"
          >
            {collapsed ? "»" : "«"}
          </button>
          <button
            className="admin-sidebar-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="admin-sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`admin-sidebar-link${active === item.id ? " active" : ""}`}
                  onClick={() => handleSelect(item.id)}
                >
                  <span className="admin-sidebar-icon">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-sidebar-logout" onClick={onLogout}>
            <span className="admin-sidebar-icon">🚪</span>
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
