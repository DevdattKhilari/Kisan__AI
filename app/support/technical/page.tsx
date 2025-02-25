"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageCircle, Clock, Video } from "lucide-react";
import Link from "next/link";

export default function TechnicalSupportPage() {
  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "24/7",
      waitTime: "Average wait time: 2 minutes",
      buttonText: "Call Now",
      action: "tel:+917249189872"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Support",
      description: "Screen sharing and video assistance",
      availability: "24/7",
      waitTime: "Average wait time: 5 minutes",
      buttonText: "Start Video Call",
      action: "#video-support"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7",
      waitTime: "Average wait time: 1 minute",
      buttonText: "Start Chat",
      action: "#live-chat"
    }
  ];

  const supportTopics = [
    "Technical Issues",
    "Account Access",
    "Mobile App Support",
    "Integration Help",
    "Data Analysis",
    "System Updates"
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
            24/7 Technical Support
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl">
            Get immediate assistance from our expert technical support team, available around the clock.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
              <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
                {channel.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {channel.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {channel.description}
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-emerald-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {channel.availability}
                </p>
                <p className="text-sm text-gray-400">
                  {channel.waitTime}
                </p>
              </div>
              <Link href={channel.action}>
                <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
                  {channel.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Common Topics */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Common Support Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {supportTopics.map((topic, index) => (
              <div key={index} className="bg-black/20 p-4 rounded-lg text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-pointer">
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Priority Support */}
        <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            Priority Enterprise Support
          </h2>
          <p className="text-gray-300 mb-6">
            Enterprise customers receive priority support with dedicated technical account managers and faster response times.
          </p>
          <Button 
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
          >
            Learn About Enterprise Support
          </Button>
        </div>
      </div>
    </div>
  );
}