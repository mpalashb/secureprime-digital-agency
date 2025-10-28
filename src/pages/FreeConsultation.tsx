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
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { z } from "zod";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

const consultationSchema = z.object({
  full_name: z
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
    .max(100, "Company name must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters"),
  service: z.string().trim().min(1, "Please select a service interest"),
  consultation_type: z
    .string()
    .trim()
    .min(1, "Please select a consultation type"),
  preferred_date: z
    .string()
    .trim()
    .max(50, "Date must be less than 50 characters")
    .optional()
    .or(z.literal("")),
  preferred_time: z
    .string()
    .trim()
    .max(50, "Time must be less than 50 characters")
    .optional()
    .or(z.literal("")),
  project_description: z
    .string()
    .trim()
    .max(500, "Project description must be less than 500 characters")
    .optional()
    .or(z.literal("")),
  project_budget: z
    .string()
    .trim()
    .max(100, "Budget must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  project_timeline: z
    .string()
    .trim()
    .max(100, "Timeline must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  additional_information: z
    .string()
    .trim()
    .max(500, "Message must be less than 500 characters")
    .optional()
    .or(z.literal("")),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

const FreeConsultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    consultation_type: "",
    preferred_date: "",
    preferred_time: "",
    project_description: "",
    project_budget: "",
    project_timeline: "",
    additional_information: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = consultationSchema.safeParse(formData);

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

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke(
        "submit-consultation",
        {
          body: {
            full_name: formData.full_name,
            email: formData.email,
            company: formData.company || null,
            phone: formData.phone,
            service: formData.service,
            consultation_type: formData.consultation_type,
            preferred_date: formData.preferred_date || null,
            preferred_time: formData.preferred_time || null,
            project_description: formData.project_description || null,
            project_budget: formData.project_budget || null,
            project_timeline: formData.project_timeline || null,
            additional_information: formData.additional_information || null,
            form_type: "consultation",
          },
        }
      );

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      toast({
        title: "Consultation Booked Successfully!",
        description:
          "Thank you for booking a consultation with us. Our team will confirm your appointment within 24 hours.",
      });

      setFormData({
        full_name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        consultation_type: "",
        preferred_date: "",
        preferred_time: "",
        project_description: "",
        project_budget: "",
        project_timeline: "",
        additional_information: "",
        termsAccepted: false,
      });
    } catch (error: any) {
      console.error("Error submitting consultation:", error);
      toast({
        title: "Submission Error",
        description:
          error.message ||
          "Failed to submit consultation request. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Free Consultation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute consultation with our experts to discuss
              your project needs and how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                  <p className="text-muted-foreground">
                    Get insights from our experienced team about the best
                    strategies for your business.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Roadmap</h3>
                  <p className="text-muted-foreground">
                    Receive a personalized plan tailored to your specific
                    business needs and goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
                  <p className="text-muted-foreground">
                    This consultation is completely free with no strings
                    attached.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">1</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book</h3>
                <p className="text-muted-foreground">Fill out the form below</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">2</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Confirm</h3>
                <p className="text-muted-foreground">
                  We'll confirm your appointment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">3</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Consult</h3>
                <p className="text-muted-foreground">
                  30-minute strategy session
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-xl font-bold text-primary">4</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Plan</h3>
                <p className="text-muted-foreground">
                  Receive your custom roadmap
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
                  Book Your Free Consultation
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below to schedule your 30-minute
                  consultation
                </p>
              </CardHeader>
              <CardContent className="pt-0 pb-8 px-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-card-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={formData.full_name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your full name"
                      />
                      {errors.full_name && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.full_name}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-card-foreground">
                        Email Address{" "}
                        <span className="text-destructive">*</span>
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
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your company name (optional)"
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-card-foreground">
                        Phone Number <span className="text-destructive">*</span>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service" className="text-card-foreground">
                        Service Interest{" "}
                        <span className="text-destructive">*</span>
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
                        htmlFor="consultationType"
                        className="text-card-foreground"
                      >
                        Consultation Type{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.consultation_type}
                        onValueChange={(value) =>
                          handleSelectChange("consultation_type", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video-call">Video Call</SelectItem>
                          <SelectItem value="phone-call">Phone Call</SelectItem>
                          <SelectItem value="in-person">
                            In-Person (Local Only)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.consultation_type && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.consultation_type}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="preferredDate"
                        className="text-card-foreground"
                      >
                        Preferred Date (Optional)
                      </Label>
                      <Input
                        id="preferred_date"
                        name="preferred_date"
                        type="date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        className="mt-2"
                      />
                      {errors.preferred_date && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.preferred_date}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="preferredTime"
                        className="text-card-foreground"
                      >
                        Preferred Time (Optional)
                      </Label>
                      <Select
                        value={formData.preferred_time}
                        onValueChange={(value) =>
                          handleSelectChange("preferred_time", value)
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9am">9:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                          <SelectItem value="11am">11:00 AM</SelectItem>
                          <SelectItem value="1pm">1:00 PM</SelectItem>
                          <SelectItem value="2pm">2:00 PM</SelectItem>
                          <SelectItem value="3pm">3:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM</SelectItem>
                          <SelectItem value="5pm">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.preferred_time && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.preferred_time}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="project_description"
                      className="text-card-foreground"
                    >
                      Project Description (Optional)
                    </Label>
                    <Textarea
                      id="project_description"
                      name="project_description"
                      value={formData.project_description}
                      onChange={handleChange}
                      className="mt-2 min-h-[100px]"
                      placeholder="Tell us about your project..."
                    />
                    {errors.project_description && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.project_description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="project_budget"
                        className="text-card-foreground"
                      >
                        Project Budget (Optional)
                      </Label>
                      <Input
                        id="project_budget"
                        name="project_budget"
                        type="text"
                        value={formData.project_budget}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="e.g., $5,000 - $10,000"
                      />
                      {errors.project_budget && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.project_budget}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="project_timeline"
                        className="text-card-foreground"
                      >
                        Project Timeline (Optional)
                      </Label>
                      <Input
                        id="project_timeline"
                        name="project_timeline"
                        type="text"
                        value={formData.project_timeline}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="e.g., 2-3 months"
                      />
                      {errors.project_timeline && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.project_timeline}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="additional_information"
                      className="text-card-foreground"
                    >
                      Additional Information (Optional)
                    </Label>
                    <Textarea
                      id="additional_information"
                      name="additional_information"
                      value={formData.additional_information}
                      onChange={handleChange}
                      className="mt-2 min-h-[100px]"
                      placeholder="Any specific questions or additional information..."
                    />
                    {errors.additional_information && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.additional_information}
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
                        I accept the terms and conditions{" "}
                        <span className="text-destructive">*</span>
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
                    {isSubmitting ? "Booking..." : "Book Free Consultation"}
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

export default FreeConsultation;
