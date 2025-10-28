import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Cpu,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const services = [
  {
    icon: Code,
    title: "Web Development & Design",
    description:
      "Fast, secure, and responsive websites built with the latest technologies.",
    features: [
      "Custom website development",
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Secure coding practices",
      "Performance optimization",
    ],
  },
  {
    icon: Cpu,
    title: "Automation & AI Integration",
    description:
      "Streamline your business with smart workflows and AI-driven systems.",
    features: [
      "Business process automation",
      "AI-powered analytics",
      "Custom workflow development",
      "Integration with existing systems",
      "Continuous improvement",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description:
      "Grow your visibility and attract more customers with data-backed strategies.",
    features: [
      "Search engine optimization",
      "Content marketing strategy",
      "Social media management",
      "Pay-per-click advertising",
      "Analytics and reporting",
    ],
  },
];

const additionalServices = [
  {
    icon: Shield,
    title: "Security Solutions",
    description:
      "Protect your digital assets with comprehensive security measures.",
  },
  {
    icon: Globe,
    title: "E-commerce Development",
    description:
      "Build powerful online stores that drive sales and customer loyalty.",
  },
  {
    icon: Zap,
    title: "Mobile App Development",
    description:
      "Create engaging mobile experiences for iOS and Android platforms.",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive solutions to drive your digital success and
              transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`shadow-card hover:shadow-glow transition-smooth border-border bg-card group cursor-pointer ${
                    activeService === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setActiveService(index)}
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

            {/* Service Details */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center">
                    {(() => {
                      const Icon = services[activeService].icon;
                      return <Icon className="w-12 h-12 text-white" />;
                    })()}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {services[activeService].title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {services[activeService].description}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Key Features:
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">
                Additional Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {additionalServices.map((service, index) => (
                  <Card
                    key={index}
                    className="shadow-card border-border bg-card"
                  >
                    <CardContent className="pt-8 pb-6 px-6 text-center">
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-4">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and
              drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="/free-consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="/inquiry-form">Submit Project Inquiry</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
