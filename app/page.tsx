import { Button, Heading, Body, Link } from '@/lib/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <main className="max-w-4xl mx-auto px-4 py-16 md:px-8 md:py-32">
        <Heading className="mb-4">Welcome to Vertex</Heading>
        <Body className="mb-6 text-neutral-600 dark:text-neutral-400 max-w-2xl">
          An AI-powered learning platform with intelligent content search. Find exactly what you need in seconds.
        </Body>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg">Explore Courses</Button>
          <Button variant="outlined" size="lg">
            Learn More
          </Button>
        </div>

        <div className="text-center text-neutral-600 dark:text-neutral-400">
          <Body className="mb-2">Check out the design system:</Body>
          <Link href="/design" variant="primary">
            View Design System Showcase →
          </Link>
        </div>
      </main>
    </div>
  );
}
