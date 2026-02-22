import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, Code, Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PublicLayout from "@/layouts/PublicLayout";
import type { Skill } from "@/types/Admin/Skills/ISkills";
import { getCategoryIcon, getCategoryColor } from "@/hooks/Admin/Skills/category";
import { useState } from "react";

interface Props {
    skills: Record<string, Skill[]>;
}

const SkillsPage = ({ skills }: Props) => {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
        Languages: true, // Default to Languages being expanded
        Frameworks: true,
        Tools: false,
        Platforms: false
    });

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const skillCategories = Object.keys(skills);
    const totalSkills = Object.values(skills).flat().length;

    const categoryDescriptions: Record<string, string> = {
        Languages: "Programming languages I'm proficient in for building applications",
        Frameworks: "Frameworks and libraries I use to accelerate development",
        Tools: "Development tools and utilities that enhance my workflow",
        Platforms: "Platforms and services I deploy and work with"
    };

    return (
        <PublicLayout>
            <Head title="Skills - My Technical Expertise" />
            
            {/* Header */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            My Skills & Technologies
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                            A comprehensive overview of the technologies, tools, and skills I use to create 
                            modern web applications and solve complex problems.
                        </p>
                        
                        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                            <Award className="w-4 h-4" />
                            {totalSkills} technologies mastered across {skillCategories.length} categories
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Content */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {skillCategories.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-gray-500 dark:text-gray-400 mb-4">
                                <Code className="mx-auto w-16 h-16 mb-4 opacity-50" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                No Skills Listed Yet
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Skills are being updated. Check back soon!
                            </p>
                            <Link href="/">
                                <Button variant="outline">
                                    <ArrowLeft className="mr-2 w-4 h-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Skills Overview Cards */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {skillCategories.map((category) => {
                                    const categorySkills = skills[category];
                                    return (
                                        <Card key={category} className="hover:shadow-lg transition-shadow">
                                            <CardHeader className="text-center">
                                                <div className="mx-auto mb-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit">
                                                    {getCategoryIcon(category)}
                                                </div>
                                                <CardTitle className="text-lg">{category}</CardTitle>
                                                <CardDescription>
                                                    {categoryDescriptions[category] || `Skills in ${category}`}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                                    {categorySkills.length}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    {categorySkills.length === 1 ? 'technology' : 'technologies'}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>

                            {/* Detailed Skills by Category */}
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Detailed Breakdown
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Explore my skills organized by category
                                    </p>
                                </div>

                                {skillCategories.map((category) => {
                                    const categorySkills = skills[category];
                                    const isExpanded = expandedCategories[category];

                                    return (
                                        <Card key={category} className="overflow-hidden">
                                            <Collapsible>
                                                <CollapsibleTrigger 
                                                    className="w-full"
                                                    onClick={() => toggleCategory(category)}
                                                >
                                                    <CardHeader className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-3">
                                                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                                                    {getCategoryIcon(category)}
                                                                </div>
                                                                <div className="text-left">
                                                                    <CardTitle className="text-xl">{category}</CardTitle>
                                                                    <CardDescription>
                                                                        {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                                                                    </CardDescription>
                                                                </div>
                                                            </div>
                                                            <ChevronDown 
                                                                className={`w-5 h-5 transition-transform duration-200 ${
                                                                    isExpanded ? 'rotate-180' : ''
                                                                }`} 
                                                            />
                                                        </div>
                                                    </CardHeader>
                                                </CollapsibleTrigger>
                                                <CollapsibleContent>
                                                    <CardContent className="pt-0">
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                                            {categorySkills.map((skill) => (
                                                                <Badge
                                                                    key={skill.id}
                                                                    variant="secondary"
                                                                    className={`${getCategoryColor(skill.category)} py-2 px-3 justify-center text-center`}
                                                                >
                                                                    {skill.name}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </CardContent>
                                                </CollapsibleContent>
                                            </Collapsible>
                                        </Card>
                                    );
                                })}
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-16">
                                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                            Ready to Work Together?
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                                            I'm always excited to take on new challenges and work with the latest technologies. 
                                            Let's create something amazing together!
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link href="/projects">
                                                <Button size="lg">
                                                    View My Projects
                                                </Button>
                                            </Link>
                                            <Button variant="outline" size="lg">
                                                Get In Touch
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </>
                    )}

                    {/* Back to Home */}
                    <div className="text-center mt-12">
                        <Link href="/">
                            <Button variant="outline" size="lg">
                                <ArrowLeft className="mr-2 w-4 h-4" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default SkillsPage;