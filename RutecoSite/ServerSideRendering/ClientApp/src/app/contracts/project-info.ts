import { TechnologyItem } from './technology-item';

export interface ProjectInfo {
    projectName?: string;
    projectDescription?: string;
    imageLink?: string;
    projectLink?: string;
    siteName?: string;
    siteLinks?: string;
    isEven: boolean;
    useTechnologies: TechnologyItem[];
}
