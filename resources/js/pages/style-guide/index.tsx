import { Head } from '@inertiajs/react';

export default function Overview() {
    return (
        <>
            <Head title="Style Guide" />

            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border" />
                    <div className="aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border" />
                    <div className="aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border" />
            </div>
        </>
    );
}
