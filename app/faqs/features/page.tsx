"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PlatformFeaturesFAQPage() {
  const faqs = [
    {
      question: "What AI capabilities does Kisan AI offer?",
      answer: "Kisan AI provides several AI-powered features:\n\n" +
        "• Crop Health Analysis: Real-time monitoring and disease detection\n" +
        "• Yield Prediction: Advanced forecasting using historical data\n" +
        "• Resource Optimization: Smart irrigation and fertilizer recommendations\n" +
        "• Pest Detection: Early warning system for pest infestations\n" +
        "• Weather Integration: Localized weather forecasting and alerts"
    },
    {
      question: "How accurate are the crop health predictions?",
      answer: "Our AI models achieve:\n\n" +
        "• 95% accuracy in disease detection\n" +
        "• 90% accuracy in yield predictions\n" +
        "• 93% accuracy in pest identification\n\n" +
        "Models are continuously trained with new data to improve accuracy."
    },
    {
      question: "What types of crops are supported?",
      answer: "We support a wide range of crops including:\n\n" +
        "• Cereals: Wheat, Rice, Maize\n" +
        "• Pulses: Soybeans, Chickpeas\n" +
        "• Vegetables: Tomatoes, Potatoes, Onions\n" +
        "• Cash Crops: Cotton, Sugarcane\n" +
        "• Fruits: Mangoes, Bananas, Grapes"
    },
    {
      question: "Can I integrate with existing farm management systems?",
      answer: "Yes, Kisan AI offers integration capabilities through:\n\n" +
        "• REST APIs\n" +
        "• WebHooks\n" +
        "• CSV/Excel data import\n" +
        "• IoT device integration\n" +
        "• Third-party software connectors"
    },
    {
      question: "What reporting and analytics features are available?",
      answer: "Our platform provides comprehensive analytics including:\n\n" +
        "• Real-time dashboards\n" +
        "• Custom report generation\n" +
        "• Historical trend analysis\n" +
        "• Resource utilization metrics\n" +
        "• ROI calculations"
    },
    {
      question: "How does the weather monitoring system work?",
      answer: "Our weather system provides:\n\n" +
        "• Real-time local weather data\n" +
        "• 7-day forecasts\n" +
        "• Extreme weather alerts\n" +
        "• Historical weather patterns\n" +
        "• Impact analysis on crops"
    },
    {
      question: "What mobile features are available?",
      answer: "The mobile app includes:\n\n" +
        "• Field scanning with camera\n" +
        "• Offline data collection\n" +
        "• Real-time notifications\n" +
        "• GPS field mapping\n" +
        "• Voice commands"
    },
    {
      question: "How do I get started with new features?",
      answer: "To start using new features:\n\n" +
        "1. Access the feature from your dashboard\n" +
        "2. Follow the interactive tutorial\n" +
        "3. Review documentation\n" +
        "4. Contact support for assistance"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Platform Features FAQ
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Learn about Kisan AI's features and capabilities.
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
          Need More Information?
        </h2>
        <p className="text-gray-300 mb-4">
          Explore our detailed documentation or contact our support team for in-depth feature explanations.
        </p>
        <p className="text-gray-300">
          Documentation: docs.kisanai.com<br />
          Support Email: support@kisanai.com<br />
          Feature Requests: feedback@kisanai.com
        </p>
      </div>
    </div>
  );
}