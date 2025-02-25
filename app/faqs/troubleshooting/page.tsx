"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function TroubleshootingFAQPage() {
  const faqs = [
    {
      question: "What should I do if I can't log in?",
      answer: "Try these steps:\n\n" +
        "1. Verify your email and password\n" +
        "2. Clear browser cache and cookies\n" +
        "3. Check internet connection\n" +
        "4. Reset password if needed\n" +
        "5. Contact support if issues persist"
    },
    {
      question: "Why is the AI analysis taking too long?",
      answer: "Slow analysis can be due to:\n\n" +
        "• Large dataset processing\n" +
        "• Poor internet connection\n" +
        "• High server load\n" +
        "• Image resolution too high\n" +
        "• System maintenance"
    },
    {
      question: "How do I resolve sync issues?",
      answer: "To fix synchronization problems:\n\n" +
        "1. Check internet connectivity\n" +
        "2. Force sync from settings\n" +
        "3. Clear app cache\n" +
        "4. Verify account permissions\n" +
        "5. Update to latest version"
    },
    {
      question: "What if weather data is inaccurate?",
      answer: "Improve weather accuracy by:\n\n" +
        "• Verifying location settings\n" +
        "• Updating GPS coordinates\n" +
        "• Checking local weather station connection\n" +
        "• Refreshing weather data\n" +
        "• Reporting discrepancies"
    },
    {
      question: "How do I fix camera scanning issues?",
      answer: "For better scanning results:\n\n" +
        "1. Ensure good lighting\n" +
        "2. Hold camera steady\n" +
        "3. Clean camera lens\n" +
        "4. Update app permissions\n" +
        "5. Check image quality settings"
    },
    {
      question: "What if data export fails?",
      answer: "Resolve export issues by:\n\n" +
        "• Checking file size limits\n" +
        "• Verifying export format\n" +
        "• Ensuring storage space\n" +
        "• Trying different export options\n" +
        "• Breaking into smaller batches"
    },
    {
      question: "How do I recover deleted data?",
      answer: "Data recovery options:\n\n" +
        "1. Check recycle bin (30-day retention)\n" +
        "2. Restore from backup\n" +
        "3. Contact support for assistance\n" +
        "4. Review audit logs\n" +
        "5. Use version history"
    },
    {
      question: "What if reports won't generate?",
      answer: "Troubleshoot report generation:\n\n" +
        "• Verify data availability\n" +
        "• Check report parameters\n" +
        "• Clear report cache\n" +
        "• Try different time ranges\n" +
        "• Use alternative report formats"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Troubleshooting FAQ
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Solutions to common technical issues and problems.
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
          Still Having Issues?
        </h2>
        <p className="text-gray-300 mb-4">
          Our technical support team is ready to help resolve any problems you encounter.
        </p>
        <p className="text-gray-300">
          Technical Support: tech.support@kisanai.com<br />
          Support Portal: support.kisanai.com<br />
          Response Time: Within 4 hours
        </p>
      </div>
    </div>
  );
}