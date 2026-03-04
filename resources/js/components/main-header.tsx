import DesktopNavigation from '@/components/desktop-navigation';
import MobileNavigation from '@/components/mobile-navigation';

export default function MainHeader() {
    return (
        <div className="bg-gray-800 text-white py-8">
            {/* [Mobile Navigation | mobile-navigation.tsx] ::start */}
            <MobileNavigation />
            {/* [Mobile Navigation | mobile-navigation.tsx] ::end */}

            {/* [Desktop Navigation | desktop-navigation.tsx] ::start */}
            <DesktopNavigation />
            {/* [Desktop Navigation | desktop-navigation.tsx] ::end */}
        </div>
    );
}