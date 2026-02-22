import { Head, Link } from "@inertiajs/react";
import { ArrowRight, ExternalLink, Github, Code, Users, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PublicLayout from "@/layouts/PublicLayout";
import type { Project } from "@/types/Admin/Projects/IProjects";
import type { Skill } from "@/types/Admin/Skills/ISkills";
import { getCategoryIcon, getCategoryColor } from "@/hooks/Admin/Skills/category";

interface Props {
    projects: Project[];
    skills: Record<string, Skill[]>;
}

const PortfolioIndex = ({ projects, skills }: Props) => {
    return (
        <PublicLayout>
            <Head title="Portfolio - Full Stack Developer" />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="mb-6">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                🚀 Available for new opportunities
                            </div>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Full Stack
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Developer
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            Building modern web applications with cutting-edge technologies. 
                            Passionate about clean code, user experience, and solving complex problems.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/projects">
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    View My Work
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-600">
                                <Download className="mr-2 w-4 h-4" />
                                Download CV
                            </Button>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg mx-auto mb-3">
                                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{projects.length}+</div>
                                <div className="text-gray-600 dark:text-gray-300">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg mx-auto mb-3">
                                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">{Object.values(skills).flat().length}+</div>
                                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg mx-auto mb-3">
                                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
                                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {projects.map((project) => (
                            <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    {project.image && (
                                        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-2">
                                        {project.github_link && (
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4 mr-1" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                        {project.live_link && (
                                            <Button size="sm" asChild>
                                                <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-1" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                View All Projects
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Technologies & Skills
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            I work with a variety of technologies to build robust and scalable applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {Object.entries(skills).map(([category, categorySkills]) => (
                            <Card key={category}>
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        {getCategoryIcon(category)}
                                        <CardTitle className="text-lg">{category}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {categorySkills.map((skill) => (
                                            <Badge
                                                key={skill.id}
                                                variant="secondary"
                                                className={getCategoryColor(skill.category)}
                                            >
                                                {skill.name}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/skills">
                            <Button variant="outline" size="lg">
                                View All Skills
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        I'm always excited to work on new projects and collaborate with amazing people. 
                        Let's create something great together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Get In Touch
                        </Button>
                        <Button variant="outline" size="lg">
                            Schedule a Call
                        </Button>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default PortfolioIndex;