import { Cloud, Code, Layers, Wrench } from "lucide-react";

export const getCategoryIcon = (category: string) => {
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

export const getCategoryColor = (category: string) => {
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