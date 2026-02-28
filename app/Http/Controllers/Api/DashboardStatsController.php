<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Skill;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardStatsController extends Controller
{
    /**
     * Get overall dashboard statistics
     */

    public function index() {
        
        try {
            $stats = [
                'total_projects' => Project::count(),
                'total_skills' => Skill::count(),
                'projects_this_month' => Project::whereMonth('created_at', now()->month)
                    ->whereYear('created_at', now()->year)
                    ->count(),
                'skills_this_month' => Skill::whereMonth('created_at', now()->month)
                    ->whereYear('created_at', now()->year)
                    ->count(),
            ];

            return Inertia::render('dashboard', [
                'stats' => $stats
            ]);
        } catch (\Exception $e) {
            return back()->with('error', 'Unable to load dashboard statistics.');
        }
    }

    public function overview(): JsonResponse
    {
        $stats = [
            'total_projects' => Project::count(),
            'total_skills' => Skill::count(),
            'projects_this_month' => Project::whereMonth('created_at', Carbon::now()->month)
                ->whereYear('created_at', Carbon::now()->year)
                ->count(),
            'skills_this_month' => Skill::whereMonth('created_at', Carbon::now()->month)
                ->whereYear('created_at', Carbon::now()->year)
                ->count(),
            'projects_this_week' => Project::whereBetween('created_at', [
                Carbon::now()->startOfWeek(),
                Carbon::now()->endOfWeek()
            ])->count(),
            'skills_this_week' => Skill::whereBetween('created_at', [
                Carbon::now()->startOfWeek(),
                Carbon::now()->endOfWeek()
            ])->count(),
        ];

        return response()->json($stats);
    }

    /**
     * Get projects created over time (for charts)
     */
    public function projectsOverTime(Request $request): JsonResponse
    {
        $period = $request->get('period', 'month'); // week, month, year
        
        return response()->json([
            'data' => $this->getTimeSeriesData(Project::class, $period),
            'period' => $period
        ]);
    }

    /**
     * Get skills created over time (for charts)
     */
    public function skillsOverTime(Request $request): JsonResponse
    {
        $period = $request->get('period', 'month'); // week, month, year
        
        return response()->json([
            'data' => $this->getTimeSeriesData(Skill::class, $period),
            'period' => $period
        ]);
    }

    /**
     * Get skills by category distribution
     */
    public function skillsByCategory(): JsonResponse
    {
        $skillsByCategory = Skill::select('category', DB::raw('count(*) as count'))
            ->groupBy('category')
            ->orderBy('count', 'desc')
            ->get()
            ->map(function ($item) {
                return [
                    'category' => $item->category,
                    'count' => $item->count,
                    'percentage' => round(($item->count / Skill::count()) * 100, 1)
                ];
            });

        return response()->json($skillsByCategory);
    }

    /**
     * Get recent activities (latest projects and skills)
     */
    public function recentActivities(): JsonResponse
    {
        $recentProjects = Project::select('id', 'title', 'created_at')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($project) {
                return [
                    'type' => 'project',
                    'title' => $project->title,
                    'created_at' => $project->created_at,
                    'id' => $project->id
                ];
            });

        $recentSkills = Skill::select('id', 'name', 'category', 'created_at')
            ->latest()
            ->take(5)
            ->get()
            ->map(function ($skill) {
                return [
                    'type' => 'skill',
                    'title' => $skill->name,
                    'subtitle' => $skill->category,
                    'created_at' => $skill->created_at,
                    'id' => $skill->id
                ];
            });

        $activities = $recentProjects->concat($recentSkills)
            ->sortByDesc('created_at')
            ->take(10)
            ->values();

        return response()->json($activities);
    }

    /**
     * Helper method to generate time series data
     */
    private function getTimeSeriesData(string $model, string $period): array
    {
        $query = $model::query();
        $format = match ($period) {
            'week' => '%Y-%m-%d',
            'month' => '%Y-%m-%d',
            'year' => '%Y-%m',
            default => '%Y-%m-%d'
        };

        $dateRange = match ($period) {
            'week' => [
                Carbon::now()->startOfWeek(),
                Carbon::now()->endOfWeek()
            ],
            'month' => [
                Carbon::now()->startOfMonth(),
                Carbon::now()->endOfMonth()
            ],
            'year' => [
                Carbon::now()->startOfYear(),
                Carbon::now()->endOfYear()
            ],
            default => [
                Carbon::now()->startOfMonth(),
                Carbon::now()->endOfMonth()
            ]
        };

        return $query->whereBetween('created_at', $dateRange)
            ->select(DB::raw("DATE_FORMAT(created_at, '$format') as date"), DB::raw('count(*) as count'))
            ->groupBy(DB::raw("DATE_FORMAT(created_at, '$format')"))
            ->orderBy('date')
            ->get()
            ->map(function ($item) use ($period) {
                return [
                    'date' => $item->date,
                    'count' => $item->count,
                    'formatted_date' => Carbon::createFromFormat(
                        $period === 'year' ? 'Y-m' : 'Y-m-d', 
                        $item->date
                    )->format($period === 'year' ? 'M Y' : 'M j')
                ];
            })
            ->toArray();
    }
}