"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Sun, Wind, Sprout } from "lucide-react";

export default function ResourceManagementGuide() {
  const resources = [
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Water Management",
      description: "Optimize irrigation systems and water usage",
      features: [
        "Smart irrigation scheduling",
        "Soil moisture monitoring",
        "Weather-based adjustments",
        "Water usage analytics"
      ]
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Nutrient Management",
      description: "Track and optimize fertilizer application",
      features: [
        "Soil nutrient analysis",
        "Fertilizer recommendations",
        "Application scheduling",
        "Usage optimization"
      ]
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Energy Management",
      description: "Monitor and reduce energy consumption",
      features: [
        "Equipment efficiency tracking",
        "Peak usage monitoring",
        "Cost optimization",
        "Renewable integration"
      ]
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Climate Control",
      description: "Manage greenhouse and storage conditions",
      features: [
        "Temperature monitoring",
        "Humidity control",
        "Ventilation management",
        "Climate zone optimization"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Regular Monitoring",
      description: "Check resource usage metrics daily and adjust as needed"
    },
    {
      title: "Preventive Maintenance",
      description: "Schedule regular equipment maintenance to prevent waste"
    },
    {
      title: "Data-Driven Decisions",
      description: "Use analytics to make informed resource allocation choices"
    },
    {
      title: "Sustainable Practices",
      description: "Implement eco-friendly solutions to reduce resource consumption"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Resource Management
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Learn how to efficiently manage and optimize your farm's resources using Kisan AI's smart tools.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {resources.map((resource, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
              {resource.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {resource.title}
            </h3>
            <p className="text-gray-400 mb-6">
              {resource.description}
            </p>
            <ul className="space-y-2">
              {resource.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Best Practices */}
      <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Best Practices for Resource Management
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {bestPractices.map((practice, index) => (
            <div key={index} className="bg-black/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {practice.title}
              </h3>
              <p className="text-gray-300">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Steps */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Getting Started
        </h2>
        <ol className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Audit Current Usage</h3>
              <p className="text-gray-300">Review your current resource consumption patterns and identify areas for improvement.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Set Up Monitoring</h3>
              <p className="text-gray-300">Install and configure sensors and monitoring systems for each resource type.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Define Goals</h3>
              <p className="text-gray-300">Set specific, measurable targets for resource optimization.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Implement Changes</h3>
              <p className="text-gray-300">Follow AI recommendations and track improvements over time.</p>
            </div>
          </li>
        </ol>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Optimize Your Resources?
        </h2>
        <p className="text-gray-300 mb-8">
          Start implementing smart resource management practices to improve efficiency and reduce costs.
        </p>
        <Button 
          className="bg-emerald-500 text-white hover:bg-emerald-600 group"
        >
          <span>Continue to Analytics Dashboard</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}