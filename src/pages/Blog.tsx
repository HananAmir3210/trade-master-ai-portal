import React from 'react';
import { Calendar, ArrowRight, TrendingUp, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Trading: 2024 Trends and Predictions",
      summary: "Explore how artificial intelligence is reshaping the trading landscape and what to expect in the coming year.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "5 Essential Risk Management Strategies Every Trader Should Know",
      summary: "Learn the fundamental risk management techniques that can protect your capital and improve long-term profitability.",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Risk Management",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "How to Analyze Your Trading Performance Like a Pro",
      summary: "Master the art of trading journal analysis and discover actionable insights from your trading data.",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Trading Analysis",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Psychology of Trading: Overcoming Emotional Decision Making",
      summary: "Understand the psychological aspects of trading and learn techniques to maintain discipline in volatile markets.",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Trading Psychology",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Machine Learning Models for Market Prediction: A Beginner's Guide",
      summary: "An introduction to how machine learning algorithms can be applied to financial market prediction and analysis.",
      date: "November 20, 2024",
      readTime: "12 min read",
      category: "AI & Technology",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Building a Profitable Trading Strategy: Step-by-Step Guide",
      summary: "Learn how to develop, test, and implement a systematic trading strategy that stands the test of time.",
      date: "November 15, 2024",
      readTime: "15 min read",
      category: "Strategy Development",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const categories = [
    "All Posts",
    "AI & Technology", 
    "Trading Analysis",
    "Risk Management",
    "Trading Psychology",
    "Strategy Development"
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
              Insights and{' '}
              <span className="gradient-text">Updates</span>
            </h1>
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto mb-12">
              Stay informed with the latest insights on AI-powered trading, market analysis, and strategy development.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-6 py-2 ${
                  index === 0 
                    ? "professional-button" 
                    : "border-border hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto container-padding">
          <Card className="premium-card premium-hover overflow-hidden animate-scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blogPosts[0].date}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold leading-tight">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {blogPosts[0].summary}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-primary">{blogPosts[0].readTime}</span>
                    <span className="text-sm text-muted-foreground">{blogPosts[0].category}</span>
                  </div>
                  <Button className="professional-button">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded-lg flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  {blogPosts[0].icon}
                  <p className="text-muted-foreground mt-4">Featured Article Image</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={index}
                className="premium-card premium-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary">{post.icon}</div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.summary}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-primary">{post.readTime}</span>
                      <span className="text-sm text-muted-foreground">{post.category}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="premium-card p-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="body-text mb-8">
              Get the latest insights on AI-powered trading, market analysis, and strategy development 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="professional-button px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;