
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What trading platforms does TradeMaster AI support?",
      answer: "TradeMaster AI integrates with major trading platforms including MetaTrader 4/5, TradingView, Interactive Brokers, and many prop firm platforms. We also offer manual trade logging for any platform."
    },
    {
      question: "How does the AI analysis work?",
      answer: "Our AI algorithms analyze your trading patterns, market conditions, and performance metrics to identify trends, weaknesses, and opportunities. The system learns from thousands of successful traders to provide personalized insights."
    },
    {
      question: "Is my trading data secure?",
      answer: "Absolutely. We use bank-level encryption and never store your actual trading credentials. All data is encrypted in transit and at rest, and we're SOC 2 compliant for maximum security."
    },
    {
      question: "Can I use TradeMaster AI for prop firm trading?",
      answer: "Yes! Many prop firm traders use TradeMaster AI to track their performance and meet their funding requirements. Our Elite plan includes multi-account management perfect for prop traders."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial."
    },
    {
      question: "What markets can I track?",
      answer: "TradeMaster AI supports all major markets including Forex, Cryptocurrencies, Stocks, Indices, Commodities, and Options. The AI adapts its analysis based on the specific market characteristics."
    },
    {
      question: "How quickly will I see improvements in my trading?",
      answer: "Most users see meaningful insights within the first week of logging trades. Significant performance improvements typically occur within 30-60 days of consistent use and following our AI recommendations."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your data remains accessible during your billing period."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about TradeMaster AI
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-dark-card border border-gray-800 rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@trademasterai.com"
            className="text-primary hover:text-neon font-semibold transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
