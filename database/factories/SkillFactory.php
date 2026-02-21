<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Skill>
 */
class SkillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $skillsByCategory = [
            'Languages' => ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C#'],
            'Frameworks' => ['React', 'Laravel', 'Vue.js', 'Next.js', 'Express.js', 'Django'],
            'Tools' => ['Git', 'Docker', 'VS Code', 'Postman', 'Figma', 'Apache'],
            'Platforms' => ['AWS', 'Vercel', 'Netlify', 'GitHub', 'Linux', 'Windows']
        ];

        $category = $this->faker->randomElement(array_keys($skillsByCategory));
        $skill = $this->faker->randomElement($skillsByCategory[$category]);

        return [
            'name' => $skill,
            'category' => $category
        ];
    }
}
