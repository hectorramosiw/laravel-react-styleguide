import * as React from 'react';
import AutoHeight from 'embla-carousel-auto-height';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { GalleryItemData } from './types';

interface GalleryLightboxProps {
    items: GalleryItemData[];
    initialIndex?: number;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function GalleryLightbox({
    items,
    initialIndex = 0,
    open,
    onOpenChange,
}: GalleryLightboxProps) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

    // Sync index when initialIndex changes or carousel scrolls
    React.useEffect(() => {
        if (!api || !open) return;
        api.scrollTo(initialIndex, true);
        setCurrentIndex(initialIndex);
    }, [api, initialIndex, open]);

    React.useEffect(() => {
        if (!api) return;

        api.on('select', () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);

    const activeItem = items[currentIndex];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="flex sm:max-w-4xl max-w-7xl flex-col overflow-hidden border-none bg-transparent p-4 shadow-none">
                <DialogHeader className="sr-only">
                    <DialogTitle>
                        {activeItem?.title || 'Gallery View'}
                    </DialogTitle>
                    <DialogDescription>
                        {activeItem?.description || ''}
                    </DialogDescription>
                </DialogHeader>

                <div className="relative flex w-full flex-col items-center justify-center py-4">
                    <Carousel
                        setApi={setApi}
                        plugins={[AutoHeight()]}
                        className="w-full"
                        opts={{
                            align: 'start',
                            loop: true,
                            startIndex: initialIndex,
                        }}
                    >
                        <CarouselContent className="items-start transition-[height] duration-300 ease-in-out pl-0 ml-0">
                            {items.map((item, index) => (
                                <CarouselItem
                                    key={`${item.id}-${index}`}
                                    className="flex items-center justify-center p-0"
                                >
                                    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-black/5 backdrop-blur-sm">
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            className="block h-auto w-auto max-w-full shadow-2xl"
                                            onLoad={() => api?.reInit()}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4 sm:px-12">
                            <CarouselPrevious className="pointer-events-auto cursor-pointer relative left-0 h-12 w-12 border-white/20 bg-black/20 text-white hover:bg-black/40" />
                            <CarouselNext className="pointer-events-auto cursor-pointer relative right-0 h-12 w-12 border-white/20 bg-black/20 text-white hover:bg-black/40" />
                        </div>
                    </Carousel>
                </div>

                {activeItem && (
                    <div className="mt-auto rounded-b-lg border-t border-white/10 bg-black/60 p-6 text-white backdrop-blur-md">
                        <h2 className="text-xl font-bold">
                            {activeItem.title}
                        </h2>
                        <p className="mt-1 text-sm text-white/70">
                            {activeItem.description}
                        </p>
                        <div className="mt-2 flex gap-4">
                            <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-xs tracking-wider uppercase">
                                {activeItem.category}
                            </span>
                            <span className="text-xs text-white/40">
                                {currentIndex + 1} / {items.length}
                            </span>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
