
import React from 'react';
import { BookOpen, Brain, BarChart3, Target, Lightbulb, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: "Smart Trade Journal",
      description: "Log trades with intelligent auto-categorization and pattern recognition for comprehensive tracking."
    },
    {
      icon: <Brain className="w-10 h-10 text-accent" />,
      title: "AI Strategy Analysis",
      description: "Advanced algorithms analyze your strategies and suggest optimizations based on market conditions."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
      title: "Performance Analytics",
      description: "Deep dive into your trading metrics with interactive charts and trend analysis."
    },
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      title: "Goal Tracking",
      description: "Set and monitor trading goals with milestone tracking and progress visualization."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: "Insight Generation",
      description: "Receive personalized insights and recommendations to improve your trading approach."
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis with position sizing recommendations and exposure warnings."
    }
  ];

  return (
    <section id="features" className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-24 animate-fade-in space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Features Built for <span className="gradient-text">Trading Excellence</span>
          </h2>
          <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto">
            Every feature is designed with one goal: to help you become a consistently profitable trader 
            through intelligent analysis and systematic improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group premium-card rounded-3xl p-10 premium-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8 p-4 bg-card/50 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="body-text leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Premium feature highlight */}
        <div className="mt-32 premium-card rounded-3xl p-16 text-center animate-fade-in premium-glow">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Real-time AI Coaching
          </h3>
          <p className="subheadline-text text-muted-foreground mb-12 max-w-3xl mx-auto">
            Get instant feedback and suggestions as you trade, helping you make better decisions in real-time.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center px-8 py-4 subtle-border bg-card/30 rounded-full text-accent font-semibold text-lg tracking-wide">
              <Brain className="w-6 h-6 mr-3" />
              Powered by Advanced ML Models
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
