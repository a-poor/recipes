import type { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <AppSidebar />
            <SidebarInset>
                {children}
            </SidebarInset>
        </>
    );
}
