import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/2.png"
              alt="Architect sketching a modern house"
              data-ai-hint="architect sketch"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Decades of Experience in Real Estate Excellence
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At EstateWise Pro, we bring a wealth of knowledge and a
              commitment to integrity in every project we undertake. Our
              multidisciplinary team is dedicated to turning your real estate
              aspirations into tangible assets.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We pride ourselves on a client-centric approach, ensuring
              personalized service and meticulous attention to detail from the
              initial consultation to the final handover. Trust us to be your
              partner in building a better future.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
