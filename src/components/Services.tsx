import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development & Design",
    description: "Fast, secure, and responsive websites built with the latest technologies.",
  },
  {
    icon: Cpu,
    title: "Automation & AI Integration",
    description: "Streamline your business with smart workflows and AI-driven systems.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Grow your visibility and attract more customers with data-backed strategies.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to drive your digital success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-glow transition-smooth border-border bg-card group"
            >
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
