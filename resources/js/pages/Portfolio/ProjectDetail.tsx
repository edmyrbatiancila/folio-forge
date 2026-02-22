import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PublicLayout from "@/layouts/PublicLayout";
import type { Project } from "@/types/Admin/Projects/IProjects";

interface Props {
    project: Project;
}

const ProjectDetail = ({ project }: Props) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long',
            day: 'numeric'
        });
    };

    const getTimeAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return "1 day ago";
        if (diffDays < 30) return `${diffDays} days ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    return (
        <PublicLayout>
            <Head title={`${project.title} - Project Detail`} />
            
            {/* Header */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="mb-6">
                        <Link href="/projects">
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Projects
                            </Button>
                        </Link>
                    </div>
                    
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {project.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">Created {formatDate(project.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />  
                                <span className="text-sm">Updated {getTimeAgo(project.updated_at)}</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {project.github_link && (
                                <Button variant="outline" asChild>
                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        View Code
                                    </a>
                                </Button>
                            )}
                            {project.live_link && (
                                <Button asChild>
                                    <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Project Image */}
                            {project.image && (
                                <Card>
                                    <CardContent className="p-0">
                                        <div className="aspect-video rounded-lg overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Description */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>About This Project</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose dark:prose-invert max-w-none">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                                            {project.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Technologies (mock section - can be expanded) */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Technologies Used</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {/* Placeholder tech stack - this could be expanded to a separate field */}
                                        {project.title.toLowerCase().includes('laravel') && (
                                            <div className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <span className="text-sm font-medium">Laravel</span>
                                            </div>
                                        )}
                                        {project.title.toLowerCase().includes('react') && (
                                            <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                <span className="text-sm font-medium">React</span>
                                            </div>
                                        )}
                                        {project.title.toLowerCase().includes('next') && (
                                            <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                                                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                                                <span className="text-sm font-medium">Next.js</span>
                                            </div>
                                        )}
                                        {project.title.toLowerCase().includes('tailwind') && (
                                            <div className="flex items-center gap-2 p-2 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                                                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                                                <span className="text-sm font-medium">TailwindCSS</span>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Project Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Project Info</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Created</label>
                                        <p className="text-gray-900 dark:text-white">{formatDate(project.created_at)}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</label>
                                        <p className="text-gray-900 dark:text-white">{formatDate(project.updated_at)}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</label>
                                        <p className="text-green-600 dark:text-green-400 font-medium">Complete</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {project.github_link && (
                                        <Button variant="outline" className="w-full" asChild>
                                            <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                View on GitHub
                                            </a>
                                        </Button>
                                    )}
                                    {project.live_link && (
                                        <Button className="w-full" asChild>
                                            <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Visit Live Site
                                            </a>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center mt-12">
                        <Link href="/projects">
                            <Button variant="outline">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to All Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default ProjectDetail;