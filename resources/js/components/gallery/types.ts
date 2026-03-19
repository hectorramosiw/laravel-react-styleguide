export interface GalleryItemData {
    id: string | number;
    url: string;
    thumbnailUrl?: string;
    title: string;
    category: string;
    description?: string;
    metadata?: Record<string, string | number>;
}

export type GalleryViewMode = 'grid' | 'masonry';
