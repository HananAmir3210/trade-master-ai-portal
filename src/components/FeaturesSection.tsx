
import React from 'react';
import { BookOpen, Brain, BarChart3, Target, Lightbulb, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-white/40" />,
      title: "Smart Trade Journal",
      description: "Log trades with intelligent auto-categorization and pattern recognition for comprehensive tracking."
    },
    {
      icon: <Brain className="w-8 h-8 text-white/40" />,
      title: "AI Strategy Analysis",
      description: "Advanced algorithms analyze your strategies and suggest optimizations based on market conditions."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white/40" />,
      title: "Performance Analytics",
      description: "Deep dive into your trading metrics with interactive charts and trend analysis."
    },
    {
      icon: <Target className="w-8 h-8 text-white/40" />,
      title: "Goal Tracking",
      description: "Set and monitor trading goals with milestone tracking and progress visualization."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white/40" />,
      title: "Insight Generation",
      description: "Receive personalized insights and recommendations to improve your trading approach."
    },
    {
      icon: <Shield className="w-8 h-8 text-white/40" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis with position sizing recommendations and exposure warnings."
    }
  ];

  return (
    <section id="features" className="section-spacing">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Features Built for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="subheadline-text max-w-3xl mx-auto">
            Every feature designed to help you become a consistently profitable trader through intelligent analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group premium-card rounded-2xl p-8 premium-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-3 glass-effect rounded-xl w-fit group-hover:bg-white/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-4 text-white group-hover:text-white/90 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="body-text leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
