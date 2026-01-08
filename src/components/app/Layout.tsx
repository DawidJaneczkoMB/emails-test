import type { ReactNode } from "react";
import { TanStackQueryProvider } from "../../providers/tanstackQuery";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <TanStackQueryProvider>
      <div className="h-screen flex flex-col bg-black">
        <div className="grid grid-cols-[250px_1fr] h-full">
          <Sidebar />
          {children}
        </div>
      </div>
    </TanStackQueryProvider>
  );
}
