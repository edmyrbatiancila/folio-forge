<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display the public portfolio homepage
     */
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')
            ->take(6) // Show latest 6 projects on homepage
            ->get();
            
        $skills = Skill::orderBy('category')
            ->orderBy('name')
            ->get()
            ->groupBy('category'); // Group skills by category for better display

        return Inertia::render('Portfolio/Index', [
            'projects' => $projects,
            'skills' => $skills
        ]);
    }

    /**
     * Display all projects
     */
    public function projects()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();

        return Inertia::render('Portfolio/Projects', [
            'projects' => $projects,
        ]);
    }

    /**
     * Display a specific project
     */
    public function project(Project $project)
    {
        return Inertia::render('Portfolio/ProjectDetail', [
            'project' => $project,
        ]);
    }

    /**
     * Display all skills
     */
    public function skills()
    {
        $skills = Skill::orderBy('category')
            ->orderBy('name')
            ->get()
            ->groupBy('category');

        return Inertia::render('Portfolio/Skills', [
            'skills' => $skills,
        ]);
    }
}