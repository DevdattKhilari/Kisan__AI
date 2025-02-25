"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Shield, Zap } from "lucide-react";

export default function APIDocumentation() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/farms",
      description: "Retrieve a list of all farms associated with the authenticated user",
      response: `{
  "farms": [
    {
      "id": "farm_123",
      "name": "Green Valley Farm",
      "location": {
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "size": 150,
      "crops": ["wheat", "corn", "soybeans"]
    }
  ]
}`
    },
    {
      method: "POST",
      path: "/api/v1/crops/analyze",
      description: "Analyze crop health using AI",
      response: `{
  "analysis": {
    "health_score": 0.85,
    "issues": ["mild_water_stress"],
    "recommendations": [
      "Increase irrigation by 15%",
      "Monitor soil moisture levels"
    ]
  }
}`
    }
  ];

  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "RESTful Architecture",
      description: "Clean, intuitive API endpoints following REST principles"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure by Default",
      description: "JWT authentication and HTTPS encryption"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Comprehensive SDK",
      description: "Official SDKs for multiple programming languages"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "WebSocket support for live data streaming"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        API Reference
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Integrate Kisan AI's powerful features into your applications with our comprehensive API.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-xl border border-white/10">
            <div className="text-emerald-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* API Endpoints */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Example Endpoints
        </h2>
        
        {endpoints.map((endpoint, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-md font-mono">
                {endpoint.method}
              </span>
              <code className="text-gray-300 font-mono">
                {endpoint.path}
              </code>
            </div>
            <p className="text-gray-400 mb-6">
              {endpoint.description}
            </p>
            <div className="bg-black/30 p-4 rounded-lg">
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                {endpoint.response}
              </pre>
            </div>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="mt-16 bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Getting Started with the API
        </h2>
        <p className="text-gray-200 mb-6">
          Ready to integrate Kisan AI into your application? Follow our integration guide to get started quickly.
        </p>
        <Button 
          className="bg-emerald-500 text-white hover:bg-emerald-600 group"
        >
          <span>View Integration Guide</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}