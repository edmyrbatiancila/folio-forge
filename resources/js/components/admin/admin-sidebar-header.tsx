import * as React from 'react';
import { usePage } from '@inertiajs/react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Shield } from 'lucide-react';

const getPageTitle = (url: string): string => {
    if (url === '/dashboard') return 'Dashboard';
    if (url.startsWith('/admin/projects')) {
        if (url.includes('/create')) return 'Create Project';
        if (url.includes('/edit') || url.match(/\/admin\/projects\/\d+$/)) return 'Edit Project';
        return 'Projects';
    }
    if (url.startsWith('/admin/skills')) {
        if (url.includes('/create')) return 'Create Skill';
        if (url.includes('/edit') || url.match(/\/admin\/skills\/\d+$/)) return 'Edit Skill';
        return 'Skills';
    }
    return 'Admin Panel';
};

export function AdminSidebarHeader() {
    const { url } = usePage();
    const pageTitle = getPageTitle(url);

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 bg-gradient-to-r from-orange-500 to-red-500 border-b border-orange-300">
            <SidebarTrigger className="text-white hover:bg-orange-400" />
            <Separator orientation="vertical" className="mr-2 h-4 bg-orange-300" />
            
            <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-white font-medium">{pageTitle}</span>
            </div>
            
            <div className="ml-auto flex items-center gap-2">
                <div className="px-2 py-1 bg-orange-400 rounded-md">
                    <span className="text-white text-xs font-semibold">ADMIN</span>
                </div>
            </div>
        </header>
    );
}