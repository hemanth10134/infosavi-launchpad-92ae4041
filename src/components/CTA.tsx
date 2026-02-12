import { ContactForm } from "@/components/ContactForm";
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Ready to Transform Your Business?
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Partner with InfoSavi to unlock your organization's full potential.
              Our team of experts is ready to help you navigate challenges and
              seize opportunities.
            </p>

            <div className="flex gap-4 text-white/60 text-sm">
              <p>Or email us directly at <a href="mailto:contact@infosavi.com" className="text-white hover:underline">contact@infosavi.com</a></p>
            </div>
          </div>

          <div className="animate-fade-in-up delay-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
