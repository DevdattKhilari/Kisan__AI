"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function UpdatesFAQPage() {
  const faqs = [
    {
      question: "How often are updates released?",
      answer: "Our update schedule includes:\n\n" +
        "• Major updates: Quarterly\n" +
        "• Feature updates: Monthly\n" +
        "• Security patches: As needed\n" +
        "• Bug fixes: Weekly\n" +
        "• AI model updates: Bi-weekly"
    },
    {
      question: "What's included in updates?",
      answer: "Updates typically contain:\n\n" +
        "• New features and improvements\n" +
        "• Performance optimizations\n" +
        "• Security enhancements\n" +
        "• Bug fixes\n" +
        "• UI/UX improvements"
    },
    {
      question: "How are updates installed?",
      answer: "Updates are deployed through:\n\n" +
        "• Automatic platform updates\n" +
        "• Mobile app store updates\n" +
        "• Manual update options\n" +
        "• Scheduled maintenance windows\n" +
        "• Progressive rollouts"
    },
    {
      question: "Will updates affect my data?",
      answer: "Data handling during updates:\n\n" +
        "• All data is preserved\n" +
        "• Automatic backups before updates\n" +
        "• Data migration if needed\n" +
        "• Version compatibility checks\n" +
        "• Rollback capability"
    },
    {
      question: "How are maintenance schedules communicated?",
      answer: "We notify users through:\n\n" +
        "• Email notifications\n" +
        "• In-app announcements\n" +
        "• Status page updates\n" +
        "• SMS alerts (if enabled)\n" +
        "• System dashboard notices"
    },
    {
      question: "What if an update causes issues?",
      answer: "Our update recovery process:\n\n" +
        "1. Immediate rollback option\n" +
        "2. Technical support assistance\n" +
        "3. Issue investigation\n" +
        "4. Temporary workarounds\n" +
        "5. Emergency patches if needed"
    },
    {
      question: "Can I skip certain updates?",
      answer: "Update flexibility options:\n\n" +
        "• Security updates are mandatory\n" +
        "• Feature updates can be deferred\n" +
        "• Custom update schedules for enterprise\n" +
        "• Version compatibility requirements\n" +
        "• Update dependencies"
    },
    {
      question: "How do I get beta access?",
      answer: "Join beta testing program:\n\n" +
        "1. Apply through dashboard\n" +
        "2. Accept beta terms\n" +
        "3. Receive beta updates\n" +
        "4. Provide feedback\n" +
        "5. Report issues"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Updates & Maintenance FAQ
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Information about platform updates, maintenance, and system improvements.
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
              <AccordionTrigger className="text-white hover:text ical-400 text-left">
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
          Update Questions?
        </h2>
        <p className="text-gray-300 mb-4">
          Contact our system administrators for questions about updates and maintenance.
        </p>
        <p className="text-gray-300">
          System Updates: updates@kisanai.com<br />
          Status Page: status.kisanai.com<br />
          Maintenance Schedule: maintenance.kisanai.com
        </p>
      </div>
    </div>
  );
}