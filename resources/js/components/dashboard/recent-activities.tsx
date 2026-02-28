import { Link } from '@inertiajs/react';
import { FolderOpen, Brain, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/date-utils';
import type { ActivityItem } from '@/types/Dashboard/IDashboard';


interface RecentActivitiesProps {
    activities: ActivityItem[];
    isLoading?: boolean;
    className?: string;
}

export function RecentActivities({ activities, isLoading = false, className = '' }: RecentActivitiesProps) {
    const getActivityIcon = (type: string) => {
        switch (type) {
            case 'project':
                return <FolderOpen className="h-4 w-4" />;
            case 'skill':
                return <Brain className="h-4 w-4" />;
            default:
                return <Plus className="h-4 w-4" />;
        }
    };

    const getActivityColor = (type: string) => {
        switch (type) {
            case 'project':
                return 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300';
            case 'skill':
                return 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300';
            default:
                return 'bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300';
        }
    };

    const getActivityLink = (activity: ActivityItem) => {
        return activity.type === 'project' 
            ? `/admin/projects/${activity.id}` 
            : `/admin/skills/${activity.id}`;
    };

    if (isLoading) {
        return (
            <Card className={className}>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest projects and skills added</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-4 animate-pulse">
                                <div className="w-8 h-8 bg-muted rounded-full" />
                                <div className="space-y-1 flex-1">
                                    <div className="h-4 bg-muted rounded w-3/4" />
                                    <div className="h-3 bg-muted rounded w-1/2" />
                                </div>
                                <div className="h-3 bg-muted rounded w-16" />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest projects and skills added</CardDescription>
                </div>
                <div className="flex space-x-2">
                    <Link href="/admin/projects/create">
                        <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-1" />
                            Project
                        </Button>
                    </Link>
                    <Link href="/admin/skills/create">
                        <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-1" />
                            Skill
                        </Button>
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.length > 0 ? (
                        activities.map((activity) => (
                            <Link 
                                key={`${activity.type}-${activity.id}`}
                                href={getActivityLink(activity)}
                                className="block hover:bg-muted/50 rounded-lg p-2 -m-2 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getActivityColor(activity.type)}`}>
                                        {getActivityIcon(activity.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">
                                            {activity.title}
                                        </p>
                                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                            <span className="capitalize">{activity.type}</span>
                                            {activity.subtitle && (
                                                <>
                                                    <span>•</span>
                                                    <span>{activity.subtitle}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {formatDate(activity.created_at)}
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            <Brain className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p className="text-sm">No recent activity</p>
                            <p className="text-xs mt-1">Start by creating your first project or skill</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}