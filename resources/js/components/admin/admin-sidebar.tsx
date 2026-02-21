import { Link, usePage } from '@inertiajs/react';
import { 
    Home, 
    FolderOpen, 
    Brain, 
    Settings,
    Shield,
    ChevronRight
} from 'lucide-react';
import { AdminNavMain } from '@/components/admin/admin-nav-main';
import { AdminNavUser } from '@/components/admin/admin-nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';

const adminNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Home,
    },
    {
        title: 'Projects',
        href: '/admin/projects', 
        icon: FolderOpen,
    },
    {
        title: 'Skills',
        href: '/admin/skills',
        icon: Brain,
    },
];

export function AdminSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset" className="bg-orange-100 border-orange-200 dark:bg-gray-800 dark:border-gray-700">
            <SidebarHeader className="bg-gradient-to-r from-orange-500 to-red-500">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="hover:bg-orange-400">
                            <Link href="/dashboard">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md">
                                        <Shield className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="text-white font-bold text-sm">FolioForge</span>
                                        <span className="text-orange-100 text-xs">Admin Panel</span>
                                    </div>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="bg-orange-50 dark:bg-gray-800">
                <AdminNavMain items={adminNavItems} />
            </SidebarContent>

            <SidebarFooter className="bg-orange-50 dark:bg-gray-800 border-t border-orange-200 dark:border-gray-700">
                <AdminNavUser />
            </SidebarFooter>
        </Sidebar>
    );
}