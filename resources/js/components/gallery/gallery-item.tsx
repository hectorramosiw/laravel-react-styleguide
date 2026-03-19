import { Search, Eye } from 'lucide-react';
import * as React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { GalleryItemData } from './types';

interface GalleryItemProps {
    item: GalleryItemData;
    onClick: (item: GalleryItemData) => void;
    className?: string;
    aspectRatio?: number;
}

export function GalleryItem({
    item,
    onClick,
    className,
    aspectRatio,
}: GalleryItemProps) {
    const content = (
        <>
            <img
                src={item.thumbnailUrl || item.url}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full border border-white/30 bg-white/20 p-3 text-white backdrop-blur-sm">
                    <Eye className="h-6 w-6" />
                </div>
                <div className="px-4 text-center">
                    <h3 className="max-w-full truncate text-sm font-semibold text-white">
                        {item.title}
                    </h3>
                    <p className="text-xs text-white/80">{item.category}</p>
                </div>
            </div>
        </>
    );

    return (
        <Card
            className={cn(
                'group relative cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg break-inside-avoid',
                className,
            )}
            onClick={() => onClick(item)}
        >
            {aspectRatio ? (
                <AspectRatio ratio={aspectRatio} className="bg-muted">
                    {content}
                </AspectRatio>
            ) : (
                <div className="relative bg-muted">{content}</div>
            )}
        </Card>
    );
}
