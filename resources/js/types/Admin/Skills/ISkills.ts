export interface Skill {
    id: number;
    name: string;
    category: string;
    created_at: string;
    updated_at: string;
}

export interface SkillFormData {
    name: string;
    category: string;
}

export const SKILL_CATEGORIES = [
    'Languages',
    'Frameworks', 
    'Tools',
    'Platforms'
] as const;