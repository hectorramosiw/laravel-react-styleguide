import { Head } from '@inertiajs/react';
import { Gallery, type GalleryItemData } from '@/components/gallery';

const MOCK_IMAGES: GalleryItemData[] = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200',
        title: 'Mountain Mist',
        category: 'nature',
        description: 'Morning fog rolling over the peaks of the Swiss Alps.',
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
        title: 'Sunlit Forest',
        category: 'nature',
        description:
            'Sunlight filtering through the canopy of a temperate rainforest.',
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
        title: 'Modern Skyline',
        category: 'architecture',
        description:
            'A futuristic view of a modern metropolitan business district.',
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200',
        title: 'Quiet Lake',
        category: 'nature',
        description: 'The serene reflection of a lakeside cabin at dusk.',
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=1200',
        title: 'Parisian Arch',
        category: 'architecture',
        description:
            'The iconic Arc de Triomphe captured during the golden hour.',
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
        title: 'Minimalist Office',
        category: 'interiors',
        description: 'A minimalist and bright office space with clean lines.',
    },
    {
        id: 7,
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
        title: 'Coastal Bliss',
        category: 'travel',
        description:
            'Crystal clear waters meeting the rugged cliffs of the Amalfi Coast.',
    },
    {
        id: 8,
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
        title: 'Peak Adventure',
        category: 'travel',
        description:
            'A hiker reaching the summit after a long day of climbing.',
    },
];

export default function GalleryPage() {
    return (
      <>
        <Head title="Gallery" />
        <div className="flex h-full flex-1 flex-col gap-4 p-4 md:p-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Interactive Gallery
                </h1>
                <p className="text-muted-foreground">
                    A full-featured gallery built with Radix UI, Embla
                    Carousel, and Tailwind CSS v4.
                </p>
            </div>

            <div className="mt-6 border-t pt-8">
                <Gallery items={MOCK_IMAGES} aspectRatio={4 / 3} />
            </div>
        </div>
      </>
    );
}
