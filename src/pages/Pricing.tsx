import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "Free",
      period: "14 days",
      description: "Perfect for getting started with AI-powered trading analysis",
      features: [
        "Up to 10 trade entries",
        "Basic AI analysis",
        "Chart screenshot upload",
        "Performance insights",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro Monthly",
      price: "$29",
      period: "per month",
      description: "Full access to all features for serious traders",
      features: [
        "Unlimited trade entries",
        "Advanced AI analysis",
        "TradingView integration",
        "Real-time analytics",
        "Custom reports",
        "Priority support",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Pro Annual",
      price: "$290",
      period: "per year",
      originalPrice: "$348",
      discount: "Save $58",
      description: "Best value for committed traders with 2 months free",
      features: [
        "Everything in Pro Monthly",
        "Advanced trading insights",
        "Custom integrations",
        "Dedicated account manager",
        "Early access to new features",
        "Priority customer support"
      ],
      cta: "Get Started",
      popular: false
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
              Simple and{' '}
              <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto mb-12">
              Choose the perfect plan for your trading journey. Start free, upgrade when ready.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`premium-card premium-hover animate-scale-in relative ${
                  plan.popular ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="line-through">{plan.originalPrice}</span>
                        <span className="text-accent ml-2">{plan.discount}</span>
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => window.location.href = '/auth'}
                    className={`w-full py-3 ${
                      plan.popular ? 'professional-button' : 'accent-button'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-xl">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. No long-term commitments or cancellation fees.
                </p>
              </CardContent>
            </Card>
            
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-xl">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </CardContent>
            </Card>
            
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-xl">Is there a refund policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee for all paid plans. Try risk-free!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;