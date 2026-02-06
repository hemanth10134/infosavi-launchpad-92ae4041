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
          <div className="max-w-xl animate-fade-in-up">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-4">
              Strategic Consulting
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Transform Your
              <span className="block text-primary">Business Vision</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We partner with forward-thinking enterprises to drive sustainable
              growth, operational excellence, and digital transformation across
              industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-navy-light text-primary-foreground px-8 py-6 text-base font-medium group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base font-medium"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-semibold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-semibold text-foreground">25+</p>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-semibold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
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