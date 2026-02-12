import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const differentiators = [
  "End-to-end IT service management expertise",
  "Cloud-first consulting approach",
  "Customized solutions for hybrid workplaces",
  "Proven track record with retail & enterprise clients",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-corporate-lg">
              <img
                src={aboutImage}
                alt="infoSavi office"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-xl shadow-corporate-lg hidden lg:block">
              <p className="text-4xl font-bold mb-2">Est.</p>
              <p className="text-sm opacity-90">2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-4">
              About infoSavi
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Your Partner in IT Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2025, infoSavi is a service-based IT consulting startup
              focused on helping organizations modernize their operations,
              embrace cloud solutions, and deliver exceptional workplace
              experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Based out of WeWork - Vaishnavi Signature, Bellandur, Bangalore,
              our team brings together deep expertise in digital workplace
              services, service management, cloud consulting, and retail IT
              operations.
            </p>

            {/* Differentiators */}
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
