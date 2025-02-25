"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, LineChart, AlertTriangle, Lightbulb } from "lucide-react";

export default function CropAnalysisGuide() {
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Image Analysis",
      description: "Upload or capture images of your crops for instant AI-powered health assessment",
      details: [
        "Support for multiple image formats",
        "Drone imagery integration",
        "Automated disease detection",
        "Growth stage identification"
      ]
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Growth Tracking",
      description: "Monitor crop development over time with detailed metrics and trends",
      details: [
        "Height and density measurements",
        "Growth rate calculations",
        "Yield predictions",
        "Historical comparisons"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Issue Detection",
      description: "Early warning system for potential crop health issues",
      details: [
        "Disease identification",
        "Pest infestation alerts",
        "Nutrient deficiency detection",
        "Stress level assessment"
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Smart Recommendations",
      description: "Get AI-powered suggestions for optimal crop management",
      details: [
        "Treatment recommendations",
        "Resource optimization tips",
        "Preventive measures",
        "Best practice guidelines"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        AI-Powered Crop Analysis
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Learn how to use Kisan AI's advanced crop analysis tools to monitor and optimize your crop health.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400 mb-6">
              {feature.description}
            </p>
            <ul className="space-y-2">
              {feature.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Usage Guide */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          How to Use Crop Analysis
        </h2>
        <ol className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Select Field for Analysis</h3>
              <p className="text-gray-300">Choose the field or crop area you want to analyze from your farm profile.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Capture or Upload Images</h3>
              <p className="text-gray-300">Use the mobile app to capture images or upload existing photos for analysis.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Review Analysis Results</h3>
              <p className="text-gray-300">Examine the AI-generated insights and recommendations for your crops.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Take Action</h3>
              <p className="text-gray-300">Implement the suggested measures and track improvements over time.</p>
            </div>
          </li>
        </ol>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Analyze Your Crops?
        </h2>
        <p className="text-gray-300 mb-8">
          Start using our AI-powered crop analysis tools to optimize your farm's productivity.
        </p>
        <Button 
          className="bg-emerald-500 text-white hover:bg-emerald-600 group"
        >
          <span>Continue to Resource Management</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}