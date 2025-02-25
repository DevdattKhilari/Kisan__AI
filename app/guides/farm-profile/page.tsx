"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Ruler, Scaling as Seedling, Settings } from "lucide-react";

export default function FarmProfileGuide() {
  const steps = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Basic Information",
      content: `Start by providing essential information about your farm:
• Farm name and description
• Contact information
• Business registration details (if applicable)
• Operating hours and seasons`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location Details",
      content: `Set up your farm's geographical information:
• Physical address
• GPS coordinates
• Field boundaries using our interactive map
• Local climate zone identification`,
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Farm Specifications",
      content: `Define your farm's physical characteristics:
• Total land area
• Number of fields/plots
• Soil types and conditions
• Irrigation systems in place`,
    },
    {
      icon: <Seedling className="w-6 h-6" />,
      title: "Crop Information",
      content: `Add details about your crops:
• Types of crops grown
• Planting schedules
• Expected harvest dates
• Historical yield data`,
    },
  ];

  const tips = [
    "Keep your profile information up to date for accurate AI recommendations",
    "Add detailed field boundaries for precise monitoring",
    "Include historical data for better yield predictions",
    "Set up notifications for profile completion reminders",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Setting Up Your Farm Profile
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Create a comprehensive farm profile to get the most out of Kisan AI's smart farming solutions.
        </p>
      </div>

      {/* Setup Steps */}
      <div className="space-y-8 mb-16">
        {steps.map((step, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="flex items-start gap-6">
              <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <div className="text-gray-300 whitespace-pre-line">
                  {step.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Best Practices */}
      <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Best Practices
        </h2>
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200">
              <ArrowRight className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Start?
        </h2>
        <p className="text-gray-300 mb-8">
          Now that you understand how to set up your farm profile, let's move on to crop analysis.
        </p>
        <Button 
          className="bg-emerald-500 text-white hover:bg-emerald-600 group"
        >
          <span>Continue to Crop Analysis</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}