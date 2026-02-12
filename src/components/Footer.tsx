import { Linkedin, Mail } from "lucide-react";
import icon from "@/assets/icon.png";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "Digital Workplace Services", href: "#digital-workplace-services" },
      { name: "Service Management", href: "#service-management" },
      { name: "Cloud Consulting", href: "#cloud-consulting" },
      { name: "OaaS", href: "#oaas" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src={icon} alt="infoSavi Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Strategic IT consulting for forward-thinking enterprises.
            </p>
            <p className="text-background/60 text-xs leading-relaxed mb-6">
              WeWork  Vaishnavi Signature, Outer Ring Road, Bellandur, Bangalore
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/infosavi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@infosavi.com"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2025 infoSavi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
