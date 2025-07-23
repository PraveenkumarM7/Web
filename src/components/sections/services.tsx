import {
  Briefcase,
  Compass,
  Construction,
  DraftingCompass,
  FileCheck2,
  Handshake,
  Landmark,
  Palette,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: "Architectural Support",
    description: "Expert architectural planning and design to create functional and aesthetic spaces.",
  },
  {
    icon: <Construction className="h-10 w-10 text-primary" />,
    title: "Engineering",
    description: "Structural and civil engineering solutions ensuring safety and durability for all projects.",
  },
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Home Loans",
    description: "Assistance in securing home loans with favorable terms from leading financial institutions.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Interior Design",
    description: "Creative and personalized interior design services to reflect your style and enhance your living.",
  },
  {
    icon: <FileCheck2 className="h-10 w-10 text-primary" />,
    title: "Plan Approvals",
    description: "Navigating the complexities of obtaining necessary plan approvals from local authorities.",
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Vastu Tips",
    description: "Harmonize your space with Vastu Shastra principles for positivity and well-being.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: "Civil Contracts",
    description: "Reliable and quality-focused civil contracting for construction and renovation projects.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Property Consulting",
    description: "Strategic advice and consultation for property investment, development, and management.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a full spectrum of real estate services to guide you every
            step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
