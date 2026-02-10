import { Monitor, Headphones, Cloud, Store } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Digital Workplace Services",
    description:
      "Simplify employees' workplace experiences and build a robust enterprise by digitizing hybrid workplaces. Our centralized platform for device and patch management enables robust and flexible operations.",
    points: [
      "Centralized device & patch management",
      "Hybrid workplace digitization",
      "Zero Trust secured access",
      "Anytime, anywhere access to information",
    ],
  },
  {
    icon: Headphones,
    title: "Service Management",
    description:
      "In a constantly evolving enterprise service management landscape, improving productivity and delivering an enhanced service experience is the need of the hour.",
    points: [
      "Enhanced stakeholder delight",
      "Seamless data & workflow access",
      "End-customer problem resolution",
      "IT & business alignment",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Consulting",
    description:
      "Evaluate existing infrastructure and applications along with your long-term vision to facilitate seamless transitions, modernization, and governance on the cloud.",
    points: [
      "Assess — Evaluate & plan migration",
      "Design — Modernize & transition",
      "Govern — Role-based management",
      "Boost reliability & flexibility",
    ],
  },
  {
    icon: Store,
    title: "OaaS",
    description:
      "Our expertise in managing IT for Retail stores as a complete package is a game changer for small and medium enterprises looking to scale operations.",
    points: [
      "End-to-end retail IT management",
      "Complete packaged solution",
      "Scalable for SMEs",
      "Operational excellence",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-4">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver tailored IT consulting services that address your most
            pressing business challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card rounded-xl p-8 shadow-corporate hover:shadow-corporate-lg transition-shadow duration-300 animate-fade-in-delay-${Math.min(index + 1, 3)}`}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
