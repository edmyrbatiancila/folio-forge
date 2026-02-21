<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create specific meaningful projects for demo
        $projects = [
            [
                'title' => 'FolioForge CMS',
                'description' => 'A comprehensive portfolio management system built with Laravel 12, React 19, and InertiaJS. Features include project CRUD operations, skills management, and a modern admin dashboard with shadcn UI components.',
                'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                'github_link' => 'https://github.com/developer/folio-forge',
                'live_link' => 'https://folioforge.demo.com'
            ],
            [
                'title' => 'E-commerce Dashboard',
                'description' => 'A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, order management, and customer insights. Built with modern web technologies and responsive design.',
                'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                'github_link' => 'https://github.com/developer/ecommerce-dashboard',
                'live_link' => 'https://dashboard-demo.com'
            ],
            [
                'title' => 'Task Management Pro',
                'description' => 'A collaborative project management tool with team workspaces, kanban boards, time tracking, and reporting features. Designed to improve team productivity and project visibility.',
                'image' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
                'github_link' => 'https://github.com/developer/task-management-pro',
                'live_link' => null
            ],
            [
                'title' => 'Weather Analytics Platform',
                'description' => 'A data visualization platform for weather monitoring with interactive charts, historical data analysis, and predictive forecasting. Integrates with multiple weather APIs for comprehensive coverage.',
                'image' => 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
                'github_link' => 'https://github.com/developer/weather-analytics',
                'live_link' => 'https://weather-analytics.demo.com'
            ],
            [
                'title' => 'Learning Management System',
                'description' => 'An educational platform featuring course management, student progress tracking, interactive assessments, and video streaming capabilities. Supports both instructors and learners.',
                'image' => 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                'github_link' => 'https://github.com/developer/learning-management-system',
                'live_link' => null
            ]
        ];

        foreach ($projects as $projectData) {
            Project::create($projectData);
        }

        // Create additional random projects using factory
        Project::factory()->count(8)->create();
    }
}
