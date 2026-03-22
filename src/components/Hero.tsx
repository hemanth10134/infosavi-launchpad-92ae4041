import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional business team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-muted-foreground text-base md:text-sm font-medium uppercase tracking-widest mb-4 animate-fade-in-up">
              IT Consulting &amp; Services
            </p>
            <h1 className="text-5xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animate-delay-100">
              Transform Your
              <span className="block text-primary mt-2">Digital Enterprise</span>
            </h1>
            <p className="text-xl md:text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              We partner with forward-thinking organizations to deliver digital
              workplace solutions, cloud consulting, and managed IT services
              that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-300">
              <Button
                className="bg-primary hover:bg-purple-light text-primary-foreground px-8 py-6 text-lg font-medium group w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg font-medium w-full sm:w-auto"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right side - Empty for image to show through */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
