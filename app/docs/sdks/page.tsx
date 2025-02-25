"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Package, Book, Github } from "lucide-react";

export default function SDKsLibrariesPage() {
  const sdks = [
    {
      language: "JavaScript",
      installCommand: "npm install @kisan-ai/sdk",
      example: `import { KisanAI } from '@kisan-ai/sdk';

const client = new KisanAI({
  apiKey: 'your_api_key'
});

// Analyze crop health
const analysis = await client.crops.analyze({
  fieldId: 'field_123',
  date: new Date()
});

console.log(analysis.healthScore);`
    },
    {
      language: "Python",
      installCommand: "pip install kisan-ai",
      example: `from kisan_ai import KisanAI

client = KisanAI(api_key='your_api_key')

# Analyze crop health
analysis = client.crops.analyze(
    field_id='field_123',
    date=datetime.now()
)

print(analysis.health_score)`
    },
    {
      language: "Go",
      installCommand: "go get github.com/kisan-ai/sdk-go",
      example: `package main

import "github.com/kisan-ai/sdk-go"

func main() {
    client := kisanai.NewClient("your_api_key")
    
    analysis, err := client.Crops.Analyze(kisanai.AnalysisParams{
        FieldID: "field_123",
        Date:    time.Now(),
    })
    
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Health Score: %f\\n", analysis.HealthScore)
}`
    }
  ];

  const features = [
    {
      title: "Type Safety",
      description: "Full TypeScript support with generated types"
    },
    {
      title: "Auto-completion",
      description: "IDE integration with intelligent suggestions"
    },
    {
      title: "Error Handling",
      description: "Comprehensive error types and handling"
    },
    {
      title: "Authentication",
      description: "Built-in auth and token management"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        SDKs & Libraries
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Official SDKs and libraries for integrating with Kisan AI.
        </p>
      </div>

      {/* Available SDKs */}
      <div className="space-y-8 mb-16">
        {sdks.map((sdk, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl overflow-hidden border border-white/10">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-emerald-400" />
                <span className="text-lg font-semibold text-white">{sdk.language} SDK</span>
              </div>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                >
                  <Package className="w-4 h-4 mr-2" />
                  <span>Package</span>
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                >
                  <Book className="w-4 h-4 mr-2" />
                  <span>Docs</span>
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <span>GitHub</span>
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-black/20 rounded-lg px-4 py-2 mb-6">
                <code className="text-sm text-emerald-400">{sdk.installCommand}</code>
              </div>
              <pre className="bg-black/20 rounded-lg p-4 text-sm text-gray-300 font-mono overflow-x-auto">
                {sdk.example}
              </pre>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Best Practices */}
      <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Best Practices
        </h2>
        <div className="space-y-4">
          {[
            "Initialize the client once and reuse the instance",
            "Handle API errors with try-catch blocks",
            "Use environment variables for API keys",
            "Implement proper rate limiting handling"
          ].map((practice, index) => (
            <div key={index} className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 text-emerald-400 mt-1" />
              <span className="text-gray-300">{practice}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Start Building?
        </h2>
        <p className="text-gray-300 mb-8">
          Choose your preferred SDK and start integrating with Kisan AI.
        </p>
        <Button 
          className="bg-emerald-500 text-white hover:bg-emerald-600 group"
        >
          <span>View Getting Started Guide</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}