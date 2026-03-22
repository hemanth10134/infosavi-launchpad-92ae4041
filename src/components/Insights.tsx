import { ArrowRight } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const insights = [
  {
    category: "Industry Report",
    title: "The Future of Work: Trends Shaping 2026 and Beyond",
    excerpt:
      "Explore how AI, remote collaboration, and evolving workforce expectations are transforming the modern workplace.",
    date: "February 2026",
  },
  {
    category: "Case Study",
    title: "Digital Transformation in Financial Services",
    excerpt:
      "How a leading bank achieved 40% operational efficiency through strategic technology implementation.",
    date: "January 2026",
  },
  {
    category: "White Paper",
    title: "ESG Integration in Corporate Strategy",
    excerpt:
      "A comprehensive guide to embedding environmental, social, and governance principles into business operations.",
    date: "January 2026",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src={patternBg}
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 animate-fade-in">
          <div>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-4">
              Latest Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Thought Leadership
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-primary hover:text-navy-light transition-colors mt-4 md:mt-0 font-medium"
          >
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.title}
              className={`group bg-card rounded-xl p-8 shadow-corporate hover:shadow-corporate-lg transition-all duration-300 cursor-pointer animate-fade-in-delay-${Math.min(index + 1, 3)}`}
            >
              <p className="text-sm text-primary font-medium mb-4">
                {insight.category}
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {insight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {insight.excerpt}
              </p>
              <p className="text-sm text-muted-foreground">{insight.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;