import { type ReactNode } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminContent } from "@/components/admin/admin-content";
import { AdminSidebarHeader } from "@/components/admin/admin-sidebar-header";

interface Props {
    children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
    return (
        <AdminShell>
            <AdminSidebar />
            <AdminContent>
                <AdminSidebarHeader />
                {children}
            </AdminContent>
        </AdminShell>
    );
};

export default AdminLayout;