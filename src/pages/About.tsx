import React from 'react';
import { ArrowRight, Target, Eye, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      bio: "Former quantitative trader with 10+ years at Goldman Sachs. Expert in algorithmic trading and AI applications in finance."
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-founder",
      bio: "AI/ML engineer with experience at Google DeepMind. Specializes in neural networks and trading algorithm development."
    },
    {
      name: "Marcus Thompson",
      role: "Head of Product",
      bio: "Former product lead at TradingView. Passionate about creating intuitive tools for professional traders."
    },
    {
      name: "Dr. Emily Watson",
      role: "Lead Data Scientist",
      bio: "PhD in Financial Mathematics from MIT. Expert in market microstructure and quantitative analysis."
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description: "To democratize advanced trading intelligence by making AI-powered analysis accessible to every trader, from beginners to professionals."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision",
      description: "A world where every trading decision is informed by intelligent analysis, helping traders achieve consistent profitability and growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Values",
      description: "Transparency, innovation, and trader-first design. We build tools that we would want to use in our own trading journey."
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
              Empowering Traders{' '}
              <span className="gradient-text">with AI</span>
            </h1>
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto mb-12">
              We're on a mission to transform trading through intelligent analysis and actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding">
          <Card className="premium-card p-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                TradeMaster AI was born from a simple frustration: even experienced traders struggle to 
                consistently analyze their performance and identify improvement opportunities. Traditional 
                trading journals are static, and most analysis tools lack the intelligence to provide 
                actionable insights.
              </p>
              <p>
                Our founders, with decades of combined experience in quantitative trading and AI research, 
                recognized that machine learning could transform how traders understand their strategies. 
                By analyzing patterns across thousands of trades, AI can identify subtle correlations and 
                trends that human analysis might miss.
              </p>
              <p>
                Today, TradeMaster AI serves thousands of traders worldwide, from retail investors to 
                institutional fund managers, helping them make more informed decisions and achieve 
                better trading outcomes.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="premium-card premium-hover animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-2xl font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="body-text max-w-2xl mx-auto">
              Our team combines deep expertise in trading, AI, and product development to create 
              the most advanced trading analysis platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="premium-card premium-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-secondary/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <Card className="premium-card p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
                <div className="text-muted-foreground">Active Traders</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
                <div className="text-muted-foreground">Trades Analyzed</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
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
              Join Our Mission
            </h2>
            <p className="body-text mb-8">
              Ready to transform your trading with AI-powered insights? Join thousands of traders 
              who trust TradeMaster AI.
            </p>
            <Button 
              onClick={() => window.location.href = '/auth'}
              className="professional-button px-8 py-4 text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;