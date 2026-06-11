import Link from "next/link";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-28">
      <Container className="text-center">
        <p className="text-6xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Page Not Found</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Button className="mt-8" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </Container>
    </div>
  );
}
