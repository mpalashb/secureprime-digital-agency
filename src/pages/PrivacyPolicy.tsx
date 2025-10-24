import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Eye,
  Lock,
  Server,
  Globe,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    "information-collection": true,
    "use-of-information": false,
    "data-protection": false,
    "data-sharing": false,
    cookies: false,
    "user-rights": false,
    "international-transfers": false,
    "data-retention": false,
    "children-privacy": false,
    "changes-policy": false,
    contact: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({
    id,
    title,
    icon: Icon,
    children,
  }: {
    id: string;
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <div className="mb-6 border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {expandedSections[id] ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      {expandedSections[id] && (
        <div className="p-4 bg-background border-t border-border">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we
              collect, use, and protect your personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("information-collection")}
              >
                Information Collection
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("use-of-information")}
              >
                Use of Information
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("data-protection")}
              >
                Data Protection
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("user-rights")}
              >
                Your Rights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-muted-foreground">
                SecurePrimeDex Digital Agency ("we," "us," or "our") is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website, use our services, or
                interact with us in other ways.
              </p>
            </div>

            <Section
              id="information-collection"
              title="Information We Collect"
              icon={Eye}
            >
              <div className="space-y-4">
                <p>
                  We collect several types of information from and about users
                  of our website, including:
                </p>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground mb-3">
                    When you fill out forms on our website (such as contact
                    forms, consultation requests, or project inquiries), we may
                    collect personal information such as:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>
                      Name and contact information (email address, phone number)
                    </li>
                    <li>Company name and job title</li>
                    <li>Business information and project requirements</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">
                    Automatically Collected Information
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    When you visit our website, our servers automatically
                    collect certain information, including:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring websites and search terms</li>
                  </ul>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">
                    Cookies and Tracking Technologies
                  </h3>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to track
                    activity on our website and hold certain information. You
                    can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent. However, if you do not
                    accept cookies, you may not be able to use some portions of
                    our Service.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="use-of-information"
              title="How We Use Your Information"
              icon={Globe}
            >
              <div className="space-y-4">
                <p>
                  We use the information we collect for various purposes,
                  including:
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>
                    To process and fulfill your requests for consultations and
                    services
                  </li>
                  <li>
                    To communicate with you about your inquiries and our
                    services
                  </li>
                  <li>
                    To improve our website and services based on user feedback
                  </li>
                  <li>
                    To analyze usage patterns and optimize our website
                    performance
                  </li>
                  <li>
                    To send you marketing communications (with your consent)
                  </li>
                  <li>
                    To comply with legal obligations and protect our rights
                  </li>
                </ul>

                <p className="text-muted-foreground">
                  We will not use your information for purposes other than those
                  described in this Privacy Policy without obtaining your prior
                  consent.
                </p>
              </div>
            </Section>

            <Section id="data-protection" title="Data Security" icon={Lock}>
              <div className="space-y-4">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. These measures
                  include:
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>
                    Encryption of sensitive data during transmission and storage
                  </li>
                  <li>Secure servers and hosting environments</li>
                  <li>
                    Regular security assessments and vulnerability testing
                  </li>
                  <li>
                    Restricted access to personal information to authorized
                    personnel only
                  </li>
                  <li>Employee training on data protection practices</li>
                </ul>

                <p className="text-muted-foreground">
                  However, no method of transmission over the Internet or method
                  of electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your personal
                  information, we cannot guarantee its absolute security.
                </p>
              </div>
            </Section>

            <Section
              id="data-sharing"
              title="Sharing of Information"
              icon={Server}
            >
              <div className="space-y-4">
                <p>
                  We may share your personal information in the following
                  circumstances:
                </p>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Service Providers</h3>
                  <p className="text-muted-foreground">
                    We may share your information with third-party service
                    providers who perform services on our behalf, such as
                    website hosting, data analysis, payment processing, and
                    email communication. These service providers have access to
                    your personal information only to perform these tasks on our
                    behalf and are obligated not to disclose or use it for any
                    other purpose.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Legal Requirements</h3>
                  <p className="text-muted-foreground">
                    We may disclose your personal information if required by law
                    or in response to valid requests by public authorities
                    (e.g., a court or a government agency).
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Business Transfers</h3>
                  <p className="text-muted-foreground">
                    If we are involved in a merger, acquisition, or sale of all
                    or a portion of our assets, your personal information may be
                    transferred as part of that transaction. We will notify you
                    via email and/or a prominent notice on our website of any
                    change in ownership or use of your personal information.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="cookies"
              title="Cookies and Tracking Technologies"
              icon={Globe}
            >
              <div className="space-y-4">
                <p>
                  Our website uses cookies to enhance your experience and
                  collect information about your use of our website. Cookies are
                  small text files that are placed on your computer or device
                  when you visit a website.
                </p>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">
                    Types of Cookies We Use
                  </h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> Necessary for the
                      website to function properly
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how
                      visitors interact with our website
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> Remember your
                      preferences and settings
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to track visitors
                      across websites to display relevant advertisements
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground">
                  You can manage your cookie preferences through your browser
                  settings. However, disabling certain cookies may affect the
                  functionality and performance of our website.
                </p>
              </div>
            </Section>

            <Section
              id="user-rights"
              title="Your Data Protection Rights"
              icon={Shield}
            >
              <div className="space-y-4">
                <p>
                  You have certain rights under applicable data protection laws.
                  These rights include:
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>
                    <strong>Right to Access:</strong> Request copies of your
                    personal information
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request correction
                    of inaccurate information
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your
                    personal information
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Request
                    limitation of how your information is used
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Request transfer
                    of your information to another service
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing of
                    your personal information
                  </li>
                </ul>

                <p className="text-muted-foreground">
                  To exercise these rights, please contact us using the contact
                  information provided below. We will respond to your request in
                  accordance with applicable laws.
                </p>
              </div>
            </Section>

            <Section
              id="international-transfers"
              title="International Data Transfers"
              icon={Globe}
            >
              <div className="space-y-4">
                <p>
                  Your information may be transferred to and maintained on
                  computers and servers located outside of your state, province,
                  country, or other governmental jurisdiction where data
                  protection laws may differ from those of your jurisdiction.
                </p>

                <p className="text-muted-foreground">
                  If you are located outside the United States and choose to
                  provide information to us, please note that we transfer the
                  information, including personal information, to the United
                  States and process it there. Your consent to this Privacy
                  Policy followed by your submission of such information
                  represents your agreement to that transfer.
                </p>
              </div>
            </Section>

            <Section id="data-retention" title="Data Retention" icon={Server}>
              <div className="space-y-4">
                <p>
                  We will retain your personal information only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use your information to the extent
                  necessary to comply with our legal obligations, resolve
                  disputes, and enforce our policies.
                </p>

                <p className="text-muted-foreground">
                  The retention period depends on the type of information and
                  the purpose for which it is collected. Generally, we retain
                  client information for the duration of our business
                  relationship and for a period after termination as required by
                  law or for legitimate business purposes.
                </p>
              </div>
            </Section>

            <Section
              id="children-privacy"
              title="Children's Privacy"
              icon={Shield}
            >
              <div className="space-y-4">
                <p>
                  Our website is not intended for use by children under the age
                  of 13. We do not knowingly collect personal information from
                  children under 13. If you are a parent or guardian and you are
                  aware that your child has provided us with personal
                  information, please contact us.
                </p>

                <p className="text-muted-foreground">
                  If we become aware that we have collected personal information
                  from children without verification of parental consent, we
                  take steps to remove that information from our servers.
                </p>
              </div>
            </Section>

            <Section
              id="changes-policy"
              title="Changes to This Privacy Policy"
              icon={Globe}
            >
              <div className="space-y-4">
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Effective Date" at the top.
                </p>

                <p className="text-muted-foreground">
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>
            </Section>

            <Section id="contact" title="Contact Us" icon={Server}>
              <div className="space-y-4">
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold">SecurePrimeDex Digital Agency</p>
                  <p className="text-muted-foreground">
                    Email: privacy@secureprimedex.com
                  </p>
                  <p className="text-muted-foreground">
                    Phone: +1 (555) 123-4567
                  </p>
                  <p className="text-muted-foreground">
                    Address: 123 Digital Avenue, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
