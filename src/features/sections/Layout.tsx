/* Generated with Copilot — reviewed */
import { Outlet } from "react-router-dom";
import { Header } from "../navigation-ui/Header";

export function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
