import { Monitor, Settings, Cloud, Package } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useEffect, useState } from "react";

type Service = {
  id: string;
  icon: any;
  title: string;
  points: string[];
};

const services: Service[] = [
  {
    id: "digital-workplace-services",
    icon: Monitor,
    title: "Digital Workplace Services",
    points: [
      "Our Workplace Services helps organizations simplify employees’ workplace experiences and build a robust enterprise by digitizing hybrid workplaces.",
      "Our centralized platform for device and patch management enables robust and flexible workplace.",
      "Customized solutions to equip users with anytime anywhere access to device and access to information that’s secured by basic principles of Zero Trust.",
    ],
  },

  {
    id: "service-management",
    icon: Settings,
    title: "Service Management",
    points: [
      "In a constant evolving enterprise service management landscape, improving productivity and delivering an enhanced service experience is need of the hour.",
      "With our suite of offerings, enterprises can leap forward in the area of service management delight stakeholders.",
      "IT and business can access the data and workflows seamlessly to work effectively.",
      "Address end-customer problems with ease.",
    ],
  },

  {
    id: "cloud-consulting",
    icon: Cloud,
    title: "Cloud Consulting",
    points: [
      "Assess – Evaluate existing infrastructure, applications along with our clients long term vision and needs to facilitate seamless transition to cloud.",
      "Design – Design and develop services of all scales by modernization and transition to cloud solutions that boost reliability and flexibility.",
      "Governance – Establish an exhaustive matrix to enable role based management and governance of the service and operations.",
    ],
  },

  {
    id: "oaas",
    icon: Package,
    title: "OaaS",
    points: [
      "Outlet as a Service is a comprehensive solution for the business where we setup the IT infrastructure needed for each outlet and own the maintenance as part of managed service.",
      "Our expertise in managing IT for Retail stores as an complete package is a game changer for small and medium enterprises.",
      "This will let entities to focus on the business and have a seamless and secure IT.",
    ],
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveId(hash);
    };

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="services" className="relative">
      <AuroraBackground className="!justify-start !items-start">
        <div className="container mx-auto px-6 lg:px-8 py-24 relative z-10 w-full">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-brand-purple mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const isActive = activeId === service.id;

              return (
                <div
                  id={service.id}
                  key={service.title}
                  className={`relative h-full rounded-[1.25rem] border-[0.75px] bg-background/50 backdrop-blur-sm p-2 md:rounded-[1.5rem] md:p-3 animate-fade-in-up animate-delay-${(index + 1) * 100} transition-all duration-500 scroll-mt-32 hover:-translate-y-2 hover:shadow-2xl
                    ${isActive ? "ring-2 ring-brand-purple shadow-[0_0_30px_rgba(168,85,247,0.5)] scale-[1.02] -translate-y-2" : "border-border hover:border-brand-purple/50"}
                  `}
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                  />
                  <div className={`relative flex h-full flex-col justify-start overflow-hidden rounded-xl border-[0.75px] bg-white/50 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 md:p-6
                    ${isActive ? "bg-white/80 border-brand-purple/30" : "bg-white/50 border-transparent hover:shadow-xl"}
                  `}>
                    <div className="relative flex flex-col justify-start gap-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-2 transition-colors duration-300
                        ${isActive ? "bg-brand-purple/20" : "bg-purple-50 group-hover:bg-brand-purple/10"}
                      `}>
                        <service.icon className="h-7 w-7 text-brand-purple" />
                      </div>

                      <div className="space-y-3">
                        {/* Title */}
                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300
                          ${isActive ? "text-brand-purple" : "text-foreground group-hover:text-brand-purple"}
                        `}>
                          {service.title}
                        </h3>

                        {/* Bullet Points */}
                        <ul className="space-y-3">
                          {service.points.map((point, ptIndex) => (
                            <li
                              key={ptIndex}
                              className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Services;
