"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function IntegrationGuide() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = [
    {
      language: "JavaScript",
      code: `import { KisanAI } from '@kisan-ai/sdk';

const client = new KisanAI({
  apiKey: 'your_api_key',
  farmId: 'your_farm_id'
});

// Get crop health analysis
const analysis = await client.crops.analyze({
  fieldId: 'field_123',
  date: new Date()
});

console.log(analysis.healthScore);`
    },
    {
      language: "Python",
      code: `from kisan_ai import KisanAI

client = KisanAI(
    api_key='your_api_key',
    farm_id='your_farm_id'
)

# Get crop health analysis
analysis = client.crops.analyze(
    field_id='field_123',
    date=datetime.now()
)

print(analysis.health_score)`
    }
  ];

  const steps = [
    {
      title: "Install the SDK",
      content: "Choose your preferred programming language and install the Kisan AI SDK using your package manager."
    },
    {
      title: "Configure Authentication",
      content: "Set up your API credentials and initialize the client with your farm ID."
    },
    {
      title: "Make API Calls",
      content: "Start integrating Kisan AI features into your application using our comprehensive SDK."
    },
    {
      title: "Handle Responses",
      content: "Process the API responses and implement error handling for robust integration."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Integration Guide
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Follow this guide to integrate Kisan AI's features into your application.
        </p>
      </div>

      {/* Integration Steps */}
      <div className="space-y-8 mb-16">
        {steps.map((step, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Code Examples */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Code Examples
        </h2>
        
        {codeExamples.map((example, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl overflow-hidden border border-white/10">
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
              <span className="text-emerald-400 font-semibold">
                {example.language}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => handleCopy(example.code, index)}
              >
                {copiedIndex === index ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto">
              {example.code}
            </pre>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-16 bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Additional Resources
        </h2>
        <ul className="space-y-2 text-gray-200">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Complete API Reference Documentation</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Sample Applications and Use Cases</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>SDK Documentation for All Supported Languages</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Troubleshooting Guide and FAQs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}