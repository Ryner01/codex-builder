import { Button } from "@/components/ui/button";

export default function App() {
    return (
        <main className="min-h-svh bg-background text-foreground">
            <section className="mx-auto flex min-h-svh w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-12">
                <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Widget Sandbox</p>
                    <h1 className="text-3xl font-semibold sm:text-4xl">Build the widget in src/App.tsx.</h1>
                    <p className="max-w-xl text-base text-muted-foreground">
                        Use React, shadcn/ui, and Recharts. Production builds are emitted as one iframe-ready HTML file.
                    </p>
                </div>

                <Button type="button">Ready to customize</Button>
            </section>
        </main>
    )
}
