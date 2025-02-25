"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DataSecurityFAQPage() {
  const faqs = [
    {
      question: "How is my farm data protected?",
      answer: "We implement multiple layers of security:\n\n" +
        "• 256-bit AES encryption for all stored data\n" +
        "• SSL/TLS encryption for data in transit\n" +
        "• Regular security audits\n" +
        "• Multi-factor authentication\n" +
        "• Role-based access control"
    },
    {
      question: "Where is my data stored?",
      answer: "Your data is stored in secure data centers:\n\n" +
        "• Primary servers in India\n" +
        "• Redundant backups across multiple locations\n" +
        "• Compliant with data localization laws\n" +
        "• 24/7 monitoring and maintenance\n" +
        "• Regular backup verification"
    },
    {
      question: "Who has access to my farm data?",
      answer: "Access to your data is strictly controlled:\n\n" +
        "• Only authorized team members you designate\n" +
        "• Granular permission settings\n" +
        "• Audit logs of all access attempts\n" +
        "• No third-party access without consent\n" +
        "• Regular access review protocols"
    },
    {
      question: "What security certifications do you have?",
      answer: "Kisan AI maintains several security certifications:\n\n" +
        "• ISO 27001:2013\n" +
        "• SOC 2 Type II\n" +
        "• GDPR compliance\n" +
        "• Indian Data Protection compliance\n" +
        "• Regular third-party security assessments"
    },
    {
      question: "How often is data backed up?",
      answer: "We maintain comprehensive backup protocols:\n\n" +
        "• Real-time replication\n" +
        "• Daily incremental backups\n" +
        "• Weekly full backups\n" +
        "• 30-day retention period\n" +
        "• Disaster recovery testing"
    },
    {
      question: "What happens if there's a security breach?",
      answer: "Our incident response plan includes:\n\n" +
        "1. Immediate containment measures\n" +
        "2. Customer notification within 24 hours\n" +
        "3. Detailed incident investigation\n" +
        "4. Implementation of preventive measures\n" +
        "5. Post-incident security review"
    },
    {
      question: "Can I export or delete my data?",
      answer: "Yes, you have full control over your data:\n\n" +
        "• Export data in standard formats (CSV, JSON)\n" +
        "• Request complete data deletion\n" +
        "• Verify deletion completion\n" +
        "• Receive deletion certificates\n" +
        "• Access historical export logs"
    },
    {
      question: "How do you handle third-party integrations?",
      answer: "Third-party integrations are secured through:\n\n" +
        "• API key authentication\n" +
        "• OAuth 2.0 protocols\n" +
        "• Regular security reviews\n" +
        "• Limited data access\n" +
        "• Monitored integration activity"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Data Security FAQ
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Understanding how we protect your valuable farm data.
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
          Security Concerns?
        </h2>
        <p className="text-gray-300 mb-4">
          Contact our security team for immediate assistance with any security-related questions.
        </p>
        <p className="text-gray-300">
          Security Email: security@kisanai.com<br />
          Emergency Hotline: +91 7249189872<br />
          Response Time: Within 1 hour
        </p>
      </div>
    </div>
  );
}