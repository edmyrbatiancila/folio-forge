import { Head, Link } from "@inertiajs/react";
import { ExternalLink, Github, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PublicLayout from "@/layouts/PublicLayout";
import type { Project } from "@/types/Admin/Projects/IProjects";

interface Props {
    projects: Project[];
}

const ProjectsPage = ({ projects }: Props) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <PublicLayout>
            <Head title="Projects - My Portfolio" />
            
            {/* Header */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            My Projects
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            A collection of projects I've worked on, showcasing different technologies, approaches, 
                            and solutions to various challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {projects.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-gray-500 dark:text-gray-400 mb-4">
                                <Github className="mx-auto w-16 h-16 mb-4 opacity-50" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                No Projects Yet
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                New projects are being developed. Check back soon for updates!
                            </p>
                            <Link href="/">
                                <Button variant="outline">
                                    <ArrowLeft className="mr-2 w-4 h-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardHeader className="p-0">
                                        {project.image ? (
                                            <div className="aspect-video rounded-t-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ) : (
                                            <div className="aspect-video rounded-t-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                                                <Github className="w-12 h-12 text-gray-400" />
                                            </div>
                                        )}
                                        <div className="p-6 pb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                                                <Calendar className="w-4 h-4" />
                                                {formatDate(project.created_at)}
                                            </div>
                                            <CardTitle className="group-hover:text-blue-600 transition-colors mb-2">
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                                {project.description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="flex gap-2">
                                            {project.github_link && (
                                                <Button variant="outline" size="sm" className="flex-1" asChild>
                                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                                        <Github className="w-4 h-4 mr-1" />
                                                        Code
                                                    </a>
                                                </Button>
                                            )}
                                            {project.live_link && (
                                                <Button size="sm" className="flex-1" asChild>
                                                    <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 mr-1" />
                                                        Live Demo
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                        
                                        {/* Project Detail Link */}
                                        <div className="mt-3">
                                            <Link href={`/projects/${project.id}`}>
                                                <Button variant="ghost" size="sm" className="w-full">
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
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

export default ProjectsPage;