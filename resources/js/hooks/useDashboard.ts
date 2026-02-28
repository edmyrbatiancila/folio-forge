import { useState, useEffect } from 'react';
import type { 
    OverviewStats, 
    ProjectsOverTimeResponse, 
    SkillsOverTimeResponse, 
    SkillCategoryData, 
    ActivityItem, 
    ChartPeriod 
} from '@/types/Dashboard/IDashboard';

export function useDashboardOverview() {
    const [data, setData] = useState<OverviewStats | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('/api/dashboard/overview');
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch overview data');
            console.error('Error fetching dashboard overview:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error, refetch: fetchData };
}

export function useProjectsOverTime(period: ChartPeriod = 'month') {
    const [data, setData] = useState<ProjectsOverTimeResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(`/api/dashboard/projects-over-time?period=${period}`);
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch projects data');
            console.error('Error fetching projects over time:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [period]);

    return { data, isLoading, error, refetch: fetchData };
}

export function useSkillsOverTime(period: ChartPeriod = 'month') {
    const [data, setData] = useState<SkillsOverTimeResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(`/api/dashboard/skills-over-time?period=${period}`);
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch skills data');
            console.error('Error fetching skills over time:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [period]);

    return { data, isLoading, error, refetch: fetchData };
}

export function useSkillsByCategory() {
    const [data, setData] = useState<SkillCategoryData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('/api/dashboard/skills-by-category');
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch skills categories');
            console.error('Error fetching skills by category:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error, refetch: fetchData };
}

export function useRecentActivities() {
    const [data, setData] = useState<ActivityItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('/api/dashboard/recent-activities');
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch recent activities');
            console.error('Error fetching recent activities:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error, refetch: fetchData };
}