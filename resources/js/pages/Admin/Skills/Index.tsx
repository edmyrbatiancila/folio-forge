import { Head, Link, router } from "@inertiajs/react";
import { Plus, Edit, Trash2, Code, Wrench, Layers, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AdminLayout from "@/layouts/AdminLayout";
import type { Skill } from "@/types/Admin/Skills/ISkills";

interface Props {
    skills: Skill[];
}

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Languages':
            return <Code className="h-4 w-4" />;
        case 'Frameworks':
            return <Layers className="h-4 w-4" />;
        case 'Tools':
            return <Wrench className="h-4 w-4" />;
        case 'Platforms':
            return <Cloud className="h-4 w-4" />;
        default:
            return <Code className="h-4 w-4" />;
    }
};

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'Languages':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
        case 'Frameworks':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
        case 'Tools':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
        case 'Platforms':
            return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
};

const SkillsIndex = ({ skills }: Props) => {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this skill?')) {
            router.delete(`/admin/skills/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Skills" />

            <div className="space-y-6 max-w-6xl mx-auto py-6">
                {/* Header */}
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Skills</h1>
                        <p className="text-gray-600">Manage your portfolio skills</p>
                    </div>
                    <Link href="/admin/skills/create">
                        <Button>
                            <Plus className="w-4 h-4 mr-2" />
                            Add New Skill
                        </Button>
                    </Link>
                </div>

                {/* Content */}
                {skills.length === 0 ? (
                    <Card>
                        <CardContent className="pt-8">
                            <div className="text-center py-10">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No skills yet</h3>
                                <p className="text-gray-500 mb-6">Get started by adding your first skill.</p>
                                <Link href="/admin/skills/create">
                                    <Button>
                                        <Plus className="w-4 h-4 mr-2" />
                                        Add New Skill
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-6">
                        {skills.map((skill) => (
                            <Card key={skill.id} className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                {getCategoryIcon(skill.category)}
                                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge 
                                                    variant="secondary" 
                                                    className={`${getCategoryColor(skill.category)} border-0`}
                                                >
                                                    {skill.category}
                                                </Badge>
                                                <span className="text-sm text-gray-500">
                                                    Added {new Date(skill.created_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Link href={`/admin/skills/${skill.id}/edit`}>
                                                <Button variant="outline" size="sm">
                                                    <Edit className="w-4 h-4" />
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleDelete(skill.id)}
                                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

export default SkillsIndex;
