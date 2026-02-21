import { Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';

type Props = {
    items: NavItem[];
};

export function AdminNavMain({ items }: Props) {
    const { url } = usePage();

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-orange-700 dark:text-orange-300 font-semibold">
                Administration
            </SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const isActive = item.href === '/dashboard' 
                        ? url === '/dashboard'
                        : url.startsWith(item.href);
                    
                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton 
                                asChild 
                                isActive={isActive}
                                className={`
                                    ${isActive 
                                        ? 'bg-orange-200 text-orange-800 hover:bg-orange-300 dark:bg-orange-800 dark:text-orange-100' 
                                        : 'hover:bg-orange-100 hover:text-orange-800 dark:hover:bg-gray-700'
                                    }
                                `}
                            >
                                <Link href={item.href}>
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.title}</span>
                                    {isActive && <ChevronRight className="ml-auto h-3 w-3" />}
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}