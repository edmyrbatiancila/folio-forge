<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            // Languages
            ['name' => 'JavaScript', 'category' => 'Languages'],
            ['name' => 'TypeScript', 'category' => 'Languages'],
            ['name' => 'PHP', 'category' => 'Languages'],
            ['name' => 'Python', 'category' => 'Languages'],
            
            // Frameworks
            ['name' => 'React', 'category' => 'Frameworks'],
            ['name' => 'Laravel', 'category' => 'Frameworks'],
            ['name' => 'Next.js', 'category' => 'Frameworks'],
            ['name' => 'TailwindCSS', 'category' => 'Frameworks'],
            
            // Tools
            ['name' => 'Git', 'category' => 'Tools'],
            ['name' => 'Docker', 'category' => 'Tools'],
            ['name' => 'VS Code', 'category' => 'Tools'],
            ['name' => 'Figma', 'category' => 'Tools'],
            
            // Platforms
            ['name' => 'AWS', 'category' => 'Platforms'],
            ['name' => 'Vercel', 'category' => 'Platforms'],
            ['name' => 'GitHub', 'category' => 'Platforms'],
            ['name' => 'Linux', 'category' => 'Platforms']
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
