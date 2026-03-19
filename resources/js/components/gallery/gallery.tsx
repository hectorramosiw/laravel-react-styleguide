import { LayoutGrid, Square, Search } from 'lucide-react';
import * as React from 'react';
import { Empty } from '@/components/ui/empty';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';
import { GalleryItem } from './gallery-item';
import { GalleryLightbox } from './gallery-lightbox';
import type { GalleryItemData, GalleryViewMode } from './types';

interface GalleryProps {
    items: GalleryItemData[];
    className?: string;
    columns?: number;
    gap?: number;
    aspectRatio?: number;
    defaultViewMode?: GalleryViewMode;
}

export function Gallery({
    items,
    className,
    columns = 3,
    gap = 4,
    aspectRatio = 1,
    defaultViewMode = 'grid',
}: GalleryProps) {
    const [filter, setFilter] = React.useState('all');
    const [viewMode, setViewMode] = React.useState<GalleryViewMode>(defaultViewMode);
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);

    // Get unique categories
    const categories = ['all', ...new Set(items.map((item) => item.category))];

    // Filter items
    const filteredItems = items.filter(
        (item) => filter === 'all' || item.category === filter,
    );

    const handleItemClick = (item: GalleryItemData) => {
        // We need the index in the filtered items for the lightbox
        const index = filteredItems.findIndex((i) => i.id === item.id);
        setActiveItemIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className={cn('space-y-6', className)}>
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <Tabs
                    value={filter}
                    onValueChange={setFilter}
                    className="w-full sm:w-auto"
                >
                    <TabsList className="grid w-full grid-cols-2 sm:flex sm:w-auto">
                        {categories.map((cat) => (
                            <TabsTrigger
                                key={cat}
                                value={cat}
                                className="capitalize"
                            >
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                <div className="flex items-center gap-4">
                    <ToggleGroup
                        type="single"
                        value={viewMode}
                        onValueChange={(value) =>
                            value && setViewMode(value as GalleryViewMode)
                        }
                    >
                        <ToggleGroupItem value="grid" aria-label="Grid View">
                            <LayoutGrid className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="masonry" aria-label="Masonry View">
                            <Square className="h-4 w-4" />
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <div className="text-sm text-muted-foreground">
                        Showing {filteredItems.length} of {items.length} items
                    </div>
                </div>
            </div>

            {filteredItems.length > 0 ? (
                viewMode === 'grid' ? (
                    <div
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        style={{ gap: `${gap * 0.25}rem` }}
                    >
                        {filteredItems.map((item) => (
                            <GalleryItem
                                key={item.id}
                                item={item}
                                onClick={handleItemClick}
                                aspectRatio={aspectRatio}
                            />
                        ))}
                    </div>
                ) : (
                    <div
                        className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4"
                        style={{ gap: `${gap * 0.25}rem` }}
                    >
                        {filteredItems.map((item) => (
                            <GalleryItem
                                key={item.id}
                                item={item}
                                onClick={handleItemClick}
                                className="mb-4"
                            />
                        ))}
                    </div>
                )
            ) : (
                <Empty
                    title="No images found"
                    description="Try selecting a different category."
                    icon={<Search className="h-10 w-10 text-muted-foreground" />}
                />
            )}

            <GalleryLightbox
                items={filteredItems}
                initialIndex={activeItemIndex}
                open={lightboxOpen}
                onOpenChange={setLightboxOpen}
            />
        </div>
    );
}
