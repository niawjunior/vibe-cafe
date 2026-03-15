import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-6 p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Welcome
        </h1>
        <p className="text-muted-foreground">shadcn/ui is ready.</p>
        <Button>Get Started</Button>
      </main>
    </div>
  );
}
