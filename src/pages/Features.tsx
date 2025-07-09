import React from 'react';
import { ArrowRight, BarChart3, Camera, Brain, TrendingUp, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Trade Entry Tracking",
      description: "Comprehensive tracking of all your trades with detailed entry and exit points, lot sizes, and timestamps."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Screenshot Upload & Chart Analysis",
      description: "Upload trading charts and screenshots for AI-powered technical analysis and pattern recognition."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Feedback & Strategy Suggestions",
      description: "Get intelligent feedback on your trading decisions and personalized strategy recommendations."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "TradingView Integration",
      description: "Seamless integration with TradingView for advanced charting and real-time market data."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Performance Insights & Reports",
      description: "Detailed performance analytics, profit/loss tracking, and comprehensive trading reports."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Live trading analytics and real-time performance monitoring for immediate insights."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              Powerful Features for{' '}
              <span className="gradient-text">Smarter Trading</span>
            </h1>
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto mb-12">
              Discover the advanced capabilities that make TradeMaster AI the ultimate 
              trading companion for professional traders.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="premium-card premium-hover animate-scale-in border-border/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="premium-card p-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="body-text mb-8">
              Join thousands of traders who have already elevated their trading game with TradeMaster AI.
            </p>
            <Button 
              onClick={() => window.location.href = '/auth'}
              className="professional-button px-8 py-4 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;