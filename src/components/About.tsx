import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const differentiators = [
  "Deep industry expertise across sectors",
  "Data-driven approach to problem solving",
  "Collaborative partnership model",
  "Proven track record of measurable results",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-corporate-lg">
              <img
                src={aboutImage}
                alt="InfoSavi corporate headquarters"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-xl shadow-corporate-lg hidden lg:block">
              <p className="text-4xl font-bold mb-2">25+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-4">
              About InfoSavi
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Your Partner in Strategic Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over two decades, InfoSavi has been at the forefront of
              management consulting, helping organizations navigate complexity
              and achieve sustainable growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of seasoned professionals brings together diverse
              expertise from leading global firms, offering you best-in-class
              strategic advisory services tailored to your unique challenges.
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