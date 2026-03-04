import type { PropsWithChildren } from 'react';
import MainFooter from '@/components/main-footer';
import MainHeader from '@/components/main-header';

export default function App({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            {/* [Main Header | main-header.tsx] ::start */}
            <MainHeader />
            {/* [Main Header | main-header.tsx] ::end */}

            {/* [Main Content of your page] ::start */}
            <main className="flex flex-1 flex-col">{children}</main>
            {/* [Main Content of your page] ::start */}

            {/* [Main Footer | main-footer.tsx] ::start */}
            <MainFooter />
            {/* [Main Footer | main-footer.tsx] ::end */}
        </div>
    );
}
