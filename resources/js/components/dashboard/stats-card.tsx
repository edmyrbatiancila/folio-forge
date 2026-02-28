import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardProps {
    title: string;
    value: number;
    description: string;
    icon: LucideIcon;
    trend?: {
        value: number;
        label: string;
        type: 'positive' | 'negative' | 'neutral';
    };
    className?: string;
}

export function StatsCard({ 
    title, 
    value, 
    description, 
    icon: Icon, 
    trend,
    className = '' 
}: StatsCardProps) {
    return (
        <Card className={`relative overflow-hidden ${className}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground pt-1">
                    {description}
                </p>
                {trend && (
                    <div className="flex items-center pt-2">
                        <span 
                            className={`text-xs font-medium ${
                                trend.type === 'positive' 
                                    ? 'text-green-600 dark:text-green-400' 
                                    : trend.type === 'negative' 
                                    ? 'text-red-600 dark:text-red-400'
                                    : 'text-gray-600 dark:text-gray-400'
                            }`}
                        >
                            {trend.type === 'positive' && '+'}
                            {trend.value} {trend.label}
                        </span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}