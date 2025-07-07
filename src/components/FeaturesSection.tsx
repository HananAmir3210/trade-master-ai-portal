
import React from 'react';
import { BookOpen, Brain, BarChart3, Target, Lightbulb, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Smart Trade Journal",
      description: "Log trades with intelligent auto-categorization and pattern recognition for comprehensive tracking."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Strategy Analysis",
      description: "Advanced algorithms analyze your strategies and suggest optimizations based on market conditions."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Performance Analytics",
      description: "Deep dive into your trading metrics with interactive charts and trend analysis."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Goal Tracking",
      description: "Set and monitor trading goals with milestone tracking and progress visualization."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Insight Generation",
      description: "Receive personalized insights and recommendations to improve your trading approach."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis with position sizing recommendations and exposure warnings."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-dark-lighter to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Features Built for <span className="gradient-text">Trading Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature is designed with one goal: to help you become a consistently profitable trader 
            through intelligent analysis and systematic improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-dark-card rounded-2xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-neon/10 rounded-3xl p-12 border border-primary/20 text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            Real-time AI Coaching
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Get instant feedback and suggestions as you trade, helping you make better decisions in real-time.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-primary/20 rounded-full border border-primary/30 text-primary font-medium">
              <Brain className="w-5 h-5 mr-2" />
              Powered by Advanced ML Models
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
