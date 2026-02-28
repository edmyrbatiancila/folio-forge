<?php

use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Api\DashboardStatsController;
use App\Http\Controllers\PortfolioController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Public Portfolio Routes
Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.home');
Route::get('/projects', [PortfolioController::class, 'projects'])->name('portfolio.projects');
Route::get('/projects/{project}', [PortfolioController::class, 'project'])->name('portfolio.project');
Route::get('/skills', [PortfolioController::class, 'skills'])->name('portfolio.skills');

Route::get('dashboard', [DashboardStatsController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


// Admin Routes (authentication required)
Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::resource('projects', ProjectController::class);
    Route::resource('skills', SkillController::class);
});

// Add to routes/web.php under the admin middleware group
Route::middleware(['auth'])->prefix('api')->group(function () {
    Route::prefix('dashboard')->group(function () {
        Route::get('/overview', [DashboardStatsController::class, 'overview']);
        Route::get('/projects-over-time', [DashboardStatsController::class, 'projectsOverTime']);
        Route::get('/skills-over-time', [DashboardStatsController::class, 'skillsOverTime']);
        Route::get('/skills-by-category', [DashboardStatsController::class, 'skillsByCategory']);
        Route::get('/recent-activities', [DashboardStatsController::class, 'recentActivities']);
    });
});

require __DIR__.'/settings.php';
