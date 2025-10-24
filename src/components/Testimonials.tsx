import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "SecurePrimeDex transformed our digital presence completely. Their automation solutions saved us 40% in operational costs while improving customer engagement. Highly recommended!",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Marketing Director, GrowthLab",
    content: "The SEO and digital marketing strategies implemented by SecurePrimeDex doubled our organic traffic in just 6 months. Their data-driven approach is unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleHub",
    content: "From design to deployment, SecurePrimeDex handled everything with professionalism and expertise. Our new website is not only stunning but incredibly secure and fast.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card border-border bg-card">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
