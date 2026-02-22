import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Save } from "lucide-react";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { skillCategories } from "@/hooks/Admin/Skills/skill-categories";
import AdminLayout from "@/layouts/AdminLayout";
import type { SkillFormData, Skill } from "@/types/Admin/Skills/ISkills";


interface Props {
    skill: Skill;
}

const SkillEdit = ({ skill }: Props) => {
    const { data, setData, post, processing, errors } = useForm<SkillFormData>({
        name: skill.name || '',
        category: skill.category || ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(`/admin/skills/${skill.id}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
    
        setData(id as keyof SkillFormData, value);
    };

    const handleSelectChange = (value: string) => {
        setData('category', value);
    };

    return (
        <AdminLayout>
            <Head title={`Edit Skill - ${skill.name}`} />

            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/admin/skills">
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Skills
                        </Button>
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">Edit Skill</h1>
                        <p className="text-gray-600">Update your skill information</p>
                    </div>
                </div>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Skill Details</CardTitle>
                        <CardDescription>
                            Update the information below to modify your skill.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form
                            onSubmit={ handleSubmit }
                            className="space-y-6"
                        >
                            {/* Skill Name */}
                            <div className="space-y-2">
                                <Label>Skill Name</Label>
                                <Input 
                                    id="name"
                                    value={ data.name }
                                    onChange={ handleInputChange }
                                    type="text"
                                    placeholder="e.g., React, Laravel, Docker"
                                />
                                <InputError message={errors.name} />
                            </div>

                            {/* Category */}
                            <div className="space-y-2 mb-4">
                                <Label htmlFor="category">Category *</Label>
                                <Select value={data.category} onValueChange={handleSelectChange}>
                                    <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {skillCategories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.category} />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    {
                                        processing ? 'Updating...' : 'Update Skill'
                                    }
                                </Button>
                                <Link href="/admin/skills">
                                    <Button 
                                        variant="outline" 
                                        type="button"
                                    >
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

export default SkillEdit;