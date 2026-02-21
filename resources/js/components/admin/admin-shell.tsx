import * as React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';

type Props = React.ComponentProps<'div'> & {
    children: React.ReactNode;
};

export function AdminShell({ children, className, ...props }: Props) {
    return (
        <div className="min-h-screen bg-orange-50 dark:bg-gray-900" {...props}>
            <SidebarProvider>
                <div className="flex h-screen w-full">
                    {children}
                </div>
            </SidebarProvider>
        </div>
    );
}