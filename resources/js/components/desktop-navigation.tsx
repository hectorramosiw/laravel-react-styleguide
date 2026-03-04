import { Link } from '@inertiajs/react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navigationItems } from '@/lib/navigation-items';

export default function DesktopNavigation() {
    return (
        <nav className="hidden md:block">
            <NavigationMenu>
                <NavigationMenuList>
                    {navigationItems.map((item) => (
                        <NavigationMenuItem key={item.label}>
                            {item.children ? (
                                <>
                                    <NavigationMenuTrigger>
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {item.children.map((child) => (
                                                <li key={child.label}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={child.href}
                                                            className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        >
                                                            <div className="text-sm leading-none font-medium">
                                                                {child.label}
                                                            </div>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
