"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, PieChart, TrendingUp, Activity, Calendar, AlertCircle } from "lucide-react";

export default function AnalyticsDashboardGuide() {
  const features = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Performance Metrics",
      description: "Track key farm performance indicators",
      details: [
        "Crop yield analytics",
        "Resource utilization rates",
        "Cost analysis",
        "Productivity metrics"
      ]
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Resource Distribution",
      description: "Visualize resource allocation across your farm",
      details: [
        "Water usage breakdown",
        "Fertilizer distribution",
        "Energy consumption",
        "Labor allocation"
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend Analysis",
      description: "Monitor long-term patterns and forecasts",
      details: [
        "Historical performance",
        "Growth predictions",
        "Seasonal patterns",
        "Market trends"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Alert Management",
      description: "Stay informed about critical events",
      details: [
        "Real-time notifications",
        "Custom alert thresholds",
        "Priority management",
        "Response tracking"
      ]
    }
  ];

  const dashboardSections = [
    {
      title: "Overview Panel",
      description: "Quick snapshot of farm health and performance",
      metrics: [
        "Daily crop health score",
        "Resource efficiency rating",
        "Weather conditions",
        "Active alerts"
      ]
    },
    {
      title: "Detailed Analytics",
      description: "In-depth analysis of farm operations",
      metrics: [
        "Crop-specific metrics",
        "Resource consumption trends",
        "Cost-benefit analysis",
        "Yield forecasts"
      ]
    },
    {
      title: "Reports & Exports",
      description: "Generate comprehensive reports",
      metrics: [
        "Custom report builder",
        "Scheduled exports",
        "Data visualization",
        "Compliance reporting"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Analytics Dashboard Guide
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Master Kisan AI's analytics dashboard to make data-driven farming decisions.
        </p>
      </div>

      {/* Key Features */}
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

      {/* Dashboard Sections */}
      <div className="space-y-8 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          Dashboard Sections
        </h2>
        {dashboardSections.map((section, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              {section.title}
            </h3>
            <p className="text-gray-400 mb-6">
              {section.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {section.metrics.map((metric, i) => (
                <div key={i} className="bg-black/20 p-4 rounded-lg">
                  <span className="text-gray-300">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tips & Best Practices */}
      <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Tips for Effective Dashboard Use
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Regular Monitoring",
              description: "Check your dashboard daily for the most up-to-date insights"
            },
            {
              title: "Custom Views",
              description: "Set up personalized dashboard layouts for different needs"
            },
            {
              title: "Data Export",
              description: "Schedule regular data exports for record-keeping"
            },
            {
              title: "Alert Configuration",
              description: "Fine-tune alert thresholds to avoid notification fatigue"
            }
          ].map((tip, index) => (
            <div key={index} className="bg-black/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-300">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Explore Your Dashboard?
        </h2>
        <p className="text-gray-300 mb-8">
          Start analyzing your farm's performance with our comprehensive analytics tools.
        </p>
        <Button 
          className="bg-emerald-500 text-white hover:bg-emerald-600 group"
        >
          <span>Continue to Mobile App Guide</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}