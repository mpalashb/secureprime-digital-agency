import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content:
      "SecurePrimeDex transformed our digital presence completely. Their automation solutions saved us 40% in operational costs while improving customer engagement. Highly recommended!",
    rating: 5,
    project: "Automation & AI Integration",
    results: "40% reduction in operational costs",
  },
  {
    name: "Marcus Chen",
    role: "Marketing Director, GrowthLab",
    content:
      "The SEO and digital marketing strategies implemented by SecurePrimeDex doubled our organic traffic in just 6 months. Their data-driven approach is unmatched.",
    rating: 5,
    project: "Digital Marketing & SEO",
    results: "200% increase in organic traffic",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content:
      "From design to deployment, SecurePrimeDex handled everything with professionalism and expertise. Our new website is not only stunning but incredibly secure and fast.",
    rating: 5,
    project: "Web Development & Design",
    results: "60% increase in conversion rate",
  },
  {
    name: "David Thompson",
    role: "CTO, FinSecure",
    content:
      "The security solutions implemented by SecurePrimeDex have been invaluable. Their team identified vulnerabilities we weren't aware of and provided comprehensive protection.",
    rating: 5,
    project: "Security Solutions",
    results: "100% security compliance achieved",
  },
  {
    name: "Jennifer Lee",
    role: "E-commerce Director, ShopSmart",
    content:
      "Our new e-commerce platform developed by SecurePrimeDex has revolutionized our online business. Sales are up 75% and customer satisfaction has never been higher.",
    rating: 5,
    project: "E-commerce Development",
    results: "75% increase in online sales",
  },
  {
    name: "Robert Kim",
    role: "Operations Manager, LogiFlow",
    content:
      "The custom workflow automation system has streamlined our operations beyond our expectations. What used to take days now takes hours. Exceptional work!",
    rating: 5,
    project: "Business Process Automation",
    results: "80% reduction in processing time",
  },
];

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "50+",
    label: "Team Members",
  },
];

const Testimonials = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Real results from real partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied
                clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="shadow-card border-border bg-card h-full flex flex-col"
                >
                  <CardContent className="pt-8 pb-6 px-6 flex-grow flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <div className="mb-4 text-primary">
                      <Quote className="w-8 h-8" />
                    </div>
                    <p className="text-card-foreground mb-6 leading-relaxed italic flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-border pt-4 mt-auto">
                      <div className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {testimonial.role}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">
                          {testimonial.results}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Detailed case studies of our most impactful projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-card border-border bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="text-primary font-semibold mb-2">
                    Case Study
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    TechStart Inc.: Digital Transformation
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    How we helped TechStart Inc. automate their workflows and
                    integrate AI solutions, resulting in significant cost
                    savings and improved efficiency.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        40% reduction in operational costs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        60% improvement in process efficiency
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Full ROI achieved within 6 months
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read Full Case Study
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="text-primary font-semibold mb-2">
                    Case Study
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    StyleHub: E-commerce Revolution
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our complete e-commerce solution for StyleHub, from design
                    to deployment, resulting in dramatic sales growth and
                    enhanced customer experience.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        75% increase in online sales
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        60% improvement in conversion rate
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        40% reduction in cart abandonment
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read Full Case Study
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let's create
              something amazing together.
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

export default Testimonials;
