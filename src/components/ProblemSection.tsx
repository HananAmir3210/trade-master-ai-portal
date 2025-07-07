
import React from 'react';
import { AlertTriangle, TrendingDown, Brain, Target } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-400" />,
      title: "Inconsistent Performance",
      description: "Without proper tracking, traders repeat mistakes and struggle to identify what actually works."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
      title: "Emotional Decision Making",
      description: "Fear and greed drive poor decisions. Most traders lack awareness of their psychological patterns."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "No Strategic Evolution",
      description: "Static strategies fail in dynamic markets. Traders need adaptive, data-driven approach to improvement."
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Lack of Systematic Review",
      description: "Most traders skip the crucial step of analyzing their trades, missing valuable insights for growth."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why 90% of Traders <span className="text-red-400">Fail</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The harsh reality: Most traders lack the systematic approach needed for consistent profitability. 
            Here's what's holding them back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-dark-card rounded-2xl p-8 text-center border border-gray-800 hover:border-red-400/50 transition-all duration-300 animate-scale-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex justify-center">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {problem.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-semibold text-gray-300">
            It's time to <span className="gradient-text">break the cycle</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
