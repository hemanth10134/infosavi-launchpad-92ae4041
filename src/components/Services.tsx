import { TrendingUp, Users, Shield, BarChart3, Lightbulb, Globe } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Strategy Consulting",
    description:
      "Develop winning strategies that position your organization for long-term success in evolving markets.",
  },
  {
    icon: Users,
    title: "Organizational Design",
    description:
      "Optimize your workforce structure and capabilities to drive efficiency and innovation.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate risks to protect your business and ensure regulatory compliance.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Leverage data-driven insights to measure, monitor, and improve business performance.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description:
      "Navigate technological change and unlock new value through strategic digital initiatives.",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Enter new markets with confidence through comprehensive market research and entry strategies.",
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
            Comprehensive Business Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver tailored consulting services that address your most
            pressing business challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;