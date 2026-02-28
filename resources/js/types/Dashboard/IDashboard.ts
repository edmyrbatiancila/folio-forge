export interface DashboardStats {
    total_projects: number;
    total_skills: number;
    projects_this_month: number;
    skills_this_month: number;
    projects_this_week?: number;
    skills_this_week?: number;
}

export interface OverviewStats {
    total_projects: number;
    total_skills: number;
    projects_this_month: number;
    skills_this_month: number;
    projects_this_week: number;
    skills_this_week: number;
}

export interface TimeSeriesData {
    date: string;
    count: number;
    formatted_date: string;
}

export interface ProjectsOverTimeResponse {
    data: TimeSeriesData[];
    period: 'week' | 'month' | 'year';
}

export interface SkillsOverTimeResponse {
    data: TimeSeriesData[];
    period: 'week' | 'month' | 'year';
}

export interface SkillCategoryData {
    category: string;
    count: number;
    percentage: number;
}

export interface SkillsByCategory {
    data: SkillCategoryData[];
}

export interface ActivityItem {
    type: 'project' | 'skill';
    title: string;
    subtitle?: string;
    created_at: string;
    id: number;
}

export interface DashboardProps {
    stats: DashboardStats;
}

export type ChartPeriod = 'week' | 'month' | 'year';

export interface ChartConfig {
    [key: string]: {
        label: string;
        color: string;
    };
}