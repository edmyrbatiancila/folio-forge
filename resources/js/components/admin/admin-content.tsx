import * as React from 'react';
import { SidebarInset } from '@/components/ui/sidebar';

type Props = React.ComponentProps<'main'> & {
    children: React.ReactNode;
};

export function AdminContent({ children, className, ...props }: Props) {
    return (
        <SidebarInset className="bg-orange-50/30 dark:bg-gray-900" {...props}>
            <main className="flex flex-1 flex-col h-full">
                <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto p-4">
                    {children}
                </div>
            </main>
        </SidebarInset>
    );
}