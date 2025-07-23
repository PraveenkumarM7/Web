import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] max-h-[800px] overflow-hidden">
      <Image
        src="/images/3.png"
        alt="Modern architecture"
        data-ai-hint="architecture modern"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Your Vision, Expertly Built.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl">
            From concept to completion, we provide comprehensive real estate consulting to bring your projects to life.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
