import { Head } from '@inertiajs/react';
import { FolderOpen, Brain, TrendingUp, Activity } from 'lucide-react';
import { OverviewChart, DonutChart } from '@/components/dashboard/charts';
import { RecentActivities } from '@/components/dashboard/recent-activities';
import { StatsCard } from '@/components/dashboard/stats-card';
import { 
    useDashboardOverview,
    useProjectsOverTime, 
    useSkillsOverTime,
    useSkillsByCategory, 
    useRecentActivities 
} from '@/hooks/useDashboard';
import AdminLayout from '@/layouts/AdminLayout';
import type { DashboardProps } from '@/types/Dashboard/IDashboard';

export default function Dashboard({ stats }: DashboardProps) {
    // Fetch additional dashboard data via API
    const { data: overview, isLoading: overviewLoading } = useDashboardOverview();
    const { data: projectsData, isLoading: projectsLoading } = useProjectsOverTime('month');
    const { data: skillsData, isLoading: skillsLoading } = useSkillsOverTime('month');
    const { data: skillsCategories, isLoading: categoriesLoading } = useSkillsByCategory();
    const { data: activities, isLoading: activitiesLoading } = useRecentActivities();

    return (
        <AdminLayout>
            <Head title="Dashboard" />
            
            <div className="flex-1 space-y-6 p-4 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <p className="text-muted-foreground">
                            Welcome back! Here's a summary of your portfolio activity.
                        </p>
                    </div>
                </div>

                {/* Statistics Cards Row */}
                <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                        title="Total Projects"
                        value={stats.total_projects}
                        description="Projects in your portfolio"
                        icon={FolderOpen}
                        trend={
                            stats.projects_this_month > 0 
                                ? {
                                    value: stats.projects_this_month,
                                    label: 'this month',
                                    type: 'positive' as const
                                }
                                : undefined
                        }
                        className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900/50"
                    />
                    
                    <StatsCard
                        title="Total Skills"
                        value={stats.total_skills}
                        description="Skills in your toolkit"
                        icon={Brain}
                        trend={
                            stats.skills_this_month > 0 
                                ? {
                                    value: stats.skills_this_month,
                                    label: 'this month',
                                    type: 'positive' as const
                                }
                                : undefined
                        }
                        className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950 dark:to-green-900/50"
                    />
                    
                    <StatsCard
                        title="This Month"
                        value={stats.projects_this_month + stats.skills_this_month}
                        description="Items added this month"
                        icon={TrendingUp}
                        trend={
                            (stats.projects_this_week || 0) + (stats.skills_this_week || 0) > 0
                                ? {
                                    value: (stats.projects_this_week || 0) + (stats.skills_this_week || 0),
                                    label: 'this week',
                                    type: 'neutral' as const
                                }
                                : undefined
                        }
                        className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950 dark:to-purple-900/50"
                    />
                    
                    <StatsCard
                        title="Activity Score"
                        value={Math.min(100, (stats.total_projects + stats.total_skills) * 5)}
                        description="Portfolio completion score"
                        icon={Activity}
                        className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950 dark:to-orange-900/50"
                    />
                </div>

                {/* Charts and Activities Section */}
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-12">
                    {/* Projects Over Time Chart */}
                    <div className="lg:col-span-4">
                        <OverviewChart
                            title="Projects Over Time"
                            description="Projects created this month"
                            data={projectsData?.data || []}
                            config={{
                                projects: {
                                    label: 'Projects',
                                    color: 'rgb(59, 130, 246)'
                                }
                            }}
                            className="h-full"
                        />
                    </div>
                    
                    {/* Skills Over Time Chart */}
                    <div className="lg:col-span-4">
                        <OverviewChart
                            title="Skills Over Time"
                            description="Skills added this month"
                            data={skillsData?.data || []}
                            config={{
                                skills: {
                                    label: 'Skills',
                                    color: 'rgb(34, 197, 94)'
                                }
                            }}
                            className="h-full"
                        />
                    </div>

                    {/* Skills Categories Chart */}
                    <div className="lg:col-span-4">
                        <DonutChart
                            title="Skills by Category"
                            description="Distribution of your skills"
                            data={skillsCategories || []}
                            className="h-full"
                        />
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="grid gap-6 grid-cols-1">
                    <RecentActivities
                        activities={activities || []}
                        isLoading={activitiesLoading}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
