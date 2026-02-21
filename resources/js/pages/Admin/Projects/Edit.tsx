import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AdminLayout from "@/layouts/AdminLayout";
import type { Project, FormData } from "@/types/Admin/Projects/IProjects";

interface Props {
    project: Project;
}

const ProjectEdit = ({ project }: Props) => {
    const { data, setData, put, processing, errors } = useForm<FormData>({
        title: project.title,
        description: project.description,
        image: project.image || '',
        github_link: project.github_link || '',
        live_link: project.live_link || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/projects/${project.id}`);
    };

    return (
        <AdminLayout>
            <Head title={`Edit Project - ${project.title}`} />
            
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/admin/projects">
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold">Edit Project</h1>
                        <p className="text-gray-600">Update your project information</p>
                    </div>
                </div>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Project Details</CardTitle>
                        <CardDescription>
                            Update the information below to modify your project.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Title Field */}
                            <div className="space-y-2">
                                <Label htmlFor="title">Project Title *</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Enter project title"
                                    className={errors.title ? "border-red-500" : ""}
                                />
                                {errors.title && (
                                    <p className="text-sm text-red-500">{errors.title}</p>
                                )}
                            </div>

                            {/* Description Field */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description *</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Describe your project in detail..."
                                    rows={4}
                                    className={errors.description ? "border-red-500" : ""}
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-500">{errors.description}</p>
                                )}
                            </div>

                            {/* Image URL Field */}
                            <div className="space-y-2">
                                <Label htmlFor="image">Image URL</Label>
                                <Input
                                    id="image"
                                    type="url"
                                    value={data.image || ''}
                                    onChange={(e) => setData('image', e.target.value)}
                                    placeholder="https://example.com/image.jpg"
                                    className={errors.image ? "border-red-500" : ""}
                                />
                                {errors.image && (
                                    <p className="text-sm text-red-500">{errors.image}</p>
                                )}
                            </div>

                            {/* GitHub Link Field */}
                            <div className="space-y-2">
                                <Label htmlFor="github_link">GitHub Repository</Label>
                                <Input
                                    id="github_link"
                                    type="url"
                                    value={data.github_link || ''}
                                    onChange={(e) => setData('github_link', e.target.value)}
                                    placeholder="https://github.com/username/repository"
                                    className={errors.github_link ? "border-red-500" : ""}
                                />
                                {errors.github_link && (
                                    <p className="text-sm text-red-500">{errors.github_link}</p>
                                )}
                            </div>

                            {/* Live Demo Link Field */}
                            <div className="space-y-2">
                                <Label htmlFor="live_link">Live Demo URL</Label>
                                <Input
                                    id="live_link"
                                    type="url"
                                    value={data.live_link || ''}
                                    onChange={(e) => setData('live_link', e.target.value)}
                                    placeholder="https://your-project.com"
                                    className={errors.live_link ? "border-red-500" : ""}
                                />
                                {errors.live_link && (
                                    <p className="text-sm text-red-500">{errors.live_link}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex gap-3 pt-4">
                                <Button type="submit" disabled={processing}>
                                    <Save className="w-4 h-4 mr-2" />
                                    {processing ? 'Updating...' : 'Update Project'}
                                </Button>
                                <Link href="/admin/projects">
                                    <Button variant="outline" type="button">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
};

export default ProjectEdit;