
import React from 'react';
import { AlertTriangle, TrendingDown, Brain, Target } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-10 h-10 text-destructive" />,
      title: "Inconsistent Performance",
      description: "Without proper tracking, traders repeat mistakes and struggle to identify what actually works."
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-destructive" />,
      title: "Emotional Decision Making",
      description: "Fear and greed drive poor decisions. Most traders lack awareness of their psychological patterns."
    },
    {
      icon: <Brain className="w-10 h-10 text-destructive" />,
      title: "No Strategic Evolution",
      description: "Static strategies fail in dynamic markets. Traders need adaptive, data-driven approach to improvement."
    },
    {
      icon: <Target className="w-10 h-10 text-destructive" />,
      title: "Lack of Systematic Review",
      description: "Most traders skip the crucial step of analyzing their trades, missing valuable insights for growth."
    }
  ];

  return (
    <section className="section-spacing bg-background relative">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-24 animate-fade-in space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Why 90% of Traders <span className="text-destructive">Fail</span>
          </h2>
          <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto">
            The harsh reality: Most traders lack the systematic approach needed for consistent profitability. 
            Here's what's holding them back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="premium-card rounded-3xl p-10 text-center premium-hover animate-scale-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-8 flex justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-accent transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="body-text leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <p className="text-3xl md:text-4xl font-semibold text-muted-foreground">
            It's time to <span className="gradient-text">break the cycle</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
