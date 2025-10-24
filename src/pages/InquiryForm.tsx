import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { z } from "zod";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z
    .string()
    .trim()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters"),
  service: z.string().trim().min(1, "Please select a service"),
  projectDescription: z
    .string()
    .trim()
    .min(10, "Project description must be at least 10 characters")
    .max(2000, "Project description must be less than 2000 characters"),
  budget: z.string().trim().min(1, "Please select a budget range"),
  timeline: z.string().trim().min(1, "Please select a timeline"),
  contactMethod: z
    .string()
    .trim()
    .min(1, "Please select a preferred contact method"),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    contactMethod: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = inquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description:
          "Thank you for your inquiry. Our team will get back to you within 24 hours to discuss your project requirements.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        contactMethod: "",
        termsAccepted: false,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Project Inquiry Form
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? Fill out the form below and our team will
              get in touch within 24 hours to discuss how we can bring your
              vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@secureprimedex.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Digital Avenue, Tech City
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How We Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Discovery</h3>
                <p className="text-muted-foreground">
                  We learn about your business and goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Strategy</h3>
                <p className="text-muted-foreground">
                  We develop a customized plan
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Execution</h3>
                <p className="text-muted-foreground">
                  We implement the solution
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4. Delivery</h3>
                <p className="text-muted-foreground">
                  We deliver and support the project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-card border-border bg-card">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl">
                  Tell Us About Your Project
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </CardHeader>
              <CardContent className="pt-0 pb-8 px-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-card-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-card-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-card-foreground">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your company name"
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-card-foreground">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-card-foreground">
                      Service Interest *
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleSelectChange("service", value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="mobile-app">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="ui-ux-design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="digital-marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="branding">
                          Branding & Identity
                        </SelectItem>
                        <SelectItem value="ecommerce">
                          E-commerce Solutions
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="projectDescription"
                      className="text-card-foreground"
                    >
                      Project Description *
                    </Label>
                    <Textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      className="mt-2 min-h-[150px]"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                    {errors.projectDescription && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.projectDescription}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget" className="text-card-foreground">
                        Project Budget *
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleSelectChange("budget", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">
                            $5,000 - $10,000
                          </SelectItem>
                          <SelectItem value="10k-25k">
                            $10,000 - $25,000
                          </SelectItem>
                          <SelectItem value="25k-50k">
                            $25,000 - $50,000
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            $50,000 - $100,000
                          </SelectItem>
                          <SelectItem value="over-100k">
                            Over $100,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.budget && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.budget}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="timeline"
                        className="text-card-foreground"
                      >
                        Project Timeline *
                      </Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          handleSelectChange("timeline", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">
                            6-12 months
                          </SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.timeline}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="contactMethod"
                      className="text-card-foreground"
                    >
                      Preferred Contact Method *
                    </Label>
                    <Select
                      value={formData.contactMethod}
                      onValueChange={(value) =>
                        handleSelectChange("contactMethod", value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="video">Video Call</SelectItem>
                        <SelectItem value="in-person">
                          In-Person Meeting
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.contactMethod && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.contactMethod}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="termsAccepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(
                          "termsAccepted",
                          checked as boolean
                        )
                      }
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="termsAccepted"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I accept the terms and conditions *
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you agree to our{" "}
                        <a
                          href="/privacy-policy"
                          className="text-primary hover:underline"
                        >
                          privacy policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="/terms-of-service"
                          className="text-primary hover:underline"
                        >
                          terms of service
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  {errors.termsAccepted && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.termsAccepted}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InquiryForm;
