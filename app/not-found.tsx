import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background text-foreground">
      <div className="glass-card p-10 rounded-2xl border border-white/10 max-w-md w-full shadow-2xl">
        <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4 inline-block">
          404 ERROR
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl w-full">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Home size={16} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
