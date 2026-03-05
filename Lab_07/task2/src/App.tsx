import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function Loading() {
  return <p>Loading...</p>;
}

function ErrorFallback() {
  return <h2>Something went wrong</h2>;
}

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <BrowserRouter>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}