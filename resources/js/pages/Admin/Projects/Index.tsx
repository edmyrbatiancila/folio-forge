import { Head, Link, router } from "@inertiajs/react";
import { Plus, ExternalLink, Github, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from "@/layouts/AdminLayout";
import type { Project } from "@/types/Admin/Projects/IProjects";

interface Props {
    projects: Project[];
}

const ProjectIndex = ({
    projects
}: Props) => {
    

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Projects" />
            
            <div className="space-y-6 max-w-4xl mx-auto py-6">
                {/* Header */}
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Projects</h1>
                        <p className="text-gray-600">Manage your portfolio projects</p>
                    </div>
                    <Link href="/admin/projects/create">
                        <Button>
                            <Plus className="w-4 h-4 mr-2" />
                            Add New Project
                        </Button>
                    </Link>
                </div>

                {/* Content */}
                {projects.length === 0 ? (
                    <Card>
                        <CardContent className="pt-8">
                            <div className="text-center py-10">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                                <p className="text-gray-500 mb-6">Get started by creating your first project.</p>
                                <Link href="/admin/projects/create">
                                    <Button>
                                        <Plus className="w-4 h-4 mr-2" />
                                        Create Your First Project
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-6">
                        {projects.map((project) => (
                            <Card key={project.id}>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl">{project.title}</CardTitle>
                                            <p className="text-gray-600 mt-2 line-clamp-2">{project.description}</p>
                                        </div>
                                        <div className="flex gap-2 ml-4">
                                            <Link href={`/admin/projects/${project.id}/edit`}>
                                                <Button variant="outline" size="sm">
                                                    <Edit className="w-4 h-4 mr-1" />
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button 
                                                variant="outline" 
                                                size="sm"
                                                onClick={() => handleDelete(project.id)}
                                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Trash2 className="w-4 h-4 mr-1" />
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {project.github_link && (
                                                <a
                                                    href={project.github_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Badge variant="secondary">
                                                        <Github className="w-3 h-3 mr-1" />
                                                        GitHub
                                                    </Badge>
                                                </a>
                                            )}
                                            {project.live_link && (
                                                <a
                                                    href={project.live_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Badge variant="secondary">
                                                        <ExternalLink className="w-3 h-3 mr-1" />
                                                        Live Demo
                                                    </Badge>
                                                </a>
                                            )}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Created {new Date(project.created_at).toLocaleDateString()}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default ProjectIndex;