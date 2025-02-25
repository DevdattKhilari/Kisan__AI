"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MobileAccessFAQPage() {
  const faqs = [
    {
      question: "Which devices are supported?",
      answer: "The Kisan AI mobile app is available for:\n\n" +
        "• iOS devices (iOS 13 and above)\n" +
        "• Android devices (Android 8.0 and above)\n" +
        "• Tablets (iOS and Android)\n" +
        "• Progressive Web App (PWA) for other devices"
    },
    {
      question: "How do I download and install the app?",
      answer: "Download the app from official stores:\n\n" +
        "• iOS: Apple App Store\n" +
        "• Android: Google Play Store\n\n" +
        "Or visit app.kisanai.com on your mobile browser to use the PWA version."
    },
    {
      question: "What features are available offline?",
      answer: "Offline capabilities include:\n\n" +
        "• Field data collection\n" +
        "• Photo capture and storage\n" +
        "• Basic crop analysis\n" +
        "• Data entry and forms\n" +
        "• Saved reports and documents"
    },
    {
      question: "How does GPS tracking work?",
      answer: "GPS features include:\n\n" +
        "• Field boundary mapping\n" +
        "• Area calculation\n" +
        "• Location-based weather data\n" +
        "• Navigation to specific field points\n" +
        "• Track field activities"
    },
    {
      question: "Can multiple users access the same account?",
      answer: "Yes, with multi-user support:\n\n" +
        "• Different access levels\n" +
        "• Individual login credentials\n" +
        "• Activity tracking per user\n" +
        "• Synchronized data across users\n" +
        "• Team collaboration features"
    },
    {
      question: "How do I update the app?",
      answer: "App updates are managed through:\n\n" +
        "• Automatic updates (if enabled)\n" +
        "• Manual updates via app stores\n" +
        "• In-app update notifications\n" +
        "• Critical security updates\n" +
        "• Version compatibility checks"
    },
    {
      question: "What should I do if the app crashes?",
      answer: "If you experience crashes:\n\n" +
        "1. Force close and restart the app\n" +
        "2. Check for updates\n" +
        "3. Clear app cache\n" +
        "4. Ensure sufficient device storage\n" +
        "5. Contact support if issue persists"
    },
    {
      question: "How secure is the mobile app?",
      answer: "Mobile security features:\n\n" +
        "• Biometric authentication\n" +
        "• Encrypted local storage\n" +
        "• Secure data transmission\n" +
        "• Remote data wipe capability\n" +
        "• Regular security updates"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Mobile Access FAQ
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Everything you need to know about using Kisan AI on mobile devices.
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
          Need Mobile Support?
        </h2>
        <p className="text-gray-300 mb-4">
          Our mobile support team is available to help with any app-related issues.
        </p>
        <p className="text-gray-300">
          Mobile Support: mobile@kisanai.com<br />
          In-App Chat Support: Available 24/7<br />
          Help Center: help.kisanai.com/mobile
        </p>
      </div>
    </div>
  );
}