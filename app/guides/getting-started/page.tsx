"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function GettingStartedGuide() {
  const sections = [
    {
      title: "Creating Your Account",
      content: `To begin using Kisan AI, you'll need to create an account. Follow these simple steps:
        1. Click the "Get Started" button on the homepage
        2. Enter your email address and create a secure password
        3. Verify your email address
        4. Complete your basic profile information`,
    },
    {
      title: "Dashboard Overview",
      content: `The Kisan AI dashboard is your central hub for managing all aspects of your farm:
        • Quick overview of farm health and metrics
        • Real-time weather data and forecasts
        • Crop monitoring status
        • Recent activity feed
        • Quick access to common tools`,
    },
    {
      title: "Key Features",
      content: `Explore these essential features to get the most out of Kisan AI:
        • AI-powered crop analysis
        • Resource management tools
        • Weather forecasting
        • Yield predictions
        • Pest and disease detection
        • Smart irrigation control`,
    },
  ];

  const nextSteps = [
    {
      title: "Set Up Your Farm Profile",
      description: "Configure your farm details and crop information",
      link: "/guides/farm-profile",
    },
    {
      title: "Start Crop Analysis",
      description: "Learn how to use our AI-powered crop analysis tools",
      link: "/guides/crop-analysis",
    },
    {
      title: "Resource Management",
      description: "Optimize your farm's resource usage",
      link: "/guides/resource-management",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Getting Started with Kisan AI
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Welcome to Kisan AI! This guide will help you get started with our platform and make the most of our smart farming solutions.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-12 mb-16">
        {sections.map((section, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              {section.title}
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 whitespace-pre-line">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Next Steps
        </h2>
        <div className="grid gap-4">
          {nextSteps.map((step, index) => (
            <Link key={index} href={step.link}>
              <Button
                variant="secondary"
                className="w-full justify-between group bg-black/20 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/20"
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{step.title}</span>
                  <span className="text-sm text-gray-400">{step.description}</span>
                </div>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="mt-12 bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
        <h2 className="text-xl font-semibold text-emerald-400 mb-4">
          Quick Tips for Success
        </h2>
        <ul className="space-y-3">
          {[
            "Complete your farm profile for personalized recommendations",
            "Enable notifications to stay updated on important alerts",
            "Explore the mobile app for on-the-go monitoring",
            "Join our community forum to connect with other farmers",
          ].map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200">
              <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}