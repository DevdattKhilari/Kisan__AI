"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AccountBillingFAQPage() {
  const faqs = [
    {
      question: "What subscription plans are available?",
      answer: "Kisan AI offers three subscription tiers:\n\n" +
        "• Basic Plan: Perfect for small farms (₹999/month)\n" +
        "• Professional Plan: Ideal for medium-sized operations (₹2,499/month)\n" +
        "• Enterprise Plan: Custom solutions for large agricultural businesses (Custom pricing)"
    },
    {
      question: "How do I upgrade or downgrade my subscription?",
      answer: "You can change your subscription plan at any time through your account dashboard. Go to Settings > Subscription > Change Plan. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including:\n\n" +
        "• Credit/Debit Cards (Visa, MasterCard, American Express)\n" +
        "• UPI Payments\n" +
        "• Net Banking\n" +
        "• Digital Wallets (Google Pay, PhonePe)"
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 30-day free trial of our Professional Plan. No credit card is required to start the trial. You can explore all features and decide which plan best suits your needs."
    },
    {
      question: "How does billing work for Enterprise plans?",
      answer: "Enterprise billing is customized based on your organization's needs. It typically includes:\n\n" +
        "• Annual contracts\n" +
        "• Custom payment terms\n" +
        "• Volume-based pricing\n" +
        "• Dedicated account management"
    },
    {
      question: "What happens if I miss a payment?",
      answer: "If a payment fails, we'll:\n\n" +
        "1. Notify you immediately\n" +
        "2. Attempt to process payment again after 3 days\n" +
        "3. Provide a 7-day grace period\n" +
        "4. Temporarily limit access if payment isn't resolved"
    },
    {
      question: "Can I get a refund?",
      answer: "We offer refunds within 14 days of purchase if you're not satisfied with our service. Enterprise contracts have custom refund terms specified in the agreement."
    },
    {
      question: "How do I update my billing information?",
      answer: "To update billing information:\n\n" +
        "1. Log into your account\n" +
        "2. Go to Settings > Billing\n" +
        "3. Click 'Update Payment Method'\n" +
        "4. Enter new payment details"
    }
  ];

  return (

    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Account & Billing FAQ
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Find answers to common questions about accounts, subscriptions, and billing.
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Still Have Questions?
        </h2>
        <p className="text-gray-300 mb-4">
          Contact our billing support team for assistance with account and payment inquiries.
        </p>
        <p className="text-gray-300">
          Email: billing@kisanai.com<br />
          Phone: +91 7249189872<br />
          Hours: Monday-Friday, 9:00 AM - 6:00 PM IST
        </p>
      </div>
    </div>
  );
}

