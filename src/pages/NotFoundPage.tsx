
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="container flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It might have been removed,
          renamed, or didn't exist in the first place.
        </p>
        <Button asChild className="inline-flex items-center">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
