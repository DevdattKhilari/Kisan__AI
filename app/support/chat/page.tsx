"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Users, Globe2, Headphones } from "lucide-react";
import Link from "next/link";

export default function LiveChatPage() {
  const chatFeatures = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Instant Responses",
      description: "Get immediate assistance from our support team"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Agents",
      description: "Chat with specialized technical support agents"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Multi-language Support",
      description: "Available in multiple languages"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock support whenever you need it"
    }
  ];

  const commonTopics = [
    "Technical Issues",
    "Account Access",
    "Mobile App Support",
    "Integration Help",
    "Data Analysis",
    "System Updates",
    "Billing Questions",
    "Feature Requests"
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <div className="container mx-auto px-4 py-24">
        <Link href="/support" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Support Center
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-6">
            Live Chat Support
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl">
            Connect instantly with our support team through live chat.
          </p>
        </div>

        {/* Chat Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {chatFeatures.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border border-white/10">
              <div className="text-emerald-400 p-3 bg-emerald-400/10 rounded-xl inline-block mb-4">
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

        {/* Start Chat Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              Start a Chat Session
            </h2>
            <p className="text-gray-400 mb-8">
              Average response time: Less than 1 minute
            </p>
            <Button 
              size="lg"
              className="bg-emerald-500 text-white hover:bg-emerald-600 px-8"
            >
              Start Chat Now
            </Button>
          </div>
        </div>

        {/* Common Topics */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Common Support Topics
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {commonTopics.map((topic, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-4 rounded-lg border border-white/10 text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-pointer">
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Guidelines */}
        <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Chat Support Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Before Starting a Chat</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Have your account details ready
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Prepare a clear description of your issue
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Check system status for known issues
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">During the Chat</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Be specific about your problem
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Follow agent instructions carefully
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Save chat transcript if needed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}