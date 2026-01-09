import type { ReactNode } from "react";
import { TanStackQueryProvider } from "@/providers/tanstackQuery";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <TanStackQueryProvider>
      <div className="h-screen flex overflow-hidden bg-black">
        <Sidebar />
        {children}
      </div>
    </TanStackQueryProvider>
  );
}
