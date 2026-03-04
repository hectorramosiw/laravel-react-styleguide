import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { navigationItems } from '@/lib/navigation-items';

export default function MobileNavigation() {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Navigation</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 flex flex-col space-y-4">
                        {navigationItems.map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col space-y-2"
                            >
                                <Link
                                    href={item.href}
                                    className="text-lg font-medium transition-colors hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <div className="ml-4 flex flex-col space-y-2 border-l pl-4">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
