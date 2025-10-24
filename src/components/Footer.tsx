import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">SecurePrimeDex</h3>
              <p className="text-accent mb-4">Digital Agency</p>
              <p className="text-sm text-white/80">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/inquiry-form"
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    Inquiry Form
                  </a>
                </li>
                <li>
                  <a
                    href="/free-consultation"
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    Free Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">info@secureprimedex.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">123 Digital Avenue, Tech City</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://facebook.com/secureprimedex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/secureprimedex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/secureprimedex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/secureprimedex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>© 2025 SecurePrimeDex Digital Agency. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
