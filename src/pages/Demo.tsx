import React from 'react';
import { Play, ArrowRight, BarChart3, Brain, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Demo = () => {
  const demoFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Trade Analysis",
      description: "Watch how AI analyzes your trading patterns"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Insights",
      description: "See AI-powered recommendations in action"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Experience real-time performance monitoring"
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
              Experience TradeMaster AI{' '}
              <span className="gradient-text">in Action</span>
            </h1>
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto mb-12">
              See how our AI-powered platform transforms trading analysis and strategy development.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto container-padding">
          <Card className="premium-card overflow-hidden animate-scale-in">
            <div className="relative aspect-video bg-secondary/50 flex items-center justify-center">
              {/* Placeholder for demo video */}
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="w-12 h-12 text-primary ml-1" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Interactive Demo</h3>
                <p className="text-muted-foreground">
                  Experience TradeMaster AI's powerful features in this comprehensive walkthrough
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Demo Features */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What You'll See in the Demo</h2>
            <p className="body-text max-w-2xl mx-auto">
              Our interactive demo showcases the key features that make TradeMaster AI essential for modern traders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="premium-card premium-hover animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Steps */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding">
          <Card className="premium-card p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Try Our Live Demo</h2>
              <p className="body-text">
                Experience TradeMaster AI's capabilities with sample trading data and real AI analysis.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Upload Trading Data</h3>
                  <p className="text-muted-foreground">
                    See how easy it is to import your trades and charts for analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                  <p className="text-muted-foreground">
                    Watch our AI analyze patterns and provide intelligent insights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
                  <p className="text-muted-foreground">
                    Receive personalized strategy suggestions and performance insights.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="premium-card p-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Try TradeMaster AI?
            </h2>
            <p className="body-text mb-8">
              Start your free trial today and experience the power of AI-driven trading analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/auth'}
                className="professional-button px-8 py-4 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 text-lg border-border hover:bg-primary/10"
              >
                Schedule Demo Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;