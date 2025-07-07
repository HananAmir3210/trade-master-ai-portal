
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      period: "month",
      description: "Perfect for individual traders getting started",
      features: [
        "Up to 100 trades per month",
        "Basic AI insights",
        "Performance analytics",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "79",
      period: "month",
      description: "For serious traders who want advanced features",
      features: [
        "Unlimited trades",
        "Advanced AI analysis",
        "Custom strategy builder",
        "Real-time coaching",
        "Priority support",
        "API integrations",
        "Advanced risk management"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "149",
      period: "month",
      description: "For professional prop firm traders",
      features: [
        "Everything in Professional",
        "Multi-account management",
        "Team collaboration",
        "Custom AI models",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Trading Edge</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Start with our free trial, then choose the plan that matches your trading ambitions. 
            All plans include our core AI features.
          </p>
          
          {/* Special offer banner */}
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium mb-8">
            <Star className="w-5 h-5 mr-2" />
            Early Bird: 50% off first 3 months
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-dark-card rounded-3xl p-8 border transition-all duration-300 animate-scale-in ${
                plan.popular 
                  ? 'border-primary glow-effect transform scale-105' 
                  : 'border-gray-800 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-dark px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 font-semibold ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-dark glow-effect'
                    : 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-dark'
                }`}
              >
                {plan.popular ? (
                  <>
                    <Zap className="mr-2 w-5 h-5" />
                    Get Started Now
                  </>
                ) : (
                  'Choose Plan'
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 font-medium">
            <Check className="w-5 h-5 mr-2" />
            30-day money-back guarantee
          </div>
          <p className="text-gray-400 mt-4">
            Try TradeMaster AI risk-free. If you're not completely satisfied, get a full refund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
