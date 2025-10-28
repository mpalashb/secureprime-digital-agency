import teamImage from "@/assets/team.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Award,
  Clock,
  CheckCircle,
  Lightbulb,
  Target,
  Shield,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in digital transformation, Alex leads our vision for secure and innovative solutions.",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    bio: "Sarah brings technical expertise in AI and automation, ensuring our solutions are at the cutting edge of technology.",
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    bio: "Michael's creative vision and user-centered approach ensure our solutions are both beautiful and functional.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    bio: "Emily's data-driven strategies help our clients achieve remarkable growth and visibility in the digital space.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "We prioritize security in every solution we build, ensuring your digital assets are protected.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Our focus is on delivering measurable results that drive your business forward.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About SecurePrimeDex
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're a team of passionate professionals dedicated to transforming
              businesses through secure digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={teamImage}
                  alt="SecurePrimeDex team collaborating"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  At SecurePrimeDex Digital Agency, we believe that growth
                  should never come at the expense of security. Our team
                  combines cutting-edge technology with creative excellence to
                  deliver solutions that are not only beautiful and functional,
                  but also secure and scalable.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  We specialize in automation, AI integration, and data-driven
                  marketing strategies that help businesses thrive in the
                  digital age. From startups to established enterprises, we're
                  committed to turning your vision into reality with precision
                  and innovation.
                </p>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-4xl font-bold text-primary">150+</div>
                    <div className="text-muted-foreground mt-1">
                      Projects Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">98%</div>
                    <div className="text-muted-foreground mt-1">
                      Client Satisfaction
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <div className="text-muted-foreground mt-1">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card border-border bg-card">
                  <CardContent className="pt-8 pb-6 px-6 text-center">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The talented individuals behind our success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-card border-border bg-card">
                  <CardContent className="pt-8 pb-6 px-6 text-center">
                    <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How we turn your vision into reality
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">1</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-muted-foreground">
                  We learn about your business and goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">2</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                <p className="text-muted-foreground">
                  We develop a customized plan
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">3</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Execution</h3>
                <p className="text-muted-foreground">
                  We implement the solution
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">4</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Delivery</h3>
                <p className="text-muted-foreground">
                  We deliver and support the project
                </p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help you achieve your digital
              goals.
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

export default About;
