export interface Project {
    id: number;
    title: string;
    description: string;
    image: string | null;
    github_link: string | null;
    live_link: string | null;
    created_at: string;
    updated_at: string;
}

export interface FormData {
    title: string;
    description: string;
    image?: string;
    github_link?: string;
    live_link?: string;
}