import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center animate-fade-in mb-16">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="subheadline-text text-muted-foreground max-w-4xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="premium-card p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" className="mt-2" placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="mt-2" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" className="mt-2 min-h-[120px]" placeholder="How can we help you?" />
                  </div>
                  <Button className="professional-button w-full">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="premium-card p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-3 w-5 h-5 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">hello@trademasterai.com</p>
                </CardContent>
              </Card>

              <Card className="premium-card p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-3 w-5 h-5 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="premium-card p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-3 w-5 h-5 text-primary" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    123 Trading Street<br />
                    Financial District<br />
                    New York, NY 10001
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;