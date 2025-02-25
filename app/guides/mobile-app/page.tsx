"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Camera, Bell, Map, Cloud, Wifi, Zap, Settings } from "lucide-react";
import Image from "next/image";

export default function MobileAppGuide() {
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Field Scanning",
      description: "Capture and analyze crop images instantly",
      steps: [
        "Open camera in app",
        "Frame the crop area",
        "Capture multiple angles",
        "Review AI analysis"
      ]
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-time Alerts",
      description: "Stay informed with instant notifications",
      steps: [
        "Configure alert preferences",
        "Set priority levels",
        "Choose notification types",
        "Manage alert history"
      ]
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Field Mapping",
      description: "Navigate and map your farm efficiently",
      steps: [
        "View field boundaries",
        "Mark problem areas",
        "Track equipment",
        "Record observations"
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Offline Mode",
      description: "Work without internet connection",
      steps: [
        "Enable data sync",
        "Download field data",
        "Work offline",
        "Auto-sync when online"
      ]
    }
  ];

  const setupSteps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Download & Install",
      content: "Get the app from your device's app store (iOS/Android)"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Account Setup",
      content: "Log in with your Kisan AI credentials"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Initial Sync",
      content: "Download your farm data and preferences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Permission Setup",
      content: "Configure camera, location, and notification access"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Mobile App Guide
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Take Kisan AI's powerful features with you in the field with our mobile app.
        </p>
      </div>

      {/* App Preview */}
      <div className="relative aspect-[16/9] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Kisan AI Mobile App"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl" />
        <div className="absolute bottom-8 left-8 max-w-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Your Farm in Your Pocket
          </h2>
          <p className="text-gray-200">
            Access all of Kisan AI's features on the go with our intuitive mobile application.
          </p>
        </div>
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
            <ol className="space-y-2">
              {feature.steps.map((step, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Setup Guide */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-8">
          Getting Started
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {setupSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-emerald-400 p-3 bg-emerald-400/10 rounded-lg">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips & Troubleshooting */}
      <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Tips & Troubleshooting
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Optimize Battery Life",
              description: "Enable battery optimization and use offline mode when possible"
            },
            {
              title: "Data Usage",
              description: "Download field data on Wi-Fi to reduce mobile data consumption"
            },
            {
              title: "Camera Focus",
              description: "Ensure proper lighting and stable positioning for best results"
            },
            {
              title: "Sync Issues",
              description: "Check internet connection and try manual sync if automatic fails"
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

      {/* Support Resources */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Need Help?
        </h2>
        <p className="text-gray-300 mb-8">
          Access our mobile app support resources or contact our technical team.
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            className="bg-emerald-500 text-white hover:bg-emerald-600 group"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
          >
            <span>View FAQs</span>
          </Button>
        </div>
      </div>
    </div>
  );
}