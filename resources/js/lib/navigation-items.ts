export interface NavigationItem {
    label: string;
    href: string;
    external?: boolean;
    children?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Style Guide',
        href: '/style-guide',
        children: [
            { label: 'Carousel', href: '/style-guide/carousel' },
            { label: 'Link', href: '/style-guide/link' },
            { label: 'Button', href: '/style-guide/button' },
            { label: 'Accordion', href: '/style-guide/accordion' },
        ],
    },
];
