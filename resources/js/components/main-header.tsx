import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import DesktopNavigation from '@/components/desktop-navigation';
import MobileNavigation from '@/components/mobile-navigation';

export default function MainHeader() {
    return (
        <header className="border-b bg-background px-4 py-4 sm:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <AppLogoIcon className="h-8 w-8 fill-current text-foreground" />
                        <span className="text-xl font-bold">
                            Laravel Styleguide
                        </span>
                    </Link>
                </div>

                <div className="flex items-center">
                    {/* [Mobile Navigation | mobile-navigation.tsx] ::start */}
                    <MobileNavigation />
                    {/* [Mobile Navigation | mobile-navigation.tsx] ::end */}

                    {/* [Desktop Navigation | desktop-navigation.tsx] ::start */}
                    <DesktopNavigation />
                    {/* [Desktop Navigation | desktop-navigation.tsx] ::end */}
                </div>
            </div>
        </header>
    );
}
