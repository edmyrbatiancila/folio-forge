import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface LoadingSkeletonProps {
    className?: string;
}

export function LoadingSkeleton({ className = '' }: LoadingSkeletonProps) {
    return (
        <Card className={className}>
            <CardHeader className="space-y-2">
                <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
                <div className="h-3 bg-muted rounded w-1/2 animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="h-8 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
            </CardContent>
        </Card>
    );
}

interface StatsCardSkeletonProps {
    className?: string;
}

export function StatsCardSkeleton({ className = '' }: StatsCardSkeletonProps) {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                <div className="h-4 w-4 bg-muted rounded animate-pulse" />
            </CardHeader>
            <CardContent>
                <div className="h-8 bg-muted rounded w-2/3 animate-pulse mb-2" />
                <div className="h-3 bg-muted rounded w-full animate-pulse" />
            </CardContent>
        </Card>
    );
}

interface ErrorDisplayProps {
    message: string;
    onRetry?: () => void;
    className?: string;
}

export function ErrorDisplay({ message, onRetry, className = '' }: ErrorDisplayProps) {
    return (
        <Card className={className}>
            <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-destructive mb-4">
                    <svg 
                        className="h-12 w-12" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
                        />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Error Loading Data</h3>
                <p className="text-muted-foreground text-center mb-4">{message}</p>
                {onRetry && (
                    <button 
                        onClick={onRetry}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                    >
                        Try Again
                    </button>
                )}
            </CardContent>
        </Card>
    );
}