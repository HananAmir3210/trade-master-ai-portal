import React from 'react';
import { Code, Key, ArrowRight, Database, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const API = () => {
  const endpoints = [
    {
      method: "POST",
      endpoint: "/api/trades",
      description: "Create and submit new trade entries"
    },
    {
      method: "GET",
      endpoint: "/api/trades/{id}",
      description: "Retrieve specific trade data and analysis"
    },
    {
      method: "POST",
      endpoint: "/api/analysis",
      description: "Request AI analysis for trade data"
    },
    {
      method: "GET",
      endpoint: "/api/insights",
      description: "Get trading insights and recommendations"
    },
    {
      method: "GET",
      endpoint: "/api/performance",
      description: "Access performance metrics and reports"
    }
  ];

  const apiFeatures = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "RESTful API",
      description: "Clean, intuitive REST endpoints with comprehensive documentation and examples."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Real-time Data",
      description: "Access live trading data and AI analysis results in real-time via WebSocket connections."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized for speed with response times under 200ms and 99.9% uptime guarantee."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with OAuth 2.0, API key authentication, and encrypted data transmission."
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
              TradeMaster AI{' '}
              <span className="gradient-text">Developer API</span>
            </h1>
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto mb-12">
              Integrate powerful AI trading analysis into your applications with our comprehensive API.
            </p>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="premium-card premium-hover animate-scale-in text-center"
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

      {/* Endpoints Overview */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">API Endpoints Overview</h2>
            <p className="body-text max-w-2xl mx-auto">
              Our API provides comprehensive access to all TradeMaster AI features through clean, well-documented endpoints.
            </p>
          </div>
          
          <Card className="premium-card overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Available Endpoints</CardTitle>
              <CardDescription>
                Complete list of API endpoints for trading data and AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border/20">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="p-6 hover:bg-secondary/20 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                          endpoint.method === 'GET' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-foreground font-mono">
                          {endpoint.endpoint}
                        </code>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2 ml-20">
                      {endpoint.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Code Example */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Quick Start Example</h2>
              <p className="body-text mb-8">
                Get started with our API in minutes. Here's a simple example of submitting a trade for AI analysis.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>SDKs for popular languages</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Interactive API explorer</span>
                </li>
              </ul>
            </div>
            
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-lg font-mono">cURL Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-muted-foreground font-mono overflow-x-auto">
{`curl -X POST https://api.trademasterai.com/v1/trades \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "pair": "EURUSD",
    "type": "buy",
    "entry_price": 1.0875,
    "lot_size": 0.1,
    "chart_url": "https://..."
  }'`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get API Key CTA */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="premium-card p-16 animate-fade-in">
            <Key className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Get Your API Key
            </h2>
            <p className="body-text mb-8">
              Start integrating TradeMaster AI into your applications today with our developer-friendly API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/auth'}
                className="professional-button px-8 py-4 text-lg"
              >
                Get API Key
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 text-lg border-border hover:bg-primary/10"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default API;