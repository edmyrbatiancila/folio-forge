import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ChartConfig, TimeSeriesData } from '@/types/Dashboard/IDashboard';

interface OverviewChartProps {
    title: string;
    description: string;
    data: TimeSeriesData[];
    config: ChartConfig;
    className?: string;
}

export function OverviewChart({ title, description, data, className = '' }: OverviewChartProps) {
    // Simple bar chart representation for now
    // This will be enhanced with Recharts once the dependency is added
    const maxValue = Math.max(...data.map(d => d.count));
    
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {data.slice(0, 7).map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <div className="w-12 text-xs text-muted-foreground">
                                {item.formatted_date}
                            </div>
                            <div className="flex-1">
                                <div className="relative">
                                    <div className="bg-muted h-2 rounded-full">
                                        <div 
                                            className="bg-primary h-2 rounded-full transition-all duration-300"
                                            style={{ 
                                                width: `${(item.count / maxValue) * 100}%` 
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-8 text-right text-xs font-medium">
                                {item.count}
                            </div>
                        </div>
                    ))}
                </div>
                {data.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                        No data available for selected period
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

interface DonutChartProps {
    title: string;
    description: string;
    data: Array<{ category: string; count: number; percentage: number }>;
    className?: string;
}

export function DonutChart({ title, description, data, className = '' }: DonutChartProps) {
    // Simple representation for now - will be enhanced with Recharts
    const colors = [
        'bg-blue-500',
        'bg-green-500', 
        'bg-purple-500',
        'bg-yellow-500',
        'bg-red-500'
    ];
    
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {/* Simple legend representation */}
                    <div className="space-y-2">
                        {data.map((item, index) => (
                            <div key={item.category} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]}`} />
                                    <span className="text-sm font-medium">{item.category}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold">{item.count}</span>
                                    <span className="text-xs text-muted-foreground ml-1">
                                        ({item.percentage}%)
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {data.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                            No data available
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}