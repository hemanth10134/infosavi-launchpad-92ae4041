import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpeg";


import { motion } from "motion/react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBg})` }}
        animate={{
          scale: [1, 1.1, 1],
          backgroundPosition: ["50% 50%", "50% 40%", "50% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8 z-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg text-white/80 leading-relaxed mb-10">
            Partner with InfoSavi to unlock your organization's full potential.
            Our team of experts is ready to help you navigate challenges and
            seize opportunities.
          </p>

          <a href="mailto:contact@infosavi.com">
            <Button className="bg-brand-purple text-white hover:bg-brand-purple-light px-8 py-6 text-base font-medium group transition-colors duration-300">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
