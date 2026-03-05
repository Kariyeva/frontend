import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav style={{ display: "flex", gap: 16, padding: 12, borderBottom: "1px solid #ddd" }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>

      <main style={{ padding: 12 }}>
        <Outlet />
      </main>

      <footer style={{ padding: 12, borderTop: "1px solid #ddd" }}>Student Portal 2026</footer>
    </>
  );
}