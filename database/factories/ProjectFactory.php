<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $projectTypes = [
            [
                'title' => 'E-commerce Website',
                'description' => 'A modern e-commerce platform built with Laravel and React. Features include user authentication, product catalog, shopping cart, and payment integration.'
            ],
            [
                'title' => 'Task Management App',
                'description' => 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.'
            ],
            [
                'title' => 'Portfolio Website',
                'description' => 'A responsive personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.'
            ],
            [
                'title' => 'Blog Platform',
                'description' => 'A full-featured blogging platform with content management, user roles, commenting system, and SEO optimization.'
            ],
            [
                'title' => 'Weather Dashboard',
                'description' => 'A weather monitoring dashboard that displays real-time weather data, forecasts, and interactive maps using external APIs.'
            ],
            [
                'title' => 'Social Media App',
                'description' => 'A social networking application with user profiles, posts, messaging, and real-time notifications.'
            ]
        ];

        $selectedProject = $this->faker->randomElement($projectTypes);
        
        return [
            'title' => $selectedProject['title'],
            'description' => $selectedProject['description'],
            'image' => $this->faker->imageUrl(800, 600, 'technology', true, 'project'),
            'github_link' => $this->faker->boolean(80) ? 'https://github.com/user/' . $this->faker->slug(2) : null,
            'live_link' => $this->faker->boolean(70) ? $this->faker->url() : null,
        ];
    }
}
