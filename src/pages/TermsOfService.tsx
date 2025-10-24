import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Shield,
  Users,
  CreditCard,
  AlertCircle,
} from "lucide-react";

const TermsOfService = () => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    acceptance: true,
    services: false,
    "client-responsibilities": false,
    payments: false,
    "intellectual-property": false,
    confidentiality: false,
    warranty: false,
    "limitation-liability": false,
    termination: false,
    "governing-law": false,
    changes: false,
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              These terms and conditions outline the rules and regulations for
              the use of SecurePrimeDex Digital Agency's services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("services")}
              >
                Our Services
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("payments")}
              >
                Payments
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("intellectual-property")}
              >
                Intellectual Property
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection("limitation-liability")}
              >
                Limitation of Liability
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-muted-foreground">
                Welcome to SecurePrimeDex Digital Agency. These Terms of Service
                ("Terms") govern your use of our website, services, and products
                (collectively, the "Services"). By accessing or using our
                Services, you agree to be bound by these Terms.
              </p>
            </div>

            <Section
              id="acceptance"
              title="Acceptance of Terms"
              icon={FileText}
            >
              <div className="space-y-4">
                <p>
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement. In
                  addition, when using this website's particular services, you
                  shall be subject to any posted guidelines or rules applicable
                  to such services.
                </p>

                <p className="text-muted-foreground">
                  If you do not agree to these Terms, you may not access or use
                  the Services. These Terms constitute a legally binding
                  agreement made between you, the user, and SecurePrimeDex
                  Digital Agency.
                </p>
              </div>
            </Section>

            <Section id="services" title="Our Services" icon={Users}>
              <div className="space-y-4">
                <p>
                  SecurePrimeDex Digital Agency provides a range of digital
                  services including, but not limited to:
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>Web Development and Design</li>
                  <li>Mobile Application Development</li>
                  <li>UI/UX Design Services</li>
                  <li>Digital Marketing Solutions</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Branding and Identity Design</li>
                  <li>E-commerce Solutions</li>
                  <li>Consultation Services</li>
                </ul>

                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue any
                  part of our Services at any time, with or without notice to
                  you. We will not be liable to you or any third party for any
                  modification, suspension, or discontinuation of the Services.
                </p>
              </div>
            </Section>

            <Section
              id="client-responsibilities"
              title="Client Responsibilities"
              icon={Users}
            >
              <div className="space-y-4">
                <p>
                  As a client of SecurePrimeDex Digital Agency, you agree to the
                  following responsibilities:
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>
                    Provide accurate and complete information necessary for the
                    delivery of our services
                  </li>
                  <li>
                    Provide timely feedback and approvals during the project
                    development process
                  </li>
                  <li>
                    Provide necessary content, materials, and resources in a
                    timely manner
                  </li>
                  <li>
                    Ensure that all materials provided to us do not infringe on
                    any third-party rights
                  </li>
                  <li>
                    Maintain the security of your account credentials and notify
                    us immediately of any unauthorized use
                  </li>
                  <li>
                    Comply with all applicable laws and regulations in
                    connection with your use of our services
                  </li>
                </ul>

                <p className="text-muted-foreground">
                  Failure to fulfill these responsibilities may result in
                  delays, additional costs, or termination of the service
                  agreement.
                </p>
              </div>
            </Section>

            <Section id="payments" title="Payments and Fees" icon={CreditCard}>
              <div className="space-y-4">
                <p>Our payment terms and conditions are as follows:</p>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Payment Schedule</h3>
                  <p className="text-muted-foreground mb-3">
                    Payment schedules will be outlined in the project proposal
                    or agreement. Typically, we require an initial deposit
                    before work begins, with subsequent payments tied to project
                    milestones.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Late Payments</h3>
                  <p className="text-muted-foreground mb-3">
                    Payments not received within the specified timeframe may be
                    subject to late fees of 1.5% per month or the maximum
                    allowed by law, whichever is less. We reserve the right to
                    suspend work on projects with overdue payments.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Additional Costs</h3>
                  <p className="text-muted-foreground">
                    Any additional work requested beyond the scope of the
                    original agreement will be subject to additional fees. We
                    will provide an estimate for any additional work before
                    proceeding.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="intellectual-property"
              title="Intellectual Property Rights"
              icon={FileText}
            >
              <div className="space-y-4">
                <p>
                  Intellectual property rights related to our services are
                  governed by the following principles:
                </p>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Our Materials</h3>
                  <p className="text-muted-foreground mb-3">
                    All materials, content, and intellectual property created by
                    SecurePrimeDex Digital Agency as part of our services remain
                    our property until full payment has been received. Upon full
                    payment, ownership of the final deliverables transfers to
                    you, subject to the terms of our agreement.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Client Materials</h3>
                  <p className="text-muted-foreground mb-3">
                    You retain all rights to any materials, content, or
                    intellectual property you provide to us for use in
                    connection with our services. By providing such materials,
                    you grant us a license to use, modify, and reproduce them as
                    necessary to provide our services.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Third-Party Materials</h3>
                  <p className="text-muted-foreground">
                    We may use third-party materials, such as stock images,
                    fonts, or software, in the course of providing our services.
                    We will ensure that our use of such materials complies with
                    applicable licenses and will transfer any necessary licenses
                    to you upon completion of the project.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="confidentiality" title="Confidentiality" icon={Shield}>
              <div className="space-y-4">
                <p>
                  Both parties agree to maintain the confidentiality of all
                  proprietary information exchanged during the course of our
                  business relationship:
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>
                    We will not disclose any confidential information provided
                    by you to third parties without your consent
                  </li>
                  <li>
                    You will not disclose any confidential information about our
                    business processes, strategies, or pricing to third parties
                  </li>
                  <li>
                    Confidential information includes, but is not limited to,
                    business plans, financial information, technical data, and
                    trade secrets
                  </li>
                  <li>
                    This confidentiality obligation survives the termination of
                    our business relationship
                  </li>
                </ul>

                <p className="text-muted-foreground">
                  We may disclose confidential information if required by law or
                  court order, provided we give you reasonable notice of such
                  disclosure, if legally permissible.
                </p>
              </div>
            </Section>

            <Section
              id="warranty"
              title="Warranty and Disclaimer"
              icon={AlertCircle}
            >
              <div className="space-y-4">
                <p>
                  We warrant that our services will be performed in a
                  professional and workmanlike manner, consistent with industry
                  standards. However, we make the following disclaimers:
                </p>

                <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                  <li>
                    Our services are provided "as is" and "as available" without
                    warranties of any kind, either express or implied
                  </li>
                  <li>
                    We do not warrant that our services will be uninterrupted,
                    error-free, or completely secure
                  </li>
                  <li>
                    We do not warrant that the results obtained from the use of
                    our services will meet your expectations or requirements
                  </li>
                  <li>
                    We make no warranties regarding the performance or
                    functionality of any third-party services or products
                  </li>
                </ul>

                <p className="text-muted-foreground">
                  Some jurisdictions do not allow the exclusion of implied
                  warranties, so some of these exclusions may not apply to you.
                </p>
              </div>
            </Section>

            <Section
              id="limitation-liability"
              title="Limitation of Liability"
              icon={AlertCircle}
            >
              <div className="space-y-4">
                <p>
                  In no event shall SecurePrimeDex Digital Agency, its
                  directors, employees, or affiliates be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, lost profits, lost
                  data, or business interruption, arising out of or in
                  connection with our services.
                </p>

                <p className="text-muted-foreground">
                  Our total liability for any claim arising out of or relating
                  to these Terms or our services shall not exceed the amount
                  paid by you for the services giving rise to the claim during
                  the twelve (12) months preceding the claim.
                </p>

                <p className="text-muted-foreground">
                  Some jurisdictions do not allow the limitation or exclusion of
                  liability for consequential or incidental damages, so some of
                  these limitations may not apply to you.
                </p>
              </div>
            </Section>

            <Section id="termination" title="Termination" icon={FileText}>
              <div className="space-y-4">
                <p>
                  Either party may terminate the service agreement under the
                  following conditions:
                </p>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Termination by Client</h3>
                  <p className="text-muted-foreground mb-3">
                    You may terminate the agreement at any time by providing
                    written notice to us. If you terminate the agreement, you
                    will be responsible for paying for all services rendered up
                    to the date of termination, plus any cancellation fees
                    specified in our agreement.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">
                    Termination by SecurePrimeDex
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    We may terminate the agreement if you breach any material
                    term of these Terms and fail to cure such breach within
                    thirty (30) days of receiving written notice of the breach.
                    We may also terminate the agreement if you engage in any
                    illegal or fraudulent activities in connection with our
                    services.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary/20">
                  <h3 className="font-semibold mb-2">Effects of Termination</h3>
                  <p className="text-muted-foreground">
                    Upon termination of the agreement, all rights and
                    obligations of both parties shall cease, except for any
                    provisions that expressly survive termination, such as
                    payment obligations, confidentiality provisions, and
                    limitation of liability clauses.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="governing-law" title="Governing Law" icon={FileText}>
              <div className="space-y-4">
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction in which SecurePrimeDex
                  Digital Agency is headquartered, without regard to its
                  conflict of law principles.
                </p>

                <p className="text-muted-foreground">
                  Any legal action of whatever nature brought by either you or
                  us (collectively, the "Parties" and individually, a "Party")
                  shall be commenced or prosecuted in the state and federal
                  courts located in that jurisdiction, and the Parties hereby
                  consent to, and waive all defenses of lack of personal
                  jurisdiction and forum non conveniens with respect to venue
                  and jurisdiction in such state and federal courts.
                </p>
              </div>
            </Section>

            <Section id="changes" title="Changes to Terms" icon={FileText}>
              <div className="space-y-4">
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will try to provide at least 30 days notice prior to any new
                  terms taking effect. What constitutes a material change will
                  be determined at our sole discretion.
                </p>

                <p className="text-muted-foreground">
                  By continuing to access or use our Services after those
                  revisions become effective, you agree to be bound by the
                  revised terms. If you do not agree to the new terms, you are
                  no longer authorized to use the Services.
                </p>
              </div>
            </Section>

            <Section id="contact" title="Contact Us" icon={Users}>
              <div className="space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-semibold">SecurePrimeDex Digital Agency</p>
                  <p className="text-muted-foreground">
                    Email: legal@secureprimedex.com
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

export default TermsOfService;
